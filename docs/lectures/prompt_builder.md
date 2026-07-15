---
hide:
  - navigation
---

# 🎛️ 미드저니 프롬프트 빌더

> 각 단계에서 원하는 요소를 **클릭**하면 하단에 실시간으로 프롬프트가 조립됩니다. 직접 타이핑도 가능합니다.

<div id="prompt-builder-app">

<!-- 모드 탭 -->
<div class="pb-tabs">
  <button class="pb-tab active" onclick="switchMode('image')">📸 이미지 프롬프트</button>
  <button class="pb-tab" onclick="switchMode('video')">🎬 영상 컨셉 프롬프트</button>
</div>

<!-- ===================== STEP 1: 피사체 ===================== -->
<div class="pb-step">
  <div class="pb-step-header">
    <span class="pb-step-num">1</span>
    <span class="pb-step-title">피사체 (Subject)</span>
    <span class="pb-step-desc">무엇을 그릴지 자유롭게 입력하세요</span>
  </div>
  <div class="pb-step-body">
    <input type="text" id="subject" class="pb-input" placeholder="예: young woman with silver hair, lone dancer on empty stage..." oninput="updatePrompt()">
  </div>
</div>

<!-- ===================== STEP 2: 프레이밍 ===================== -->
<div class="pb-step">
  <div class="pb-step-header">
    <span class="pb-step-num">2</span>
    <span class="pb-step-title">프레이밍 / 화각 (Shot Size)</span>
    <span class="pb-step-desc">인물을 어디까지 잡을지</span>
  </div>
  <div class="pb-step-body">
    <div class="pb-chips" data-group="framing">
      <button class="pb-chip" data-value="extreme wide shot">🏔️ 익스트림 와이드</button>
      <button class="pb-chip" data-value="wide shot, full body">🧍 풀샷 (전신)</button>
      <button class="pb-chip" data-value="cowboy shot, knee up">🤠 카우보이 (무릎↑)</button>
      <button class="pb-chip" data-value="medium shot, waist up">👤 미디엄 (허리↑)</button>
      <button class="pb-chip" data-value="medium close-up, chest up">🖼️ 미디엄CU (가슴↑)</button>
      <button class="pb-chip" data-value="close-up portrait">😊 클로즈업 (얼굴)</button>
      <button class="pb-chip" data-value="extreme close-up, macro detail">👁️ 익스트림CU (눈/입)</button>
      <button class="pb-chip" data-value="bust shot, shoulders up">🗿 흉상 (어깨↑)</button>
      <button class="pb-chip" data-value="torso shot">👕 토르소</button>
    </div>
  </div>
</div>

<!-- ===================== STEP 3: 앵글 ===================== -->
<div class="pb-step">
  <div class="pb-step-header">
    <span class="pb-step-num">3</span>
    <span class="pb-step-title">카메라 앵글</span>
    <span class="pb-step-desc">어떤 시점에서 바라볼지</span>
  </div>
  <div class="pb-step-body">
    <div class="pb-chips" data-group="angle">
      <button class="pb-chip" data-value="eye level">👀 눈높이</button>
      <button class="pb-chip" data-value="low angle shot, looking up">⬆️ 로우 앵글</button>
      <button class="pb-chip" data-value="high angle shot, looking down">⬇️ 하이 앵글</button>
      <button class="pb-chip" data-value="bird's eye view, top-down">🦅 부감 (탑뷰)</button>
      <button class="pb-chip" data-value="worm's eye view, extreme low angle">🐛 개미 시점</button>
      <button class="pb-chip" data-value="Dutch angle, tilted camera">📐 더치 앵글</button>
      <button class="pb-chip" data-value="over-the-shoulder shot">🔄 오버더숄더</button>
      <button class="pb-chip" data-value="POV, first person perspective">🎮 1인칭 POV</button>
      <button class="pb-chip" data-value="flat lay, overhead arrangement">📋 플랫레이</button>
    </div>
  </div>
</div>

