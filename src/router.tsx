import {createBrowserRouter, Navigate, Outlet, RouteObject, RouterProvider,} from 'react-router-dom'
import {NotFound} from "@/pages/not-found/NotFound";
import {Login} from "@/pages/login/login";
import {Register} from "@/pages/register/register";
import RecoveryPassword from "@/pages/recovery-password/recovery-password";
import {CheckEmail} from "@/pages/check-email/check-email";

export const PATH = {
    login: '/login',
    register: '/register',
    notFound: '/',
    home: '/home',
    recover: '/recovery',
    check: '/check-email'
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
]

const privateRoutes: RouteObject[] = [
    {
        element: <div>home</div>,
        path: PATH.home,
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
