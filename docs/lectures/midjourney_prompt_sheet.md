# 미드저니 화풍 & 프롬프트 키워드 시트
> **사용법**: 각 카테고리에서 키워드를 골라 조합합니다. 
> 권장 공식: `[매체] + [작가/사조] + [분위기]` 최소 3레이어 조합
> 전체 구조: `[피사체] [배경] [화풍] [조명] [카메라] --ar X:X --v 6.1 --s XXX`

---

## 🎌 H. 애니메이션 스타일 레퍼런스

> **핵심**: 애니메이션 스타일은 `--niji 6` 모델 전용으로 사용해야 정확도가 높습니다.
> **기본 공식**: `[캐릭터 묘사] + [배경/상황] + [스튜디오/감독 스타일] + [분위기/조명] --niji 6 --ar X:X --s XXX`

---

### H-1. 모델 선택 가이드

| 목적 | 사용 모델 | 이유 |
|------|----------|------|
| **애니·만화·일러스트** | `--niji 6` | 애니메이션 전용 학습 모델. 선묘·비율·채색 모두 최적화 |
| **사실적 배경 + 애니 인물** | `--niji 6 --style scenic` | 배경 묘사력 강화 버전 |
| **실사 느낌 애니** | `--v 6.1` + 애니 키워드 | 포토리얼 베이스에 애니 스타일 혼합 |
| **실험적 스타일 믹스** | `--v 6.1 --s 900` | 애니+일러스트+회화 혼합 결과 |

---

### H-2. 일본 애니메이션 — 스튜디오 & 감독

| 스튜디오 / 감독 | 대표작 | 시각 특징 | 미드저니 키워드 |
|----------------|-------|----------|----------------|
| **Studio Ghibli / 宮崎 駿** | 원령공주, 하울 | 손 그림 질감, 자연 배경, 따뜻한 수채 | `Studio Ghibli aesthetic, Hayao Miyazaki, hand-drawn animation, soft watercolor background, nostalgic` |
| **新海 誠 (Makoto Shinkai)** | 너의 이름은, 스즈메 | 빛 산란·광선, 감성 하늘, 도시 풍경 | `Makoto Shinkai style, detailed light ray refraction, dramatic cloud sky, melancholic cityscape` |
| **細田 守 (Mamoru Hosoda)** | 썸머워즈, 버블 | 선명하고 깨끗한 디지털 채색, 역동성 | `Mamoru Hosoda style, vibrant clean digital animation, dynamic motion, warm family story` |
| **Kyoto Animation (교토 애니)** | 바이올렛, K-ON | 섬세한 캐릭터 디자인, 부드러운 조명 | `Kyoto Animation style, fluid soft character design, detailed lighting, beautiful backgrounds` |
| **MAPPA** | 체인소맨, 주술회전 | 다크, 고품질 CG+셀 혼합, 강렬한 액션 | `MAPPA studio style, dark cinematic anime, high-quality action, intense atmosphere` |
| **Ufotable** | 귀멸의 칼날, 페이트 | 극도로 정밀한 VFX, 수묵화+CG 융합 | `Ufotable animation style, detailed VFX effects, ink wash and CG blend, spectacular action` |
| **A-1 Pictures** | 페어리테일, 소드아트 | 깔끔하고 밝은 주류 애니 스타일 | `A-1 Pictures anime style, clean bright character design, mainstream shonen aesthetic` |
| **Wit Studio** | 진격의 거인, 스파이 패밀리 | 극적 구도, 강한 명암 | `Wit Studio anime style, dramatic composition, strong contrast lighting, cinematic` |
| **트리거 (Trigger)** | 그렌라간, 킬라킬 | 과장된 역동성, 굵은 선, 강렬한 색 | `Trigger studio anime style, exaggerated dynamic pose, thick outlines, vibrant hyper-stylized` |
| **일류전 (ILCA / PA Works)** | 꽃이 피는 첫걸음 | 섬세한 배경, 은은한 빛, 일상 감성 | `PA Works anime style, delicate background art, soft natural lighting, slice of life` |

---

### H-3. 연대별 애니메이션 스타일 (시대 분위기)

| 연대 | 특징 | 미드저니 키워드 |
|------|------|----------------|
| **70~80년대 레트로** | 굵은 선, 탈포화 색상, 셀 애니 질감 | `1980s retro anime style, cel animation, muted color palette, thick linework, VHS grain` |
| **90년대 클래식** | 손 그림 명암, OVA 감성, 세밀한 눈 | `1990s anime aesthetic, hand-drawn shading, OVA style, detailed large eyes, nostalgic` |
| **2000년대 초** | 디지털 채색 전환기, 선명한 색, 플래시 느낌 | `early 2000s anime style, early digital coloring, bright saturated colors` |
| **2010년대 현대** | 깨끗한 디지털 선묘, 모에 스타일 | `modern anime style 2010s, clean digital linework, moe aesthetic, soft gradient shading` |
| **현재 (2020년대)** | 시네마틱 퀄리티, CG+셀 혼합 | `2020s cinematic anime, hybrid CG and cel shading, theatrical quality, detailed background` |

---

### H-4. 장르별 애니메이션 스타일

| 장르 | 특징 | 미드저니 키워드 |
|------|------|----------------|
| **소년 액션 (Shonen)** | 역동적 포즈, 에너지 이펙트, 강렬한 눈빛 | `shonen anime style, dynamic action pose, energy aura effect, intense expression, battle scene` |
| **소녀 / 마법소녀** | 파스텔, 반짝임, 화려한 의상 | `magical girl anime style, pastel colors, sparkle effects, elaborate costume, shoujo aesthetic` |
| **이세계 / 판타지** | 웅장한 배경, 판타지 의상, 마법 이펙트 | `isekai fantasy anime style, grand fantasy landscape, ornate armor, magical particle effects` |
| **사이버펑크 / SF** | 네온 도시, 기계 신체, 어두운 분위기 | `cyberpunk anime, neon-lit dystopian city, cyborg character, dark atmospheric rain, Ghost in the Shell` |
| **슬라이스 오브 라이프** | 일상, 부드러운 빛, 교실/카페 배경 | `slice of life anime, soft warm sunlight, everyday school scene, cozy café, gentle atmosphere` |
| **공포 / 다크 판타지** | 암울한 색조, 왜곡된 형태, 심리적 공포 | `dark anime horror style, muted desaturated tones, distorted surreal forms, psychological dread` |
| **스포츠 애니** | 땀방울, 역동적 움직임, 집중하는 눈 | `sports anime style, intense concentration, motion blur, sweat drops, dynamic moment` |
| **미소녀 / 모에** | 크고 반짝이는 눈, 파스텔, 귀여운 표정 | `moe anime style, large sparkly eyes, soft pastel tones, cute expression, chibi proportions` |

---

### H-5. 서양 애니메이션 스타일

