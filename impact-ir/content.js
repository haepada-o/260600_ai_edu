export const VERSION = '2.1.0';
export const SCHEMA = 'bsquare-impact-ir-workbook-v2';
export const STATES = ['대표 입력','자료 확인','가정','목표','미확인'];
const field=(id,label,hint,example,type='textarea')=>({id,label,hint,example,type});
export const SECTIONS = [
 {id:'company',title:'기업정보',question:'어떤 사업을, 어느 단계에서 준비하고 있나요?',task:'planning',checks:['현재 제공 상태와 앞으로의 계획 구분','자료 기준일과 이번에 결정할 문제 명시'],fields:[
  field('company','기업명','예비창업 단계라면 사업명','리턴컵 (작성 예시)','text'),
  field('asof','자료 기준일','실적·가격·팀 정보를 확인한 날짜','2026-10-11','date'),
  field('stage','사업 단계','아이디어, 시제품, 유료 판매 등 현재 상태','서비스 설계 단계. 유료 계약·매출 미확인.'),
  field('goal','이번 작업의 목적','IR 작성에 앞서 해결할 질문','행사 운영사가 구매할 서비스 범위와 가격을 구체화하고, 초기 투자 미팅용 IR 작성.'),
  field('constraints','유지할 방향과 제약','미션, 변경할 수 없는 조건, 보유 자원','일회용기 폐기 감축. 회수·세척 품질과 사업 수익성 동시 확인.')
 ]},
 {id:'customer',title:'고객·문제',question:'누가 불편을 겪고, 누가 비용을 지불하나요?',task:'competition',checks:['사용자·결제자·수혜자 구분','문제의 빈도와 현재 비용 확인','구매 의사와 실제 계약 구분'],fields:[
  field('buyer','결제자와 구매 결정권자','업종·규모·담당 업무까지 구체적으로','지역 축제·행사 운영사. 행사 운영 예산을 집행하는 담당자.'),
  field('user','실제 사용자','돈을 내는 사람과 다르면 별도 작성','행사장 식음료 판매자와 방문객.'),
  field('problem','고객의 문제','언제 발생하며 어떤 시간·비용·위험이 생기는지','행사마다 용기 구매·배포와 쓰레기 수거를 따로 관리. 현장 처리 비용과 인력 부담.'),
  field('alternatives','현재 해결 방법','경쟁사뿐 아니라 자체 처리·수작업 포함','일회용기 구매·폐기, 자체 세척, 외부 세척업체 위탁.'),
  field('purchaseEvidence','구매 이유와 확인 자료','인터뷰·견적·계약 등을 실제 확인 범위로 작성','가설: 운영사가 용기 공급·회수·세척을 묶어서 맡기려 함. 구매 의사·가격 수용성 확인 필요.')
 ]},
 {id:'service',title:'서비스',question:'무엇을 어떤 방식으로 제공하나요?',task:'service',checks:['서비스명만으로 끝내지 않고 제공 업무 명시','현재 제공 기능과 개발 예정 기능 구분','고객이 받는 결과물 확인'],fields:[
  field('offer','제공 제품·서비스','고객과 제공 업무가 보이는 한 문장','행사 운영사의 다회용기 공급·회수·세척 대행.'),
  field('scope','제공 범위와 제외 범위','포함 업무, 수량, 지역, 납기 등','용기 공급, 행사 후 회수, 세척, 처리량 보고. 현장 인력 배치는 별도 협의.'),
  field('process','서비스 제공 과정','신청부터 전달까지의 순서','운영사 수량 협의 → 용기 공급 → 행사 후 회수 → 세척 → 처리량 보고.'),
  field('result','고객이 받는 결과와 변화','시간·비용·업무 변화와 확인 방법','용기 조달과 회수·세척 업무를 한 계약으로 관리. 절감 시간·비용은 행사 전후 비교 예정.'),
  field('difference','선택받을 이유','같은 업무·비교 기준으로 설명','공급·회수·세척의 통합 운영을 제안. 비용·납기·회수율은 기존 대안과 비교 필요.')
 ]},
 {id:'market',title:'시장·경쟁',question:'어느 고객부터 접근하고, 얼마나 확보할 수 있나요?',task:'market',checks:['시장 범위의 상품·지역·기간 일치','TAM·SAM·SOM의 포함 관계 확인','목표 고객 수와 영업·제공 역량 연결'],fields:[
  field('marketScope','상품·고객·지역·기간','어떤 거래의 규모를 계산할지','다회용기 공급·회수·세척 / 행사 운영사 / 부산·경남부터 / 연간 기준.'),
  field('tam','TAM: 전체 관련 수요','고객 수·구매량·단가·산식과 원출처','전국 행사 용기 수요의 연간 구매·처리량과 단가 조사 필요. 수치 미확인.'),
  field('sam','SAM: 제공 가능한 시장','서비스 지역·대상·공급 제약 적용','부산·경남의 운송 가능 거리 내 행사로 제한. 대상 행사 목록 조사 필요.'),
  field('som','SOM: 확보 가능한 시장','접촉량·전환율·도입 시점·제공 역량으로 계산','목표 고객 수를 영업 접근량·계약 전환·월 처리 역량과 대조해 산정 예정.'),
  field('channels','고객 확보 경로','누구에게 어떻게 접근하고 계약하는지','지역 행사 운영사 목록 확보 → 담당자 면담 → 견적·유료 시험 → 반복 계약.'),
  field('competitors','비교 대상과 기준','동일한 고객 업무를 기준으로 비교','일회용기 구매, 자체 세척, 외부 대행을 비용·업무 범위·납기·처리 역량으로 비교.')
 ]},
 {id:'finance',title:'매출·원가',question:'어떤 단위로 과금하고, 얼마가 남나요?',task:'market',checks:['매출·거래액·투자금 구분','판매량과 처리 역량 대조','단가·기간·단위와 직접 원가 누락 확인'],fields:[
  field('pricing','가격과 과금 단위','누가 어떤 단위에 얼마를 지불하는지','계산 가정: 행사 운영사가 용기 1개 처리당 500원 지불.'),
  field('sales','매출 실적 또는 목표·산식','실적과 목표를 분리하고 기간 표기','월 목표 가정: 10곳 × 월 2회 × 1,000개 × 500원 = 월 1,000만원.'),
  field('cost','직접 원가와 고정비','판매할 때 늘어나는 비용과 매달 드는 비용','직접 원가 가정: 1개 350원, 월 20,000개 = 700만원. 고정비 별도 산정 필요.'),
  field('capacity','현재 제공 역량','인력·시설·납기 기준 최대 제공량','월 15,000개 처리 가능 가정. 목표 20,000개 대비 5,000개 부족.'),
  field('cash','보유 현금·지출·유입','산정 기간, 현금 부족 시점, 확정·예정 구분','보유 현금, 설비·운송비, 월 고정비, 대금 회수 조건 입력 필요.')
 ]},
 {id:'impact',title:'임팩트',question:'사업 활동이 누구에게 어떤 변화를 만드나요?',task:'impact',checks:['활동량·직접 산출·실제 변화 구분','기준선·기간·측정 방법 확인','다른 영향 요인과 부작용 검토'],fields:[
  field('socialProblem','사회·환경 문제와 수혜자','어떤 대상의 현재 상태를 바꾸려는지','행사 현장의 일회용기 폐기물. 지역 환경과 행사 운영 주체에 영향.'),
  field('impactPath','활동 → 산출 → 변화','각 단계가 연결되는 이유와 조건','다회용기 공급·회수 → 반복 사용 횟수 증가 → 일회용기 폐기 감축 기대. 실제 대체량 확인 필요.'),
  field('indicators','측정 지표·단위·산식','대표 지표 1~3개와 수집 방법','회수율 = 회수 수량 / 공급 수량. 반복 사용 횟수, 실제 대체 일회용기 수량 측정.'),
  field('impactValues','기준선·현재값·목표','각 값의 측정 기간과 상태 구분','기준선·현재값 미측정. 목표는 시범 운영 설계 후 설정.'),
  field('measurement','자료 수집·담당·주기','어떤 기록을 누가 언제 확인하는지','행사별 공급·회수 기록과 세척 기록 대조. 담당자와 기록 양식 확정 필요.'),
  field('tradeoffs','성장·미션·부작용','규모가 커질 때 생기는 비용과 충돌','운송 거리·세척 자원 사용·용기 분실을 함께 검토. 공급량 증가를 탄소 감축 실적으로 단정하지 않음.')
 ]},
 {id:'execution',title:'실행·자금',question:'다음 목표까지 어떤 역량과 자금이 필요한가요?',task:'planning',checks:['자금 사용과 달성 목표 연결','필요 투자금과 기업가치 산정 구분','팀·파트너의 계약·확정 상태 확인'],fields:[
  field('team','팀·파트너·보유 자원','실제 역할, 경험, 확보한 자원','운영·영업·세척 담당 역할과 확보 상태 작성 필요.'),
  field('milestones','다음 목표와 완료 기준','기간·결과물·수치·선행조건','유료 시험 운영 후 단위 원가·회수율·재주문 의사 확인. 기간과 완료 기준 협의 필요.'),
  field('funding','필요 자금과 산정 근거','지출·유입·보유 현금·여유자금의 관계','목표 기간의 설비·인력·운영비에서 확보 현금과 유입을 차감해 산정. 금액 미정.'),
  field('fundUse','사용처와 투자 후 변화','어떤 제약을 해소해 무엇을 달성하는지','처리 역량 확대와 고객 확보에 필요한 비용 검토. 목표 물량·매출과 연결.'),
  field('valuation','희망 기업가치와 협의 근거','비교 사례·성과·위험. 투자 요청액과 구분','미정. 비교 가능한 투자사례·검증 성과·사업 위험 확인 후 협의 범위 설정.')
 ]},
 {id:'ir',title:'IR 방향',question:'누가 읽고, 어떤 판단을 하게 할 자료인가요?',task:'ir',checks:['투자자·미팅 목적·분량 확인','헤드카피와 본문 근거 일치','핵심 주장과 상세 근거의 위치 구분'],fields:[
  field('investor','대상 투자자','하우스·펀드·포트폴리오의 공개자료','초기 임팩트 투자사 검토. 하우스·펀드·포트폴리오 조사 필요.'),
  field('format','미팅 목적·발표 방식·분량','무대 피칭, 1:1, 서면 검토 등','첫 1:1 미팅용. 후속 검토에 필요한 고객·서비스·사업성·임팩트 제시. 분량 미정.'),
  field('traction','본문에 제시할 핵심 근거','계약·매출·고객 사용·측정 결과의 원자료','현재 유료 계약·매출·환경 효과 실적 미확인. 서비스 범위와 계산 가정을 구분해 제시.'),
  field('headline','가장 먼저 전달할 내용','고객·상품·구매 이유가 보이는 문장','행사 운영사의 다회용기 공급·회수·세척을 한 번에 수행.'),
  field('appendix','어펜딕스에 연결할 자료','상세 산식, 경쟁 비교, 측정 방법 등','단위 원가 계산, 영업 대상 목록, 대안별 비교표, 회수율 측정 설계.'),
  field('risks','남은 결정과 검증 과제','검증 결과에 따라 바뀔 사업 조건','처리 역량 확대 비용, 구매 의사, 가격 수용성, 회수율 확인.')
 ]}
];
export const TASKS=[
 {id:'setup',title:'작업환경 설정',file:'00_설정적용',sections:[],output:'05_검토기록/설정확인.md',detail:'패키지 배치, 스킬·에이전트 적용, 인식 확인'},
 {id:'planning',title:'사업기획 전체 보완',file:'01_사업기획',sections:SECTIONS.map(s=>s.id),output:'04_기획제작/사업기획.md',detail:'기업정보 → 조사·계산 → 사업성·임팩트 검토'},
 {id:'service',title:'서비스 구체화',file:'02_서비스구체화',sections:['company','customer','service'],output:'04_기획제작/서비스정의.md',detail:'고객·제공 범위·구매 이유 구체화'},
 {id:'competition',title:'고객·경쟁사 조사',file:'03_고객경쟁조사',sections:['customer','service','market'],output:'03_조사계산/경쟁비교.md',detail:'같은 고객 업무의 대안 비교와 원출처 확인'},
 {id:'market',title:'시장·매출·자금 산정',file:'04_시장매출자금산정',sections:['company','market','finance','execution'],output:'03_조사계산/시장매출자금.md',detail:'입력·산식·기간·단위·제공 역량 검토'},
 {id:'impact',title:'사업성·임팩트 검토',file:'05_사업성임팩트검토',sections:['customer','service','finance','impact','execution'],output:'05_검토기록/사업성임팩트.md',detail:'수익 구조와 변화의 경로·측정·부작용 검토'},
 {id:'ir',title:'IR 기획·제작',file:'06_IR기획제작',sections:SECTIONS.map(s=>s.id),output:'04_기획제작/IR_원고.md',detail:'구성안·헤드카피·본문·시각화·PPT·PDF'},
 {id:'loop',title:'검토·수정 반복',file:'07_자동검토수정',sections:SECTIONS.map(s=>s.id),output:'05_검토기록/오류와_다음행동.md',detail:'오류별 수정과 변경 항목 재검토'},
 {id:'investor',title:'투자자별 맞춤 수정',file:'08_투자자맞춤화',sections:['company','market','impact','execution','ir'],output:'04_기획제작/투자자별_수정안.md',detail:'공개자료를 바탕으로 강조점·순서 조정'},
 {id:'audit',title:'제출 전 검토',file:'09_제출전검토',sections:SECTIONS.map(s=>s.id),output:'05_검토기록/제출전검토.md',detail:'원고·계산·PPT·PDF의 사실·수치·표현 대조'}
];
export const TOOLS={
 codex:{name:'Codex',install:'https://developers.openai.com/codex/cli',docs:'https://learn.chatgpt.com/docs/build-skills',agents:'https://learn.chatgpt.com/docs/agent-configuration/subagents',skillPath:'.agents/skills/impact-business-planning',rule:'AGENTS.md',agentPath:'.codex/agents',note:'앱·CLI에서 회사 폴더의 자료와 결과물 작업. 프로젝트 스킬·에이전트 설정 포함.'},
 claude:{name:'Claude Code',install:'https://code.claude.com/docs/en/overview',docs:'https://code.claude.com/docs/en/skills',agents:'https://code.claude.com/docs/en/sub-agents',skillPath:'.claude/skills/impact-business-planning',rule:'CLAUDE.md',agentPath:'.claude/agents',note:'터미널·편집기에서 파일 작업. 프로젝트 스킬·서브에이전트 설정 포함.'},
 cursor:{name:'Cursor',install:'https://cursor.com/downloads',docs:'https://cursor.com/docs/skills',agents:'https://cursor.com/docs/subagents',skillPath:'.cursor/skills/impact-business-planning',rule:'.cursor/rules/impact-ir.mdc',agentPath:'.cursor/agents',note:'편집기에서 파일·변경 내용 확인. 프로젝트 규칙·스킬·서브에이전트 설정 포함.'},
 antigravity:{name:'Antigravity',install:'https://www.antigravity.google/download',docs:'https://www.antigravity.google/docs/skills/',agents:'https://www.antigravity.google/docs/rules/',skillPath:'.agents/skills/impact-business-planning',rule:'.agents/rules/impact-ir.md',agentPath:null,note:'프로젝트 규칙·스킬 설정 포함. 기획·검토 역할 문서를 순차 적용하고, 별도 에이전트 지원은 설치 환경에서 확인.'}
};
export const REVIEW_FIELDS=[
 field('target','검토 자료·버전','파일명과 검토일','IR_원고_v01.md / 2026-10-11'),
 field('findings','발견한 오류와 근거','위치·문제·근거·수정안','서비스 페이지의 고객 확보 문구: 계약 자료 없음 → 타깃 가설로 수정'),
 field('corrected','수정·재검토 결과','실제로 바뀐 내용과 확인 결과','월 목표 물량과 처리 역량 대조. 월 5,000개 부족 확인.'),
 field('decisions','대표가 결정할 사항','선택지·판단 이유·결정 상태','가격·우선 고객·설비 확대 여부 결정 필요.'),
 field('pending','현장 검증 과제','대상·방법·기간·담당·판정 기준','행사 운영사 구매 의사와 가격 수용성 확인 계획 수립.')
];
export const RULES=`# 회사 작업 규칙

## 자료와 결정
- 01_기업정보/기업정보.md, 사업가정.md, 의사결정.md를 읽고 기준일·버전을 확인한다. 웹 입력은 대표가 적은 내용이며 자료 확인과 동일하지 않다.
- 확인 사실·계산·가정·목표·미확인을 구분한다. 계약·고객·매출·인터뷰·효과를 만들지 않는다.
- 원본과 웹워크북_원문.md는 보존한다. AI 제안은 대표의 채택 전까지 사업가정에 기록한다.
- 고객·가격·예산·투자 조건·미션의 변경은 대표가 결정한다. 조사·계산·원고 수정은 요청 범위에서 이어간다.

## 기획·표현
- 고객·상품·제공 업무·구매 이유를 비즈니스 용어로 설명한다. 투자자가 업종 전문용어를 안다고 가정하지 않는다.
- 헤드카피는 본문의 답을 직관적으로 표현한다. 메뉴·작업 제목은 명확한 기능명으로 쓴다.
- '혁신적 플랫폼', '성장 기반' 같은 추상어만 남기지 않는다. '그래서 무엇을 제공하는가'에 답한다.
- 본문에는 핵심 주장·대표 근거·중요 조건, 어펜딕스에는 상세 계산·측정·비교 자료를 연결한다. 10장을 고정하지 않는다.
- 내부 검토 메모·작성 지시·불필요한 변명은 발표 본문에서 제거한다. 출처·가정·위험 조건은 보존한다.

## 저장·검토
- 02_원본자료는 읽기 전용으로 취급한다. 작업본은 03_조사계산·04_기획제작, 검토 기록은 05_검토기록에 저장한다.
- 파일명은 주제_YYYYMMDD_v01 형식. 같은 파일이 있으면 변경 내용 확인 후 다음 버전으로 저장한다.
- 주장마다 출처·기준일·단위·확인 범위를 기록한다. 수치는 입력·산식·기간과 대조한다.
- 작성 → 검토 → 원인별 수정 → 변경 항목 재검토를 수행한다. 새 근거가 없으면 미해결 과제를 남기고 해당 반복을 종료한다.
- 실제 고객 구매·사용·효과는 문장 수정으로 검증 완료 처리하지 않는다.
- 최종 PPT·PDF를 열어 글자·차트·출처·숫자·넘침을 확인한다. 외부 제출은 대표 승인 후 진행한다.
`;
export const AGENTS={
 writer:`# 기획·작성 에이전트

## 역할
기업정보와 원자료를 읽고 사업 기획·IR 원고를 작성한다. impact-business-planning 스킬과 00_설정/작업규칙.md를 먼저 적용한다.

## 수행
고객·서비스 정의 → 필요한 경쟁 조사·계산 → 사업성·임팩트 보완 → 독자의 질문별 구성 → 본문·시각화 → 파일 제작을 연결한다. 자료가 빠졌으면 가능한 작업부터 진행하고, 중요한 사업 조건은 대안과 이유를 제시해 대표에게 남긴다.

## 출력
산출물 경로·사용한 입력 버전·핵심 주장과 근거·변경 사항·검토 요청 항목을 검토 에이전트에 전달한다. 승인되지 않은 제안을 기업 실적으로 저장하지 않는다.
`,
 reviewer:`# 검토 에이전트

## 역할
원고를 원자료·계산·출력 파일과 대조한다. impact-business-planning의 검토 기준과 00_설정/작업규칙.md를 읽는다.

## 수행
전달력·사업성·임팩트·투자자 적합성을 구분한다. 주장·출처·기간·단위·산식·도표·헤드카피의 일관성을 확인한다. 없는 증거는 미확인으로 남긴다.

## 출력과 권한
위치 / 오류·보류 이유 / 근거 / 수정안 / 복귀 단계 / 대표 결정·현장 검증 필요를 반환한다. 원고·사업 조건을 직접 확정하지 않는다. 외부 연락·제출은 수행하지 않는다. 독립 실행을 지원하지 않으면 같은 에이전트가 검토 단계로 전환했음을 표시한다.
`
};
