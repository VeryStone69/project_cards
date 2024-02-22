import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { PATH } from '@/common/consts/routes'
import { Cards } from '@/components/cards/cards'
import { Layout } from '@/components/layout'
import { InitialLoader } from '@/components/ui/loader/loader'
import { CheckEmail } from '@/pages/check-email/check-email'
import { CreateNewPassword } from '@/pages/create-new-password/create-new-password'
import { LearnCard } from '@/pages/learn-card/learn-card'
import { Login } from '@/pages/login/login'
import { NotFound } from '@/pages/not-found/NotFound'
import { Packs } from '@/pages/packs'
import { Profile } from '@/pages/profile/profile'
import { RecoveryPassword } from '@/pages/recovery-password/recovery-password'
import { Register } from '@/pages/register/register'
import { useMeQuery } from '@/services/auth-api/auth'

const publicRoutes: RouteObject[] = [
  {
    element: <Login />,
    path: PATH.login,
  },
  {
    element: <NotFound />,
    path: PATH.notFound,
  },
  {
    element: <Register />,
    path: PATH.register,
  },
  {
    element: <RecoveryPassword />,
    path: PATH.recover,
  },
  {
    element: <CheckEmail />,
    path: `${PATH.check}/:email`,
  },
  {
    element: <CreateNewPassword />,
    path: `${PATH.createNewPassword}/:token`,
  },
]

const privateRoutes: RouteObject[] = [
  {
    element: <LearnCard />,
    path: PATH.home,
  },
  {
    element: <Profile />,
    path: PATH.profile,
  },
  {
    element: <Packs />,
    path: PATH.decks,
  },
  {
    element: <LearnCard />,
    path: `${PATH.decks}/:id/learn`,
  },
  {
    element: <Cards />,
    path: `${PATH.decks}/:id`,
  },
]

export const router = createBrowserRouter([
  {
    children: [
      {
        children: privateRoutes,
        element: <PrivateRoutes />,
      },
      ...publicRoutes,
    ],
    element: <Layout />,
    path: PATH.decks,
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}

function PrivateRoutes() {
  const { data, isError, isLoading } = useMeQuery()
  const isAuthenticated = (!isError && !isLoading && data !== null) || false

  if (isLoading) {
    return <InitialLoader />
  }

  return isAuthenticated ? <Outlet /> : <Navigate to={PATH.login} />
}