| 스튜디오 / 시리즈 | 특징 | 미드저니 키워드 |
|-----------------|------|----------------|
| **Pixar** | 3D 사실감+과장, 감성적 스토리텔링 | `Pixar animation style, 3D render, expressive character design, cinematic lighting, emotional` |
| **Disney Classic** | 유려한 동작, 뮤지컬 감성, 복잡한 배경 | `classic Disney animation style, fluid hand-drawn motion, lush painted backgrounds, fairy tale` |
| **Spider-Man: Into the Spider-Verse** | 만화 점망, 굵은 윤곽선, 속도선 | `Spider-Man Spider-Verse style, comic halftone dots, bold outlines, action speed lines, kinetic` |
| **Arcane (넷플릭스)** | 유화+디지털 혼합, 어두운 스팀펑크 | `Arcane Netflix animation style, oil painting texture, dark steampunk city, cinematic grit` |
| **Cartoon Network / 어드벤처 타임** | 플랫 디자인, 단순한 선, 파스텔 | `Adventure Time cartoon style, flat design, simple rounded shapes, pastel background` |
| **Rick and Morty** | 조잡하면서도 SF적, 형광색, 기이한 형태 | `Rick and Morty cartoon style, crude animation, neon alien world, bizarre creatures` |
| **밤의 카페 테라스 느낌 (Ghiblicore)** | 유럽 골목, 따뜻한 조명, 아늑함 | `Ghiblicore aesthetic, cozy European alley, warm lantern light, nostalgic whimsical` |

---

### H-6. 기법별 애니메이션 키워드

| 기법 | 한국어 설명 | 미드저니 키워드 |
|------|------------|----------------|
| **셀 애니메이션** | 손으로 그린 셀 느낌 | `cel animation style, hand-drawn cel shading, visible linework, flat color fills` |
| **수묵 애니** | 동양화+애니 결합 | `ink wash anime style, sumi-e inspired, brush linework, black and white with color accent` |
| **수채 배경** | 지브리 배경화 느낌 | `watercolor background painting, soft wash, hand-painted anime environment` |
| **치비** | 극단적으로 귀여운 비율 | `chibi anime style, super deformed SD, oversized head, tiny body, cute expression` |
| **린·아트 (Line Art)** | 채색 없이 선만으로 | `anime line art, clean ink outline, black and white sketch, manga-style drawing` |
| **CGI 애니** | 3D CG 렌더링 애니 | `3D CGI anime style, toon shading, smooth render, modern animation quality` |
| **레트로 픽셀 스프라이트** | 16비트 게임 캐릭터 | `pixel art sprite, 16-bit RPG character design, retro game animation, JRPG style` |
| **에치 스케치 / 낙서체** | 의도적으로 거칠게 | `rough sketch anime style, scratchy linework, notebook doodle aesthetic` |

---

### H-7. 유명 캐릭터 디자이너 / 아트 디렉터

| 인물 | 대표 작품 | 미드저니 키워드 |
|------|----------|----------------|
| **久保 帯人 (Kubo Tite)** | 블리치 | `Tite Kubo character design, stylish fashion, sharp angular features, detailed costume` |
| **岸本 斉史 (Kishimoto)** | 나루토 | `Masashi Kishimoto style, expressive ninja character, dynamic battle pose, manga detail` |
| **尾田 栄一郎 (Oda)** | 원피스 | `Eiichiro Oda One Piece style, exaggerated proportions, vibrant pirate adventure, bold outlines` |
| **富樫 義博 (Togashi)** | 헌터×헌터 | `Yoshihiro Togashi design, intense character expression, strategic battle scene` |
| **藤島 康介 (Fujishima)** | 아아 여신님 | `Kosuke Fujishima character design, elegant goddess, detailed ornate clothing, soft light` |
| **吉田 明彦 (Yoshida)** | 파이널 판타지 12, 베이그란트 스토리 | `Akihiko Yoshida character design, armored fantasy warrior, watercolor concept art, JRPG` |
| **堀口 悠紀子 (Horiguchi)** | 케이온, 바이올렛 에버가든 | `Yukiko Horiguchi character design, soft delicate features, KyoAni style, emotional expression` |

---

### H-8. 완성 프롬프트 — 애니메이션 직군별 예시

```
# 기본 애니 인물 (niji 6 사용)
young woman with silver long hair, standing on a rain-soaked city street at night,
Makoto Shinkai style, neon light reflections, melancholic emotional atmosphere,
cinematic wide shot, detailed light refraction
--niji 6 --ar 9:16 --s 700
```

```
# 공연/댄스 컨셉 (동작 표현)
contemporary dancer in flowing white dress, mid-leap on stage,
Kyoto Animation style, soft dramatic spotlight, elegant motion blur on fabric,
close-up dynamic angle, emotional performance
--niji 6 --ar 2:3 --s 600
```

```
# 판타지 공간 무드보드 (공간기획자용)
ancient Japanese shrine deep in a misty forest, stone lanterns glowing,
Studio Ghibli aesthetic, hand-painted watercolor background,
soft dawn light filtering through cedar trees, magical atmosphere
--niji 6 --ar 16:9 --s 800
```

```
# 레트로 감성 컨셉
two friends sitting on a rooftop at sunset, summer breeze, cicadas,
1990s OVA anime style, cel animation, nostalgic muted warm tones,
soft film grain, hand-drawn quality
--niji 6 --ar 16:9 --s 500
```

```
# 다크 사이버펑크 (영상 컨셉 아트)
lone figure in a rain-soaked neon-lit alley, cybernetic arm visible,
Ghost in the Shell aesthetic, Ufotable VFX detail,
dark atmospheric fog, teal and amber neon reflections
--niji 6 --ar 21:9 --s 750
```

```
# 치비 / SNS 스티커용
cute chibi character waving, wearing a camera around neck,
chibi anime style, bright pastel background, sparkle effects,
clean simple linework, sticker design
--niji 6 --ar 1:1 --s 300
```

---

## 🧑‍🎨 G. 유명 아티스트 · 건축가 · 크리에이터 레퍼런스

> **사용법**: `in the style of [이름]` 또는 `by [이름]` 형식으로 프롬프트에 추가
> **팁**: 이름 단독보다 `[이름] + [사조/기법]` 조합 시 정확도 상승
> **예시**: `in the style of Tadao Ando, smooth concrete, interplay of light and shadow`

---

### G-1. 화가 (Painters) — 서양

