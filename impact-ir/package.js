import {QUICK_SETUP,QUICK_REQUESTS} from './quickstart.js?v=2.5.1';
import {VERSION,SCHEMA,SECTIONS,TASKS,TOOLS,STATES,RULES,AGENTS,REVIEW_FIELDS} from './content.js?v=2.5.1';
import {MODEL_GUIDES,modelGuidesMarkdown} from './models.js?v=2.5.1';
import {manualMarkdown,CONTEXT_PROMPT,UPDATE_PROMPT} from './manual.js?v=2.5.1';
import {referencePrompt} from './task-flow.js?v=2.5.1';
import {TASK_REQUESTS} from './workflow.js?v=2.5.1';

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
export function sample(){const d=fresh();d.example=true;for(const s of SECTIONS)for(const f of s.fields){d.values[f.id]=f.example;d.states[f.id]=['sales','cost','capacity','pricing'].includes(f.id)?'가정':'대표 입력';}return d;}
export function safeName(value){return (value||'내기업').normalize('NFC').replace(/[<>:"/\\|?*\x00-\x1f]/g,'_').replace(/^\.+|[. ]+$/g,'').slice(0,60)||'내기업';}
export function companyMarkdown(d,ids=SECTIONS.map(s=>s.id)){
 const lines=[`# ${d.example?'작성 예시 · ':''}${d.values.company||'기업명 미입력'} — 기업정보`,``,`- 패키지 버전: ${VERSION}`,`- 입력 버전: ${d.revision}`,`- 입력 수정일: ${d.updatedAt||'미기록'}`,`- 자료 기준일: ${d.values.asof||'미입력'}`,`- 입력 구분: ${d.example?'참조 예시':'대표 작성'}`,``,`입력 내용과 자료 확인 상태를 구분한다. 빈칸은 미입력이며 사실로 보완하지 않는다.`];
 for(const s of SECTIONS.filter(s=>ids.includes(s.id))){lines.push('',`## ${s.title}`);for(const f of s.fields){lines.push('',`### ${f.label}`,`- 상태: ${d.values[f.id]?.trim()?(d.states[f.id]||'대표 입력'):'미입력'}`,d.values[f.id]?.trim()||'미입력');}lines.push('',`### 근거 자료·출처`,d.sources[s.id]?.trim()||'미입력');}
 return lines.join('\n')+'\n';
}
export function setupProcedure(d){const t=TOOLS[d.tool];return `# 작업환경 설정 프롬프트\n\n${t.name}에서 현재 선택한 회사 작업 폴더에 다운로드한 AI 사업기획 패키지를 적용해줘.\n\n입력: ${d.values.company||'기업명 미입력'} / 패키지 ${VERSION} / 입력 버전 ${d.revision}\n\n1. 내가 첨부하거나 위치를 알려준 ZIP 또는 압축 해제 폴더를 확인해줘. 아직 위치를 모르면 정확한 경로 하나만 질문해줘. 회사 폴더 밖의 파일을 임의 탐색하지 마.\n2. 시작안내.md, 설치설정.md, 패키지정보.md, 00_설정/작업규칙.md를 읽고 패키지 파일을 확인해줘. 원본·기존 설정을 보존하고 회사 작업 폴더 안에 배치해줘. 같은 파일이 있으면 변경 내용 비교 후 병합하거나 다음 버전으로 보관해줘.\n3. 00_설정/스킬/impact-business-planning 전체를 ${t.skillPath}에 적용해줘. 00_설정/도구별설정/${t.name}의 등록용 파일을 안내된 프로젝트 경로에 적용해줘. 사용자 전역 설정을 덮어쓰지 마.\n4. 00_설정/에이전트의 기획작성.md·리서치분석.md·검토.md를 읽고 현재 버전에서의 에이전트 지원을 확인해줘. 별도 실행이 지원되면 실제 호출을 확인하고, 지원하지 않으면 한 에이전트가 세 역할을 순차 수행한다고 기록해줘.\n5. 01_기업정보/기업정보.md의 값·상태·기준일을 확인해줘. 웹워크북_원문.md는 최초 입력 기록이므로 갱신된 기업정보를 덮어쓰지 마.  기업정보가 미입력이면 기존 자료 유무를 확인하고 스킬의 기업정보 정리 모드를 적용해줘. 설정 과정에서 사업 내용을 임의로 채우지 마.\n6. 검색·웹 원문 열람·계산·PPT/PDF 제작 도구를 확인하고, 사용할 수 없는 도구와 필요한 조치를 기록해줘. 민감한 기업정보를 검색어에 넣지 마.\n7. 저장 경로 / 스킬 인식 / 에이전트 실행 방식 / 검색·열람·계산·제작 도구 / 적용 규칙 / 남은 조치 / 다음 작업를 05_검토기록/설정확인.md에 기록해줘. 파일 생성만으로 적용 완료를 선언하지 마.\n\n권한 승인·로그인·재시작 등 사람이 수행할 조치만 간단히 알려줘.\n`;}
export function setupPrompt(d){return QUICK_SETUP+'\n';}
export function prompt(d,id){if(id==='setup')return setupPrompt(d);if(id==='context')return CONTEXT_PROMPT;const task=TASKS.find(t=>t.id===id)||TASKS[1];return referencePrompt(task,TASK_REQUESTS[task.id]);}
export function reviewMarkdown(d){return `# 검토 기록\n\n- 입력 버전: ${d.revision}\n- 기록 주체: 웹 작성자\n- AI가 자동 검증한 결과가 아니라 사용자가 입력한 기록\n\n${REVIEW_FIELDS.map(f=>`## ${f.label}\n${d.review[f.id]||'미입력'}`).join('\n\n')}\n`;}
export function agentFiles(tool){const t=TOOLS[tool],result={};const intro='회사 폴더의 00_설정/작업규칙.md와 impact-business-planning 스킬을 읽고 적용한다.\n';
 if(tool==='codex')for(const [key,name] of [['writer','ir-writer'],['researcher','ir-researcher'],['reviewer','ir-reviewer']])result[`${t.agentPath}/${name}.toml`]=`name = "${name}"\ndescription = "${key==='writer'?'사업기획·IR 작성과 내부 보완':key==='researcher'?'공개자료 리서치·원문 검증·시장 산정':'IR 근거·숫자·표현 대조 검토'}"\n${key==='reviewer'?'sandbox_mode = "read-only"\n':''}developer_instructions = ${JSON.stringify(intro+AGENTS[key])}\n`;
 if(tool==='claude'||tool==='cursor')for(const [key,name] of [['writer','ir-writer'],['researcher','ir-researcher'],['reviewer','ir-reviewer']])result[`${t.agentPath}/${name}.md`]=`---\nname: ${name}\ndescription: ${key==='writer'?'사업기획과 IR의 작성·보완':key==='researcher'?'공개자료 조사·근거 관리·수치 산정':'IR의 주장·근거·산식·표현 검토'}\nmodel: inherit\n${key==='reviewer'?(tool==='claude'?'tools: Read, Glob, Grep\n':'readonly: true\n'):''}---\n\n${intro}${AGENTS[key]}`;
 const pointer='# 임팩트 사업기획·IR\n\n00_설정/작업규칙.md, 01_기업정보/기업정보.md와 의사결정.md를 읽고 적용한다. 사업기획·IR 작업에 impact-business-planning 스킬을 사용한다. 기획·작성 역할은 00_설정/에이전트/기획작성.md, 리서치·분석 역할은 00_설정/에이전트/리서치분석.md, 검토 역할은 00_설정/에이전트/검토.md를 따른다. 전체 작업에서는 필요한 역할을 연결하며 세부 프롬프트를 사용자에게 순서대로 실행하게 하지 않는다. 원본 보존과 대표 결정 범위를 지킨다.\n';
 result[t.rule]=(tool==='cursor'?'---\ndescription: 임팩트 사업기획·IR 공통 작업 규칙\nalwaysApply: true\n---\n\n':tool==='antigravity'?'---\ntrigger: always_on\ndescription: 임팩트 사업기획·IR 공통 작업 규칙\n---\n\n':'')+pointer;
 return result;
}
export function installation(d){const t=TOOLS[d.tool];return `# 설치·설정\n\n선택 도구: ${t.name}\n공식 자료 확인일: 2026-10-11\n\n## 사람이 할 일\n1. 공식 설치 안내에서 설치하고 본인 계정으로 로그인한다.\n2. 압축을 해제하고 회사 작업 폴더를 선택한다.\n3. 패키지 위치와 최초설정.md를 AI에 전달한다.\n4. 필요한 권한 승인·재시작 후 설정 확인 결과를 읽는다.\n\n## AI가 적용할 경로\n- 스킬: 00_설정/스킬/impact-business-planning → ${t.skillPath}\n- 작업 규칙 등록: 00_설정/도구별설정/${t.name}/${t.rule} → ${t.rule}\n- 에이전트: ${t.agentPath?`00_설정/도구별설정/${t.name}/${t.agentPath} → ${t.agentPath}`:'기획작성.md·리서치분석.md·검토.md 역할을 순차 적용. 별도 실행 지원은 설치 환경에서 확인.'}\n\n기존 설정은 비교·병합하고 전역 설정은 변경하지 않는다. 현재 버전의 형식과 다르면 공식 문서를 확인해 프로젝트 안에서 조정한다. 실제 스킬 호출·에이전트 실행을 확인하지 못하면 적용 대기로 기록한다. agents/openai.yaml은 스킬 표시 정보이며 작업 에이전트 설정이 아니다.\n\n## 모델·추론\n우선 이용 가능한 모델로 시작한다. 정리·교정은 속도와 비용, 사업 대안·충돌 검토는 추론, 시장 계산은 도구 사용과 재계산 결과를 비교한다. 낮음·보통·높음의 지원과 동작은 모델·제품마다 다르다. 높은 추론이 출처·실적·계산의 정확성을 보증하지 않는다. 모델 변경 때 공식 프롬프트 가이드를 확인하고 같은 입력의 누락·오류·시간·비용을 비교한다.\n\n설치형에서도 클라우드 모델을 쓸 수 있으므로 로그인·자료 전송·권한 조건을 확인한다.\n\n## 공식 안내\n- 설치: ${t.install}\n- 스킬: ${t.docs}\n- 에이전트·규칙: ${t.agents}\n- 모델별 안내: 00_설정/모델별_프롬프트가이드.md\n${Object.values(MODEL_GUIDES).map(g=>`- ${g.name} 프롬프트: ${g.links[0][1]}`).join('\n')}\n`;}
export function packageFiles(d,library){
 const files={};const add=(p,v)=>{files[p]=v;};
 add('시작안내.md',"# AI 사업기획 패키지\n\n1. 설치한 AI에서 회사 작업 폴더를 선택한다.\n2. 패키지 위치와 최초설정.md를 전달한다.\n3. 설정 확인 후 회사자료와 원하는 작업을 전달한다.\n\n스킬·에이전트·기업정보 양식은 모두 포함되어 있다. 단계별 프롬프트를 별도로 받거나 실행할 필요가 없다. 기존 회사자료가 있으면 AI가 양식으로 정리한다. 정보 확정과 사업 조건은 직접 확인한다.\n");
 add('사용설명서.md',manualMarkdown());
 add('00_설정/업데이트.md',UPDATE_PROMPT);
 add('설치설정.md',installation(d));add('패키지정보.md',`# 패키지 정보\n\n- 버전: ${VERSION}\n- 입력 버전: ${d.revision}\n- 입력 수정일: ${d.updatedAt||'미기록'}\n- 기준일: ${d.values.asof||'미입력'}\n- 도구: ${TOOLS[d.tool].name}\n- 스킬: impact-business-planning 5개 파일, 리서치·산정·제작·검토 모드 포함\n- 기업정보: 현재 웹 입력 반영 / 작업: 스킬·에이전트가 저장 파일 참조\n- 설치 상태: 적용 전 / 설정 프롬프트 실행 후 확인\n`);
 add('00_설정/작업규칙.md',RULES);add('00_설정/모델별_프롬프트가이드.md',modelGuidesMarkdown());
 add('최초설정.md',setupPrompt(d));
 add('00_설정/설정절차.md',setupProcedure(d));
 add('작업요청예시.md',QUICK_REQUESTS.map(([title,text])=>'## '+title+'\n\n'+text).join('\n\n'));
 add('00_설정/에이전트/기획작성.md',AGENTS.writer);add('00_설정/에이전트/리서치분석.md',AGENTS.researcher);add('00_설정/에이전트/검토.md',AGENTS.reviewer);
 for(const [p,v] of Object.entries(library))add(`00_설정/스킬/impact-business-planning/${p}`,v);
 for(const [p,v] of Object.entries(agentFiles(d.tool)))add(`00_설정/도구별설정/${TOOLS[d.tool].name}/${p}`,v);
 add('01_기업정보/웹워크북_원문.md',companyMarkdown(d));add('01_기업정보/기업정보.md',companyMarkdown(d));
 add('01_기업정보/사업가정.md',`# 사업 가정·목표\n\n${SECTIONS.flatMap(s=>s.fields).filter(f=>['가정','목표','미확인'].includes(d.states[f.id])&&d.values[f.id]?.trim()).map(f=>`## ${f.label} [${d.states[f.id]}]\n${d.values[f.id]}`).join('\n\n')||'웹에서 별도로 표시한 가정·목표 없음. 대표 입력의 확인 상태는 기업정보와 원자료를 대조한다.'}\n\n## AI 제안\n아직 없음. 대표 승인 전까지 여기에 별도 기록.\n`);
 add('01_기업정보/의사결정.md',`# 대표 의사결정\n\n## 유지할 방향\n${d.values.constraints||'미입력'}\n\n## 결정 기록\n${d.review.decisions||'미입력'}\n\nAI의 제안은 채택 여부·이유·결정일을 확인한 뒤 기록한다.\n`);
 add('01_기업정보/워크북_백업.json',JSON.stringify(d,null,2));
 for(const [dir,body] of [['02_원본자료','기존 사업계획·계약·매출·측정 자료의 원본 보관. AI는 원본을 수정하지 않는다.'],['03_조사계산','경쟁 비교·시장 산정·매출·현금 흐름과 원출처 저장.'],['04_기획제작','사업기획·IR 구성안·원고·제작 작업본 저장.'],['06_배포본','검토 후 대표가 승인한 제출 파일 저장.']])add(`${dir}/폴더안내.md`,`# ${dir}\n\n${body}\n`);
 add('05_검토기록/웹_검토기록.md',reviewMarkdown(d));
 add('07_참조예시/작성예시.md',companyMarkdown(sample()));
 add('07_참조예시/검토교정예시.md','# 검토·교정 예시\n\n교정 전: 혁신적인 친환경 플랫폼으로 지속 가능한 사회적 가치 실현.\n교정 후: 행사 운영사의 다회용기 공급·회수·세척 대행.\n\n국내 1위 → 비교 근거가 없으면 삭제.\n고객 확보 → 실제 계약 여부 확인, 미계약이면 타깃 가설로 구분.\n월 20,000개 처리 목표 → 현재 월 15,000개 역량과 비교, 부족분 5,000개 해소 비용 검토.\n탄소 감소 → 기준선·운송·세척 조건을 포함한 측정 과제로 연결.\n');
 add('07_참조예시/제출전확인표.md','# 제출 전 확인\n\n- [ ] 고객·제품·과금 단위가 구체적이다.\n- [ ] 실적·가정·목표와 자료 기준일이 구분된다.\n- [ ] 시장·매출·원가·현금의 산식·기간·단위가 일치한다.\n- [ ] 임팩트의 활동·산출·변화와 측정 근거가 연결된다.\n- [ ] 헤드카피와 본문 근거가 같은 내용을 말한다.\n- [ ] 투자자별 자료의 공통 사실과 숫자가 동일하다.\n- [ ] PPT·PDF를 열어 도표·출처·글자·넘침을 확인했다.\n- [ ] 미해결 과제와 대표 결정 필요 항목이 기록됐다.\n- [ ] 대표가 최종 제출을 승인했다.\n');
 return files;
}
