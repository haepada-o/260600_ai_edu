# 미드저니: AI 이미지 생성 및 비주얼 디렉션 워크숍
> **대상**: 비주얼 디렉터, 미디어아티스트, 일반 입문자 | **시간**: 2시간 실습 | **핵심**: 미드저니(Midjourney) 공식 프롬프트 구조와 파라미터를 기반으로 기성 디자이너 수준의 컨셉 키아트·스토리보드를 생성하는 실전 가이드.

---

## 📐 미드저니 공식 프롬프트 구조 (6요소)

> Midjourney 공식 권장 순서: **[대상] → [행동/배경] → [화풍/매체] → [조명/분위기] → [카메라/기술 명세] → [파라미터]**

```
[Subject] + [Action/Setting] + [Medium/Style] + [Lighting/Mood] + [Camera/Specs] + [--parameters]
```

| 요소 | 역할 | 예시 |
|------|------|------|
| **Subject** | 핵심 피사체 | `young woman with curly hair` |
| **Action/Setting** | 상황·배경 | `standing in a neon-lit alley at night` |
| **Medium/Style** | 화풍·매체 | `oil painting, impasto texture` |
| **Lighting/Mood** | 조명·분위기 | `cinematic lighting, dramatic shadows` |
| **Camera/Specs** | 렌즈·기술 | `85mm lens, shallow depth of field` |
| **Parameters** | 출력 제어 | `--ar 16:9 --v 6.1 --s 750` |

> [!IMPORTANT]
> **파라미터는 반드시 프롬프트 맨 뒤에 붙입니다.** 중간에 넣으면 무시됩니다.
> 화풍 시트(별도 파일 참조)에서 카테고리별 키워드를 복사해 조합하세요.

---

## 🔧 핵심 파라미터 완전 정리

| 파라미터 | 기능 | 범위/예시 | 언제 쓰나 |
|----------|------|----------|----------|
| `--ar` | 종횡비 (Aspect Ratio) | `16:9` `9:16` `4:5` `1:1` | 항상 지정 |
| `--v` | 모델 버전 | `6.1` (현재 표준) / `--niji 6` (애니) | 항상 지정 |
| `--s` | 예술성 강도 (Stylize) | `0~1000` (기본 100) | 스타일 강조 시 |
| `--c` | 결과 다양성 (Chaos) | `0~100` (기본 0) | 아이디어 탐색 시 |
| `--no` | 제외 키워드 (Negative) | `--no text, blur, watermark` | 불필요 요소 제거 |
| `--seed` | 구성 재현 | 숫자값 | 비슷한 구도 재생성 |
| `--style raw` | 포토리얼 모드 | - | 사진 느낌 강화 |
| `--sref` | 스타일 레퍼런스 | `--sref [이미지 URL]` | 화풍 이미지 고정 |
| `--sw` | 스타일 레퍼런스 강도 | `0~1000` | `--sref`와 함께 사용 |
| `--cref` | 캐릭터 일관성 | `--cref [이미지 URL]` | 동일 캐릭터 연속 생성 |

---

## 📌 비주얼 디렉션 생성 로드맵 (4단계)

이 가이드는 실제 강연 중 해파리(Jellyfish)를 테마로 다양한 예술적 화풍을 연출했던 실습을 기반으로, 공식 프롬프트 구조에 맞게 재설계되었습니다.

---

### Step 1. 화풍(Medium) 선택 및 프롬프트 레이어 쌓기 (20분)

- **판단 (Trigger):** "아름다운 그림 그려줘"처럼 막연하게 요청해서 AI가 기본 3D CG 이미지만 뽑을 때.
- **핵심 원칙:** 공식 가이드에서 **최소 3가지 스타일 레이어를 겹쳐야** 최적 결과가 나온다고 명시.
  > `[매체(Medium)] + [작가/사조(Artist/Style)] + [분위기(Atmosphere)]`

- **화풍 레이어 조합 예시:**

  | 매체 (Medium) | 작가/사조 | 분위기 | 완성 키워드 조합 |
  |---|---|---|---|
  | `acrylic palette knife` | `impasto` | `dramatic lighting` | `acrylic palette knife, impasto texture, dramatic lighting` |
  | `polaroid-style` | `vintage instant film` | `slightly desaturated, nostalgic` | `polaroid-style, vintage instant film, slightly desaturated` |
  | `watercolor` | `loose brushstrokes` | `soft diffused light, airy` | `loose watercolor, soft diffused light, airy atmosphere` |
  | `pixel art` | `16-bit retro arcade` | `flat coloring, neon palette` | `pixel-style, 16-bit retro arcade game, flat coloring` |

- **실전 프롬프트 (강의 시연 예제 — 해파리):**
  ```
  jellyfish and girl inside a glowing water tank, floating freely, 
  acrylic palette knife style, impasto thick texture, golden ratio composition, 
  trending on pixiv, soft bioluminescent lighting 
  --ar 16:9 --v 6.1 --s 750
  ```

> [!TIP]
> 화풍 키워드 전체 목록은 **별도 프롬프트 시트(midjourney_prompt_sheet.md)** 참조

---

### Step 2. 공식 6단 구조로 프롬프트 설계하기 (30분)