| 아티스트 | 사조 | 미드저니 키워드 | 효과 |
|----------|------|----------------|------|
| **Claude Monet** | 인상파 | `in the style of Claude Monet, Impressionism, soft brushstrokes, dappled light` | 빛과 색의 순간, 수면·정원 |
| **Vincent van Gogh** | 후기인상파 | `in the style of Van Gogh, swirling brushstrokes, vivid color, impasto` | 소용돌이치는 역동적 자연 |
| **Rembrandt** | 바로크 | `in the style of Rembrandt, chiaroscuro, dramatic shadow, oil painting portrait` | 극적 명암, 인물 초상화 |
| **Johannes Vermeer** | 바로크 | `Vermeer lighting, Dutch interior, soft window light, intimate scene` | 정밀한 실내·부드러운 자연광 |
| **Gustav Klimt** | 상징주의 | `in the style of Gustav Klimt, gold leaf pattern, decorative ornate swirls, Symbolism` | 황금 장식·관능적 인물화 |
| **Egon Schiele** | 표현주의 | `in the style of Egon Schiele, angular lines, raw Expressionism, contour drawing` | 날카로운 윤곽·심리적 긴장감 |
| **Pablo Picasso** | 큐비즘 | `in the style of Picasso, Cubism, fragmented perspective, bold geometric colors` | 다시점·기하학적 분해 |
| **Salvador Dalí** | 초현실주의 | `in the style of Salvador Dali, Surrealism, melting forms, dreamlike desert landscape` | 초현실적 꿈·기묘한 조합 |
| **René Magritte** | 초현실주의 | `in the style of Magritte, conceptual Surrealism, ordinary objects in strange context` | 익숙한 것의 낯선 배치 |
| **Wassily Kandinsky** | 추상주의 | `in the style of Kandinsky, abstract expressionism, geometric shapes, vibrant color composition` | 추상 기하학·음악적 색채 |
| **Mark Rothko** | 색면 추상 | `in the style of Mark Rothko, color field painting, large soft rectangles, emotional depth` | 거대한 색면·명상적 감정 |
| **Jean-Michel Basquiat** | 신표현주의 | `in the style of Basquiat, neo-expressionism, graffiti-like text, raw energy, chaotic lines` | 그래피티·날 것의 에너지 |
| **Andy Warhol** | 팝아트 | `in the style of Andy Warhol, Pop Art, bold colors, repeated silkscreen imagery` | 팝적 반복·실크스크린 |
| **Roy Lichtenstein** | 팝아트 | `in the style of Roy Lichtenstein, comic book halftone dots, bold outlines, primary colors` | 만화 점망·굵은 윤곽선 |
| **Yayoi Kusama** | 전위 | `in the style of Yayoi Kusama, polka dots, infinity room, psychedelic repetitive pattern` | 무한 도트·몰입형 공간 |
| **Edward Hopper** | 사실주의 | `in the style of Edward Hopper, lonely urban scene, warm sunlight through window, stillness` | 고독한 도시·강한 자연광 |
| **Banksy** | 스트릿 아트 | `Banksy-style stencil art, urban wall, social commentary, black and white` | 스텐실·사회 비판 |

### G-2. 화가 (Painters) — 동양

| 아티스트 | 국적 | 사조 | 미드저니 키워드 |
|----------|------|------|----------------|
| **Katsushika Hokusai (호쿠사이)** | 일본 | 우키요에 | `in the style of Hokusai, ukiyo-e woodblock print, The Great Wave, bold outlines, flat color` |
| **Hiroshige (히로시게)** | 일본 | 우키요에 | `in the style of Hiroshige, ukiyo-e landscape, rain, perspective, soft gradient sky` |
| **Kim Whanki (김환기)** | 한국 | 추상 | `in the style of Kim Whanki, Korean abstract art, dots and lines, subtle blue and white tones` |
| **Park Seo-bo (박서보)** | 한국 | 단색화 | `in the style of Park Seo-bo, Dansaekhwa, monochromatic, textured hanji paper surface` |
| **Lee Ufan (이우환)** | 한국 | 모노하 | `in the style of Lee Ufan, minimal brushstroke, raw stone and steel, void space` |

---

### G-3. 일러스트레이터 & 그래픽 디자이너

| 아티스트 | 특징 | 미드저니 키워드 |
|----------|------|----------------|
| **Alphonse Mucha** | 아르누보 포스터, 유기적 곡선, 꽃 장식 | `in the style of Alphonse Mucha, Art Nouveau, ornate floral border, pastel decorative poster` |
| **Norman Rockwell** | 미국 일상, 따뜻한 사실주의 | `in the style of Norman Rockwell, Saturday Evening Post cover, warm storytelling illustration` |
| **Moebius (Jean Giraud)** | SF 만화, 세밀한 라인, 광활한 풍경 | `in the style of Moebius, sci-fi comic illustration, intricate linework, vast alien desert` |
| **Hayao Miyazaki** | 지브리, 자연, 따뜻한 손 그림 | `in the style of Studio Ghibli, Hayao Miyazaki, hand-drawn animation, lush green nature` |
| **Makoto Shinkai** | 빛 산란, 감성 도시 하늘 | `in the style of Makoto Shinkai, light ray refraction, detailed emotional sky, anime realism` |
| **Yoji Shinkawa** | 메탈기어 잉크 스케치, 기계 전사 | `in the style of Yoji Shinkawa, ink wash concept art, mechanical warrior, monochrome sketch` |
| **Yoshitaka Amano** | 파이널판타지, 수묵+아르누보 | `in the style of Yoshitaka Amano, ethereal fantasy illustration, ink and watercolor, delicate` |
| **Ralph McQuarrie** | 스타워즈 오리지널 컨셉 아트 | `in the style of Ralph McQuarrie, Star Wars concept art, retro sci-fi, painted environment` |
| **Syd Mead** | 블레이드러너, 크롬 미래도시 | `in the style of Syd Mead, retro-futuristic cityscape, chrome reflections, neo-noir` |

---

### G-4. 사진작가 (Photographers)

| 사진작가 | 대표 스타일 | 미드저니 키워드 | 최적 용도 |
|----------|------------|----------------|----------|
| **Annie Leibovitz** | 극적 포트레이트, 풍부한 색 스테이징 | `in the style of Annie Leibovitz, dramatic narrative portrait, rich color staging, celebrity` | 인물 포트레이트 |
| **Richard Avedon** | 미니멀 패션, 흰 배경 초상 | `in the style of Richard Avedon, minimalist portrait, stark white background, high fashion` | 패션·에디토리얼 |
| **Ansel Adams** | 흑백 대자연, 극명한 명암 | `in the style of Ansel Adams, black and white landscape, high contrast, majestic mountain, Zone System` | 자연 풍경 |
| **Henri Cartier-Bresson** | 결정적 순간, 스트릿 | `in the style of Henri Cartier-Bresson, decisive moment, geometric street composition, candid` | 스트릿·다큐 |
| **Sebastião Salgado** | 흑백 인도주의 다큐 | `in the style of Salgado, black and white documentary, humanistic drama, worker portrait` | 사회적 다큐 |
| **Helmut Newton** | 강렬한 패션, 관능적 흑백 | `in the style of Helmut Newton, bold fashion photography, dramatic black and white, powerful` | 하이패션 |
| **Steve McCurry** | 선명한 색채, 감성 인물 | `in the style of Steve McCurry, vivid color portrait, emotional, National Geographic style` | 여행·인물 |
| **Martin Schoeller** | 극단적 클로즈업 | `in the style of Martin Schoeller, extreme close-up portrait, ultra sharp, direct gaze` | 인물 클로즈업 |
| **Iwan Baan** | 현대 건축 다큐, 인간 스케일 | `in the style of Iwan Baan, architectural documentary photography, human scale, natural light` | 건축 사진 |
| **Hélène Binet** | 흑백 추상 건축 디테일 | `in the style of Hélène Binet, moody monochrome architectural detail, abstract shadow play` | 건축 추상 |
| **Michael Kenna** | 장노출 미니멀 흑백 풍경 | `in the style of Michael Kenna, long exposure, minimalist black and white landscape, fog` | 미니멀 풍경 |
| **Gregory Crewdson** | 연출된 교외 초현실 장면 | `in the style of Gregory Crewdson, cinematic staged suburban scene, eerie artificial light` | 시네마틱 연출 |

---

### G-5. 건축가 (Architects)

> 건축가 이름은 **공간·구조·재료의 시각 언어**를 통째로 불러옵니다.

