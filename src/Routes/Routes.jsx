import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import ErrorPage from "./ErrorPage";
import Login from "../pages/Login/Login";
import Layout from "../Layout/Layout";
import Cars from "../pages/Cars/Cars";
import AddCars from "../pages/AddCars/AddCars";
import SignUp from "../pages/SignUp/SignUp";
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
                path: '/add-cars',
                element: <AddCars />
            },
            {
                path: '/cars',
                element: <Cars />
            },

            {
                path: '/signUp',
                element: <SignUp />
            },

        ],
        errorElement: <ErrorPage></ErrorPage>
    }
])

export default router;