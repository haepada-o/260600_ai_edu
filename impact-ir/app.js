import {learningView,feedbackGuide,casesView} from './learning.js?v=3.0.0-beta.2';
import {STAGE_ALIASES} from './stages.js?v=3.0.0-beta.2';
import {quickView,requestsView,copyBlock} from './quickstart.js?v=3.0.0-beta.2';
import {manualView,manualMarkdown,UPDATE_PROMPT} from './manual.js?v=3.0.0-beta.2';
import {TASK_FLOW} from './task-flow.js?v=3.0.0-beta.2';
import {VERSION,SECTIONS,STATES,TASKS,TOOLS,REVIEW_FIELDS,AGENTS,RULES} from './content.js?v=3.0.0-beta.2';
import {fresh,normalize,sample,safeName,companyMarkdown,prompt,reviewMarkdown,packageFiles,installation,agentFiles,validateLibrary,ROLE_NAMES} from './package.js?v=3.0.0-beta.2';

import {MODEL_GUIDES,modelGuidesMarkdown} from './models.js?v=3.0.0-beta.2';
import {modelGuideView,modelGuideLinks} from './model-view.js?v=3.0.0-beta.2';

const KEY='bsquare-impact-ir-workbook-v2';
const $=s=>document.querySelector(s);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let data=fresh(),exampleData=sample(),exampleMode=false,sectionIndex=0,taskId='planning',storageBlocked=false,externalChange=false,importCandidate=null,toastTimer,library,workbookMode='initial';
try{const saved=localStorage.getItem(KEY);if(saved)data=normalize(JSON.parse(saved));}catch{storageBlocked=true;}
const current=()=>exampleMode?exampleData:data;
const fieldCount=()=>SECTIONS.reduce((n,s)=>n+s.fields.length,0);
const filled=s=>s.fields.filter(f=>current().values[f.id]?.trim()).length;
const total=()=>SECTIONS.reduce((n,s)=>n+filled(s),0);
function notify(text){$('#toast').textContent=text;$('#toast').classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').classList.remove('show'),3200);}
function warning(){const e=$('#storage-warning');e.hidden=!storageBlocked&&!externalChange;e.textContent=externalChange?'다른 탭에서 작성 내용이 변경됐습니다. 현재 내용을 백업한 뒤 새로고침하면 다른 탭의 내용을 불러옵니다. 현재 탭의 자동 저장은 일시 중지됩니다.':storageBlocked?'브라우저 저장을 사용할 수 없거나 저장된 자료를 읽지 못했습니다. 작성 내용은 백업 JSON 또는 전체 ZIP으로 보관해 주세요.':'';}
function save(){if(exampleMode)return;data.revision++;data.updatedAt=new Date().toISOString();if(externalChange){warning();return;}try{localStorage.setItem(KEY,JSON.stringify(data));storageBlocked=false;$('#save-status').textContent='브라우저 저장됨 · '+new Date().toLocaleTimeString('ko-KR',{hour:'2-digit',minute:'2-digit'});}catch{storageBlocked=true;$('#save-status').textContent='백업 필요';}warning();}
function download(name,value,type='text/markdown;charset=utf-8'){const blob=value instanceof Blob?value:new Blob([value],{type});const u=URL.createObjectURL(blob),a=document.createElement('a');a.href=u;a.download=name;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(u),15000);}
async function copy(text){try{await navigator.clipboard.writeText(text);notify('프롬프트를 복사했습니다.');}catch{openDialog('<h2>프롬프트 복사</h2><p class="muted">아래 내용을 선택해 복사할 수 있습니다.</p><textarea id="copy-fallback" style="min-height:340px" readonly></textarea>');$('#copy-fallback').value=text;$('#copy-fallback').select();}}
function openDialog(html){$('#dialog-body').innerHTML=html;$('#dialog').showModal();}
function head(kicker,title,desc,actions=''){return `<div class="page-head"><div><p class="eyebrow">${kicker}</p><h1>${title}</h1><p>${desc}</p></div><div class="actions">${actions}</div></div>`;}
function inputField(f,review=false){const d=current(),value=review?d.review[f.id]:d.values[f.id],attr=review?'data-review':'data-field';return `<div class="field"><div class="field-head"><label for="field-${f.id}">${esc(f.label)}</label>${review?'':`<select class="state" data-state="${f.id}" aria-label="${esc(f.label)} 확인 상태" ${exampleMode?'disabled':''}>${STATES.map(v=>`<option ${v===(d.states[f.id]||'대표 입력')?'selected':''}>${v}</option>`).join('')}</select>`}</div><p class="hint" id="hint-${f.id}">${esc(f.hint)}</p>${f.type==='text'||f.type==='date'?`<input id="field-${f.id}" aria-describedby="hint-${f.id}" type="${f.type}" ${attr}="${f.id}" value="${esc(value||'')}" maxlength="10000" ${exampleMode?'readonly':''}>`:`<textarea id="field-${f.id}" aria-describedby="hint-${f.id}" ${attr}="${f.id}" placeholder="${exampleMode?'':'직접 작성 · 모르면 미확인'}" maxlength="${review?20000:10000}" ${exampleMode?'readonly':''}>${esc(value||'')}</textarea>`}</div>`;}
function detailedWorkbook(){const s=SECTIONS[sectionIndex],task=TASKS.find(t=>t.id===s.task);return head('BUSINESS → IR','사업 구체화 · 상세 입력','필요한 항목만 작성합니다. 기존 회사자료가 있으면 AI에 정리를 요청하고, 웹에 같은 내용을 다시 입력할 필요는 없습니다.',`<button class="btn" data-workbook-mode="initial">간단 입력</button><button class="btn" data-action="example">${exampleMode?'내 워크북':'작성 예시'}</button><button class="btn primary" data-action="md">기업정보 MD ↓</button>`)+`<div class="work-layout"><aside class="section-nav" aria-label="워크북 항목"><div class="progress-title" id="progress-label">입력 ${total()} / ${fieldCount()}개</div><div class="progress"><i id="progress-bar" style="width:${total()/fieldCount()*100}%"></i></div>${SECTIONS.map((v,i)=>`<button data-section="${i}" class="${i===sectionIndex?'active':''}" ${i===sectionIndex?'aria-current="step"':''}><span>${String(i+1).padStart(2,'0')}</span>${v.title}<span id="count-${v.id}">${filled(v)}/${v.fields.length}</span></button>`).join('')}<p class="note">입력 수는 작성 현황입니다.<br>사업의 완성도 점수가 아닙니다.</p></aside><section class="editor"><div class="section-title"><span class="chapter">${String(sectionIndex+1).padStart(2,'0')} / ${SECTIONS.length}</span><h2>${s.title}</h2><p>${s.question}</p></div>${s.fields.map(f=>inputField(f)).join('')}<div class="field sources"><label for="source-${s.id}">근거 자료·출처</label><p class="hint">자료명 / URL 또는 파일 위치 / 기준일 / 확인 범위</p><textarea id="source-${s.id}" data-source="${s.id}" maxlength="10000" placeholder="예: 계약서_202610.pdf / 1건 체결 확인" ${exampleMode?'readonly':''}>${esc(current().sources[s.id]||'')}</textarea></div><div class="section-bottom"><button class="btn small" data-section="${Math.max(0,sectionIndex-1)}" ${sectionIndex===0?'disabled':''}>← 이전</button><small>자동 저장 · 빈칸은 미입력으로 내보내기</small>${sectionIndex<7?`<button class="btn primary small" data-section="${sectionIndex+1}">다음 항목 →</button>`:'<a class="btn primary small" href="#package">전체 패키지 →</a>'}</div></section><aside class="rail"><div class="rail-box accent"><span class="rail-label">작성 예시</span><h3>다회용기 서비스</h3><p class="sample-copy">${esc(s.fields.find(f=>f.id==='offer'||f.id==='problem'||f.id==='sales'||f.id==='impactPath'||f.id==='goal'||f.id==='marketScope'||f.id==='milestones'||f.id==='headline')?.example||s.fields[0].example)}</p><button class="text-btn" data-action="example">${exampleMode?'내 입력으로 돌아가기':'전체 예시 보기 →'}</button></div><div class="rail-box"><h3>확인 기준</h3><ul>${s.checks.map(c=>`<li>${c}</li>`).join('')}</ul></div><div class="rail-box"><span class="rail-label">AI 작업</span><h3>${task.title}</h3><p>${task.detail}</p><button class="btn primary" data-open-task="${s.task}">작업 요청 예시</button><p class="status-note">설정 후 회사자료와 원하는 작업만 전달합니다. AI가 필요한 절차를 선택합니다.</p></div></aside></div>`;}
function workbook(){
 if(workbookMode==='detail')return detailedWorkbook();
 const fields=['company','stage','buyer','offer','socialProblem','goal'].map(id=>SECTIONS.flatMap(s=>s.fields).find(f=>f.id===id));
 return head('BUSINESS DISCOVERY','사업 구체화','아는 내용부터 시작하세요. 중요한 빈칸은 AI가 질문·대안·조사로 구체화합니다.',`<button class="btn" data-action="example">${exampleMode?'내 워크북':'가상 입력 예시'}</button><button class="btn primary" data-action="md">기업정보 MD ↓</button>`)+`<div class="content-pad"><section class="panel"><h2>시작에 필요한 여섯 가지</h2><p>기존 상세 입력 ${total()} / ${fieldCount()}개도 그대로 보관됩니다. 입력 개수는 사업 준비도나 투자 점수가 아닙니다.</p><div class="initial-fields">${fields.map(f=>inputField(f)).join('')}</div><div class="actions"><button class="btn" data-workbook-mode="detail">상세 43개 항목·출처 작성</button><a class="btn primary" href="#prompts/research">기획 리서치 시작</a><a class="btn" href="#prompts/planning">사업 대안 구체화</a></div><p class="status-note">완성된 자료가 있다면 <a href="#prompts/writing">IR 초안</a>부터 진행하고 필요한 부분만 조사합니다. 예시 모드의 입력은 내 기업정보에 저장되지 않습니다.</p></section></div>`;
}
function promptView(){return learningView(location.hash.split('/')[1]||'writing');}
function packageView(){return quickView(current(),TOOLS);}
function reviewView(){
 const primary=['target','findings','origin','desired'];
 return head('FEEDBACK → REVISION','피드백·재작성','받은 의견을 바탕으로 사업계획과 IR을 고치고, 수정한 내용을 확인합니다.',`<button class="btn" data-action="review-md">검토 기록 MD ↓</button>`)+`<div class="content-pad">${feedbackGuide()}<div class="review-layout below-gap"><section class="panel"><h2>필요한 기록만 남기기</h2>${REVIEW_FIELDS.filter(f=>primary.includes(f.id)).map(f=>inputField(f,true)).join('')}<details><summary>기존 수정·결정·현장 검증·재평가·교정 기록</summary>${REVIEW_FIELDS.filter(f=>!primary.includes(f.id)).map(f=>inputField(f,true)).join('')}</details></section><aside><div class="rail-box accent"><h3>어떤 부분을 고치나요?</h3><p><a href="#prompts/planning">무슨 사업인지 모호해요 → 사업계획 정리</a></p><p><a href="#prompts/research">뒷받침할 자료가 없어요 → 조사</a></p><p><a href="#prompts/market">숫자가 맞지 않아요 → 계산</a></p><p><a href="#prompts/investment-review">투자자가 우려를 제기했어요 → 사업 보완</a></p><p><a href="#prompts/design">발표자료가 잘 읽히지 않아요 → 디자인</a></p></div><div class="rail-box"><h3>기록은 어디에 남기나요?</h3><p>이 화면에는 필요한 내용만 기록하세요. AI가 회사 폴더에서 수정한 문서는 여기에 자동으로 저장되지 않습니다.</p><p>같은 문제가 계속되면 아직 모르는 내용과 확인할 방법을 적어두세요.</p></div></aside></div></div>`;
}
function render(){const view=(location.hash.slice(1)||'start').split('/')[0];document.querySelectorAll('[data-view]').forEach(e=>{e.classList.toggle('active',e.dataset.view===view);if(e.dataset.view===view)e.setAttribute('aria-current','page');else e.removeAttribute('aria-current');});$('#example-banner').hidden=!exampleMode;$('#main').innerHTML=({start:packageView,workbook,prompts:promptView,package:packageView,review:reviewView,models:modelGuideView,manual:()=>manualView(current().tool),cases:casesView}[view]||packageView)();warning();}
function metrics(){const label=$('#progress-label');if(label)label.textContent=`입력 ${total()} / ${fieldCount()}개`;const bar=$('#progress-bar');if(bar)bar.style.width=`${total()/fieldCount()*100}%`;SECTIONS.forEach(s=>{const e=$('#count-'+s.id);if(e)e.textContent=`${filled(s)}/${s.fields.length}`;});}
async function getLibrary(){if(library)return library;const r=await fetch('./library.json?v=3.0.0-beta.2');if(!r.ok)throw Error('스킬 파일을 불러오지 못했습니다. 다시 시도해 주세요.');const v=await r.json();validateLibrary(v);library=v;return v;}
async function zipDownload(part='all'){
 const d=normalize(JSON.parse(JSON.stringify(current()))),lib=await getLibrary();if(!window.JSZip)throw Error('압축 도구를 불러오지 못했습니다. 페이지를 새로고침해 주세요.');
 const zip=new window.JSZip();let files=packageFiles(d,lib);let root=`${d.example?'작성예시_':''}${safeName(d.values.company)}_AI사업기획`;
 if(part==='skill'){files=Object.fromEntries(Object.entries(lib.files).filter(([p])=>p.startsWith('00_설정/스킬/')).map(([p,v])=>[p.replace('00_설정/스킬/',''),v]));root='사업기획_스킬';}
 if(part==='agents'){files={...Object.fromEntries(Object.entries(ROLE_NAMES).map(([id,name])=>[name+'.md',AGENTS[id]])),'적용안내.md':installation(d),...Object.fromEntries(Object.entries(agentFiles(d.tool)).map(([p,v])=>['도구별설정/'+p,v]))};root+='_'+TOOLS[d.tool].name+'_에이전트';}
 for(const [p,v] of Object.entries(files))zip.file(root+'/'+p,v);
 const blob=await zip.generateAsync({type:'blob',compression:'DEFLATE'});download(`${root}_v${VERSION}.zip`,blob);notify('다운로드를 시작했습니다.');
}
document.addEventListener('input',e=>{const t=e.target;if(exampleMode)return;if(t.dataset.field)data.values[t.dataset.field]=t.value;else if(t.dataset.state)data.states[t.dataset.state]=t.value;else if(t.dataset.source)data.sources[t.dataset.source]=t.value;else if(t.dataset.review)data.review[t.dataset.review]=t.value;else return;save();metrics();});
document.addEventListener('click',async e=>{
 if(e.target.closest('.skip')){e.preventDefault();$('#main').focus();return;}
 const b=e.target.closest('button,[data-action]');if(!b)return;
 if(b.dataset.workbookMode){workbookMode=b.dataset.workbookMode;render();return;}
 if(b.dataset.caseFile){try{const lib=await getLibrary(),p=b.dataset.caseFile;if(!p.startsWith('07_참조예시/')||!Object.hasOwn(lib.files,p))throw Error('사례 파일을 찾을 수 없습니다.');openDialog('<h2>'+esc(p.split('/').pop())+'</h2><p class="status-note">교육용 참조 · 내 기업정보와 별도</p><button class="btn" data-case-download="'+esc(p)+'">원문 MD 저장</button><pre class="case-source">'+esc(lib.files[p])+'</pre>');}catch(error){notify(error.message);}return;}
 if(b.dataset.caseDownload){try{const lib=await getLibrary(),p=b.dataset.caseDownload;if(p.startsWith('07_참조예시/')&&Object.hasOwn(lib.files,p))download(p.split('/').pop(),lib.files[p]);}catch(error){notify(error.message);}return;}
 if(b.dataset.section!==undefined){sectionIndex=Number(b.dataset.section);render();$('#main').scrollIntoView({behavior:'smooth'});return;}
 if(b.dataset.task){taskId=b.dataset.task;render();return;}
 if(b.dataset.openTask){taskId=b.dataset.openTask;location.hash='prompts/'+(STAGE_ALIASES[taskId]||taskId);return;}
 if(b.dataset.tool){current().tool=b.dataset.tool;save();render();return;}
 if(b.dataset.copyTarget){await copy(document.getElementById(b.dataset.copyTarget).textContent);return;}
 if(b.dataset.inspect){try{const key=b.dataset.inspect;let body;if(key==='skill'){const lib=await getLibrary();body=Object.entries(lib.files).filter(([p])=>p.startsWith('00_설정/스킬/')).map(([p,v],i)=>'<details><summary>'+esc(p)+'</summary>'+copyBlock('skill-'+i,v,'내용 복사')+'</details>').join('');}else{body=copyBlock('inspect-text',key==='rules'?RULES:AGENTS[key],'내용 복사');}openDialog('<h2>패키지 내용</h2>'+body);}catch(error){notify(error.message);}return;}
 const action=b.dataset.action;const d=current();
 if(action==='example'){exampleMode=!exampleMode;render();return;}
 if(action==='manual-md'){download('임팩트IR_워크북_사용설명서.md',manualMarkdown());return;}
 if(action==='manual-print'){window.print();return;}
 if(action==='update-copy'){await copy(UPDATE_PROMPT);return;}
 if(action==='guides-md'){download('단계별_모델가이드.md',modelGuidesMarkdown());return;}
 if(action==='model-copy'&&Object.hasOwn(MODEL_GUIDES,b.dataset.family)){await copy(MODEL_GUIDES[b.dataset.family].example);return;}
 if(action==='md'){download(`${safeName(d.values.company)}_기업정보.md`,companyMarkdown(d));return;}
 if(action==='review-md'){download(`${safeName(d.values.company)}_검토기록.md`,reviewMarkdown(d));return;}
 if(action==='install-md'){download(`${TOOLS[d.tool].name}_설치설정.md`,installation(d));return;}
 if(action==='backup'){download(`${d.example?'작성예시_':''}${safeName(d.values.company)}_워크북_v${d.revision}.json`,JSON.stringify(d,null,2),'application/json');notify('백업 다운로드를 시작했습니다.');return;}
 if(action==='import'){if(exampleMode){exampleMode=false;render();}$('#import-file').click();return;}
 if(action==='apply-import'&&importCandidate){if(importCandidate.example){exampleData=importCandidate;exampleMode=true;}else{data=importCandidate;exampleMode=false;externalChange=false;save();}importCandidate=null;$('#dialog').close();render();notify(exampleMode?'작성 예시를 열었습니다. 내 워크북은 유지됩니다.':'백업을 불러왔습니다.');return;}
 if(action==='copy'){await copy(prompt(d,b.dataset.id||taskId));return;}
 if(action==='zip'||action==='part'){b.disabled=true;try{await zipDownload(b.dataset.part||'all');}catch(error){notify(error.message);}finally{b.disabled=false;}return;}
 if(action==='glossary'){const rows=[['프롬프트','AI에게 전달하는 이번 작업의 목표·입력·조건. 반복 사용도 가능.'],['컨텍스트','판단에 필요한 기업정보·원자료·결정 기록.'],['스킬','반복 적용할 절차·기준·참고 자료의 묶음.'],['에이전트','모델·도구를 사용해 목표를 수행하는 시스템. 역할 문서만으로 실행되는 것은 아님.'],['워크플로','작업의 순서·분기·승인·반복 조건.'],['Markdown','제목·문장·표를 텍스트로 저장하는 형식. 확장자는 .md.'],['CLI','명령줄에서 프로그램을 실행하는 방식. AI에 자연어로 작업 지시 가능.'],['추론 설정','문제 해결에 사용하는 노력의 수준. 지원 범위는 모델·제품별 차이.']];openDialog('<h2>용어 안내</h2>'+rows.map(([a,b])=>`<div class="glossary-row"><b>${a}</b><p>${b}</p></div>`).join(''));return;}
 if(action==='privacy'){openDialog('<h2>저장·백업 안내</h2><p>작성 내용은 이 브라우저의 로컬 저장소에 보관됩니다. 사이트 서버로 기업정보를 전송하지 않습니다.</p><p>브라우저 데이터 삭제, 시크릿 모드 종료, 기기 변경 시 작성 내용을 잃을 수 있습니다. 백업 JSON 또는 전체 ZIP으로 보관하세요.</p><p>같은 기기·브라우저를 함께 사용하면 저장한 내용에 접근할 수 있습니다. 비밀번호·API 키·로그인 토큰은 입력하지 마세요.</p><p>백업 JSON은 웹에서 다시 불러올 수 있습니다. AI가 로컬에서 수정한 Markdown은 웹과 자동 동기화되지 않습니다.</p>');}
});
$('#import-file').addEventListener('change',async e=>{const file=e.target.files[0];e.target.value='';if(!file)return;try{if(file.size>2*1024*1024)throw Error('2MB 이하의 워크북 백업 JSON을 선택해 주세요.');const imported=normalize(JSON.parse(await file.text()));importCandidate=imported;openDialog(`<h2>백업 불러오기</h2><p><b>${esc(imported.values.company||'기업명 미입력')}</b> · 입력 v${imported.revision}</p>${imported.example?'<p class="callout">작성 예시로 엽니다. 내 워크북의 작성 내용은 유지됩니다.</p>':'<p>현재 브라우저의 작성 내용을 이 백업으로 교체합니다. 기존 내용이 필요하면 먼저 백업하세요.</p>'}<div class="actions"><button class="btn" data-action="backup">현재 내용 백업</button><button class="btn primary" data-action="apply-import">불러오기 적용</button></div>`);}catch(error){notify(error instanceof SyntaxError?'올바른 JSON 파일이 아닙니다.':error.message);}});
$('.dialog-close').addEventListener('click',()=>$('#dialog').close());
$('#dialog').addEventListener('click',e=>{if(e.target===$('#dialog')){const r=e.target.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)e.target.close();}});
window.addEventListener('storage',e=>{if(e.key===KEY&&e.newValue){externalChange=true;warning();}});
window.addEventListener('hashchange',()=>{render();window.scrollTo(0,0);});
render();