| 건축가 | 국적 | 대표 특징 | 미드저니 키워드 |
|--------|------|----------|----------------|
| **Tadao Ando** | 일본 | 노출 콘크리트, 빛과 그림자 | `in the style of Tadao Ando, smooth exposed concrete, interplay of light and shadow, minimalist chapel` |
| **Kengo Kuma** | 일본 | 목재·자연 소재·격자 레이어 | `in the style of Kengo Kuma, wooden lattice screen, organic material, nature integration` |
| **Zaha Hadid** | 영국/이라크 | 유동적 곡선, 미래 파라메트릭 | `in the style of Zaha Hadid, fluid parametric curves, futuristic sweeping form, dynamic` |
| **Frank Lloyd Wright** | 미국 | 프레리 스타일, 수평선, 자연 소재 | `in the style of Frank Lloyd Wright, organic architecture, horizontal Prairie lines, natural wood` |
| **Le Corbusier** | 스위스 | 순수 기능주의, 필로티, 흰 면 | `in the style of Le Corbusier, modernist white walls, pilotis, flat roof, open plan` |
| **Renzo Piano** | 이탈리아 | 빛 충만한 유리 구조, 정밀 디테일 | `in the style of Renzo Piano, transparent glass atrium, light-filled, precision engineering` |
| **BIG (Bjarke Ingels)** | 덴마크 | 유쾌하고 혁신적, 지속가능 | `in the style of BIG Bjarke Ingels, playful innovative sustainable architecture, high concept` |
| **Peter Zumthor** | 스위스 | 감각적 재료, 침묵의 공간 | `in the style of Peter Zumthor, atmospheric architecture, sensory materiality, silent contemplative space` |
| **SANAA (Sejima + Nishizawa)** | 일본 | 초박형, 투명성, 흐르는 공간 | `in the style of SANAA, ultra-thin white walls, transparent flowing space, delicate lightweight` |
| **Diébédo Francis Kéré** | 부르키나파소 | 지역 소재, 자연 통풍, 사회적 | `in the style of Francis Kere, earthen architecture, community space, natural ventilation` |
| **Brutalism** | (사조) | 날 것의 콘크리트, 웅장한 블록 | `Brutalist architecture, raw exposed concrete, monolithic imposing structure, harsh shadow` |
| **Googie** | (사조) | 레트로 미래주의, 로켓 지붕, 네온 | `Googie architecture, retro-futuristic 1950s diner, angular roof, neon sign, Jetsons style` |

---

### G-6. 영화감독 · 시네마토그래퍼

> `"cinematic"` 대신 감독 이름을 넣으면 색감·구도·분위기가 훨씬 구체적으로 나옵니다.

| 감독 | 시각 특징 | 미드저니 키워드 |
|------|----------|----------------|
| **Wes Anderson** | 파스텔 대칭, 평면 구도, 미니어처 감성 | `Wes Anderson aesthetic, symmetrical composition, pastel color palette, flat overhead angle` |
| **Christopher Nolan** | 대규모 현실, 극적 조명, IMAX | `Christopher Nolan cinematography, grand practical scale, dramatic high-contrast lighting` |
| **Stanley Kubrick** | 일점투시 복도, 냉정한 대칭 | `Stanley Kubrick one-point perspective, symmetrical hallway, cold precise composition` |
| **Ridley Scott** | 앰버·틸 색보정, 안개, 서사 | `Ridley Scott cinematography, amber and teal grade, epic atmospheric fog, Blade Runner` |
| **Wong Kar-wai** | 아웃포커스 동작, 따뜻한 네온, 고독 | `Wong Kar-wai aesthetic, warm neon blur, motion smear, melancholic Hong Kong night` |
| **Denis Villeneuve** | 광활한 스케일, 탈포화, 경외감 | `Denis Villeneuve cinematography, vast alien landscape, desaturated palette, sense of awe` |
| **Tim Burton** | 고딕 동화, 비틀린 형태, 고대비 | `Tim Burton aesthetic, gothic fairy tale architecture, twisted form, high contrast black white` |
| **Terrence Malick** | 골든아워, 핸드헬드, 명상적 | `Terrence Malick cinematography, golden hour natural light, handheld intimate, contemplative nature` |
| **Alfonso Cuarón** | 장시간 원테이크, 공간감 | `Alfonso Cuarón cinematography, long single take, spatial depth, immersive environment` |
| **Spike Jonze** | 감성적 현실+판타지 혼합 | `Spike Jonze visual style, emotional surreal everyday, warm intimate, Her aesthetic` |

---

### G-7. 조각가 · 설치 아티스트

| 아티스트 | 대표 특징 | 미드저니 키워드 |
|----------|----------|----------------|
| **Auguste Rodin** | 역동적 인체, 거친 표면, 청동 | `in the style of Rodin, bronze sculpture, dynamic human form, rough textured surface` |
| **Constantin Brancusi** | 극도로 단순화된 유기적 형태 | `in the style of Brancusi, abstract sculpture, smooth organic polished form, marble` |
| **Olafur Eliasson** | 빛·물·자연 소재 설치 | `Olafur Eliasson installation art, light and water environment, immersive natural phenomena` |
| **James Turrell** | 빛 자체가 작품, 몰입형 색광 | `James Turrell light installation, sky space, gradient color light chamber, minimal room` |
| **Christo** | 거대 포장, 풍경+건축 래핑 | `Christo installation, wrapped monumental building, translucent fabric, landscape scale` |
| **Jeff Koons** | 초고광택 거울 조각, 풍선 오브제 | `in the style of Jeff Koons, balloon animal sculpture, mirror-polished chrome, pop` |
| **Louise Bourgeois** | 대형 거미 조각, 심리적 서사 | `in the style of Louise Bourgeois, giant spider sculpture Maman, dark psychological space` |

---

### G-8. 아티스트 스타일 조합 — 직군별 완성 프롬프트

```
# 공간기획자 — 명상적 전시 공간
minimalist concrete chapel interior with a single skylight,
in the style of Tadao Ando,
architectural photography by Hélène Binet,
soft monochrome light, absolute silence and depth
--ar 2:3 --v 6.1 --s 400 --no people, text, furniture
```

```
# 사진작가 — 패션 에디토리얼
elegant woman in sculptural white linen dress,
in the style of Richard Avedon,
minimalist stark white background, dramatic side lighting,
35mm film grain, sharp focus on eyes
--ar 4:5 --v 6.1 --style raw --s 250 --no watermark, text
```

```
# 댄서 — 공연 컨셉 이미지
solo dancer mid-leap on empty dark stage,
Wes Anderson symmetrical composition meets Gustav Klimt gold ornamental costume,
dramatic single spotlight from above, deep shadow
--ar 2:3 --v 6.1 --s 750
```

```
# 영상제작자 — 시네마틱 스틸
abandoned warehouse corridor at dusk, dust particles in a shaft of amber light,
Denis Villeneuve cinematography, desaturated teal and amber grade,
atmospheric fog, 35mm film grain, anamorphic lens
--ar 21:9 --v 6.1 --style raw --s 350
```

```
# 미디어아티스트 — 추상 설치 컨셉
infinite ocean of glowing jellyfish, lone figure floating weightlessly,
Yayoi Kusama infinity room meets James Turrell color light field,
bioluminescent blue-green, surreal dreamlike atmosphere
--ar 16:9 --v 6.1 --s 900 --c 20
```

