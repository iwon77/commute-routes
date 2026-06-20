# commute-routes

개인용 대중교통 경로 조합을 저장하고, 단계별 실시간 도착정보를 빠르게 조회하기 위한 프로젝트다.

## 현재 목표

- 개인용 MVP를 구현한다.
- 사용자가 자주 이용하는 목적지와 경로 조합을 저장한다.
- 경로는 `버스`, `지하철`, `도보` 단계를 여러 개 조합할 수 있다.
- 다음 단계 도착정보는 `effectiveTime = now + transferMinutes` 기준 이후 도착편만 표시한다.

## 기술 스택

- Frontend: `React`, `TypeScript`, `Vite`
- Client Storage: `IndexedDB`
- Backend: `Java`, `Spring Boot`, `Spring Web`
- Database: `PostgreSQL`
- Database Access: `JdbcTemplate`

## 저장소 구조

```text
.
├─ AGENTS.md
├─ archive/
├─ README.md
├─ .gitattributes
└─ .gitignore
```

## 작업 규칙

- 이 저장소에서 작업을 시작할 때는 먼저 `AGENTS.md`를 확인한다.
- 구현, 문서화, 검증, 브랜치 전략, `archive/` 사용 기준은 `AGENTS.md`를 따른다.

## archive 사용 기준

- `archive/`는 큰 기술 결정, 구조 변경 이유, 이슈/설계/검증 중 다시 참고해야 할 핵심 내용만 선택적으로 기록한다.
- 일반 진행 로그나 세션 대화 원문은 기본적으로 저장하지 않는다.

## 상태

- 현재는 기본 브랜치 생성과 초기 환경 구성을 준비하는 단계다.
- 실제 프론트엔드/백엔드 부트스트랩은 별도 작업 브랜치에서 진행한다.
