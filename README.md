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
- 업데이트: 해당 폴더 수정 → 검사 → 전체 `mkdocs build` → `mkdocs gh-deploy`. `gh-pages` 반영 후 기존 Pages 자동배포가 실행된다.
- 웹 업데이트는 이미 내려받은 회사 폴더를 자동 변경하지 않는다. 기업정보·작업 결과는 보존한다.

## 비밀번호

📄 `_internal/passwords.md` 참고
마스터 비밀번호: `_internal/passwords.md`에 기록
