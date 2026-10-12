import {packageGuideMarkdown} from './package-guide.js?v=3.0.0-beta.2';
import {QUICK_SETUP,QUICK_REQUESTS} from './quickstart.js?v=3.0.0-beta.2';
import {VERSION,SCHEMA,SECTIONS,TASKS,TOOLS,STATES,RULES,AGENTS,REVIEW_FIELDS} from './content.js?v=3.0.0-beta.2';
import {MODEL_GUIDES,modelGuidesMarkdown} from './models.js?v=3.0.0-beta.2';
import {manualMarkdown,CONTEXT_PROMPT,UPDATE_PROMPT} from './manual.js?v=3.0.0-beta.2';
import {referencePrompt} from './task-flow.js?v=3.0.0-beta.2';
import {TASK_REQUESTS} from './workflow.js?v=3.0.0-beta.2';
import {stagesMarkdown} from './stages.js?v=3.0.0-beta.2';

export function fresh(){return {schema:SCHEMA,version:VERSION,revision:0,updatedAt:'',tool:'codex',values:{},states:{},sources:{},review:{},example:false};}
export function normalize(input){
 if(!input || input.schema!==SCHEMA || !input.values || typeof input.values!=='object') throw new Error('이 워크북에서 저장한 백업 JSON을 선택해 주세요.');
 const out=fresh(); out.tool=Object.hasOwn(TOOLS,input.tool)?input.tool:'codex';
 out.revision=Number.isSafeInteger(input.revision)&&input.revision>=0?input.revision:0;
 out.updatedAt=typeof input.updatedAt==='string'?input.updatedAt.slice(0,40):'';
 out.example=input.example===true;
 for(const s of SECTIONS){
  for(const f of s.fields){out.values[f.id]=typeof input.values[f.id]==='string'?input.values[f.id].slice(0,10000):'';out.states[f.id]=STATES.includes(input.states?.[f.id])?input.states[f.id]:'대표 입력';}
  out.sources[s.id]=typeof input.sources?.[s.id]==='string'?input.sources[s.id].slice(0,10000):'';
 }
 for(const f of REVIEW_FIELDS)out.review[f.id]=typeof input.review?.[f.id]==='string'?input.review[f.id].slice(0,20000):'';
 return out;
}
export function sample(){const d=fresh();d.example=true;for(const s of SECTIONS)for(const f of s.fields){d.values[f.id]=f.example;d.states[f.id]=['sales','capacity','pricing'].includes(f.id)?'가정':['cost','cash','traction'].includes(f.id)?'미확인':'가정';}return d;}
export function safeName(value){return (value||'내기업').normalize('NFC').replace(/[<>:"/\\|?*\x00-\x1f]/g,'_').replace(/^\.+|[. ]+$/g,'').slice(0,60)||'내기업';}
export function companyMarkdown(d,ids=SECTIONS.map(s=>s.id)){
 const lines=[`# ${d.example?'작성 예시 · ':''}${d.values.company||'기업명 미입력'} — 기업정보`,``,`- 패키지 버전: ${VERSION}`,`- 입력 버전: ${d.revision}`,`- 입력 수정일: ${d.updatedAt||'미기록'}`,`- 자료 기준일: ${d.values.asof||'미입력'}`,`- 입력 구분: ${d.example?'참조 예시':'대표 작성'}`,``,`입력 내용과 자료 확인 상태를 구분한다. 빈칸은 미입력이며 사실로 보완하지 않는다.`];
 for(const s of SECTIONS.filter(s=>ids.includes(s.id))){lines.push('',`## ${s.title}`);for(const f of s.fields){lines.push('',`### ${f.label}`,`- 상태: ${d.values[f.id]?.trim()?(d.states[f.id]||'대표 입력'):'미입력'}`,d.values[f.id]?.trim()||'미입력');}lines.push('',`### 근거 자료·출처`,d.sources[s.id]?.trim()||'미입력');}
 return lines.join('\n')+'\n';
}
export const SKILLS=['impact-business-planning','impact-ir-education-sample'];
export const ROLE_NAMES={writer:'기획작성',researcher:'리서치분석',reviewer:'검토',designer:'디자인'};
export function validateLibrary(library){
 if(library?.schema!=='impact-ir-library-v3'||library.version!==VERSION||!library.files)throw Error('패키지 버전이 맞지 않습니다. 새로고침해 주세요.');
 for(const skill of SKILLS)if(!library.files[`00_설정/스킬/${skill}/SKILL.md`])throw Error('스킬 파일이 누락됐습니다: '+skill);
 for(const name of Object.values(ROLE_NAMES))if(!library.files[`00_설정/에이전트/${name}.md`])throw Error('역할 파일이 누락됐습니다: '+name);
 for(const [p,v] of Object.entries(library.files))if(p.startsWith('/')||p.split('/').some(s=>['..','.',''].includes(s))||typeof v!=='string')throw Error('패키지 파일 목록을 확인할 수 없습니다.');
 return library;
}
export function setupProcedure(d){const t=TOOLS[d.tool];return `# 설정절차

${t.name}에서 사용자가 지정한 회사 작업 폴더에 이 패키지를 적용한다.
1. 지정한 ZIP/폴더 위치를 확인한다. 모르면 정확한 경로만 질문한다.
2. 시작안내·설치설정·작업규칙을 읽고 파일 목록과 기존 설정을 비교한다. 기존 회사자료·원본·맞춤 설정은 보존하고 충돌하는 부분만 확인한다.
3. 00_설정/스킬 아래 두 스킬을 각각 ${t.skillPath.replace('/impact-business-planning','')}/<스킬명>에 등록한다. 교육 스킬은 별도 이름·폴더로 유지한다. 사용자가 다른 기본 설치 위치를 지정했다면 그 범위에 적용하고 관련 없는 전역 설정은 변경하지 않는다.
4. 00_설정/도구별설정/${t.name}의 파일을 안내 경로에 비교·병합한다. 작성·연구·검토·디자인 네 역할을 확인한다. 별도 실행 지원이 확인되면 필요한 역할만 호출한다. 미지원이면 역할을 순차 적용했다고 기록한다.
5. 01_기업정보/기업정보.md와 기존 결정·작업현황을 읽는다. 웹워크북_원문.md는 초기 기록이다. 최신 기업정보를 빈 양식·예시로 덮어쓰지 않는다. 미입력이면 기존자료 정리 또는 초기 입력으로 시작한다.
6. 검색·원문 열기·계산·이미지/PDF·실제 제작·렌더 도구를 확인한다. 민감한 기업정보를 공개 검색어로 사용하지 않는다.
7. 05_검토기록/설정확인.md에 적용 경로·스킬 인식·실제 역할 실행 방식·도구·확인 결과·남은 조치·다음 작업을 기록한다. 파일 생성과 실제 작동을 구분한다.

현재 지원 안내: ${t.verified}
로그인·권한 승인·재시작이 필요하면 구체적으로 알린다. 설정 중 사업 내용을 임의 확정하지 않는다.
`;}
export function setupPrompt(){return QUICK_SETUP+'\n';}
export function prompt(d,id){if(id==='setup')return setupPrompt(d);if(id==='context')return CONTEXT_PROMPT;const task=TASKS.find(t=>t.id===id)||TASKS.find(t=>t.id==='planning');return referencePrompt(task,TASK_REQUESTS[task.id]);}
export function reviewMarkdown(d){return `# 피드백·재작성 기록\n\n- 입력 버전: ${d.revision}\n- 기록 주체: 웹 작성자\n- 웹 기록은 실제 AI 실행·고객 검증을 대신하지 않음\n\n${REVIEW_FIELDS.map(f=>`## ${f.label}\n${d.review[f.id]||'미입력'}`).join('\n\n')}\n`;}
export function agentFiles(tool){
 const t=TOOLS[tool],result={};
 for(const [key,label] of Object.entries(ROLE_NAMES)){
  const name='social-invest-ir-'+key,description=label+' 역할: 임팩트 사업기획·IR';
  if(tool==='codex')result[`${t.agentPath}/${name}.toml`]=`name = "${name}"\ndescription = "${description}"\n${key==='reviewer'?'sandbox_mode = "read-only"\n':''}developer_instructions = ${JSON.stringify(AGENTS[key])}\n`;
  if(tool==='antigravity')result[`${t.agentPath}/${name}.md`]=`---\nname: ${name}\ndescription: ${JSON.stringify(description)}\nmodel: inherit\nsubagent: true\nmainAgent: false\ncommandExecutionPolicy: ${key==='reviewer'?'off':'sandbox'}\n${key==='reviewer'?'tools: [view_file, grep_search]\n':''}---\n\n${AGENTS[key]}`;
  if(tool==='claude'||tool==='cursor')result[`${t.agentPath}/${name}.md`]=`---\nname: ${name}\ndescription: ${JSON.stringify(description)}\nmodel: inherit\n${key==='reviewer'?(tool==='claude'?'tools: Read, Glob, Grep\n':'readonly: true\n'):''}---\n\n${AGENTS[key]}`;
 }
 const pointer='# 임팩트 사업기획·IR\n\n00_설정/작업규칙.md, 기업정보·가정·의사결정·작업현황을 읽고 impact-business-planning 스킬을 적용한다. 교육용 가상 실습은 별도 impact-ir-education-sample 스킬을 사용한다. 전체 요청은 기획 리서치→사업 가설→초안→검토·재작성→투자 보완→디자인·검증으로 연결한다. 작성·연구·검토·디자인 역할은 필요한 경우에만 사용하고 실제 실행 여부를 기록한다. 원본·기존 설정을 보존한다.\n';
 result[t.rule]=(tool==='cursor'?'---\ndescription: 임팩트 사업기획·IR\nalwaysApply: true\n---\n\n':tool==='antigravity'?'---\ntrigger: always_on\ndescription: 임팩트 사업기획·IR\n---\n\n':'')+pointer;
 return result;
}
export function installation(d){const t=TOOLS[d.tool];return `# 설치·설정

선택 도구: ${t.name} / 공식 형식 확인일: 2026-10-12
지원 상태: ${t.verified}

## 시작
프로그램 설치·로그인 → 회사 폴더 선택 → 패키지 위치와 최초설정.md 전달 → 실제 인식·역할 호출·도구 확인.

## 적용 위치
- 공통 스킬: ${t.skillPath}
- 교육 스킬: ${t.skillPath.replace('impact-business-planning','impact-ir-education-sample')}
- 작업규칙: ${t.rule}
- 역할 등록: ${t.agentPath||'별도 독립 실행 미확인. 네 역할 문서를 순차 적용'}
- 등록 파일 원본: 00_설정/도구별설정/${t.name}/

기존 설정을 비교·병합한다. 사용자 지정 설치 위치를 따르고 관련 없는 전역 설정은 보존한다. 교육 스킬은 별도 이름으로 유지한다. 역할 문서와 실제 독립 실행을 구분하며 현재 프로그램에서 호출하지 못하면 미확인으로 기록한다. agents/openai.yaml은 스킬 표시 정보다.

## 모델과 기능
현재 선택 가능한 모델 하나로 시작한다. 단계별 후보·요청문·설정·출처는 00_설정/모델별_프롬프트가이드.md를 확인한다. 추천 모델을 설정에 자동 고정하지 않는다. 검색·계산·이미지·제작·렌더는 실제 환경에서 각각 확인한다.

## 공식 안내
- 설치: ${t.install}
- 스킬: ${t.docs}
- 역할·규칙: ${t.agents}
${Object.values(MODEL_GUIDES).map(g=>`- ${g.name}: ${g.links[0][1]}`).join('\n')}
`;}
export function packageFiles(d,library){
 validateLibrary(library);
 const files={...library.files};
 const add=(p,v)=>{files[p]=v;};
 add('패키지구성_사용법.md',packageGuideMarkdown(d.tool));add('사용설명서.md',manualMarkdown());add('스킬사용방법.md',manualMarkdown());
 add('시작안내.md','# AI 사업기획·IR 교육 패키지\n\n전체 다운로드 → 최초 설정 → 회사자료·목적 전달\n\n폴더 구성·설치 경로·사용 순서는 패키지구성_사용법.md를 읽는다.\n\n공통 스킬 1종과 별도 교육 스킬 1종, 작성·연구·검토·디자인 4개 역할을 포함한다. 설정절차로 실제 인식·호출·도구·남은 조치를 확인한다. 원하는 결과를 요청하면 필요한 단계를 연결하며 모든 요청문을 순서대로 실행할 필요는 없다.\n\n기존 회사자료는 보존한다. 07_참조예시는 가상 기업 교육 자료이며 내 회사의 사실로 사용하지 않는다. 현재 패키지는 v3 베타이며 실제 역할 호출·교정 성능은 실행 환경에서 확인한다.\n');
 add('설치설정.md',installation(d));add('최초설정.md',setupPrompt(d));add('00_설정/설정절차.md',setupProcedure(d));
 add('00_설정/작업규칙.md',RULES);add('00_설정/업데이트.md',UPDATE_PROMPT);add('00_설정/모델별_프롬프트가이드.md',modelGuidesMarkdown());
 add('작업요청예시.md',QUICK_REQUESTS.map(([t,v])=>`## ${t}\n\n${v}`).join('\n\n')+'\n\n'+stagesMarkdown());
 for(const [p,v] of Object.entries(agentFiles(d.tool)))add(`00_설정/도구별설정/${TOOLS[d.tool].name}/${p}`,v);
 add('패키지정보.md',`# 패키지 정보\n\n- 버전: ${VERSION}\n- 입력 버전: ${d.revision}\n- 입력 수정일: ${d.updatedAt||'미기록'}\n- 도구: ${TOOLS[d.tool].name}\n- 스킬: ${SKILLS.join(', ')}\n- 역할: 작성·연구·검토·디자인\n- 설치 상태: 적용 전. 설정절차를 실행해 확인\n- 실제 교정·모델별 성능: 실행 환경에서 시험 필요\n- 기존 사례: 교육용 가상 자료. 새 스킬 실행 성공의 증거가 아님\n`);
 add('01_기업정보/기업정보.md',companyMarkdown(d));add('01_기업정보/웹워크북_원문.md',companyMarkdown(d));
 add('01_기업정보/사업가정.md',`# 사업 가정·목표\n\n${SECTIONS.flatMap(s=>s.fields).filter(f=>['가정','목표','미확인'].includes(d.states[f.id])&&d.values[f.id]?.trim()).map(f=>`## ${f.label} [${d.states[f.id]}]\n${d.values[f.id]}`).join('\n\n')||'별도 표시 없음. 대표 입력은 원자료와 대조한다.'}\n\n## AI 제안\n사용자가 허용한 가정 범위와 채택 상태를 기록한다.\n`);
 add('01_기업정보/의사결정.md',`# 의사결정\n\n## 유지할 방향\n${d.values.constraints||'미입력'}\n\n## 결정 기록\n${d.review.decisions||'미입력'}\n\nAI 제안의 채택·미채택·이유·결정일과 가정 허용 범위를 기록한다.\n`);
 add('01_기업정보/워크북_백업.json',JSON.stringify(d,null,2));
 add('05_검토기록/웹_검토기록.md',reviewMarkdown(d));add('07_참조예시/작성예시.md',companyMarkdown(sample()));
 add('파일목록.json',JSON.stringify({version:VERSION,tool:d.tool,files:[...Object.keys(files),'파일목록.json'].sort()},null,2));
 return files;
}
