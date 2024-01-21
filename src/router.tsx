import {createBrowserRouter, Navigate, Outlet, RouteObject, RouterProvider,} from 'react-router-dom'
import {NotFound} from "@/pages/not-found/NotFound";
import {AuthLogin} from "@/pages/auth-login/AuthLogin";

export const PATH = {
    login: '/login',
    notFound: '/',
}

const publicRoutes: RouteObject[] = [
    {
        element: <AuthLogin/>,
        path: PATH.login,
    },
    {
        element: <NotFound/>,
        path: PATH.notFound,
    },
]

const privateRoutes: RouteObject[] = [
    {
        element: <div>home</div>,
        path: '/home',
    },
    {
        element: <div>test</div>,
        path: '/test',
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
    const isAuthenticated = false

    return isAuthenticated ? <Outlet/> : <Navigate to={'/login'}/>
}
