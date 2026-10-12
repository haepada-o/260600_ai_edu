import {TOOLS,VERSION} from './content.js?v=3.0.0-beta.2';

const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export const PACKAGE_FOLDERS=[
 ['00_설정','스킬 2종, 역할 4종, 프로그램별 등록 파일, 작업규칙·모델 가이드'],
 ['01_기업정보','기업정보, 사업가정, 의사결정, 웹 입력 원문과 백업'],
 ['02_원본자료','회사소개서·기획안 등 새 자료를 넣을 곳. 기존 자료는 위치만 알려줘도 됩니다.'],
 ['03_조사계산','조사 결과·출처·시장 규모·계산 파일을 저장할 곳'],
 ['04_기획제작','사업계획·IR 원고·페이지 설계·제작 파일을 저장할 곳'],
 ['05_검토기록','설정 확인·검토·수정·진행 상황을 기록할 곳'],
 ['06_배포본','확인한 최종 발표자료·PDF를 저장할 곳'],
 ['07_참조예시','가상 기업 리턴컵의 초기 입력·완성 입력·조사·재무·문장 교정 사례']
];
export const PACKAGE_ROLES=[['기획작성','writer','사업계획과 IR 초안 작성·수정'],['리서치분석','researcher','고객·시장·경쟁 조사, 출처 확인·계산'],['검토','reviewer','문서 오류와 투자자가 우려할 내용 검토'],['디자인','designer','페이지 구성·시각화·제작 결과 확인']];
export function registrationRows(tool){const t=TOOLS[tool];return [
 ['공통 스킬','00_설정/스킬/impact-business-planning/',t.skillPath+'/'],
 ['교육용 스킬','00_설정/스킬/impact-ir-education-sample/',t.skillPath.replace('impact-business-planning','impact-ir-education-sample')+'/'],
 ['에이전트 4종',`00_설정/도구별설정/${t.name}/${t.agentPath}/`,t.agentPath+'/'],
 ['작업규칙',`00_설정/도구별설정/${t.name}/${t.rule}`,t.rule]
 ];}