<!-- ===================== STEP 4: 구도 ===================== -->
<div class="pb-step">
  <div class="pb-step-header">
    <span class="pb-step-num">4</span>
    <span class="pb-step-title">구도 (Composition)</span>
    <span class="pb-step-desc">화면 배치 법칙</span>
  </div>
  <div class="pb-step-body">
    <div class="pb-chips" data-group="composition">
      <button class="pb-chip" data-value="rule of thirds">⊞ 3분할</button>
      <button class="pb-chip" data-value="golden ratio composition">🌀 황금비율</button>
      <button class="pb-chip" data-value="symmetrical composition">⚖️ 대칭</button>
      <button class="pb-chip" data-value="centered composition">⊙ 중앙배치</button>
      <button class="pb-chip" data-value="leading lines">↗️ 유도선</button>
      <button class="pb-chip" data-value="negative space, minimalist">⬜ 여백</button>
      <button class="pb-chip" data-value="frame within a frame">🖼️ 프레임인프레임</button>
      <button class="pb-chip" data-value="dynamic diagonal composition">⧄ 대각선</button>
    </div>
  </div>
</div>

<!-- ===================== STEP 5: 렌즈 ===================== -->
<div class="pb-step">
  <div class="pb-step-header">
    <span class="pb-step-num">5</span>
    <span class="pb-step-title">렌즈 & 초점</span>
    <span class="pb-step-desc">초점거리와 초점 효과</span>
  </div>
  <div class="pb-step-body">
    <div class="pb-chips" data-group="lens">
      <button class="pb-chip" data-value="14mm ultra-wide lens">14mm 초광각</button>
      <button class="pb-chip" data-value="24mm wide angle">24mm 광각</button>
      <button class="pb-chip" data-value="35mm lens">35mm 준광각</button>
      <button class="pb-chip" data-value="50mm standard lens">50mm 표준</button>
      <button class="pb-chip" data-value="85mm portrait lens">85mm 인물</button>
      <button class="pb-chip" data-value="135mm telephoto">135mm 망원</button>
      <button class="pb-chip" data-value="200mm telephoto compression">200mm 초망원</button>
      <button class="pb-chip" data-value="macro lens, extreme close">🔬 매크로</button>
      <button class="pb-chip" data-value="fisheye lens, distorted">🐟 어안</button>
      <button class="pb-chip" data-value="tilt-shift lens, miniature effect">🏠 틸트시프트</button>
      <button class="pb-chip" data-value="anamorphic lens, oval bokeh">🎬 아나모픽</button>
    </div>
    <div class="pb-sub-label">초점 효과</div>
    <div class="pb-chips" data-group="focus">
      <button class="pb-chip" data-value="shallow depth of field, bokeh">💫 아웃포커스</button>
      <button class="pb-chip" data-value="deep depth of field, everything sharp">🔍 팬포커스</button>
      <button class="pb-chip" data-value="soft focus, dreamy">🌫️ 소프트포커스</button>
      <button class="pb-chip" data-value="selective focus">🎯 셀렉티브</button>
    </div>
  </div>
</div>

<!-- ===================== STEP 6: 화풍 ===================== -->
<div class="pb-step">
  <div class="pb-step-header">
    <span class="pb-step-num">6</span>
    <span class="pb-step-title">화풍 / 매체 (Style)</span>
    <span class="pb-step-desc">어떤 매체와 스타일로 표현할지</span>
  </div>
  <div class="pb-step-body">
    <div class="pb-sub-label">사진</div>
    <div class="pb-chips" data-group="style">
      <button class="pb-chip" data-value="editorial photography">📰 에디토리얼</button>
      <button class="pb-chip" data-value="street photography, candid">🏙️ 스트릿</button>
      <button class="pb-chip" data-value="documentary photography">📹 다큐</button>
      <button class="pb-chip" data-value="architectural photography">🏛️ 건축사진</button>
      <button class="pb-chip" data-value="product photography, studio">📦 제품사진</button>
    </div>
    <div class="pb-sub-label">회화</div>
    <div class="pb-chips" data-group="style">
      <button class="pb-chip" data-value="oil painting, impasto texture">🎨 유화</button>
      <button class="pb-chip" data-value="watercolor, loose brushstrokes">💧 수채화</button>
      <button class="pb-chip" data-value="acrylic palette knife, thick texture">🔪 팔레트나이프</button>
      <button class="pb-chip" data-value="charcoal sketch">✏️ 목탄</button>
      <button class="pb-chip" data-value="ink wash, sumi-e">🖌️ 수묵화</button>
      <button class="pb-chip" data-value="gouache, flat illustration">🖍️ 과슈</button>
    </div>
    <div class="pb-sub-label">일러스트 & 디지털</div>
    <div class="pb-chips" data-group="style">
      <button class="pb-chip" data-value="concept art, highly detailed">🗡️ 컨셉아트</button>
      <button class="pb-chip" data-value="flat design illustration">📐 플랫</button>
      <button class="pb-chip" data-value="pixel art, 16-bit retro">👾 픽셀아트</button>
      <button class="pb-chip" data-value="comic book style, halftone">💥 만화</button>
      <button class="pb-chip" data-value="risograph print">🖨️ 리소그래프</button>
    </div>
    <div class="pb-sub-label">애니메이션</div>
    <div class="pb-chips" data-group="style">
      <button class="pb-chip" data-value="Studio Ghibli aesthetic, hand-drawn">🌿 지브리</button>
      <button class="pb-chip" data-value="Makoto Shinkai style, light rays">✨ 신카이</button>
      <button class="pb-chip" data-value="Kyoto Animation style, soft">🌸 교토애니</button>
      <button class="pb-chip" data-value="1990s OVA anime, cel animation">📼 90년대 레트로</button>
      <button class="pb-chip" data-value="cyberpunk anime, Ghost in the Shell">🌃 사이버펑크</button>
    </div>
  </div>
