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