export function packageTree(tool){return `내기업_AI사업기획/
├── 시작안내.md                   처음 읽는 안내
├── 패키지구성_사용법.md           폴더·설치 경로·사용 순서
├── 최초설정.md                   AI에게 보낼 설정 요청
├── 설치설정.md                   선택한 프로그램의 설치 경로
├── 사용설명서.md / 스킬사용방법.md
├── 작업요청예시.md / 패키지정보.md / 파일목록.json
├── 00_설정/
│   ├── 설정절차.md / 작업규칙.md
│   ├── 스킬/
│   │   ├── impact-business-planning/     공통 스킬
│   │   └── impact-ir-education-sample/   교육용 스킬
│   ├── 에이전트/                        역할 설명 4개
│   ├── 도구별설정/${TOOLS[tool].name}/             실제 등록용 파일
│   └── 모델별_프롬프트가이드.md / 업데이트.md
├── 01_기업정보/
├── 02_원본자료/
├── 03_조사계산/
├── 04_기획제작/
├── 05_검토기록/
├── 06_배포본/
└── 07_참조예시/`;}
export function packageGuideMarkdown(tool='codex'){
 const t=TOOLS[tool];return `# 패키지 구성과 사용법

- 버전: ${VERSION}
- 선택한 프로그램: ${t.name}
- 포함: 스킬 2종, 에이전트 역할 4종, 선택 프로그램용 등록 파일, 작업규칙, 회사정보·검토 양식, 사용설명서, 가상기업 사례
- 다운로드한 파일에는 설정 원본이 들어 있습니다. 최초 설정 후 프로그램이 인식하는 위치에 등록됩니다.

## 1. ZIP을 풀면 보이는 폴더

\`\`\`text
${packageTree(tool)}
\`\`\`

| 폴더 | 넣거나 저장할 내용 |
|---|---|
${PACKAGE_FOLDERS.map(([a,b])=>`| ${a} | ${b} |`).join('\n')}

조사·제작·최종본 폴더에는 안내문 또는 양식이 들어 있습니다. 내 기업의 실제 조사 결과와 완성 IR은 작업하면서 생성합니다. 리턴컵 사례는 07_참조예시에 별도로 들어 있습니다.

## 2. 스킬과 에이전트

- impact-business-planning: 기획 리서치 → 사업 구체화 → 초안 → 검토·재작성 → 투자자 피드백·보완 → 디자인·최종 확인.
- impact-ir-education-sample: 가상기업의 가정·가상 실적을 표시하고 초기 입력과 완성 입력으로 실습합니다. 공통 스킬과 함께 사용합니다.
- 각 스킬은 SKILL.md뿐 아니라 references 폴더와 agents/openai.yaml까지 폴더 전체를 복사합니다. agents/openai.yaml은 스킬 표시 정보이며 별도 에이전트 등록 파일은 아닙니다.

| 역할 원문 | 등록 이름 | 할 일 |
|---|---|---|
${PACKAGE_ROLES.map(([name,id,job])=>`| 00_설정/에이전트/${name}.md | social-invest-ir-${id} | ${job} |`).join('\n')}

대표·고객·투자자·임팩트 관점을 필요한 역할에 적용합니다. 매번 네 역할을 동시에 실행할 필요는 없습니다. 별도 에이전트를 지원하지 않으면 한 AI가 역할별로 순서대로 작업하고 그 사실을 기록합니다.

## 3. 설정 후 사용되는 경로 — ${t.name}

아래 경로는 AI에서 선택한 ‘회사 작업 폴더’를 기준으로 합니다. ZIP 안의 원본을 그대로 두는 것과 설치 경로에 등록하는 것은 별도 단계입니다.

| 구분 | ZIP 안의 원본 | 회사 작업 폴더 안의 설치 위치 |
|---|---|---|
${registrationRows(tool).map(row=>'| '+row.join(' | ')+' |').join('\n')}

에이전트는 social-invest-ir-writer, researcher, reviewer, designer 이름의 파일 4개입니다. Codex는 .toml, 다른 선택 도구는 .md 파일을 제공합니다. 이름 앞의 social-invest-ir- 접두어는 모두 유지합니다. 점(.)으로 시작하는 설정 폴더는 파일 탐색기에서 숨김 폴더일 수 있습니다.

이 패키지는 회사 폴더 안에 설치하는 경로를 안내합니다. 사용자가 개인 기본 폴더를 지정했다면 그 경로를 우선합니다. 기존 같은 이름의 스킬을 덮어쓰거나 여러 위치에 중복 설치하지 말고 차이를 확인해 병합합니다. 교육용 스킬은 별도 이름·폴더로 유지합니다.

Codex 공식 문서의 개인 공통 스킬 경로는 ~/.agents/skills/, 개인 에이전트 경로는 ~/.codex/agents/입니다. 이미 다른 경로에서 사용 중이면 실제 인식 여부를 먼저 확인하고 임의로 옮기지 않습니다. 다른 도구의 개인 설치 경로는 설치한 버전에서 확인합니다.

## 4. 사용하는 순서

1. 사용할 프로그램을 선택하고 전체 ZIP을 받습니다. 웹에 입력한 기업정보는 전체 패키지에 포함됩니다. ‘빈 양식 ZIP’은 웹 입력을 포함하지 않습니다.
2. AI 프로그램에서 회사 작업 폴더를 선택합니다. 실습은 실제 회사자료와 분리한 폴더를 쓰세요.
3. ZIP 위치와 최초설정.md의 요청을 AI에게 전달합니다. 직접 파일을 하나씩 옮길 필요는 없습니다.
4. AI가 기존 자료·설정을 보존하면서 파일을 배치하고 스킬과 에이전트를 등록합니다. 설정확인_양식을 참고해 05_검토기록/설정확인.md에 설치 경로·인식·실행 결과·남은 조치를 남깁니다.
5. 회사소개서 등 사용할 자료와 원하는 결과를 알려줍니다. 기존 자료를 옮기거나 웹에 다시 입력할 필요는 없습니다.
6. 초안을 확인하고 고칠 부분을 말합니다. AI가 기획·근거·숫자·원고를 함께 수정하고 다음 단계를 안내합니다.

### 첫 요청

“impact-business-planning 스킬로 회사자료를 읽고, 고객과 시장 조사부터 사업계획과 IR 초안까지 작성해줘. 중요한 미정은 선택지를 제안하고, 이미 답한 내용은 다시 묻지 마.”

### 가상기업 실습

“impact-ir-education-sample 스킬도 함께 사용해 07_참조예시/리턴컵의 초기 입력으로 진행해줘. 미정은 교육용 가정으로 구체화하고 가정과 외부 사실을 구분해줘.”

### 수정과 재개

“3쪽 제목이 모호해. 누가 쓰는 서비스인지 알 수 있게 고쳐줘. 같은 문제가 생기지 않도록 교정 기준도 기록해줘.”

“기업정보·의사결정·작업현황·교정 기록을 읽고 미완료 단계부터 이어가줘.”

## 5. 설치 결과에서 확인할 것

- 두 스킬의 실제 경로와 프로그램의 인식 여부
- 네 에이전트의 등록 경로, 실제 별도 실행 여부 또는 순차 역할 적용 여부
- 작업규칙 병합 위치와 기존 자료·설정의 보존 여부
- 검색·원문 열기·계산·발표자료 제작·출력 확인에 사용할 도구
- 완료한 시험, 미확인 항목, 필요한 로그인·권한·재시작, 다음 작업

파일이 있다는 사실만으로 실제 실행까지 확인한 것은 아닙니다. 이번 배포는 파일 구성·ZIP·웹 다운로드 검증을 거쳤으며 각 사용자 환경의 실제 호출은 최초 설정에서 확인합니다.

## 6. 별도로 필요한 것

AI 프로그램·로그인·모델 이용 권한은 직접 준비합니다. 검색·PPTX/PDF 제작·렌더 도구는 사용하는 프로그램에서 확인합니다. 별도 제작 프로그램이나 유료 모델 이용권이 ZIP에 들어 있지는 않습니다.

decision-ready-business-planning, business-evidence-research, business-market-modeling, business-investment-review, business-submission-audit는 선택 연결 스킬이며 이 ZIP에 개별 스킬로 포함하지 않습니다. 없어도 공통 스킬의 참고문서로 진행하도록 구성했습니다.

## 공식 설치 참고

- ${t.name} 스킬: ${t.docs}
- ${t.name} 에이전트: ${t.agents}
- Codex 스킬 경로: https://learn.chatgpt.com/docs/build-skills
- Codex 에이전트 경로: https://learn.chatgpt.com/docs/agent-configuration/subagents
- 확인일: 2026-10-12
`;}

