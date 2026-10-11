# AI Education Project Log

> 프로젝트 변경 기록. 오래된 항목부터 최신 항목 순으로 추가하며 기존 기록은 보존한다.

## [2026-09-23] system | PROJECT_LOG.md | 프로젝트 로그 초기화
- 변경: 공통 프로젝트 운영 매뉴얼에 따라 루트 변경 로그를 생성함.
- 파일: `PROJECT_LOG.md`
- 검증: 로그 파일 생성 확인. 세부 교육 사이트 이력은 `_internal/CHANGELOG.md`와 `_internal/session-log.md`에도 존재함.

## [2026-10-11] feature | docs/impact-ir | 임팩트 IR 워크북 v2.1 하위 경로 추가
- 변경: 공개된 main을 기준으로 기존 홈·강의를 유지하고 `/impact-ir/` 독립 워크북 추가. 기존 로컬의 미배포 비밀번호 안내 수정은 포함하지 않음.
- 파일: `docs/impact-ir/`, `tests/impact-ir/`, `README.md`.
- 검증: 배포 전 패키지·백업·프롬프트 테스트 및 전체 MkDocs 빌드 수행. 배포 결과는 후속 release 기록에 추가.

## [2026-10-11] release | impact-ir | GitHub Pages 공개 완료
- 주소: https://haepada-o.github.io/260600_ai_edu/impact-ir/
- 배포: 기존 gh-pages 자동배포 성공. 실행 기록 https://github.com/haepada-o/260600_ai_edu/actions/runs/38129616165
- 검증: 4개 도구의 패키지 생성·ZIP 재읽기·백업·프롬프트 검사 통과. 전체 MkDocs 빌드 성공. 공개 HTML·JS·CSS·스킬 데이터·PDF 10개 파일 HTTP 200 및 배포본 바이트 일치 확인.
- 보존: 기존 홈페이지·강의 HTML 유지, chatgpt.site 기존 주소 유지. 원래 로컬 프로젝트의 미배포 비밀번호 안내 수정은 이번 공개본에서 제외.
- 운영: docs/impact-ir 편집 후 테스트·전체 빌드·gh-deploy. 도메인 이동 시 기존 워크북 백업 JSON을 새 주소에서 불러오기.

## [2026-10-11] feature | impact-ir v2.2 | 기업정보와 실행 프롬프트 분리
- 변경: 단계별 기업정보 삽입 제거, 참조 파일·이전 결과·작업 조건·산출물 기준으로 프롬프트 구성. 최초 작성과 반복 작업 안내 분리.
- 스킬: 배포용 5개 파일 유지, 파일 재사용·승인 후 갱신·버전 충돌 처리 보강. 개인 설치 스킬 및 이전 chatgpt.site는 변경하지 않음.
- 원본: _internal/impact-ir/impact-business-planning, 공개 패키지는 동일 원본으로 생성.
- 검증: 기업 입력 변경이 단계별 프롬프트에 영향을 주지 않는지, ZIP 기업정보에는 입력이 보존되는지, 스킬 원본·공개 파일 일치 여부 검사.
