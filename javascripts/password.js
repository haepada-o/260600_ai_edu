document.addEventListener("DOMContentLoaded", function() {
  // 1. Check if the page is a protected page
  const pathname = window.location.pathname;
  
  // Protect any path that contains '00_시작', '01_도구', '02_루틴', '03_확장', '04_시스템'
  const isProtected = pathname.includes('/00_') || 
                      pathname.includes('/01_') || 
                      pathname.includes('/02_') || 
                      pathname.includes('/03_') || 
                      pathname.includes('/04_') ||
                      // Also cover raw markdown filenames in case they don't use pretty URLs
                      pathname.includes('00_') ||
                      pathname.includes('01_') ||
                      pathname.includes('02_') ||
                      pathname.includes('03_') ||
                      pathname.includes('04_');

  // The homepage (index.html or '/') is NOT protected
  // Handle both local dev server and GitHub Pages subpath deployment
  const cleanPath = pathname.replace(/\/$/, "");
  const isHome = cleanPath === "" || 
                 cleanPath === "/index.html" || 
                 cleanPath === "/260600_ai_edu" || 
                 cleanPath === "/260600_ai_edu/index.html";
  
  if (!isProtected || isHome) return;

  // 2. Check authorization
  const authKey = 'ai_edu_authorized_260618';
  if (sessionStorage.getItem(authKey) === 'true') {
    return; // Already authorized in this session
  }

  // 3. If not authorized, hide content immediately to prevent flashing
  const container = document.querySelector('.md-content');
  if (container) {
    container.style.display = 'none';
  }
  
  // Also hide sidebar and toc to avoid leaking titles/structure
  const sidebars = document.querySelectorAll('.md-sidebar');
  sidebars.forEach(s => s.style.display = 'none');

  // 4. Create and show a beautiful password modal
  showPasswordModal(authKey);
});

function showPasswordModal(authKey) {
  // Create modal overlay
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

  // Modal box
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

  // Icon / Title
  const title = document.createElement('h2');
  title.innerText = '🔒 보호된 콘텐츠';
  title.style.margin = '0 0 10px 0';
  title.style.fontSize = '1.5rem';
  title.style.fontWeight = '700';
  title.style.color = '#FFFFFF';

  const desc = document.createElement('p');
  desc.innerHTML = '이 강의 자료는 <b>260618 마스터클래스 후속강의</b> 참가자 전용입니다.<br>비밀번호를 입력해 주세요.';
  desc.style.fontSize = '0.9rem';
  desc.style.color = '#FFD5C2'; // Unbleached Silk
  desc.style.margin = '0 0 25px 0';
  desc.style.lineHeight = '1.6';

  // Password Input
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

  // Buttons container
  const btnContainer = document.createElement('div');
  btnContainer.style.display = 'flex';
  btnContainer.style.gap = '10px';

  // Submit Button
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

  // Cancel/Home Button
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

  // Validation function
  const validate = () => {
    const entered = input.value;
    // Set the password to 'glowgrim2606' as the official password, but also support '260618' or 'glowgrim'
    if (entered === 'glowgrim' || entered === '260618' || entered === 'glowgrim2606' || entered === 'glowgrim260618') {
      sessionStorage.setItem(authKey, 'true');
      overlay.remove();
      // Restore page content
      const container = document.querySelector('.md-content');
      if (container) {
        container.style.display = 'block';
      }
      const sidebars = document.querySelectorAll('.md-sidebar');
      sidebars.forEach(s => s.style.display = 'block');
    } else {
      input.style.borderColor = '#C8553D'; // cedar chest red
      input.value = '';
      input.placeholder = '비밀번호가 올바르지 않습니다';
      
      // shake effect
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
  
  // Auto focus input
  setTimeout(() => input.focus(), 100);
}
