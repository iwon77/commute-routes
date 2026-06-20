import { NavLink, Outlet } from 'react-router-dom'
import { getApiBaseUrl } from '../../services/api'

const navigationItems = [
  { to: '/', label: '목적지 목록' },
  { to: '/routes/new', label: '경로 등록 준비' },
]

export function AppFrame() {
  return (
    <div className="shell">
      <header className="hero-panel">
        <div>
          <p className="eyebrow">Commute Routes MVP</p>
          <h1>자주 쓰는 대중교통 경로를 로컬에 저장하고 빠르게 조회할 준비를 마쳤습니다.</h1>
          <p className="hero-copy">
            현재 브랜치는 환경 구성 전용입니다. 목적지, 경로 옵션, 단계 데이터는
            이후 이슈에서 IndexedDB에 저장하고, 서버는 검색과 실시간 조회 API를
            맡습니다.
          </p>
        </div>
        <dl className="hero-meta">
          <div>
            <dt>Frontend</dt>
            <dd>React + Vite + Dexie</dd>
          </div>
          <div>
            <dt>Backend</dt>
            <dd>Spring Boot + JdbcTemplate</dd>
          </div>
          <div>
            <dt>API Base URL</dt>
            <dd>{getApiBaseUrl()}</dd>
          </div>
        </dl>
      </header>

      <nav className="nav-tabs" aria-label="기본 탐색">
        {navigationItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              isActive ? 'nav-link nav-link-active' : 'nav-link'
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <main className="page-grid">
        <Outlet />
      </main>
    </div>
  )
}
