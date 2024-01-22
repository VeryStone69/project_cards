import {createBrowserRouter, Navigate, Outlet, RouteObject, RouterProvider,} from 'react-router-dom'
import {NotFound} from "@/pages/not-found/NotFound";
import {Login} from "@/pages/login/login";
import {Register} from "@/pages/register/register";

export const PATH = {
    login: '/login',
    register: '/register',
    notFound: '/',
    home: '/home'
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
    const isAuthenticated = false

    return isAuthenticated ? <Outlet/> : <Navigate to={'/login'}/>
}
