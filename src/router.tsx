import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
} from 'react-router-dom'

import { Cards } from '@/components/cards/cards'
import { InitialLoader } from '@/components/ui/loader/loader'
import { AddNewCard } from '@/features/add-new-card'
import { CheckEmail } from '@/pages/check-email/check-email'
import { CreateNewPassword } from '@/pages/create-new-password/create-new-password'
import { LearnCard } from '@/pages/learn-card/learn-card'
import { Login } from '@/pages/login/login'
import { NotFound } from '@/pages/not-found/NotFound'
import { Packs } from '@/pages/packs'
import { Profile } from '@/pages/profile/profile'
import RecoveryPassword from '@/pages/recovery-password/recovery-password'
import { Register } from '@/pages/register/register'
import { useMeQuery } from '@/services/auth-api/auth'

export const PATH = {
  check: '/check-email',
  createNewPassword: '/create-new-password',
  home: '/home',
  learn: '/learn',
  login: '/login',
  notFound: '/page-not-found',
  packs: '/',
  profile: '/profile',
  recover: '/recovery',
  register: '/register',
}

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
    path: PATH.check,
  },
  {
    element: <CreateNewPassword />,
    path: PATH.createNewPassword,
  },
]

const privateRoutes: RouteObject[] = [
  {
    element: <AddNewCard />,
    path: PATH.home,
  },
  {
    element: <Profile />,
    path: PATH.profile,
  },
  {
    element: <Packs />,
    path: PATH.packs,
  },
  {
    element: <LearnCard answer={'Mercedes'} attempts={5} deckName={'Cars'} questions={5} />,
    path: PATH.learn,
  },
  {
    element: <Cards />,
    path: `${PATH.packs}/:id`,
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
  const { isLoading } = useMeQuery()

  if (isLoading) {
    return <InitialLoader />
  }

  return <RouterProvider router={router} />
}

function PrivateRoutes() {
  const { isError, isLoading } = useMeQuery()

  if (isLoading) {
    return <InitialLoader />
  }

  const isAuthenticated = !isError

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}