export function packageContentsView(tool='codex'){
 const t=TOOLS[tool];return `<div class="package-contents"><p><strong>스킬 2종 · 에이전트 역할 4종 · ${esc(t.name)} 등록 파일</strong>이 들어 있습니다. 전체 폴더 안내와 사용법도 ZIP의 <code>패키지구성_사용법.md</code>에 포함됩니다.</p><pre class="folder-tree">${esc(packageTree(tool))}</pre><h3>폴더별 사용법</h3><table><thead><tr><th>폴더</th><th>내용</th></tr></thead><tbody>${PACKAGE_FOLDERS.map(([a,b])=>`<tr><td><code>${esc(a)}</code></td><td>${esc(b)}</td></tr>`).join('')}</tbody></table><h3>설정 후 설치 위치 — ${esc(t.name)}</h3><p>아래는 회사 작업 폴더 기준입니다. AI에게 최초 설정을 요청하면 ZIP의 원본을 이 위치에 등록합니다. 기존 설정은 비교해서 합칩니다.</p><table><thead><tr><th>구분</th><th>설치 위치</th></tr></thead><tbody>${registrationRows(tool).map(([label,source,target])=>`<tr><td>${esc(label)}</td><td><code>${esc(target)}</code></td></tr>`).join('')}</tbody></table><p>개인 기본 설치 폴더를 지정했다면 해당 경로를 우선합니다. 교육용 스킬은 별도 폴더로 유지합니다. 스킬은 참고문서를 포함한 폴더 전체를 설치합니다.</p><p class="status-note">조사 결과와 완성 IR은 작업하면서 만들어집니다. AI 프로그램·모델 이용권·발표자료 제작 도구는 별도로 준비해야 합니다.</p></div>`;
}