---

## 🎨 A. 화풍 / 매체 (Medium & Style)

### A-1. 회화 기법 (Painting Techniques)
| 키워드 | 한국어 설명 | 시각적 특징 | 추천 --s 값 |
|--------|------------|------------|-------------|
| `oil painting` | 유화 | 두꺼운 붓터치, 풍부한 색감 | 600~800 |
| `acrylic palette knife, impasto` | 팔레트 나이프 아크릴 | 두껍고 거친 물감 질감 | 700~900 |
| `watercolor, loose brushstrokes` | 수채화 | 번지는 색상, 부드러운 경계 | 400~600 |
| `gouache, flat illustration` | 과슈 | 불투명하고 선명한 색면 | 300~500 |
| `charcoal sketch` | 목탄 스케치 | 흑백, 거친 선 질감 | 200~400 |
| `ink wash painting, sumi-e` | 수묵화 | 동양화 스타일, 여백 | 500~700 |
| `pastel drawing, soft texture` | 파스텔 | 부드럽고 분감 있는 색감 | 400~600 |

### A-2. 사진 스타일 (Photography Styles)
| 키워드 | 한국어 설명 | 시각적 특징 | 추천 파라미터 |
|--------|------------|------------|--------------|
| `editorial photography` | 에디토리얼 사진 | 패션지 스타일, 세련됨 | `--style raw --s 200` |
| `documentary photography` | 다큐멘터리 | 자연스럽고 날 것 그대로 | `--style raw --s 100` |
| `polaroid-style, vintage instant film` | 폴라로이드 | 빈티지, 약간 탈색됨 | `--s 400` |
| `35mm film grain, analog photography` | 35mm 필름 | 필름 그레인, 따뜻한 색감 | `--s 300` |
| `street photography, candid` | 스트릿 포토 | 생동감, 비연출 | `--style raw --s 150` |
| `architectural photography` | 건축 사진 | 직선, 광각, 기하학 | `--style raw --s 200` |
| `product photography, studio` | 제품 사진 | 깔끔한 배경, 선명한 조명 | `--style raw --s 100` |

### A-3. 일러스트 & 디지털 아트
| 키워드 | 한국어 설명 | 시각적 특징 | 추천 --s 값 |
|--------|------------|------------|-------------|
| `pixel art, 16-bit retro arcade` | 픽셀 아트 | 복고풍, 정사각형 픽셀 | 200~400 |
| `flat design illustration` | 플랫 일러스트 | 그림자 없음, 단순 색면 | 300~500 |
| `concept art, fantasy` | 컨셉 아트 | 게임/영화 컨셉 | 600~800 |
| `anime style, manga` | 애니메이션 | `--niji 6` 모델 권장 | 500~700 |
| `children's book illustration` | 동화책 일러스트 | 포근하고 단순한 선 | 400~600 |
| `comic book style, halftone` | 만화책 | 두꺼운 윤곽선, 점망 | 500~700 |
| `isometric illustration` | 아이소메트릭 | 등각 투시 건축/공간 | 300~500 |
| `risograph print` | 리소그래프 | 약간 어긋난 2~3색 인쇄 느낌 | 600~800 |

### A-4. 예술 사조 (Art Movements)
| 키워드 | 한국어 | 대표 특징 |
|--------|--------|----------|
| `Impressionism` | 인상파 | 빛과 색의 순간 포착, 부드러운 터치 |
| `Surrealism` | 초현실주의 | 꿈 같은 비현실적 조합 |
| `Art Nouveau` | 아르누보 | 유기적 곡선, 자연 모티프 |
| `Art Deco` | 아르데코 | 기하학적 패턴, 황금색 |
| `Expressionism` | 표현주의 | 감정 강조, 왜곡된 형태 |
| `Baroque` | 바로크 | 극적인 명암, 화려한 장식 |
| `Minimalism` | 미니멀리즘 | 극도로 단순, 여백 강조 |
| `Pop Art` | 팝 아트 | 밝은 원색, 대중문화 이미지 |

---

## 💡 B. 조명 & 분위기 (Lighting & Mood)

| 키워드 | 한국어 설명 | 효과 |
|--------|------------|------|
| `golden hour lighting` | 골든아워 | 따뜻한 황금빛, 낮은 각도 |
| `blue hour, twilight` | 블루아워 | 파란 보랏빛 새벽/황혼 |
| `cinematic lighting` | 시네마틱 조명 | 드라마틱한 명암 대비 |
| `Rembrandt lighting` | 렘브란트 조명 | 한쪽 눈 아래 삼각형 빛 |
| `soft diffused light` | 확산광 | 그림자 없이 부드럽게 |
| `dramatic chiaroscuro` | 키아로스쿠로 | 극단적 명암 대비 |
| `neon lighting, cyberpunk` | 네온 조명 | 핑크/파랑 빛 반사 |
| `bioluminescent glow` | 생물 발광 | 신비롭고 은은한 빛 |
| `flat lighting, overcast` | 평면 조명 | 그림자 최소화 |
| `backlit, rim light` | 역광/림라이트 | 실루엣, 가장자리 빛 |
| `moody, atmospheric fog` | 안개 분위기 | 몽환적, 깊이감 |
| `ethereal, dreamlike` | 꿈 같은 분위기 | 비현실적이고 부드러운 |

---

## 📷 C. 카메라 · 렌즈 · 촬영 기법 · 앵글 · 영상

---

### C-1. 프레이밍 & 화각 (Shot Size / Framing)

> 인물을 어디까지 잡느냐에 따라 분위기가 완전히 바뀝니다.

| 키워드 | 한국어 | 범위 | 미드저니 효과 | 추천 용도 |
|--------|--------|------|-------------|----------|
| `extreme wide shot, EWS` | 익스트림 와이드 | 풍경 속 점처럼 작은 인물 | 광활한 스케일, 고독감 | 풍경·건축·컨셉 아트 |
| `wide shot, full shot` | 와이드 / 풀샷 | 머리끝~발끝 전신 | 인물의 전체 의상·포즈 확인 | 패션·무대·캐릭터 디자인 |
| `cowboy shot` | 카우보이 샷 | 무릎 위부터 | 서부극 유래, 역동적 | 액션·스트릿·인물 |
| `medium shot, MS` | 미디엄 샷 | 허리 위부터 (토르소) | 인물과 배경 균형 | 인터뷰·대화 장면 |
| `medium close-up, MCU` | 미디엄 클로즈업 | 가슴 위부터 | 표정+어깨선, 적당한 친밀감 | 포트레이트·SNS |
| `close-up, CU` | 클로즈업 | 얼굴 전체 | 표정·감정에 집중 | 감성 포트레이트·영화 |
| `extreme close-up, ECU` | 익스트림 클로즈업 | 눈·입술·손 등 일부 | 극단적 디테일, 강렬한 임팩트 | 뷰티·감성·공포 |
| `bust shot` | 흉상 샷 | 어깨~머리 | 클래식 초상화 비율 | 포트레이트·프로필 |
| `torso shot` | 토르소 샷 | 가슴~머리 | 의상 디테일+표정 동시 | 패션·에디토리얼 |

---

