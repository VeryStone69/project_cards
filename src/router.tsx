import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

export const PATH = {
  login: '/login',
}

const publicRoutes: RouteObject[] = [
  {
    element: <div>login</div>,
    path: PATH.login,
  },
]

const privateRoutes: RouteObject[] = [
  {
    element: <div>home</div>,
    path: '/',
  },
]

const router = createBrowserRouter([
  {
    children: privateRoutes,
    element: <PrivateRoutes />,
  },
  ...publicRoutes,
])

export const Router = () => {
  return <RouterProvider router={router} />
}

function PrivateRoutes() {
  const isAuthenticated = false

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}
