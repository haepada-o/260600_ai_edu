import {MODEL_GUIDES,GUIDE_DATE,COMMON_GUIDANCE} from './models.js?v=2.3.0';
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function modelGuideLinks(){return `<div class="link-list">${Object.entries(MODEL_GUIDES).map(([id,g])=>`<a href="#models/${id}">${g.name} 가이드 →</a>`).join('')}</div>`;}
export function modelGuideView(){
 const requested=location.hash.split('/')[1];const id=Object.hasOwn(MODEL_GUIDES,requested)?requested:'openai';const g=MODEL_GUIDES[id];
 return `<div class="page-head"><div><p class="eyebrow">MODEL & PROMPT</p><h1>모델별 프롬프트 가이드</h1><p>사용 중인 모델의 작성 기준·추론 설정·공식 문서를 확인합니다.</p></div><div class="actions"><button class="btn" data-action="guides-md">가이드 MD ↓</button><a class="btn primary" href="#prompts">내 사업 프롬프트</a></div></div>
 <div class="content-pad model-guide">
 <div class="model-basics"><div><span>작업 환경</span><h3>도구</h3><p>Codex · Claude Code · Cursor · Antigravity</p></div><div><span>이해·생성·추론</span><h3>모델</h3><p>GPT · Claude · Gemini와 세부 버전</p></div><div><span>작업에 쓰는 노력</span><h3>추론 설정</h3><p>low · medium · high 등 제품별 지원</p></div></div>
 <p class="muted">도구를 설치한 뒤, 프로그램에 표시된 모델명으로 가이드를 선택합니다. 이 웹의 선택은 실행 모델을 바꾸지 않습니다.</p>
 <nav class="model-picker" aria-label="모델별 가이드">${Object.entries(MODEL_GUIDES).map(([key,v])=>`<a href="#models/${key}" class="${key===id?'active':''}" ${key===id?'aria-current="page"':''}><strong>${v.name}</strong><span>${v.provider}</span></a>`).join('')}</nav>
 <section class="panel"><div class="panel-head"><div><h2>${g.name} 프롬프트 가이드</h2><p class="muted">${g.summary}</p></div><span class="pill">공식 자료 확인 · ${GUIDE_DATE}</span></div>
 <div class="official-guide-links">${g.links.map(([label,url])=>`<a class="btn" href="${url}" target="_blank" rel="noopener">${label} ↗</a>`).join('')}</div>
 <h3 class="below-gap">모델 차이</h3><div class="model-table-wrap"><table class="model-table"><thead><tr><th>모델·공식 안내</th><th>공식 설명 요약</th><th>IR 작업 적용 예</th></tr></thead><tbody>${g.models.map(([name,strength,use,url])=>`<tr><td><a href="${url}" target="_blank" rel="noopener">${name} ↗</a></td><td>${strength}</td><td>${use}</td></tr>`).join('')}</tbody></table></div>
 <p class="status-note">IR 적용 예는 작업 배분의 출발점. 같은 자료로 결과를 비교해 선택합니다. 공식 API 목록과 앱·구독의 제공 모델은 다를 수 있습니다.</p>
 <div class="guide-columns"><div><h3>프롬프트 작성 요점</h3><ul>${g.principles.map(p=>`<li>${p}</li>`).join('')}</ul><p class="muted">${g.modelNote}</p></div><div><h3>추론 설정</h3><p>${g.effort}</p><p class="status-note">기본값으로 시작 → 복잡한 충돌 검토는 높은 설정과 비교 → 정리·추출은 낮은 설정의 누락 확인. high를 공통 정답으로 고정하지 않습니다.</p></div></div>
 <details class="guide-example"><summary>서비스 정의 교정 · ${g.name} 프롬프트 예시</summary><div class="detail-body"><p>동일 과업의 지시 구성 예시. 공식 지침을 IR에 응용한 문장입니다.</p><div class="actions"><button class="btn primary" data-action="model-copy" data-family="${id}">예시 프롬프트 복사</button><a class="btn" href="#prompts">기업정보 포함 프롬프트</a></div><pre class="prompt-preview">${esc(g.example)}</pre></div></details>
 </section>
 <div class="panel below-gap"><h2>공통 기준과 업데이트</h2><p>${COMMON_GUIDANCE}</p><div class="guide-update"><span>① 모델·버전 확인</span><span>② 해당 공식 가이드 확인</span><span>③ 같은 자료로 비교</span><span>④ 오류·누락·시간·비용 점검</span><span>⑤ 프롬프트 수정</span></div><p class="status-note">역할 설정의 필요성을 일괄적으로 없애거나, 모든 모델에 같은 프롬프트 공식을 강제하지 않습니다.</p></div>
 </div>`;
}