### C-2. 카메라 앵글 & 구도 (Camera Angle & Composition)

| 키워드 | 한국어 | 미드저니 키워드 | 효과 |
|--------|--------|----------------|------|
| **Eye level** | 눈높이 | `eye level camera angle, natural perspective` | 가장 자연스러운 시선, 기본 |
| **Low angle** | 로우 앵글 | `low angle shot, looking up, heroic perspective` | 위압감·영웅적·권위적 |
| **High angle** | 하이 앵글 | `high angle shot, looking down` | 피사체를 작게·연약하게 |
| **Bird's eye** | 부감 (탑뷰) | `bird's eye view, top-down aerial view` | 패턴·구조·지형 강조 |
| **Worm's eye** | 개미 시점 | `worm's eye view, extreme low angle from ground` | 극단적 앙각, 건축·나무 |
| **Dutch angle / Tilt** | 더치 앵글 (기울임) | `Dutch angle, tilted camera, dynamic diagonal composition` | 불안감·긴장감·역동성 |
| **Over-the-shoulder** | 오버더숄더 | `over-the-shoulder shot, OTS` | 대화 장면, 관음적 시선 |
| **POV** | 1인칭 시점 | `POV shot, first person perspective` | 몰입감, VR 느낌 |
| **Overhead flat lay** | 플랫레이 (탑다운) | `flat lay, overhead arrangement, top-down product shot` | 제품·음식·소품 배치 |

#### 구도 법칙 키워드

| 키워드 | 한국어 | 효과 |
|--------|--------|------|
| `rule of thirds` | 3분할 법칙 | 피사체를 교차점에 배치, 안정적 |
| `golden ratio, golden spiral` | 황금 비율 | 나선형 시선 유도, 클래식 미학 |
| `symmetrical composition` | 대칭 구도 | Kubrick·Anderson 스타일, 정돈된 느낌 |
| `leading lines` | 유도선 | 길·기찻길·복도 등으로 시선 집중 |
| `centered composition` | 중앙 배치 | 피사체를 정중앙에, 강한 시선 고정 |
| `negative space` | 여백 활용 | 피사체 주변 여백으로 고립감·미니멀 |
| `frame within a frame` | 프레임 속 프레임 | 문·창문·아치를 통해 피사체 강조 |
| `dynamic diagonal` | 대각선 구도 | 에너지·움직임 느낌 |

---

### C-3. 렌즈 & 초점 (Lens & Focus)

| 키워드 | 초점거리 | 한국어 | 특성 | 최적 용도 |
|--------|---------|--------|------|----------|
| `14mm ultra-wide` | 14mm | 초광각 | 극단적 원근 왜곡, 넓은 시야 | 건축 내부·풍경·설치 |
| `24mm wide angle` | 24mm | 광각 | 넓은 화각, 적당한 왜곡 | 건축·공간·환경 인물 |
| `35mm lens` | 35mm | 준광각 | 자연스러운 시야, 스트릿 표준 | 스트릿·다큐·일상 |
| `50mm lens` | 50mm | 표준 렌즈 | 인간 시야 가장 유사 | 범용·자연스러운 인물 |
| `85mm portrait lens` | 85mm | 인물 표준 | 아름다운 배경 분리, 왜곡 최소 | 인물 포트레이트 |
| `105mm lens` | 105mm | 중망원 | 피사체 압축, 부드러운 보케 | 인물·제품 |
| `135mm lens` | 135mm | 망원 | 강한 배경 압축, 극도로 얕은 심도 | 인물·감성 |
| `200mm+ telephoto` | 200mm+ | 초망원 | 피사체 극단적 압축, 멀리서 관찰 | 야생·스포츠·관음적 |
| `macro lens` | 매크로 | 접사 렌즈 | 극도로 가까운 디테일 | 꽃·곤충·텍스처 |
| `fisheye lens` | 어안 | 어안 렌즈 | 180도 이상 왜곡 시야 | 실험적·스케이트·액션 |
| `tilt-shift lens` | 틸트시프트 | 미니어처 효과 렌즈 | 실제 풍경을 미니어처처럼 | 건축·도시·장난감 느낌 |
| `anamorphic lens` | 아나모픽 | 영화용 렌즈 | 가로 렌즈 플레어, 시네마틱 타원 보케 | 영화·뮤비·시네마틱 |

#### 초점 효과

| 키워드 | 한국어 | 효과 |
|--------|--------|------|
| `shallow depth of field, bokeh` | 아웃포커스 / 보케 | 피사체만 선명, 배경 원형 흐림 |
| `deep depth of field` | 팬포커스 | 전경~배경 모두 선명 |
| `soft focus` | 소프트 포커스 | 전체적으로 부드럽게, 몽환적 |
| `selective focus` | 셀렉티브 포커스 | 특정 부분만 극도로 선명 |
| `rack focus blur` | 초점 이동 블러 | 전경↔배경 포커스 전환 흔적 |
| `lens blur, out of focus foreground` | 전경 흐림 | 앞에 흐린 물체로 깊이감 |

---

### C-4. 카메라 기종별 특성 (Camera Body Reference)

> 카메라 이름을 프롬프트에 넣으면 해당 기종의 **색재현·선명도·노이즈 특성**이 반영됩니다.

#### 디지털 카메라

| 키워드 | 브랜드 | 특성 | 미드저니 효과 |
|--------|--------|------|-------------|
| `shot on Sony A7R IV` | Sony | 고해상도 6100만 화소, 선명, 현대적 색감 | 극도로 디테일한 선명 사진 |
| `shot on Canon EOS R5` | Canon | 부드러운 스킨톤, 자연스러운 색감 | 따뜻하고 자연스러운 인물 |
| `shot on Nikon Z9` | Nikon | 정확한 색재현, 높은 다이나믹 레인지 | 정밀한 풍경·건축 |
| `shot on Fujifilm X-T5` | Fujifilm | 필름 시뮬레이션 색감, 빈티지 톤 | 레트로 필름 느낌 |
| `shot on Leica M11` | Leica | 선명한 해상력, 독일 광학 특유 대비 | 고급스럽고 선명한 스트릿 |
| `shot on Phase One IQ4` | Phase One | 중형 포맷, 극단적 해상도, 색 깊이 | 상업 제품·패션 최고급 퀄리티 |

#### 필름 카메라 & 필름 스톡

| 키워드 | 특성 | 미드저니 효과 |
|--------|------|-------------|
| `shot on Hasselblad 500C` | 중형 필름, 정사각형 포맷, 선명하면서 부드러운 | 클래식 중형 포트레이트 |
| `shot on Mamiya RZ67` | 중형 필름, 인물 특화, 크리미한 보케 | 부드러운 중형 인물 |
| `Kodachrome film` | Kodak 슬라이드 필름, 따뜻하고 선명한 색, 깊은 블루 | 빈티지 여행·다큐 |
| `Kodak Portra 400` | 부드러운 스킨톤, 따뜻한 하이라이트, 파스텔 | 자연스러운 인물·웨딩 |
| `Kodak Ektar 100` | 높은 채도, 선명한 풍경, 미세한 그레인 | 선명하고 포화된 풍경 |
| `Fujifilm Velvia 50` | 극도로 높은 채도, 풍부한 색, 슬라이드 필름 | 극적 풍경·자연 |
| `Fujifilm Superia 400` | 약간 그린/시안 틴트, 일상적 필름 느낌 | 90년대 감성 일상 |
| `Ilford HP5 Plus` | 흑백 필름, 아름다운 그레인, 깊은 톤 | 클래식 흑백·다큐 |
| `CineStill 800T` | 텅스텐 밸런스, 레드 할레이션, 야간 특화 | 야간 네온·시네마틱 |
| `Polaroid 600 film` | 즉석 필름, 탈색된 색감, 흰 테두리 | 빈티지 즉석 사진 |
| `35mm film grain` | 일반 35mm 필름 그레인 | 범용 아날로그 느낌 |
| `medium format film` | 중형 필름 특유의 부드러운 해상도 | 고급 포트레이트 질감 |