- **판단 (Trigger):** 키워드를 쉼표로 나열했더니 AI가 맥락을 무시하고 엉뚱한 이미지를 생성할 때.
- **공식 순서 따라 프롬프트 조립:**

  ```
  # 템플릿
  [피사체 묘사], [행동/배경], [매체/화풍], [조명/분위기], [카메라 스펙] --ar [비율] --v 6.1 --s [강도]
  ```

  ```
  # 실전 예시 (사진작가용 — 야외 인물)
  young woman with dark curly hair, 
  sitting in a golden wheat field at sunset, 
  editorial photography style, 
  golden hour lighting, warm tones, 
  85mm f/1.4 lens, shallow depth of field, soft bokeh 
  --ar 4:5 --v 6.1 --style raw --s 200
  ```

  ```
  # 실전 예시 (공간기획자용 — 전시 공간 무드보드)
  minimalist exhibition space with tall white walls, 
  single large abstract painting, visitor silhouette, 
  architectural photography style, 
  natural diffused light from skylights, serene atmosphere, 
  wide angle lens, sharp focus 
  --ar 16:9 --v 6.1 --s 300
  ```

- **CoT로 프롬프트 자동 생성 (한국어 → 영어 변환):**
  ```
  내가 원하는 이미지를 한국어로 설명할게.
  미드저니 공식 6단 구조([피사체] → [배경/행동] → [화풍] → [조명] → [카메라] → [파라미터]) 
  순서대로 각 요소를 결정한 뒤 최종 영어 프롬프트를 만들어줘.
  
  이미지 설명: 새벽 공연이 끝난 후 텅 빈 무대, 잔잔하고 쓸쓸한 느낌, 사진 같은 분위기
  ```

---

### Step 3. 파라미터 제어 — Negative & Style Reference (30분)

- **판단 (Trigger):** 이미지는 나오는데 텍스트 워터마크, 흐릿한 부분, 불필요한 요소가 같이 생성될 때.

- **`--no` 네거티브 프롬프팅 (필수 세트):**
  ```
  # 항상 붙이는 기본 네거티브 세트
  --no text, watermark, blurry, low quality, signature, logo
  
  # 인물 사진용 추가
  --no extra limbs, distorted face, bad anatomy
  
  # 건축/공간용 추가  
  --no people, furniture clutter, dark shadows
  ```

- **`--sref` 스타일 레퍼런스 — 화풍 고정:**
  ```
  # 내가 만족한 이미지와 동일한 화풍으로 새 이미지 생성
  [새로운 피사체 프롬프트] --sref [마음에 든 이미지의 URL] --sw 700
  
  # 예시
  lone dancer on an empty stage, dramatic spotlight 
  --sref https://[이전에 마음에 들었던 이미지 URL] --sw 800 --ar 9:16 --v 6.1
  ```

- **`--cref` 캐릭터 일관성 — 동일 인물 연속 생성:**
  ```
  # 한 캐릭터를 다른 상황에서 재생성
  [캐릭터 설명], walking in Tokyo street at night, neon reflections 
  --cref [기준 캐릭터 이미지 URL] --ar 9:16 --v 6.1
  ```

---

### Step 4. Vary Region (인페인팅) & Blend — 부분 수정과 합성 (40분)

- **판단 (Trigger):** 전체 구도는 좋은데 특정 영역(인물 표정, 배경 일부)만 바꾸고 싶을 때.

#### A. Vary (Region) — 부분 수정
  1. 생성된 이미지에서 **U1~U4** 버튼으로 Upscale 진행
  2. 하단 **Vary (Region)** 버튼 클릭
  3. 올가미로 수정 영역 선택 → 변경할 내용 입력

  ```
  # Vary Region 입력 예시 (표정 변경)
  same palette knife style, calm and dreamy expression, soft eyes
  ```

  > [!TIP]
  > 전체 프롬프트를 다시 쓰면 구도 전체가 바뀝니다. 부분 수정은 반드시 **Vary (Region)** 또는 **Vary (Subtle)** 을 사용하세요.

#### B. Blend — 두 이미지 스타일 합성
  ```
  /blend 명령어 → 이미지 2~5장 드래그 업로드 → 전송
  ```
  - 종횡비 지정: 업로드 후 파라미터 선택창에서 `--ar 16:9` 강제 설정

- **Blend 전 스타일 분석 (AI 활용):**
  ```
  아래 두 미드저니 프롬프트가 공통으로 표현하는 시각적 스타일 핵심 키워드 5개를 분석해줘.
  그리고 같은 스타일로 [새 주제]를 그릴 완성 프롬프트를 만들어줘.
  
  프롬프트 A: [A 프롬프트 전문]
  프롬프트 B: [B 프롬프트 전문]
  
  새 주제: [원하는 피사체]
  ```

---

## 💾 강의 리소스 & 다운로드
- [230512 AI 활용 워크숍 실습 결과물 및 이미지 폴더](https://drive.google.com/drive/folders/1RSyFdUPWWlua2bmA3ZzZ6mzdwyUrC7h8)
- [미드저니 화풍·프롬프트 시트 (별도 파일)](midjourney_prompt_sheet.md) ← 키워드 시트 참조
- [워크숍 강의 시연 비디오 01 (MP4)](https://drive.google.com/drive/folders/1RSyFdUPWWlua2bmA3ZzZ6mzdwyUrC7h8)
- [워크숍 강의 시연 비디오 02 (MP4)](https://drive.google.com/drive/folders/1RSyFdUPWWlua2bmA3ZzZ6mzdwyUrC7h8)
