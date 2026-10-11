import {VERSION,SCHEMA,SECTIONS,TASKS,TOOLS,STATES,RULES,AGENTS,REVIEW_FIELDS} from './content.js';
import {MODEL_GUIDES,modelGuidesMarkdown} from './models.js';

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
const taskInstructions={
 planning:'기업정보를 정리하고 서비스 정의·고객·경쟁·시장·매출·자금·임팩트를 연결해 사업기획을 보완해줘. 판단에 영향을 주는 누락만 질문하고, 진행 가능한 조사·계산·초안 작업은 이어가줘. 기획 초안 → 관점별 검토 → 원인별 수정 → 변경 항목 재검토까지 수행해줘.',
 service:'고객, 실제 사용자, 결제자, 제공 범위, 처리 과정, 결과물, 구매 이유를 구체화해줘. 불명확한 부분은 확인 질문과 대안을 제시하고, 대표가 답하거나 승인하기 전에는 서비스·가격을 확정하지 마. 모호한 사업 설명과 교정한 설명을 비교해줘.',
 competition:'같은 고객 업무를 해결하는 경쟁사·수작업·자체 처리·외부 대행을 조사해줘. 비교 기준은 구매자가 보는 비용·업무 범위·납기·품질·제공 역량으로 정해줘. 항목별 원출처 URL·자료명·기준일·확인 범위를 남기고, 미확인 기능을 기능 없음으로 단정하지 마. 조사 도구가 없으면 필요한 자료 목록과 조사 질문을 남겨줘.',
 market:'상품·고객·지역·기간을 맞춰 TAM·SAM·SOM을 산정하고, 고객 확보량·단가·도입 시점·직접 원가·제공 역량·현금 흐름을 연결해줘. 숫자마다 입력값·근거·산식·단위·기간·상태를 남겨줘. SOM은 영업 접근·전환·제공 역량을 반영하고, 목표 매출과 구분해줘. 필요 자금은 기간별 지출·유입·보유 현금·여유자금으로 계산하고 기업가치와 분리해줘. 확인되지 않은 수치는 가정으로 표시하고 민감한 가정을 비교해줘.',
 impact:'사업성·임팩트·투자자 적합성을 각각 검토해줘. 수혜자·활동·직접 산출·기대 변화·지표·기준선·측정 기간·자료 수집·다른 영향 요인·부작용을 연결해줘. 미측정 값을 성과로 바꾸지 마. 보류 사유별로 표현·조사·계산·사업 구조·현장 검증 중 다음 작업을 지정해줘.',
 ir:'기업정보와 조사·계산 결과를 읽고 대상 투자자와 미팅 목적에 맞는 IR을 기획·제작해줘. 사업 정의와 근거가 부족하면 먼저 보완하고 대표 결정이 필요한 부분을 남겨줘. 구성은 페이지 질문 → 핵심 답 → 헤드카피 → 실제 본문·근거 → 시각화 → 어펜딕스로 작성해줘. 10장으로 고정하지 마. 승인된 사업 내용으로 원고를 작성하고, 흰 배경·충분한 글자 크기로 PPT·PDF를 제작해줘. 제작 도구가 없으면 원고·시각화 명세와 남은 제작 작업을 전달해줘. 만든 파일은 실제로 열거나 렌더링해 확인해줘.',
 loop:'작성 결과를 검토한 뒤 표현 오류는 원고, 근거 부족은 조사, 수치 오류는 계산으로 돌아가 수정해줘. 사업 조건 변경은 대안·이유를 정리해 대표 결정으로 남겨줘. 수정한 항목과 영향받는 표·본문·숫자를 재검토해줘. 새 근거·수정이 없으면 같은 평가를 반복하지 말고 미해결 항목과 다음 행동을 기록해줘.',
 investor:'대상 투자자의 하우스·펀드·포트폴리오·투자 단계 공개자료를 조사해 우리 사업과의 적합성을 검토해줘. 동일한 사실·실적·가정·숫자를 유지하면서 질문의 순서·강조점·대표 근거를 조정해줘. 원출처와 확인일을 남기고 비공개 투자 의사를 단정하지 마. 미션·사업 방향의 변경은 대표 결정으로 남겨줘.',
 audit:'제출 대상 원고·근거·계산·PPT·PDF를 대조해줘. 사실·출처·기준일·단위·산식·헤드카피·본문·도표·발표 원고·가독성을 확인해줘. 내부 메모·모호한 표현·근거 없는 과장·서로 다른 수치를 바로잡고 변경 항목을 재검토해줘. 자료가 없어 검증하지 못한 부분을 완료 처리하지 마. 최종 제출은 대표가 결정하도록 확인 결과를 전달해줘.'
};
export function setupPrompt(d){const t=TOOLS[d.tool];return `# 작업환경 설정 프롬프트\n\n${t.name}에서 현재 선택한 회사 작업 폴더에 다운로드한 AI 사업기획 패키지를 적용해줘.\n\n입력: ${d.values.company||'기업명 미입력'} / 패키지 ${VERSION} / 입력 버전 ${d.revision}\n\n1. 내가 첨부하거나 위치를 알려준 ZIP 또는 압축 해제 폴더를 확인해줘. 아직 위치를 모르면 정확한 경로 하나만 질문해줘. 회사 폴더 밖의 파일을 임의 탐색하지 마.\n2. 시작안내.md, 설치설정.md, 패키지정보.md, 00_설정/작업규칙.md를 읽고 패키지 파일을 확인해줘. 원본·기존 설정을 보존하고 회사 작업 폴더 안에 배치해줘. 같은 파일이 있으면 변경 내용 비교 후 병합하거나 다음 버전으로 보관해줘.\n3. 00_설정/스킬/impact-business-planning 전체를 ${t.skillPath}에 적용해줘. 00_설정/도구별설정/${t.name}의 등록용 파일을 안내된 프로젝트 경로에 적용해줘. 사용자 전역 설정을 덮어쓰지 마.\n4. 00_설정/에이전트의 기획작성.md·검토.md를 읽고 현재 버전에서의 에이전트 지원을 확인해줘. 별도 실행이 지원되면 실제 호출을 확인하고, 지원하지 않으면 한 에이전트가 두 단계를 순차 수행한다고 기록해줘.\n5. 01_기업정보/기업정보.md와 웹워크북_원문.md의 값·상태·기준일을 대조하고, 스킬 기준으로 서비스 정의 한 문장을 검토해줘. 없는 사실은 채우지 마.\n6. 저장 경로 / 스킬 인식 / 에이전트 실행 방식 / 적용 규칙 / 남은 조치 / 다음 프롬프트를 05_검토기록/설정확인.md에 기록해줘. 파일 생성만으로 적용 완료를 선언하지 마.\n\n권한 승인·로그인·재시작 등 사람이 수행할 조치만 간단히 알려줘.\n`;}
export function prompt(d,id){if(id==='setup')return setupPrompt(d);const task=TASKS.find(t=>t.id===id)||TASKS[1];return `# ${task.title} 프롬프트\n\n${taskInstructions[task.id]}\n\n## 적용 자료와 기준\n- 00_설정/작업규칙.md와 impact-business-planning 스킬을 읽어줘.\n- 01_기업정보의 원문·기업정보·사업가정·의사결정, 02_원본자료, 기존 조사·계산 결과를 필요한 범위에서 읽어줘.\n- 최신 로컬 기업정보와 아래 웹 입력이 다르면 기준일과 대표의 승인 기록을 확인해줘. 오래된 웹 입력으로 덮어쓰지 마.\n- 기획·작성 에이전트는 작업을 수행하고 검토 에이전트는 원자료·산식을 대조해줘. 미지원 환경에서는 단일 에이전트의 단계별 작업으로 진행해줘.\n- 사업 방향·가격·예산·투자 조건의 채택은 대표 결정으로 남겨줘. 외부 연락·제출은 수행하지 마.\n\n## 산출물과 완료 조건\n- 대표 산출물: ${task.output}\n- 근거·가정·수정 내역·미해결 과제를 연결하고, 오류를 교정한 뒤 변경 항목을 재검토해줘.\n- 원자료는 보존하고 새 작업본을 저장해줘. 실제 고객 구매·사용·효과는 현장 검증 과제로 구분해줘.\n\n## 웹 워크북 입력\n${companyMarkdown(d,task.sections)}`;}
export function reviewMarkdown(d){return `# 검토 기록\n\n- 입력 버전: ${d.revision}\n- 기록 주체: 웹 작성자\n- AI가 자동 검증한 결과가 아니라 사용자가 입력한 기록\n\n${REVIEW_FIELDS.map(f=>`## ${f.label}\n${d.review[f.id]||'미입력'}`).join('\n\n')}\n`;}
export function agentFiles(tool){const t=TOOLS[tool],result={};const intro='회사 폴더의 00_설정/작업규칙.md와 impact-business-planning 스킬을 읽고 적용한다.\n';
 if(tool==='codex')for(const [key,name] of [['writer','ir-writer'],['reviewer','ir-reviewer']])result[`${t.agentPath}/${name}.toml`]=`name = "${name}"\ndescription = "${key==='writer'?'사업기획·IR 작성과 내부 보완':'IR 근거·숫자·표현 대조 검토'}"\n${key==='reviewer'?'sandbox_mode = "read-only"\n':''}developer_instructions = ${JSON.stringify(intro+AGENTS[key])}\n`;
 if(tool==='claude'||tool==='cursor')for(const [key,name] of [['writer','ir-writer'],['reviewer','ir-reviewer']])result[`${t.agentPath}/${name}.md`]=`---\nname: ${name}\ndescription: ${key==='writer'?'사업기획과 IR의 작성·보완':'IR의 주장·근거·산식·표현 검토'}\nmodel: inherit\n${key==='reviewer'?(tool==='claude'?'tools: Read, Glob, Grep\n':'readonly: true\n'):''}---\n\n${intro}${AGENTS[key]}`;
 const pointer='# 임팩트 사업기획·IR\n\n00_설정/작업규칙.md, 01_기업정보/기업정보.md와 의사결정.md를 읽고 적용한다. 사업기획·IR 작업에 impact-business-planning 스킬을 사용한다. 기획·작성 역할은 00_설정/에이전트/기획작성.md, 검토 역할은 00_설정/에이전트/검토.md를 따른다. 원본 보존과 대표 결정 범위를 지킨다.\n';
 result[t.rule]=(tool==='cursor'?'---\ndescription: 임팩트 사업기획·IR 공통 작업 규칙\nalwaysApply: true\n---\n\n':tool==='antigravity'?'---\ntrigger: always_on\ndescription: 임팩트 사업기획·IR 공통 작업 규칙\n---\n\n':'')+pointer;
 return result;
}
export function installation(d){const t=TOOLS[d.tool];return `# 설치·설정\n\n선택 도구: ${t.name}\n공식 자료 확인일: 2026-10-11\n\n## 사람이 할 일\n1. 공식 설치 안내에서 설치하고 본인 계정으로 로그인한다.\n2. 압축을 해제하고 회사 작업 폴더를 선택한다.\n3. 패키지 위치와 00_설정/프롬프트/00_설정적용.md를 AI에 전달한다.\n4. 필요한 권한 승인·재시작 후 설정 확인 결과를 읽는다.\n\n## AI가 적용할 경로\n- 스킬: 00_설정/스킬/impact-business-planning → ${t.skillPath}\n- 작업 규칙 등록: 00_설정/도구별설정/${t.name}/${t.rule} → ${t.rule}\n- 에이전트: ${t.agentPath?`00_설정/도구별설정/${t.name}/${t.agentPath} → ${t.agentPath}`:'기획작성.md·검토.md 역할을 순차 적용. 별도 실행 지원은 설치 환경에서 확인.'}\n\n기존 설정은 비교·병합하고 전역 설정은 변경하지 않는다. 현재 버전의 형식과 다르면 공식 문서를 확인해 프로젝트 안에서 조정한다. 실제 스킬 호출·에이전트 실행을 확인하지 못하면 적용 대기로 기록한다. agents/openai.yaml은 스킬 표시 정보이며 작업 에이전트 설정이 아니다.\n\n## 모델·추론\n우선 이용 가능한 모델로 시작한다. 정리·교정은 속도와 비용, 사업 대안·충돌 검토는 추론, 시장 계산은 도구 사용과 재계산 결과를 비교한다. 낮음·보통·높음의 지원과 동작은 모델·제품마다 다르다. 높은 추론이 출처·실적·계산의 정확성을 보증하지 않는다. 모델 변경 때 공식 프롬프트 가이드를 확인하고 같은 입력의 누락·오류·시간·비용을 비교한다.\n\n설치형에서도 클라우드 모델을 쓸 수 있으므로 로그인·자료 전송·권한 조건을 확인한다.\n\n## 공식 안내\n- 설치: ${t.install}\n- 스킬: ${t.docs}\n- 에이전트·규칙: ${t.agents}\n- 모델별 안내: 00_설정/모델별_프롬프트가이드.md\n${Object.values(MODEL_GUIDES).map(g=>`- ${g.name} 프롬프트: ${g.links[0][1]}`).join('\n')}\n`;}
export function packageFiles(d,library){
 const files={};const add=(p,v)=>{files[p]=v;};
 add('시작안내.md',`# ${d.values.company||'내 기업'} AI 사업기획\n\n${d.example?'작성 예시 패키지. 자기 기업의 자료로 대체해 사용한다.\n\n':''}웹 워크북에 쓴 내용과 프롬프트·스킬·에이전트·작업 규칙을 포함한다.\n\n## 작업 순서\n설치·로그인 → 회사 작업 폴더 지정 → 설정 프롬프트 실행 → 사업기획 보완 → IR 제작·검토\n\n설정: 00_설정/프롬프트/00_설정적용.md\n전체 보완: 00_설정/프롬프트/01_사업기획.md\nIR 제작: 00_설정/프롬프트/06_IR기획제작.md\n\n세부 프롬프트는 필요한 항목을 다시 작업할 때 사용한다. 모두 순서대로 복사할 필요는 없다.\n\n웹의 입력은 브라우저에 저장된다. 백업 JSON은 다시 불러올 수 있다. 로컬에서 AI가 수정한 MD는 웹에 자동 동기화되지 않는다.\n`);
 add('설치설정.md',installation(d));add('패키지정보.md',`# 패키지 정보\n\n- 버전: ${VERSION}\n- 입력 버전: ${d.revision}\n- 입력 수정일: ${d.updatedAt||'미기록'}\n- 기준일: ${d.values.asof||'미입력'}\n- 도구: ${TOOLS[d.tool].name}\n- 스킬: 기존 impact-business-planning 5개 파일, 원문 유지\n- 기업정보·프롬프트: 현재 웹 입력 반영\n- 설치 상태: 적용 전 / 설정 프롬프트 실행 후 확인\n`);
 add('00_설정/작업규칙.md',RULES);add('00_설정/모델별_프롬프트가이드.md',modelGuidesMarkdown());
 TASKS.forEach(t=>add(`00_설정/프롬프트/${t.file}.md`,prompt(d,t.id)));
 add('00_설정/에이전트/기획작성.md',AGENTS.writer);add('00_설정/에이전트/검토.md',AGENTS.reviewer);
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
