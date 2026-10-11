# AI MASTER CLASS ARCHIVE

AI 교육 강의 자료 사이트.

## 구조

```
ai-education/
├── docs/                    ← 사이트 소스 (MkDocs)
│   ├── 00~04_시작~시스템.md  ← AI 개론 시리즈 (5강)
│   ├── lectures/            ← 개별 강의 모듈
│   ├── impact-ir/           ← 임팩트 IR 웹 워크북 (독립 화면)
│   ├── javascripts/         ← 비밀번호 보호 등
│   ├── stylesheets/         ← 커스텀 CSS
│   └── files/               ← 첨부 파일
├── mkdocs.yml               ← 사이트 설정 (nav, theme)
├── _internal/               ← 내부 문서 (비발행)
│   ├── education_philosophy.md  ← 교육 철학 & 콘텐츠 제작 원칙
│   ├── lecture_architecture.md  ← 강의 세계관 설계도
│   ├── passwords.md             ← 비밀번호 관리
│   ├── session-log.md           ← 세션 로그
│   ├── design-system.md         ← 디자인 시스템
│   └── CHANGELOG.md             ← 변경 이력
├── _archive/                ← 이전 버전 초안 (참고용)
│   ├── v1/                  ← 최초 버전
│   └── drafts/              ← 루트 원본 초안
├── site/                    ← 빌드 결과물 (git 무시)
└── .venv/                   ← Python 가상환경
```

## 핵심 원칙

> 📄 `_internal/education_philosophy.md` 참고

1. **설명하지 말고 보여줘라**
2. **기능이 아니라 가능성을 전달하라**
3. **"이것이 나의 시간과 에너지를 어떻게 바꿔줄 수 있는가?"에 답하라**

## 빌드 & 배포

```bash
source .venv/bin/activate
mkdocs build          # 로컬 빌드
mkdocs serve          # 로컬 프리뷰 (localhost:8000)
mkdocs gh-deploy      # GitHub Pages 배포
```

## 임팩트 IR 워크북

- 공개 경로: https://haepada-o.github.io/260600_ai_edu/impact-ir/
- 편집 원본: `docs/impact-ir/`. 기존 홈과 강의 경로는 유지한다.
- 기업정보는 브라우저에 저장하며, 프롬프트·MD·스킬·에이전트 ZIP은 브라우저에서 생성한다. 서버 동기화 없음.
- 이전 chatgpt.site 주소의 입력은 해당 페이지에서 백업 JSON을 내려받아 새 주소에서 불러온다.
- 검사: `node tests/impact-ir/package.test.mjs`
- v2.2: 기업정보는 MD로 저장·재사용하고 단계별 프롬프트는 파일·이전 산출물을 참조한다. 웹 입력을 프롬프트에 삽입하지 않는다.
- v2.3: 사용설명서(`#manual`) 추가. 기존자료 정리·대표 확인, AI로 IR 한 편 제작, 수동 업데이트·백업 절차와 MD 다운로드 제공. 전체 패키지에 사용설명서와 기존자료 정리·업데이트 프롬프트 포함(12종).
- 강의자료: 60분 v05 PDF. 표지 포함 21쪽, 15쪽은 강사 문구 사례 캡처를 위한 흰 빈 페이지. 기존 v04 보존.
- 사용설명서 원본: `docs/impact-ir/manual.js`. 웹 화면과 다운로드 MD·ZIP의 설명서는 같은 원본에서 생성한다.
- 배포 스킬 원본: `_internal/impact-ir/impact-business-planning/` (5개 파일). 수정 후 `node tests/impact-ir/build-library.mjs`로 공개 library.json을 생성하고 검사한다.
- 업데이트: 해당 폴더 수정 → 검사 → 전체 `mkdocs build` → `mkdocs gh-deploy`. `gh-pages` 반영 후 기존 Pages 자동배포가 실행된다.
- 웹 업데이트는 이미 내려받은 회사 폴더를 자동 변경하지 않는다. 기업정보·작업 결과는 보존한다.

## 비밀번호

📄 `_internal/passwords.md` 참고
마스터 비밀번호: `_internal/passwords.md`에 기록
