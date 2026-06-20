export function RouteEditorPage() {
  return (
    <>
      <section className="card">
        <p className="section-label">등록 화면 자리</p>
        <h2>목적지, 경로 옵션, 단계 편집 화면을 위한 기본 자리입니다.</h2>
        <div className="stack-list">
          <article>
            <strong>버스 단계</strong>
            <p>정류장 ID, 노선 ID, 표시명을 저장할 수 있게 확장합니다.</p>
          </article>
          <article>
            <strong>지하철 단계</strong>
            <p>역 ID, 노선 ID, 방향 값을 저장할 수 있게 확장합니다.</p>
          </article>
          <article>
            <strong>도보 단계</strong>
            <p>사용자 입력 이동시간과 이후 계산값 fallback을 연결합니다.</p>
          </article>
        </div>
      </section>
      <section className="card">
        <p className="section-label">저장 구조</p>
        <p className="muted-text">
          IndexedDB에는 `destinations`, `routeOptions`, `routeLegs` 스토어를
          준비했습니다.
        </p>
      </section>
    </>
  )
}