</div>

<!-- ===================== STEP 7: 아티스트 ===================== -->
<div class="pb-step">
  <div class="pb-step-header">
    <span class="pb-step-num">7</span>
    <span class="pb-step-title">아티스트 레퍼런스</span>
    <span class="pb-step-desc">in the style of ...</span>
  </div>
  <div class="pb-step-body">
    <div class="pb-sub-label">화가</div>
    <div class="pb-chips" data-group="artist">
      <button class="pb-chip" data-value="in the style of Claude Monet, Impressionism">모네</button>
      <button class="pb-chip" data-value="in the style of Van Gogh, swirling brushstrokes">반 고흐</button>
      <button class="pb-chip" data-value="in the style of Gustav Klimt, gold leaf decorative">클림트</button>
      <button class="pb-chip" data-value="in the style of Salvador Dali, Surrealism">달리</button>
      <button class="pb-chip" data-value="in the style of Basquiat, neo-expressionism, graffiti">바스키아</button>
      <button class="pb-chip" data-value="in the style of Andy Warhol, Pop Art">워홀</button>
      <button class="pb-chip" data-value="in the style of Edward Hopper, lonely urban sunlight">호퍼</button>
      <button class="pb-chip" data-value="in the style of Hokusai, ukiyo-e woodblock">호쿠사이</button>
    </div>
    <div class="pb-sub-label">사진작가</div>
    <div class="pb-chips" data-group="artist">
      <button class="pb-chip" data-value="in the style of Annie Leibovitz, dramatic portrait">라이보비츠</button>
      <button class="pb-chip" data-value="in the style of Richard Avedon, white background fashion">아베돈</button>
      <button class="pb-chip" data-value="in the style of Ansel Adams, black and white landscape">앤셀 아담스</button>
      <button class="pb-chip" data-value="in the style of Steve McCurry, vivid color portrait">맥커리</button>
      <button class="pb-chip" data-value="in the style of Gregory Crewdson, cinematic staged">크루드슨</button>
    </div>
    <div class="pb-sub-label">건축가</div>
    <div class="pb-chips" data-group="artist">
      <button class="pb-chip" data-value="in the style of Tadao Ando, exposed concrete, light and shadow">안도 타다오</button>
      <button class="pb-chip" data-value="in the style of Zaha Hadid, fluid parametric curves">자하 하디드</button>
      <button class="pb-chip" data-value="in the style of Kengo Kuma, wooden lattice, nature">쿠마 켄고</button>
      <button class="pb-chip" data-value="Brutalist architecture, raw concrete, monolithic">브루탈리즘</button>
    </div>
    <div class="pb-sub-label">영화감독</div>
    <div class="pb-chips" data-group="artist">
      <button class="pb-chip" data-value="Wes Anderson aesthetic, symmetrical, pastel">웨스 앤더슨</button>
      <button class="pb-chip" data-value="Ridley Scott cinematography, amber teal, epic fog">리들리 스콧</button>
      <button class="pb-chip" data-value="Wong Kar-wai, warm neon blur, melancholic">왕가위</button>
      <button class="pb-chip" data-value="Denis Villeneuve, vast landscape, desaturated, awe">빌뇌브</button>
      <button class="pb-chip" data-value="Stanley Kubrick, one-point perspective, cold precise">큐브릭</button>
    </div>
  </div>
