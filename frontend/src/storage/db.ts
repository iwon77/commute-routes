import Dexie, { type EntityTable } from 'dexie'
import type { Destination, RouteLeg, RouteOption } from '../types/transit'

export const routeDb = new Dexie('commuteRoutes') as Dexie & {
  destinations: EntityTable<Destination, 'id'>
  routeOptions: EntityTable<RouteOption, 'id'>
  routeLegs: EntityTable<RouteLeg, 'id'>
}

routeDb.version(1).stores({
  destinations: 'id, name, updatedAt',
  routeOptions: 'id, destinationId, sortOrder, updatedAt',
  routeLegs: 'id, routeOptionId, sortOrder, type, updatedAt',
})
