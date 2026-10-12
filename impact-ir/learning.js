import {STAGES, stagePrompt} from './stages.js?v=3.0.0-beta.2';
import {copyBlock,escapeHtml as esc} from './quickstart.js?v=3.0.0-beta.2';

export const IR_FLOW=['소개','문제','해결책','시장','사업모델','검증 지표','경쟁 우위','성과 마일스톤','팀','재무·투자 요청'];
export function learningView(selected='writing'){
 const stage=STAGES.find(s=>s.id===selected)||STAGES[4];
 return `<div class="page-head"><div><p class="eyebrow">PLAN → WRITE → REVIEW</p><h1>IR 작성·제작</h1><p>고객과 시장을 조사하고 사업계획을 정리한 뒤, 투자자에게 보여줄 IR을 작성합니다.</p></div><a class="btn" href="#cases">작성 사례 보기</a></div>
 <div class="content-pad"><section class="panel"><h2>사업계획부터 IR 작성까지</h2><p>누구에게 무엇을 제공하고, 왜 우리 제품·서비스를 선택하는지 정리하세요. 이미 자료가 있다면 초안을 먼저 쓰고, 부족한 내용은 질문과 조사로 채웁니다.</p><div class="flow-strip">${IR_FLOW.map((s,i)=>`<span><small>${i+1}</small> ${s}</span>`).join('')}</div><p class="status-note">IR에는 보통 이 10가지 내용이 들어갑니다. 사업에 맞게 순서와 페이지 수를 조정하세요.</p></section>
 <div class="stage-layout below-gap"><nav class="stage-nav" aria-label="작업 단계">${STAGES.map((s,i)=>`<a href="#prompts/${s.id}" class="${stage.id===s.id?'active':''}" ${stage.id===s.id?'aria-current="step"':''}><span>${String(i).padStart(2,'0')}</span>${esc(s.title)}</a>`).join('')}</nav><section class="panel stage-detail"><p class="eyebrow">${esc(stage.role)}</p><h2>${esc(stage.title)}</h2><dl class="guide-dl"><dt>준비할 자료</dt><dd>${esc(stage.input)}</dd><dt>사용할 기능</dt><dd>${esc(stage.tools)}</dd><dt>확인할 결과</dt><dd>${esc(stage.result)}</dd></dl>${copyBlock('stage-request',stagePrompt(stage.id),'이 단계 요청 복사')}<div class="next-step"><b>다음 단계</b><p>${esc(stage.next)}</p></div><div class="actions"><a class="btn" href="#models/stage/${stage.id}">추천 모델·요청 방법</a><a class="btn" href="#review">피드백·재작성</a></div></section></div></div>`;
}

export const FEEDBACK_REQUESTS={
 document:'지정한 원고와 피드백을 대조해줘. 대상 위치·관찰·근거를 확인하고 타당한 부분은 실제 원고와 관련 자료에 수정해줘. 미채택 지적은 이유를 남겨줘. 변경된 숫자·본문·제목·출처를 재검사하고 남은 결정과 다음 행동을 알려줘.',
 investment:'투자자 유형과 투자 단계에 맞춰 핵심 보류 사유를 평가해줘. 판단을 바꿀 근거와 기획·조사·계산·현장 검증 과제로 연결하고 가능한 부분을 실제 보완해줘. 수정 후 같은 기준으로 재평가해줘. AI 모의 검토와 실제 투자자 의견은 구분해줘.',
 learning:'반복 오류 사례와 원출력을 보고 입력 부족·지침의 모호함·미적용·도구 제약·모델 오류를 구분해줘. 적용 범위·예외·교정 예를 제안하고 요청 범위의 프로젝트 교정 기록에 반영해줘. 기존 실패·정상·다른 업종 또는 새 대화 사례로 재시험하고 스킬 개정 상태와 미검증 항목을 알려줘. 한 회사 조건을 공통 규칙으로 일반화하지 마.'
};
export function feedbackGuide(){return `<section class="panel"><h2>피드백을 반영해 다시 작성하기</h2><p>고칠 부분과 원하는 방향을 적고, 아래에서 맞는 요청을 복사해 AI에게 보내세요.</p><p class="status-note">예: “3쪽 제목이 모호해. 누가 쓰는 서비스인지 알 수 있게 고쳐줘.”</p><div class="flow-strip"><span>피드백 확인</span><span>필요한 자료 보완</span><span>문서 수정</span><span>수정 결과 확인</span></div>${Object.entries(FEEDBACK_REQUESTS).map(([id,text],i)=>`<details class="below-gap"><summary>${['문장이나 디자인을 고치고 싶어요','투자자가 지적한 사업 내용을 보완하고 싶어요','AI가 같은 실수를 반복해요'][i]}</summary>${copyBlock('feedback-'+id,text,'수정 요청 복사')}</details>`).join('')}<p class="status-note">AI가 제안한 의견과 실제 고객·투자자가 준 의견을 구분해 남기세요. 모든 지적을 받아들이기보다 근거를 확인해 반영합니다.</p></section>`;}

