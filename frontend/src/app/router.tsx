import { createBrowserRouter } from 'react-router-dom'
import { AppFrame } from '../components/layout/AppFrame'
import { DestinationDetailPage } from '../pages/DestinationDetailPage'
import { DestinationsPage } from '../pages/DestinationsPage'
import { RouteEditorPage } from '../pages/RouteEditorPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppFrame />,
    children: [
      {
        index: true,
        element: <DestinationsPage />,
      },
      {
        path: 'destinations/:destinationId',
        element: <DestinationDetailPage />,
      },
      {
        path: 'routes/new',
        element: <RouteEditorPage />,
      },
    ],
  },
])
