import { Link } from 'react-router-dom'
import { routeDb } from '../storage/db'

export function DestinationsPage() {
  return (
    <>
      <section className="card">
        <p className="section-label">환경 상태</p>
        <h2>브라우저 저장소와 라우팅 구조를 초기화했습니다.</h2>
        <ul className="check-list">
          <li>Dexie 기반 IndexedDB 인스턴스 준비</li>
          <li>목적지 목록, 상세, 경로 등록 라우트 준비</li>
          <li>백엔드 API 기본 주소 환경변수화</li>
        </ul>
      </section>

      <section className="card">
        <p className="section-label">다음 구현 포인트</p>
        <h2>기능 이슈에서는 아래 순서로 이어서 붙이면 됩니다.</h2>
        <div className="stack-list">
          <article>
            <strong>1. IndexedDB CRUD</strong>
            <p>
              <code>{routeDb.name}</code> 데이터베이스에 목적지, 경로 옵션, 단계
              레코드를 저장합니다.
            </p>
          </article>
          <article>
            <strong>2. 검색 API 연동</strong>
            <p>정류장, 버스 노선, 지하철역 선택 화면을 붙입니다.</p>
          </article>
          <article>
            <strong>3. 도착정보 표시</strong>
            <p>
              <code>effectiveTime</code> 이후 도착편만 노출하는 상세 화면으로
              확장합니다.
            </p>
          </article>
        </div>
        <Link className="button-link" to="/routes/new">
          등록 화면 골격 보기
        </Link>
      </section>
    </>
  )
}
