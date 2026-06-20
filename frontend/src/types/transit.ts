export type RouteLegType = 'BUS' | 'SUBWAY' | 'WALK'

export interface Destination {
  id: string
  name: string
  createdAt: string
  updatedAt: string
}

export interface RouteOption {
  id: string
  destinationId: string
  name: string
  sortOrder: number
  createdAt: string
  updatedAt: string
}

export interface RouteLeg {
  id: string
  routeOptionId: string
  sortOrder: number
  type: RouteLegType
  provider?: string
  stopId?: string
  stationId?: string
  routeId?: string
  lineId?: string
  direction?: string
  manualTransferMinutes?: number
  displayName?: string
  createdAt: string
  updatedAt: string
}
