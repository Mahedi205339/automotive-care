import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../pages/Home/Home";
import ErrorPage from "./ErrorPage";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registation/Registration";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/data.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            }

        ],
        errorElement: <ErrorPage></ErrorPage>
    }
])

export default router;