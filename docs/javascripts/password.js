document.addEventListener("DOMContentLoaded", function() {
  const pathname = window.location.pathname;
  // 한글 경로의 URL 인코딩(%EC%8B%9C%EC%9E%91 등)을 디코딩하여 매칭 문제 해결
  const decodedPath = decodeURIComponent(pathname);

  // 1. 강의별 고유 설정 정의 (강의 경로, 비밀번호, 세션 스토리지 키, 표시 이름)
  const LECTURE_CONFIGS = [
    {
      id: 'mc260618',
      displayName: '아티스트, 창작자를 위한 AI 개론',
      pathKeywords: ['/00_시작', '/01_도구', '/02_루틴', '/03_확장', '/04_시스템', '00_', '01_', '02_', '03_', '04_'],
      password: 'edu260618',
      authKey: 'ai_edu_authorized_260618'
    },
    {
      id: 'lec260618',
      displayName: '창작 구체화 (내 생각을 시스템으로)',
      pathKeywords: ['260618_creativity'],
      password: 'edu260618',
      authKey: 'ai_edu_authorized_lec260618'
    },
    {
      id: 'lec260212',
      displayName: '실무 자동화 (AI 콘텐츠 공장)',
      pathKeywords: ['260212_automation'],
      password: 'edu260212',
      authKey: 'ai_edu_authorized_lec260212'
    },
    {
      id: 'lec251114',
      displayName: '글로벌 피칭 (실리콘밸리 콜드메일)',
      pathKeywords: ['251114_coldmail'],
      password: 'edu251114',
      authKey: 'ai_edu_authorized_lec251114'
    },
    {
      id: 'lec250515',
      displayName: '개발 워크플로우 (바이브코딩)',
      pathKeywords: ['250515_vibecoding'],
      password: 'edu250515',
      authKey: 'ai_edu_authorized_lec250515'
    },
    {
      id: 'lec230512',
      displayName: '미드저니 (AI 이미지 생성 워크숍)',
      pathKeywords: ['230512_midjourney'],
      password: 'edu230512',
      authKey: 'ai_edu_authorized_lec230512'
    },
    {
      id: 'lec230411',
      displayName: '기획서 작성 (AI로 기획안 쓰기)',
      pathKeywords: ['230411_planning'],
      password: 'edu230411',
      authKey: 'ai_edu_authorized_lec230411'
    },
    {
      id: 'agent_design',
      displayName: '에이전트는 공부하는 게 아닙니다',
      pathKeywords: ['에이전트_설계', '%EC%97%90%EC%9D%B4%EC%A0%84%ED%8A%B8'],
      password: 'edu260715',
      authKey: 'ai_edu_authorized_agent_design'
    }
  ];

  // 메인페이지(index.html 또는 루트 경로) 감지
  const cleanPath = decodedPath.replace(/\/$/, "");
  const isHome = cleanPath === "" || 
                 cleanPath === "/index.html" || 
                 cleanPath === "/260600_ai_edu" || 
                 cleanPath === "/260600_ai_edu/index.html";

  if (isHome) return;

  // 현재 경로가 어떤 강의에 해당하는지 탐색
  let matchedLecture = null;
  for (const config of LECTURE_CONFIGS) {
    const matches = config.pathKeywords.some(keyword => decodedPath.includes(keyword));
    if (matches) {
      matchedLecture = config;
      break;
    }
  }

  // 매칭되는 보호 대상 강의가 없으면 그대로 렌더링
  if (!matchedLecture) return;

  // 2. 해당 강의에 대해 세션 내 인증이 완료되었는지 확인
  if (sessionStorage.getItem(matchedLecture.authKey) === 'true') {
    return;
  }

  // 3. 미인증 상태일 때 콘텐츠 및 사이드바 즉시 숨김 (깜빡임 방지)
  const container = document.querySelector('.md-content');
  if (container) {
    container.style.display = 'none';
  }
  
  const sidebars = document.querySelectorAll('.md-sidebar');
  sidebars.forEach(s => s.style.display = 'none');

  // 4. 모달창을 띄워 비밀번호 확인 프로세스 진행
  showPasswordModal(matchedLecture);
});

