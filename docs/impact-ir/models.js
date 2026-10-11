export const GUIDE_DATE='2026-10-11';
const claudeBase='https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/';
export const MODEL_GUIDES={
 openai:{name:'GPT',provider:'OpenAI',summary:'Astra·Sol·Luna의 차이와 GPT 추론 모델의 프롬프트 작성 기준.',
  models:[
   ['GPT-6 Astra','어려운 추론·복합 업무','사업 가정 충돌, 투자자 반론, 여러 자료의 정합성 검토','https://developers.openai.com/api/docs/models/gpt-6-astra'],
   ['GPT-6.1 Sol','성능·속도·비용의 균형','기획·조사·원고 작성과 반복 수정','https://developers.openai.com/api/docs/models/gpt-6.1-sol'],
   ['GPT-6 Luna','속도·비용 중심의 좁은 과업','항목 추출, 분류, 정해진 형식으로 정리','https://developers.openai.com/api/docs/models/gpt-6-luna']
  ],
  principles:['목표·제약·산출물을 직접 지정. 긴 역할극보다 완료 조건을 구체화.','추론 과정을 길게 쓰라는 지시보다 결론·확인 근거·산식·미해결 항목을 요청.','예시 없이 먼저 실행하고, 형식·톤이 맞지 않을 때 필요한 예시 추가.'],
  modelNote:'Astra: 확인 질문에서 멈추거나 답변이 길어지면 진행 가능한 범위·대표 결정 범위·출력 분량을 명시. 스킬과 작업 규칙의 상충 지시도 확인. Sol·Luna에는 같은 기준을 출발점으로 적용하고 결과를 비교.',
  effort:'추론 노력(reasoning effort)과 답변 길이는 별도. GPT-6.1 Sol API의 기본값은 medium이며 Astra·6.1 Sol은 none 미지원. 앱에서 제공하는 단계는 모델·제품별 확인.',
  links:[['GPT-6 모델 비교·프롬프트 가이드','https://developers.openai.com/api/docs/guides/latest-model'],['GPT 추론 모델 프롬프트 원칙','https://developers.openai.com/api/docs/guides/reasoning-best-practices#how-to-prompt-reasoning-models-effectively']],
  example:'01_기업정보/기업정보.md와 00_설정/작업규칙.md를 읽고 서비스 정의를 교정해줘.\n\n목표: 업종 비전문가인 투자자가 고객·제공 업무·과금 단위를 이해하는 것.\n범위: 사업 내용은 유지. 표현 교정과 자료 대조는 진행하고, 가격·고객 변경은 대표 결정으로 남겨줘.\n산출물: ① 교정 문장 1개 ② 원문과의 차이 ③ 근거 파일·위치 ④ 미확인 항목.\n완료 조건: 근거 없는 실적을 추가하지 않고, 헤드카피와 본문이 같은 내용을 말하도록 재검토. 핵심 답을 먼저 적고 근거는 짧게 정리해줘.'
 },
 claude:{name:'Claude',provider:'Anthropic',summary:'Fable·Opus·Sonnet·Haiku의 차이와 Claude 전용 프롬프트 가이드.',
  models:[
   ['Claude Fable 5.1','고난도 추론·장기 에이전트 작업','복합 가정·자료를 함께 검토하는 어려운 과제',claudeBase+'prompting-claude-fable-5-1'],
   ['Claude Opus 5.5','장시간 에이전트·지식 작업','여러 자료를 연결하는 기획·원고 작성',claudeBase+'prompting-claude-opus-5-5'],
   ['Claude Sonnet 5.5','속도와 성능의 균형','일상적인 작성·수정·비교',claudeBase+'prompting-claude-sonnet-5-5'],
   ['Claude Haiku 5.5','대량·저지연 처리','자료 분류, 항목 추출, 반복 정리',claudeBase+'prompting-claude-haiku-5-5']
  ],
  principles:['목적과 독자를 함께 설명하고 출력 형식·범위를 명시.','지시·자료·예시를 제목이나 XML 태그로 구분. 예시는 실제 요구 형식과 일치시킴.','긴 문서는 자료·출처를 구분해 배치하고 마지막에 질문 명시. 필요한 원문 위치부터 확인.'],
  modelNote:'역할 설정은 여전히 관점·톤을 지정하는 방법. “투자자 관점의 검토자”처럼 짧게 쓰고 실제 판단 기준을 붙임. 버전별 동작 차이는 표의 모델명을 눌러 해당 프롬프트 가이드 확인.',
  effort:'effort는 thinking뿐 아니라 응답·도구 호출에도 영향. Opus 5.5·Haiku 5.5의 API 기본값은 medium, Fable 5.1·Sonnet 5.5는 high. 지원 단계·기본값은 버전별 확인.',
  links:[['Claude 프롬프트 작성 원칙',claudeBase+'claude-prompting-best-practices'],['Claude 모델 비교','https://platform.claude.com/docs/en/about-claude/models/overview'],['Claude effort·thinking','https://platform.claude.com/docs/en/build-with-claude/effort']],
  example:'역할: 업종 비전문가인 투자자 관점의 IR 편집자.\n\n<context>\n01_기업정보/기업정보.md와 00_설정/작업규칙.md를 읽어줘. 원문과 근거 파일은 구분해서 확인해줘.\n</context>\n<task>\n고객·제공 업무·과금 단위가 드러나도록 서비스 정의 한 문장을 교정해줘. 가격·고객 등 사업 조건은 바꾸지 마.\n</task>\n<output>\n교정 문장 / 원문과의 차이 / 근거 파일·위치 / 미확인 항목\n</output>\n\n모든 표현을 원자료와 대조하고, 없는 실적은 추가하지 마. 헤드카피와 본문이 같은 내용을 말하는지 확인해줘.'
 },
 gemini:{name:'Gemini',provider:'Google',summary:'Pro·Flash·Flash-Lite의 선택 기준과 Gemini 프롬프트·thinking 가이드.',
  models:[
   ['Gemini 3.1 Pro · Preview','복잡한 문제 해결','시장·사업 가정의 대안 검토','https://ai.google.dev/gemini-api/docs/models'],
   ['Gemini 3.8 Flash','복합 에이전트·업무 처리','자료 분석부터 작성·수정까지 연결','https://ai.google.dev/gemini-api/docs/models'],
   ['Gemini 3.5 Flash-Lite','속도·비용 중심의 대량 처리','항목 추출, 분류, 형식 변환','https://ai.google.dev/gemini-api/docs/models']
  ],
  principles:['해야 할 일·제약·출력 형식을 구체적으로 지정.','입력 자료와 지시를 구분하고, 형식이 중요하면 일관된 출력 예시 제공.','문서·이미지·표를 함께 쓸 때 분석할 파일·페이지·영역과 원하는 결과를 명시.'],
  modelNote:'Pro·Flash는 이름만으로 세대 간 성능 순위를 단정하지 않음. 같은 자료와 검토표로 비교. 이미지·표 분석과 실제 시장 사실 확인은 별도 검증.',
  effort:'thinking 설정의 이름·지원 단계는 모델·API별 차이. 공식 표에서 Gemini 3.8 Flash는 low·medium·high, 기본 medium. “high로 해줘”라는 문장만으로 프로그램 설정 변경을 보장하지 않음.',
  links:[['Gemini 프롬프트 작성 전략','https://ai.google.dev/gemini-api/docs/prompting-strategies'],['Gemini 모델 비교','https://ai.google.dev/gemini-api/docs/models'],['Gemini thinking 설정','https://ai.google.dev/gemini-api/docs/thinking']],
  example:'작업: 01_기업정보/기업정보.md와 00_설정/작업규칙.md를 읽고 서비스 정의 한 문장 교정.\n독자: 우리 업종의 전문용어를 모르는 투자자.\n\n제약: 고객·제공 업무·과금 단위 유지. 미확인 값을 사실로 추가하지 말 것.\n출력 형식: 교정 문장 | 원문과의 차이 | 근거 파일·위치 | 미확인 항목.\n문장 형식 예시: “행사 운영사의 다회용기 공급·회수·세척 대행.” 예시의 사업을 내 사업에 적용하지 말고 문장 형식만 참고.\n\n교정 후 헤드카피와 본문을 대조해줘. 첨부 표·이미지를 근거로 사용했다면 해당 페이지와 확인한 수치도 표시해줘.'
 }
};
export const COMMON_GUIDANCE='사업정보·근거·대표 결정·검토 기준은 유지하고, 모델에 맞춰 지시의 구조·예시·분량을 조정한다. 역할 설정만으로 정확성이 보장되지 않으며, 모델을 바꿔도 출처·산식 검증은 생략하지 않는다.';
export function modelGuidesMarkdown(){
 const lines=['# 모델별 프롬프트 가이드','',`공식 자료 확인일: ${GUIDE_DATE}`,'','## 도구·모델·추론 구분','- 도구: Codex·Claude Code·Cursor·Antigravity. 파일·권한·스킬·에이전트의 작업 환경.','- 모델: GPT·Claude·Gemini 및 세부 버전. 실제 이해·생성·추론 수행.','- 추론: 같은 모델에서 작업에 쓰는 노력 조정. 지원 단계는 제품별 차이.','','모델 선택은 사용하는 AI 프로그램에서 설정한다. 이 파일은 모델을 자동 변경하지 않는다. 공식 API 목록과 앱·구독에서 선택 가능한 모델은 다를 수 있다.','',COMMON_GUIDANCE,''];
 for(const g of Object.values(MODEL_GUIDES)){
  lines.push(`## ${g.name} · ${g.provider}`,'',g.summary,'','### 모델 차이',...g.models.map(([name,strength,use,url])=>`- [${name}](${url}): ${strength}. IR 적용 예: ${use}.`),'','### 프롬프트 작성',...g.principles.map(p=>'- '+p),g.modelNote,'','### 추론 설정',g.effort,'','### 공식 가이드',...g.links.map(([label,url])=>`- [${label}](${url})`),'','### 서비스 정의 교정 프롬프트 · IR 적용 예','공식 지침을 IR 작업에 응용한 예시. 공식 프롬프트의 번역·인용 아님.','','```text',g.example,'```','');
 }
 lines.push('## 모델·프롬프트 업데이트','1. 사용 중인 모델의 정확한 이름과 버전, 추론 설정 확인.','2. 해당 모델의 공식 프롬프트·변경 안내 확인.','3. 같은 기업정보·같은 과업으로 기존 결과와 비교.','4. 사실 오류·수치 불일치·요구 누락·모호한 표현·시간·비용 확인.','5. 개선된 지시만 프롬프트·스킬에 반영. 대표 의사결정과 원자료는 보존.','','IR 적용 예는 모델별 우열 평가가 아닌 작업 배분의 출발점. 실제 결과로 조정.');
 return lines.join('\n')+'\n';
}
