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
├─ backend/
├─ frontend/
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

## 개발 환경

- `frontend/`
  - `React`
  - `TypeScript`
  - `Vite`
  - `Dexie`
  - `React Router`
- `backend/`
  - `Java 17`
  - `Spring Boot`
  - `Spring Web`
  - `JdbcTemplate`
  - `PostgreSQL`

## 로컬 실행

### 1. PostgreSQL 실행

```bash
cd backend
docker compose up -d
```

### 2. 백엔드 실행

```bash
cd backend
./gradlew bootRun
```

기본 주소:

- `http://localhost:8080`
- 헬스 체크: `http://localhost:8080/api/v1/health`

### 3. 프론트 실행

```bash
cd frontend
npm install
npm run dev
```

기본 주소:

- `http://localhost:5173`

## 환경 변수 예시

- 프론트: [frontend/.env.example](frontend/.env.example)
- 백엔드: [backend/.env.example](backend/.env.example)

## 상태

- 현재는 MVP 개발을 위한 초기 환경 구성을 진행 중이다.
- 실제 기능 구현은 환경 세팅 이후 이슈 단위로 이어서 진행한다.