function showPasswordModal(lecture) {
  // 모달 레이아웃 생성
  const overlay = document.createElement('div');
  overlay.id = 'password-lock-overlay';
  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100vw';
  overlay.style.height = '100vh';
  overlay.style.backgroundColor = 'rgba(26, 37, 37, 0.95)'; // dark teal background
  overlay.style.backdropFilter = 'blur(10px)';
  overlay.style.display = 'flex';
  overlay.style.flexDirection = 'column';
  overlay.style.justifyContent = 'center';
  overlay.style.alignItems = 'center';
  overlay.style.zIndex = '99999';
  overlay.style.fontFamily = 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif';
  overlay.style.color = '#FFFFFF';

  const box = document.createElement('div');
  box.style.width = '90%';
  box.style.maxWidth = '420px';
  box.style.padding = '40px 30px';
  box.style.borderRadius = '16px';
  box.style.backgroundColor = 'rgba(88, 139, 139, 0.15)'; // steel teal transparent
  box.style.border = '1px solid rgba(88, 139, 139, 0.3)';
  box.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
  box.style.textAlign = 'center';
  box.style.transition = 'transform 0.1s ease-in-out';

  const title = document.createElement('h2');
  title.innerText = '🔒 보호된 콘텐츠';
  title.style.margin = '0 0 10px 0';
  title.style.fontSize = '1.5rem';
  title.style.fontWeight = '700';
  title.style.color = '#FFFFFF';

  const desc = document.createElement('p');
  desc.innerHTML = `이 강의 자료는 <b>${lecture.displayName}</b> 참가자 전용입니다.<br>비밀번호를 입력해 주세요.`;
  desc.style.fontSize = '0.9rem';
  desc.style.color = '#FFD5C2'; // Unbleached Silk
  desc.style.margin = '0 0 25px 0';
  desc.style.lineHeight = '1.6';

  const input = document.createElement('input');
  input.type = 'password';
  input.placeholder = '비밀번호 입력';
  input.style.width = '100%';
  input.style.padding = '12px 16px';
  input.style.borderRadius = '8px';
  input.style.border = '1px solid rgba(255, 255, 255, 0.2)';
  input.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
  input.style.color = '#FFFFFF';
  input.style.fontSize = '1rem';
  input.style.marginBottom = '20px';
  input.style.outline = 'none';
  input.style.boxSizing = 'border-box';
  input.style.textAlign = 'center';
  input.style.transition = 'border-color 0.2s';

  input.addEventListener('focus', () => {
    input.style.borderColor = '#F28F3B'; // Cadmium Orange
  });

  const btnContainer = document.createElement('div');
  btnContainer.style.display = 'flex';
  btnContainer.style.gap = '10px';

  const submitBtn = document.createElement('button');
  submitBtn.innerText = '확인';
  submitBtn.style.flex = '2';
  submitBtn.style.padding = '12px';
  submitBtn.style.borderRadius = '8px';
  submitBtn.style.border = 'none';
  submitBtn.style.backgroundColor = '#F28F3B'; // Cadmium Orange
  submitBtn.style.color = '#FFFFFF';
  submitBtn.style.fontWeight = '600';
  submitBtn.style.cursor = 'pointer';
  submitBtn.style.fontSize = '0.95rem';
  submitBtn.style.transition = 'background-color 0.2s';

  submitBtn.addEventListener('mouseenter', () => {
    submitBtn.style.backgroundColor = '#C8553D'; // Cedar Chest
  });
  submitBtn.addEventListener('mouseleave', () => {
    submitBtn.style.backgroundColor = '#F28F3B';
  });

  const cancelBtn = document.createElement('button');
  cancelBtn.innerText = '홈으로';
  cancelBtn.style.flex = '1';
  cancelBtn.style.padding = '12px';
  cancelBtn.style.borderRadius = '8px';
  cancelBtn.style.border = '1px solid rgba(255, 255, 255, 0.2)';
  cancelBtn.style.backgroundColor = 'transparent';
  cancelBtn.style.color = '#FFFFFF';
  cancelBtn.style.cursor = 'pointer';
  cancelBtn.style.fontSize = '0.95rem';
  cancelBtn.style.transition = 'background-color 0.2s';

  cancelBtn.addEventListener('mouseenter', () => {
    cancelBtn.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
  });
  cancelBtn.addEventListener('mouseleave', () => {
    cancelBtn.style.backgroundColor = 'transparent';
  });

  cancelBtn.addEventListener('click', () => {
    const basePathIdx = window.location.pathname.indexOf('/260600_ai_edu/');
    if (basePathIdx !== -1) {
      window.location.href = window.location.origin + window.location.pathname.substring(0, basePathIdx + '/260600_ai_edu/'.length);
    } else {
      window.location.href = window.location.origin + '/';
    }
  });

  btnContainer.appendChild(cancelBtn);
  btnContainer.appendChild(submitBtn);

  box.appendChild(title);
  box.appendChild(desc);
  box.appendChild(input);
  box.appendChild(btnContainer);
  overlay.appendChild(box);
  document.body.appendChild(overlay);

  const validate = () => {
    const entered = input.value;
    if (entered === lecture.password) {
      sessionStorage.setItem(lecture.authKey, 'true');
      overlay.remove();
      
      const container = document.querySelector('.md-content');
      if (container) {
        container.style.display = 'block';
      }
      const sidebars = document.querySelectorAll('.md-sidebar');
      sidebars.forEach(s => s.style.display = 'block');
    } else {
      input.style.borderColor = '#C8553D'; // Cedar Chest Red
      input.value = '';
      input.placeholder = '비밀번호가 올바르지 않습니다';
      
      let pos = 0;
      const id = setInterval(frame, 20);
      function frame() {
        if (pos === 4) {
          clearInterval(id);
          box.style.transform = 'translateX(0px)';
        } else {
          pos++;
          if (pos % 2 === 1) {
            box.style.transform = `translateX(-${10 - pos*2}px)`;
          } else {
            box.style.transform = `translateX(${10 - pos*2}px)`;
          }
        }
      }
    }
  };

  submitBtn.addEventListener('click', validate);
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') validate();
  });
  
  setTimeout(() => input.focus(), 100);
}