#### 특수 촬영 장비

| 키워드 | 설명 | 효과 |
|--------|------|------|
| `GoPro wide angle` | GoPro 액션캠 | 넓은 왜곡 화각, 역동적 액션 |
| `CCTV security camera` | 감시 카메라 | 저화질·그레인·감시 시점 |
| `thermal camera, infrared` | 열화상/적외선 | 열 분포 색상 맵핑 |
| `disposable camera, single-use camera` | 일회용 필름 카메라 | 플래시 과노출, 흐릿한 아날로그 |
| `pinhole camera` | 핀홀 카메라 | 극도로 부드러운 포커스, 비네팅 |
| `daguerreotype` | 다게레오타입 | 초기 사진술, 은판, 골동 느낌 |

---

### C-5. 촬영 기법 & 특수 효과 (Shooting Techniques)

| 키워드 | 한국어 | 미드저니 키워드 | 효과 |
|--------|--------|----------------|------|
| **장노출** | 긴 셔터 빛의 궤적 | `long exposure, light trails, motion blur` | 차량 빛줄기, 물 실크 질감 |
| **이중 노출** | 두 이미지 겹침 | `double exposure, silhouette overlay, dual image blend` | 인물+풍경 합성, 몽환적 |
| **실루엣** | 역광 그림자 | `backlit silhouette, dark figure against bright sky` | 강한 윤곽선, 드라마틱 |
| **렌즈 플레어** | 광원 반사 | `lens flare, sun burst, anamorphic flare` | 따뜻한 느낌, 시네마틱 |
| **프리즘 효과** | 무지개 빛 분산 | `prism effect, rainbow light refraction, crystal overlay` | 몽환적·신비로운 빛 |
| **반사** | 거울·수면 반사 | `reflection, mirror image, water surface reflection` | 대칭·깊이감 |
| **그림자 패턴** | 블라인드·나뭇잎 그림자 | `shadow pattern on face, venetian blinds shadow, dappled light` | 누아르·감성·미스터리 |
| **모션 블러** | 의도적 움직임 흐림 | `motion blur, intentional camera movement, ICM` | 역동성·추상·댄스 |
| **줌 버스트** | 줌 중 촬영 | `zoom burst effect, radial blur, zooming in during shot` | 속도감·집중·에너지 |
| **보케 전경** | 앞의 흐린 빛 원 | `foreground bokeh, out of focus lights in foreground` | 깊이감·로맨틱 |
| **틸트 시프트** | 미니어처 효과 | `tilt-shift photography, miniature effect, selective focus band` | 도시·건축을 장난감처럼 |
| **HDR** | 하이 다이나믹 레인지 | `HDR photography, high dynamic range, vivid detail` | 과장된 디테일·극적 색감 |
| **광적/저광** | 어두운 환경 | `available light only, low-key lighting, candlelight only` | 무드·분위기·은밀한 느낌 |

---

### C-6. 🎬 영상 / 시네마틱 전용 키워드

> 미드저니로 스틸이미지를 생성하되, **영상 컨셉 아트·무드보드·썸네일·스토리보드**에 쓸 때 사용합니다.

#### 영상 포맷 & 화면비

| 키워드 | 포맷 | 미드저니 효과 | 추천 `--ar` |
|--------|------|-------------|------------|
| `cinematic widescreen` | 와이드스크린 | 영화관 레터박스 느낌 | `--ar 21:9` |
| `16:9 broadcast` | TV/유튜브 표준 | 방송·유튜브 프레임 | `--ar 16:9` |
| `4:3 vintage television` | 구형 TV 비율 | 레트로 방송 느낌 | `--ar 4:3` |
| `vertical video, social media` | 세로 영상 (릴스/숏츠) | 모바일 풀스크린 | `--ar 9:16` |
| `IMAX frame` | IMAX 확장 프레임 | 압도적 스케일·광활함 | `--ar 1.43:1` or `--ar 16:9` |

#### 카메라 무빙 & 동작

| 키워드 | 한국어 | 미드저니 키워드 | 효과 |
|--------|--------|----------------|------|
| **트래킹 샷** | 피사체 따라 이동 | `tracking shot, camera following subject, lateral movement` | 역동적 추적 느낌 |
| **달리 줌 (버티고)** | 전진+줌아웃 동시 | `dolly zoom, vertigo effect, background distortion` | 불안감·서스펜스·충격 |
| **스테디캠** | 안정적 이동 | `Steadicam smooth movement, floating camera` | 부드럽고 유려한 동작 |
| **핸드헬드** | 손 떨림 | `handheld camera, shaky cam, documentary feel` | 긴박감·다큐 리얼리즘 |
| **크레인/집 샷** | 위로 올라가며 | `crane shot, jib arm, rising upward camera` | 장엄한 스케일 공개 |
| **드론** | 항공 촬영 | `drone shot, aerial cinematic, sweeping overhead` | 광활한 풍경·건축 |
| **원테이크** | 컷 없이 연속 | `one take, long take, unbroken shot` | 몰입·긴장감 |
| **슬로우 모션** | 고속 촬영 | `slow motion, 120fps, time dilation, frozen moment` | 극적 순간 강조 |
| **타임랩스** | 시간 압축 | `timelapse, time-lapse photography, clouds moving fast` | 시간 경과·변화 |
| **스톱 모션** | 프레임 단위 촬영 | `stop motion animation, claymation, frame by frame` | 수공예적·실험적 |

#### 영상 색보정 & 필름 룩

| 키워드 | 한국어 | 효과 |
|--------|--------|------|
| `teal and orange color grade` | 틸+오렌지 보정 | 할리우드 블록버스터 표준 색보정 |
| `desaturated muted tones` | 탈포화 색감 | 인디영화·다크 드라마 |
| `warm golden grade` | 따뜻한 골드 보정 | 회상·노스탤지어 |
| `cool blue grade` | 차가운 블루 보정 | SF·스릴러·미래 |
| `high contrast noir` | 고대비 느와르 | 흑백 영화·범죄 장르 |
| `bleach bypass` | 블리치 바이패스 | 탈포화+고대비, 전쟁·서사 |
| `cross-processed film` | 크로스 프로세싱 | 비정상적 색 전환, 실험적 |
| `Kodak Vision3 500T` | 영화 필름 스톡 | 시네마틱 텅스텐 밸런스 필름 |
| `16mm film look` | 16mm 영화 필름 | 인디·다큐·거친 그레인 |
| `ARRI Alexa look` | 영화 카메라 | 현대 영화 표준 색감·레인지 |
| `RED camera look` | 영화 카메라 | 극도로 높은 해상도, 선명 |
| `Super 8 footage` | 슈퍼 8mm | 극도로 레트로, 거친 그레인·비네팅 |

