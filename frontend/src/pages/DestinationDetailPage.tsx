import { useParams } from 'react-router-dom'

export function DestinationDetailPage() {
  const { destinationId } = useParams()

  return (
    <>
      <section className="card">
        <p className="section-label">상세 화면 자리</p>
        <h2>목적지 상세와 단계별 조회 결과가 들어올 위치입니다.</h2>
        <p className="muted-text">
          현재 선택된 목적지 ID: <code>{destinationId ?? '미지정'}</code>
        </p>
      </section>
      <section className="card">
        <p className="section-label">표시 예정 정보</p>
        <ul className="check-list">
          <li>경로 옵션 목록</li>
          <li>단계별 버스 / 지하철 / 도보 정보</li>
          <li>각 단계의 `effectiveTime` 이후 도착편</li>
          <li>부분 실패 허용 응답 결과</li>
        </ul>
      </section>
    </>
  )
}