</div>

<!-- ===================== STEP 8: 조명 ===================== -->
<div class="pb-step">
  <div class="pb-step-header">
    <span class="pb-step-num">8</span>
    <span class="pb-step-title">조명 & 분위기</span>
    <span class="pb-step-desc">빛과 무드를 결정</span>
  </div>
  <div class="pb-step-body">
    <div class="pb-chips" data-group="lighting">
      <button class="pb-chip" data-value="golden hour lighting, warm amber">🌅 골든아워</button>
      <button class="pb-chip" data-value="blue hour, twilight">🌆 블루아워</button>
      <button class="pb-chip" data-value="cinematic dramatic lighting">🎬 시네마틱</button>
      <button class="pb-chip" data-value="Rembrandt lighting, triangle shadow">🎭 렘브란트</button>
      <button class="pb-chip" data-value="soft diffused light, no harsh shadows">☁️ 확산광</button>
      <button class="pb-chip" data-value="dramatic chiaroscuro, extreme contrast">🌑 키아로스쿠로</button>
      <button class="pb-chip" data-value="neon lighting, cyberpunk glow">💜 네온</button>
      <button class="pb-chip" data-value="bioluminescent glow, ethereal">🪼 생물발광</button>
      <button class="pb-chip" data-value="backlit, rim light, silhouette edge">🌟 역광/림라이트</button>
      <button class="pb-chip" data-value="moody atmospheric fog">🌫️ 안개</button>
      <button class="pb-chip" data-value="single dramatic spotlight">💡 스포트라이트</button>
      <button class="pb-chip" data-value="flat even lighting, overcast">⬜ 평면 조명</button>
    </div>
  </div>
</div>

<!-- ===================== STEP 9: 카메라/필름 ===================== -->
<div class="pb-step">
  <div class="pb-step-header">
    <span class="pb-step-num">9</span>
    <span class="pb-step-title">카메라 기종 / 필름</span>
    <span class="pb-step-desc">색감과 질감 결정 (선택 사항)</span>
  </div>
  <div class="pb-step-body">
    <div class="pb-sub-label">디지털 카메라</div>
    <div class="pb-chips" data-group="camera">
      <button class="pb-chip" data-value="shot on Sony A7R IV, ultra sharp">Sony</button>
      <button class="pb-chip" data-value="shot on Canon EOS R5, warm skin tones">Canon</button>
      <button class="pb-chip" data-value="shot on Fujifilm X-T5, film simulation">Fujifilm</button>
      <button class="pb-chip" data-value="shot on Leica M11, precise contrast">Leica</button>
      <button class="pb-chip" data-value="shot on Phase One IQ4, medium format detail">Phase One</button>
    </div>
    <div class="pb-sub-label">필름 스톡</div>
    <div class="pb-chips" data-group="camera">
      <button class="pb-chip" data-value="Kodak Portra 400, warm pastel skin tones">Portra 400</button>
      <button class="pb-chip" data-value="Fujifilm Velvia 50, vivid saturated colors">Velvia 50</button>
      <button class="pb-chip" data-value="Ilford HP5 Plus, black and white film grain">HP5 흑백</button>
      <button class="pb-chip" data-value="CineStill 800T, red halation, night neon">CineStill 800T</button>
      <button class="pb-chip" data-value="Kodachrome, vintage warm vivid">Kodachrome</button>
      <button class="pb-chip" data-value="Polaroid 600, instant film faded borders">Polaroid</button>
    </div>
    <div class="pb-sub-label">특수</div>
    <div class="pb-chips" data-group="camera">
      <button class="pb-chip" data-value="Hasselblad 500C, medium format film">Hasselblad</button>
      <button class="pb-chip" data-value="disposable camera, flash, lo-fi analog">일회용카메라</button>
      <button class="pb-chip" data-value="35mm film grain, analog photography">35mm 필름</button>
    </div>
  </div>