#### 영상 전용 완성 프롬프트 예시

```
# 뮤직비디오 컨셉 프레임
female dancer in flowing red dress, spinning in rain, 
tracking shot, slow motion water droplets frozen in mid-air,
anamorphic lens flare, teal and orange color grade,
shot on ARRI Alexa, cinematic depth of field
--ar 21:9 --v 6.1 --style raw --s 400 --no text
```

```
# 다큐멘터리 스틸
elderly fisherman mending nets at dawn harbor,
handheld documentary feel, 16mm film grain,
soft natural golden hour light, Kodak Portra warm skin tones,
in the style of Sebastião Salgado
--ar 16:9 --v 6.1 --style raw --s 200
```

```
# 유튜브 썸네일 (드라마틱)
creator facing camera with shocked expression,
extreme close-up face, dramatic single rim light,
shallow depth of field, neon background blur,
shot on Sony A7R IV, high contrast pop
--ar 16:9 --v 6.1 --s 500 --no text, watermark
```

```
# 시네마틱 랜딩 장면 (드론)
aerial drone shot of lone figure walking on vast salt flat at sunset,
Denis Villeneuve cinematography, IMAX scale,
desaturated amber palette, atmospheric haze,
200mm telephoto compression, epic wide landscape
--ar 21:9 --v 6.1 --style raw --s 350
```

```
# 공포/스릴러 장면 컨셉
dark empty hallway, CCTV security camera perspective,
worm's eye view, Dutch angle, single flickering fluorescent light,
bleach bypass desaturated, high contrast noir,
unsettling atmosphere, found footage feel
--ar 16:9 --v 6.1 --s 600 --no people, text
```

---



## ⚙️ D. 파라미터 조합 치트시트

### D-1. 상황별 추천 파라미터 세트

| 용도 | 추천 파라미터 조합 |
|------|-------------------|
| **SNS 인스타 세로** | `--ar 9:16 --v 6.1 --s 300` |
| **유튜브 썸네일** | `--ar 16:9 --v 6.1 --s 500` |
| **정사각형 피드** | `--ar 1:1 --v 6.1 --s 400` |
| **포트레이트 인물** | `--ar 4:5 --v 6.1 --style raw --s 200` |
| **건축/공간 무드보드** | `--ar 16:9 --v 6.1 --s 300 --no people` |
| **일러스트/아트워크** | `--ar 3:4 --v 6.1 --s 800` |
| **애니메이션 스타일** | `--ar 16:9 --niji 6 --s 600` |
| **초현실/실험적** | `--ar 1:1 --v 6.1 --s 900 --c 50` |

### D-2. 네거티브 프롬프트 기본 세트 (`--no`)

```
# 모든 이미지 공통 기본 세트
--no text, watermark, signature, blurry, low quality, logo

# 인물 사진 추가
--no extra limbs, distorted face, bad anatomy, extra fingers

# 건축/공간 추가
--no people, clutter, dark corners, lens flare

# 일러스트 추가
--no photorealistic, 3D render, uncanny valley
```

---

## 🧩 E. 완성 프롬프트 예시 모음

### E-1. 아티스트 직군별 실전 예시

```
# 사진작가 — 야외 인물 포트레이트
young woman in a white linen dress, 
standing in a lavender field at golden hour, 
editorial photography style, 
warm golden backlight, soft rim lighting, 
85mm f/1.4 lens, shallow bokeh 
--ar 4:5 --v 6.1 --style raw --s 200 --no text, watermark
```

```
# 공간기획자 — 전시 공간 무드보드
minimalist gallery space with high white walls and skylights, 
single large abstract painting, lone visitor silhouette, 
architectural photography style, 
natural diffused daylight, serene and contemplative, 
wide angle 24mm lens, sharp focus 
--ar 16:9 --v 6.1 --s 300 --no people blur text
```

```
# 댄서/안무가 — 공연 컨셉 이미지
solo contemporary dancer mid-leap on an empty dark stage, 
single dramatic spotlight from above, long exposure motion blur on limbs, 
fine art photography style, 
high contrast chiaroscuro, cinematic drama, 
85mm lens, sharp focus on face 
--ar 2:3 --v 6.1 --s 500 --no audience, busy background
```

```
# 영상제작자 — 시네마틱 스틸
abandoned warehouse interior at dusk, 
dust particles floating in a single shaft of light, 
cinematic still photography, 
Ridley Scott cinematography style, amber and teal color grade, 
anamorphic lens flare, 35mm film grain 
--ar 21:9 --v 6.1 --style raw --s 400
```

```
# 미디어아티스트 — 추상 컨셉 아트
infinite fractal ocean of iridescent jellyfish, 
girl floating weightlessly among them, eyes closed, 
surrealist oil painting, impasto texture, 
bioluminescent blue-green glow, ethereal dreamlike atmosphere, 
golden ratio composition, trending on artstation 
--ar 16:9 --v 6.1 --s 900 --c 20
```

### E-2. 화풍 변주 템플릿 (주제 고정, 스타일 변경)

```
# 기본 주제: 고양이 in rainy alley
cat sitting in a rainy alleyway at night [화풍 키워드] --ar 1:1 --v 6.1

→ 유화: oil painting, impasto, Rembrandt lighting --s 700
→ 수채화: delicate watercolor, loose brushstrokes, soft diffused light --s 500
→ 픽셀아트: pixel art, 16-bit retro style, neon palette --s 300
→ 사진: editorial photography, 35mm film grain, neon reflections --style raw --s 200
→ 애니: --niji 6, anime style, Makoto Shinkai inspired --s 600
```

---

## 📋 F. 키워드 복사용 Quick Reference

### 화풍 원라이너 (바로 붙여넣기)
```
acrylic palette knife style, impasto thick texture, dramatic lighting
watercolor illustration, loose brushstrokes, soft pastel tones
oil painting, classical baroque style, chiaroscuro lighting
polaroid-style, vintage instant film, slightly desaturated, nostalgic
editorial photography, 85mm lens, shallow depth of field, golden hour
architectural photography, wide angle, natural diffused light, minimalist
pixel art, 16-bit retro arcade game, flat coloring, neon palette
anime style --niji 6
surrealist oil painting, dreamlike atmosphere, artstation trending
concept art, dark fantasy, dramatic cinematic lighting, highly detailed
```

### 조명 원라이너
```
golden hour backlight, warm amber tones, soft rim lighting
dramatic single spotlight, high contrast shadows, chiaroscuro
soft diffused daylight, overcast sky, even lighting, no harsh shadows
neon lighting, cyberpunk palette, pink and blue reflections
bioluminescent glow, deep ocean blue-green, ethereal
```

### 파라미터 원라이너
```
--ar 9:16 --v 6.1 --s 400 --no text, watermark, blur
--ar 16:9 --v 6.1 --style raw --s 200 --no text, watermark
--ar 1:1 --v 6.1 --s 700 --c 30 --no text
--ar 4:5 --niji 6 --s 600 --no text, watermark
--ar 21:9 --v 6.1 --style raw --s 300 --no text, watermark, logo
```
