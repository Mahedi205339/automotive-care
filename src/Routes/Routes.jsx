import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import ErrorPage from "./ErrorPage";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registation/Registration";
import Layout from "../Layout/Layout";
// import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home></Home>,

            },
            {
                path: '/login',
                element: <Login></Login>
            },

            {
                path: '/register',
                element: <Registration></Registration>
            },

        ],
        errorElement: <ErrorPage></ErrorPage>
    }
])

export default router;