</div>

<!-- ===================== STEP 10: 촬영기법 ===================== -->
<div class="pb-step">
  <div class="pb-step-header">
    <span class="pb-step-num">10</span>
    <span class="pb-step-title">촬영 기법 & 특수 효과</span>
    <span class="pb-step-desc">선택 사항 — 중복 선택 가능</span>
  </div>
  <div class="pb-step-body">
    <div class="pb-chips pb-multi" data-group="technique">
      <button class="pb-chip" data-value="long exposure, light trails">⏳ 장노출</button>
      <button class="pb-chip" data-value="double exposure, silhouette overlay">🔀 이중노출</button>
      <button class="pb-chip" data-value="backlit silhouette">🌅 실루엣</button>
      <button class="pb-chip" data-value="lens flare, sun burst">☀️ 렌즈플레어</button>
      <button class="pb-chip" data-value="prism effect, rainbow refraction">🌈 프리즘</button>
      <button class="pb-chip" data-value="reflection, mirror surface">🪞 반사</button>
      <button class="pb-chip" data-value="shadow pattern on face">🔲 그림자패턴</button>
      <button class="pb-chip" data-value="motion blur, intentional movement">💨 모션블러</button>
      <button class="pb-chip" data-value="foreground bokeh, out of focus lights">✨ 보케전경</button>
      <button class="pb-chip" data-value="HDR, high dynamic range, vivid">📊 HDR</button>
    </div>
  </div>
</div>

<!-- ===================== STEP V: 영상 전용 ===================== -->
<div class="pb-step pb-video-only" style="display:none;">
  <div class="pb-step-header">
    <span class="pb-step-num">🎬</span>
    <span class="pb-step-title">영상 전용 — 카메라 무빙 & 색보정</span>
    <span class="pb-step-desc">영상 컨셉 프레임 전용 키워드</span>
  </div>
  <div class="pb-step-body">
    <div class="pb-sub-label">카메라 무빙</div>
    <div class="pb-chips" data-group="vmove">
      <button class="pb-chip" data-value="tracking shot, camera following subject">🎯 트래킹</button>
      <button class="pb-chip" data-value="dolly zoom, vertigo effect">🌀 달리줌</button>
      <button class="pb-chip" data-value="Steadicam, smooth floating movement">🎥 스테디캠</button>
      <button class="pb-chip" data-value="handheld camera, shaky documentary feel">📱 핸드헬드</button>
      <button class="pb-chip" data-value="crane shot, rising upward">🏗️ 크레인</button>
      <button class="pb-chip" data-value="drone aerial shot, sweeping overhead">🚁 드론</button>
      <button class="pb-chip" data-value="one take, long unbroken shot">🔄 원테이크</button>
    </div>
    <div class="pb-sub-label">모션 효과</div>
    <div class="pb-chips" data-group="vmotion">
      <button class="pb-chip" data-value="slow motion, frozen moment, 120fps">🐌 슬로모션</button>
      <button class="pb-chip" data-value="timelapse, clouds moving fast">⏩ 타임랩스</button>
      <button class="pb-chip" data-value="stop motion, claymation, frame by frame">🧱 스톱모션</button>
    </div>
    <div class="pb-sub-label">색보정 (Color Grade)</div>
    <div class="pb-chips" data-group="vgrade">
      <button class="pb-chip" data-value="teal and orange color grade">🟠 틸&오렌지</button>
      <button class="pb-chip" data-value="desaturated muted tones">🩶 탈포화</button>
      <button class="pb-chip" data-value="warm golden grade, nostalgic">🌾 골드 보정</button>
      <button class="pb-chip" data-value="cool blue grade, futuristic">🧊 블루 보정</button>
      <button class="pb-chip" data-value="high contrast noir, black and white">🖤 느와르</button>
      <button class="pb-chip" data-value="bleach bypass, desaturated high contrast">⚔️ 블리치</button>
    </div>
    <div class="pb-sub-label">영상 카메라/필름 룩</div>
    <div class="pb-chips" data-group="vfilm">
      <button class="pb-chip" data-value="shot on ARRI Alexa, cinematic grade">ARRI Alexa</button>
      <button class="pb-chip" data-value="RED camera, ultra high resolution">RED</button>
      <button class="pb-chip" data-value="16mm film look, indie grain">16mm 필름</button>
      <button class="pb-chip" data-value="Super 8 footage, retro grain vignette">Super 8</button>
      <button class="pb-chip" data-value="Kodak Vision3 500T, tungsten cinematic">Vision3 500T</button>
      <button class="pb-chip" data-value="anamorphic lens, horizontal flare, oval bokeh">아나모픽</button>
    </div>
  </div>
