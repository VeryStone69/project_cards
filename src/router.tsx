import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
} from 'react-router-dom'

import { PATH } from '@/common/consts/routes'
import { Cards } from '@/components/cards/cards'
import { Layout } from '@/components/layout'
import { InitialLoader } from '@/components/ui/loader/loader'
import { CheckEmail } from '@/pages/check-email/check-email'
import { CreateNewPassword } from '@/pages/create-new-password/create-new-password'
import { Greeting } from '@/pages/greeting/greeting'
import { LearnCard } from '@/pages/learn-card/learn-card'
import { Login } from '@/pages/login/login'
import { NotFound } from '@/pages/not-found/NotFound'
import { Packs } from '@/pages/packs'
import { Profile } from '@/pages/profile/profile'
import { RecoveryPassword } from '@/pages/recovery-password/recovery-password'
import { Register } from '@/pages/register/register'
import { Rules } from '@/pages/rules/rules'
import { useMeQuery } from '@/services/auth-api/auth'

const publicRoutes: RouteObject[] = [
  {
    element: <NotFound />,
    path: PATH.notFound,
  },
  {
    element: <Login />,
    path: PATH.login,
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
  {
    element: <Greeting />,
    path: PATH.greeting,
  },
  {
    element: <Rules />,
    path: PATH.rules,
  },
]

const privateRoutes: RouteObject[] = [
  {
    element: <Profile />,
    path: PATH.profile,
  },
  {
    element: <Navigate to={PATH.decks} />,
    path: PATH.base,
  },
  {
    element: <LearnCard />,
    path: `${PATH.decks}/:id${PATH.learn}`,
  },
  {
    element: <Cards />,
    path: `${PATH.decks}/:id`,
  },
  {
    element: <Packs />,
    path: PATH.decks,
  },
]

export const router = createBrowserRouter([
  {
    children: [
      {
        children: privateRoutes,
        element: <PrivateRoutes />,
      },
      {
        children: [
          {
            children: [
              {
                element: <Login />,
                path: PATH.login,
              },
            ],
            element: <Outlet />,
          },
        ],
        element: <RedirectSingInToDeck />,
      },
      ...publicRoutes,
    ],
    element: <Layout />,
    path: PATH.base,
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}

function PrivateRoutes() {
  const { data, isError, isLoading } = useMeQuery()
  const isAuthenticated = (!isError && !isLoading && !!data) || false

  if (isLoading) {
    return <InitialLoader />
  }

  return isAuthenticated ? <Outlet /> : <Navigate to={PATH.greeting} />
}

function RedirectSingInToDeck() {
  const { data, isError, isLoading } = useMeQuery()
  const isAuthenticated = (!isError && !isLoading && !!data) || false

  return isAuthenticated ? <Navigate to={PATH.base} /> : <Outlet />
}