export const CASES=[
 {title:'초기 기업정보',file:'초기입력.md',status:'가상 입력',text:'다회용기 범위·청구 기준·공급 수량과 아직 미정인 원가 기준을 확인합니다.'},
 {title:'리서치 후 기획',file:'03_리서치후_기획정리.md',status:'기존 조사·기획 사례',text:'공개 근거가 어떤 가설을 지지하고, 무엇을 아직 증명하지 못하는지 봅니다.'},
 {title:'넓은 시장 기회',file:'09_시장기회_리서치정리.md',status:'출처 포함',text:'산업 기회·서비스 확장 영역·첫 진입 고객을 구분합니다.'},
 {title:'투자 단계까지 구체화한 입력',file:'02_기업정보_완성입력.md',status:'교육용 가정 포함',text:'가상의 기업정보·실적·목표를 채운 입력을 비교합니다. 실제 기업의 성과가 아닙니다.'},
 {title:'강점과 성과 마일스톤',file:'10_핵심가설_강점설계_마일스톤.md',status:'기획 사례',text:'고객이 선택할 가설을 정하고 강점·검증·달성 성과로 연결합니다.'},
 {title:'사업모델·재무·투자 계획',file:'04_사업모델_재무_투자계획.md',status:'가정 계산',text:'서비스·돈의 흐름과 핵심 수치를 보고 상세 산식은 내려받은 패키지에서 확인합니다.'}
];
export function casesView(){return `<div class="page-head"><div><p class="eyebrow">RETURN CUP · FICTIONAL CASE</p><h1>아이디어에서 투자 검토까지</h1><p>가상 기업 리턴컵의 초기 입력·조사·구체화 사례입니다. 내 기업정보와 별도로 열립니다.</p></div><a class="btn" href="#prompts/research">내 사업에 적용</a></div><div class="content-pad"><p class="callout">이 자료는 기존에 작성한 교육 사례입니다. 새 v3 스킬의 독립 실행 결과로 표시하지 않습니다. 외부 출처와 가상 기업 설정을 구분해 읽습니다.</p><div class="case-grid">${CASES.map((c,i)=>`<section class="panel"><span class="pill">${c.status}</span><h2>${i+1}. ${c.title}</h2><p>${c.text}</p><button class="btn" data-case-file="07_참조예시/리턴컵/${c.file}">사례 원문 보기·저장</button></section>`).join('')}</div><section class="panel below-gap"><h2>문장과 페이지는 어떻게 교정하나요?</h2><p>제목의 모양보다 ‘무슨 사업이며, 고객에게 어떤 가치와 사회·환경적 변화를 만드는가’를 확인합니다. 사업이 모호하면 기획부터 보완하고 본문의 답에서 제목을 정합니다.</p><button class="btn" data-case-file="07_참조예시/문장과페이지_교정예시.md">교정 전후 보기</button></section><section class="panel below-gap"><h2>실습에서 더 확인할 것</h2><p>새 스킬로 작성→검토→재작성→투자 보완을 실행한 원출력과 실제 발표물의 디자인 검증은 별도 시험 기록으로 확인합니다. 문서·설정 파일을 제공한 것과 실제 역할 실행은 구분합니다.</p><button class="btn" data-case-file="07_참조예시/검증시나리오.md">검증 시나리오 보기</button><a class="btn" href="#review">피드백 기록</a></section></div>`;}