</div>

<!-- ===================== STEP 11: 파라미터 ===================== -->
<div class="pb-step">
  <div class="pb-step-header">
    <span class="pb-step-num">⚙️</span>
    <span class="pb-step-title">파라미터</span>
    <span class="pb-step-desc">출력 형태 제어</span>
  </div>
  <div class="pb-step-body">
    <div class="pb-param-row">
      <label>화면비 (--ar)</label>
      <div class="pb-chips" data-group="ar">
        <button class="pb-chip" data-value="--ar 1:1">1:1</button>
        <button class="pb-chip" data-value="--ar 4:5">4:5</button>
        <button class="pb-chip" data-value="--ar 9:16">9:16</button>
        <button class="pb-chip" data-value="--ar 16:9">16:9</button>
        <button class="pb-chip" data-value="--ar 21:9">21:9</button>
        <button class="pb-chip" data-value="--ar 2:3">2:3</button>
        <button class="pb-chip" data-value="--ar 3:4">3:4</button>
      </div>
    </div>
    <div class="pb-param-row">
      <label>모델 (--v / --niji)</label>
      <div class="pb-chips" data-group="model">
        <button class="pb-chip" data-value="--v 6.1">v6.1</button>
        <button class="pb-chip" data-value="--v 7">v7</button>
        <button class="pb-chip" data-value="--niji 6">niji 6</button>
      </div>
    </div>
    <div class="pb-param-row">
      <label>예술성 (--s)</label>
      <div class="pb-chips" data-group="stylize">
        <button class="pb-chip" data-value="--s 100">100 낮음</button>
        <button class="pb-chip" data-value="--s 300">300</button>
        <button class="pb-chip" data-value="--s 500">500 중간</button>
        <button class="pb-chip" data-value="--s 750">750</button>
        <button class="pb-chip" data-value="--s 1000">1000 최대</button>
      </div>
    </div>
    <div class="pb-param-row">
      <label>추가 옵션</label>
      <div class="pb-chips pb-multi" data-group="extra">
        <button class="pb-chip" data-value="--style raw">raw (포토리얼)</button>
        <button class="pb-chip" data-value="--no text, watermark, blurry">--no 기본세트</button>
        <button class="pb-chip" data-value="--no extra limbs, distorted face">--no 인물세트</button>
        <button class="pb-chip" data-value="--c 30">chaos 30</button>
      </div>
    </div>
  </div>
</div>

<!-- ===================== 결과 영역 ===================== -->
<div class="pb-result">
  <div class="pb-result-header">
    <span>✅ 완성 프롬프트</span>
    <div class="pb-result-actions">
      <button class="pb-btn-copy" onclick="copyPrompt()">📋 복사</button>
      <button class="pb-btn-reset" onclick="resetAll()">🔄 초기화</button>
    </div>
  </div>
  <div class="pb-result-body" id="prompt-output">피사체를 입력하고 각 요소를 선택하세요...</div>
  <div class="pb-result-count" id="prompt-word-count"></div>
</div>

</div>

<!-- ===================== STYLE ===================== -->
<style>
#prompt-builder-app {
  font-family: 'Inter', -apple-system, sans-serif;
}
.pb-tabs {
  display: flex; gap: 0; margin-bottom: 24px; border-bottom: 2px solid var(--md-default-fg-color--lightest);
}
.pb-tab {
  padding: 12px 24px; border: none; background: none; cursor: pointer;
  font-size: 1rem; font-weight: 600; color: var(--md-default-fg-color--light);
  border-bottom: 3px solid transparent; transition: all .2s;
}
.pb-tab.active {
  color: var(--md-primary-fg-color); border-bottom-color: var(--md-primary-fg-color);
}
.pb-tab:hover { color: var(--md-primary-fg-color); }

