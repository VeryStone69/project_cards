import {
    Navigate,
    Outlet,
    RouteObject,
    RouterProvider,
    createBrowserRouter,
} from 'react-router-dom'

import {CheckEmail} from '@/pages/check-email/check-email'
import {CreateNewPassword} from '@/pages/create-new-password/create-new-password'
import {Login} from '@/pages/login/login'
import {NotFound} from '@/pages/not-found/NotFound'
import {Profile} from '@/pages/profile/profile'
import RecoveryPassword from '@/pages/recovery-password/recovery-password'
import {Register} from '@/pages/register/register'
import {Rating} from "@/components/ui/rating/rating";

export const PATH = {
    check: '/check-email',
    createNewPassword: '/create-new-password',
    home: '/home',
    login: '/login',
    notFound: '/',
    profile: '/profile',
    recover: '/recovery',
    register: '/register',
}

const publicRoutes: RouteObject[] = [
    {
        element: <Login/>,
        path: PATH.login,
    },
    {
        element: <NotFound/>,
        path: PATH.notFound,
    },
    {
        element: <Register/>,
        path: PATH.register,
    },
    {
        element: <RecoveryPassword/>,
        path: PATH.recover,
    },
    {
        element: <CheckEmail/>,
        path: PATH.check,
    },
    {
        element: <CreateNewPassword/>,
        path: PATH.createNewPassword,
    },
]

const privateRoutes: RouteObject[] = [
    {
        element: <Rating value={4}/>,
        path: PATH.home,
    },
    {
        element: <Profile/>,
        path: PATH.profile,
    },
]

const router = createBrowserRouter([
    {
        children: privateRoutes,
        element: <PrivateRoutes/>,
    },
    ...publicRoutes,
])

export const Router = () => {
    return <RouterProvider router={router}/>
}

function PrivateRoutes() {
    const isAuthenticated = true

    return isAuthenticated ? <Outlet/> : <Navigate to={'/login'}/>
}
