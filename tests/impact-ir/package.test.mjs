import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import {createRequire} from 'node:module';
import {fresh,normalize,sample,safeName,companyMarkdown,prompt,reviewMarkdown,packageFiles,agentFiles,installation} from '../../docs/impact-ir/package.js';
import {MODEL_GUIDES,modelGuidesMarkdown} from '../../docs/impact-ir/models.js';
import {SECTIONS,TASKS,TOOLS} from '../../docs/impact-ir/content.js';
const require=createRequire(import.meta.url);
const JSZip=require('../../docs/impact-ir/vendor/jszip.min.js');
const lib=JSON.parse(await fs.readFile(new URL('../../docs/impact-ir/library.json',import.meta.url),'utf8'));
assert.equal(Object.keys(lib).length,5);
for(const [p,value] of Object.entries(lib))assert.equal(value,await fs.readFile(new URL('../../_internal/impact-ir/impact-business-planning/'+p,import.meta.url),'utf8'));
const changed=fresh();changed.values.company='PRIVATE_COMPANY_SENTINEL';changed.values.offer='PRIVATE_SERVICE_SENTINEL';changed.values.sales='PRIVATE_SALES_SENTINEL';
for(const task of TASKS.filter(t=>t.id!=='setup')){
 assert.equal(prompt(changed,task.id),prompt(fresh(),task.id));
 assert(!prompt(changed,task.id).includes('PRIVATE_'));
 assert(prompt(changed,task.id).includes('01_기업정보/기업정보.md'));
}
assert.equal(SECTIONS.flatMap(s=>s.fields).length,43);
const input=fresh();input.values={company:'워크북 검수기업',stage:'유료 시험 운영 준비',goal:'1:1 투자 미팅용 IR 작성'};
input.states.stage='가정';input.sources.company='사업메모 / 2026-10-11';input.review.decisions='가격은 대표 결정 전';input.revision=4;
const restored=normalize(JSON.parse(JSON.stringify(input)));
assert.equal(restored.values.company,input.values.company);
assert.equal(restored.states.stage,'가정');
assert.equal(restored.sources.company,input.sources.company);
assert.equal(restored.review.decisions,input.review.decisions);
assert.throws(()=>normalize({values:{}}));
const invalid=normalize({...input,tool:'other',states:{stage:'승인완료'},values:{...input.values,extra:'ignore'}});
assert.equal(invalid.tool,'codex');assert.equal(invalid.states.stage,'대표 입력');assert.equal(invalid.values.extra,undefined);
assert(!safeName('../a/b:company').includes('/'));
assert(companyMarkdown(restored).includes('- 상태: 가정\n유료 시험 운영 준비'));
assert(companyMarkdown(fresh()).includes('미입력'));
assert(reviewMarkdown(restored).includes('가격은 대표 결정 전'));
assert.equal(sample().example,true);assert.equal(restored.example,false);
for(const tool of Object.keys(TOOLS)){
 restored.tool=tool;
 const files=packageFiles(restored,lib);
 assert.equal(files['00_설정/모델별_프롬프트가이드.md'],modelGuidesMarkdown());
 for(const family of Object.values(MODEL_GUIDES)){
  assert(installation(restored).includes(family.links[0][1]));
  assert(modelGuidesMarkdown().includes(family.example));
 }
 assert(!installation(restored).includes('https://developers.openai.com/codex/prompting'));
 const skillFiles=Object.entries(files).filter(([p])=>p.startsWith('00_설정/스킬/impact-business-planning/'));
 assert.equal(skillFiles.length,5);
 for(const [p,v] of skillFiles)assert.equal(v,lib[p.replace('00_설정/스킬/impact-business-planning/','')]);
 for(const task of TASKS)assert.equal(files[`00_설정/프롬프트/${task.file}.md`],prompt(restored,task.id));
 assert.equal(files['01_기업정보/기업정보.md'],files['01_기업정보/웹워크북_원문.md']);
 assert(files['01_기업정보/사업가정.md'].includes('유료 시험 운영 준비'));
 assert(files['07_참조예시/작성예시.md'].includes('작성 예시'));
 assert(Object.keys(agentFiles(tool)).length>=1);
 const zip=new JSZip();for(const [p,v] of Object.entries(files))zip.file(p,v);
 const zipped=await zip.generateAsync({type:'nodebuffer',compression:'DEFLATE'});
 const reopened=await JSZip.loadAsync(zipped);
 assert.equal(await reopened.file('01_기업정보/기업정보.md').async('string'),companyMarkdown(restored));
 assert.equal(JSON.parse(await reopened.file('01_기업정보/워크북_백업.json').async('string')).values.company,input.values.company);
 console.log(`${tool}: ${Object.keys(files).length} files / ZIP round-trip passed`);
}
console.log('Package, prompt, status, backup, sample isolation, and normalization checks passed.');