.pb-step {
  margin-bottom: 8px; border: 1px solid var(--md-default-fg-color--lightest);
  border-radius: 12px; overflow: hidden; transition: all .2s;
}
.pb-step-header {
  display: flex; align-items: center; gap: 12px; padding: 14px 18px;
  cursor: pointer; user-select: none;
  background: var(--md-code-bg-color);
}
.pb-step-header:hover { opacity: .85; }
.pb-step-num {
  min-width: 32px; height: 32px; display: flex; align-items: center; justify-content: center;
  background: var(--md-primary-fg-color); color: #fff; border-radius: 50%;
  font-weight: 700; font-size: .85rem;
}
.pb-step-title { font-weight: 700; font-size: .95rem; }
.pb-step-desc { font-size: .8rem; color: var(--md-default-fg-color--light); margin-left: auto; }

.pb-step-body { padding: 12px 18px 18px; }
.pb-sub-label {
  font-size: .75rem; font-weight: 600; color: var(--md-default-fg-color--light);
  margin: 12px 0 6px; text-transform: uppercase; letter-spacing: .5px;
}
.pb-sub-label:first-child { margin-top: 0; }

.pb-chips { display: flex; flex-wrap: wrap; gap: 6px; }
.pb-chip {
  padding: 6px 14px; border-radius: 20px; font-size: .82rem;
  border: 1.5px solid var(--md-default-fg-color--lightest);
  background: var(--md-default-bg-color); color: var(--md-default-fg-color);
  cursor: pointer; transition: all .15s; white-space: nowrap;
}
.pb-chip:hover {
  border-color: var(--md-primary-fg-color); background: var(--md-primary-fg-color--light);
}
.pb-chip.selected {
  background: var(--md-primary-fg-color); color: #fff;
  border-color: var(--md-primary-fg-color); font-weight: 600;
}

.pb-input {
  width: 100%; padding: 10px 14px; border-radius: 8px; font-size: .95rem;
  border: 1.5px solid var(--md-default-fg-color--lightest);
  background: var(--md-default-bg-color); color: var(--md-default-fg-color);
  outline: none; transition: border .2s;
}
.pb-input:focus { border-color: var(--md-primary-fg-color); }

.pb-param-row { margin-bottom: 12px; }
.pb-param-row label {
  display: block; font-size: .8rem; font-weight: 600;
  color: var(--md-default-fg-color--light); margin-bottom: 6px;
}

.pb-result {
  position: sticky; bottom: 0; z-index: 100;
  margin-top: 24px; border-radius: 12px; overflow: hidden;
  border: 2px solid var(--md-primary-fg-color);
  background: var(--md-code-bg-color); box-shadow: 0 -4px 20px rgba(0,0,0,.15);
}
.pb-result-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 12px 18px; background: var(--md-primary-fg-color); color: #fff;
  font-weight: 700; font-size: .95rem;
}
.pb-result-actions { display: flex; gap: 8px; }
.pb-btn-copy, .pb-btn-reset {
  padding: 6px 14px; border: none; border-radius: 6px; cursor: pointer;
  font-size: .8rem; font-weight: 600; transition: all .15s;
}
.pb-btn-copy { background: #fff; color: var(--md-primary-fg-color); }
.pb-btn-copy:hover { background: #e0e0e0; }
.pb-btn-reset { background: rgba(255,255,255,.2); color: #fff; }
.pb-btn-reset:hover { background: rgba(255,255,255,.35); }
.pb-result-body {
  padding: 16px 18px; font-family: 'JetBrains Mono', monospace; font-size: .88rem;
  line-height: 1.6; word-break: break-word; min-height: 60px;
  color: var(--md-default-fg-color);
}
.pb-result-count {
  padding: 4px 18px 10px; font-size: .72rem;
  color: var(--md-default-fg-color--light);
}
</style>

<!-- ===================== SCRIPT ===================== -->
<script>
(function() {
  const state = {
    mode: 'image',
    subject: '',
    framing: '', angle: '', composition: '',
    lens: '', focus: '',
    style: '',
    artist: '',
    lighting: '',
    camera: '',
    technique: [],
    vmove: '', vmotion: '', vgrade: '', vfilm: '',
    ar: '', model: '', stylize: '',
    extra: []
  };
  const multiGroups = new Set(['technique', 'extra']);

  window.switchMode = function(mode) {
    state.mode = mode;
    document.querySelectorAll('.pb-tab').forEach(t => t.classList.remove('active'));
    document.querySelector(`.pb-tab[onclick*="${mode}"]`).classList.add('active');
    document.querySelectorAll('.pb-video-only').forEach(el => {
      el.style.display = mode === 'video' ? 'block' : 'none';
    });
    updatePrompt();
  };

  document.querySelectorAll('.pb-chips').forEach(container => {
    const group = container.dataset.group;
    const isMulti = container.classList.contains('pb-multi') || multiGroups.has(group);
    container.querySelectorAll('.pb-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        if (isMulti) {
          chip.classList.toggle('selected');
          if (Array.isArray(state[group])) {
            const val = chip.dataset.value;
            const idx = state[group].indexOf(val);
            if (idx > -1) state[group].splice(idx, 1);
            else state[group].push(val);
          }
        } else {
          const wasSelected = chip.classList.contains('selected');
          container.querySelectorAll('.pb-chip').forEach(c => c.classList.remove('selected'));
          if (!wasSelected) {
            chip.classList.add('selected');
            state[group] = chip.dataset.value;
          } else {
            state[group] = '';
          }
        }
        updatePrompt();
      });
    });
  });

  window.updatePrompt = function() {
    state.subject = document.getElementById('subject').value.trim();
    const parts = [];
    if (state.subject) parts.push(state.subject);
    if (state.framing) parts.push(state.framing);
    if (state.angle) parts.push(state.angle);
    if (state.composition) parts.push(state.composition);
    if (state.lens) parts.push(state.lens);
    if (state.focus) parts.push(state.focus);
    if (state.style) parts.push(state.style);
    if (state.artist) parts.push(state.artist);
    if (state.lighting) parts.push(state.lighting);
    if (state.camera) parts.push(state.camera);
    if (state.technique && state.technique.length) parts.push(state.technique.join(', '));
    if (state.mode === 'video') {
      if (state.vmove) parts.push(state.vmove);
      if (state.vmotion) parts.push(state.vmotion);
      if (state.vgrade) parts.push(state.vgrade);
      if (state.vfilm) parts.push(state.vfilm);
    }
    const params = [];
    if (state.ar) params.push(state.ar);
    if (state.model) params.push(state.model);
    if (state.stylize) params.push(state.stylize);
    if (state.extra && state.extra.length) params.push(state.extra.join(' '));

    const output = document.getElementById('prompt-output');
    const counter = document.getElementById('prompt-word-count');
    if (!parts.length && !params.length) {
      output.textContent = '피사체를 입력하고 각 요소를 선택하세요...';
      output.style.opacity = '.5';
      counter.textContent = '';
      return;
    }
    let prompt = parts.join(', \n');
    if (params.length) prompt += ' \n' + params.join(' ');
    output.textContent = prompt;
    output.style.opacity = '1';
    const wordCount = prompt.replace(/--\S+/g, '').trim().split(/[\s,]+/).filter(Boolean).length;
    counter.textContent = `약 ${wordCount}단어 · ${prompt.length}자`;
  };

  window.copyPrompt = function() {
    const text = document.getElementById('prompt-output').textContent;
    if (!text || text.includes('피사체를 입력')) return;
    const clean = text.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();
    navigator.clipboard.writeText(clean).then(() => {
      const btn = document.querySelector('.pb-btn-copy');
      btn.textContent = '✅ 복사됨!';
      setTimeout(() => btn.textContent = '📋 복사', 1500);
    });
  };

  window.resetAll = function() {
    document.getElementById('subject').value = '';
    document.querySelectorAll('.pb-chip.selected').forEach(c => c.classList.remove('selected'));
    Object.keys(state).forEach(k => {
      if (Array.isArray(state[k])) state[k] = [];
      else if (k !== 'mode') state[k] = '';
    });
    updatePrompt();
  };
})();
</script>

---

> **📋 전체 키워드 사전**: [미드저니 화풍 & 프롬프트 시트](midjourney_prompt_sheet.md) 참조
