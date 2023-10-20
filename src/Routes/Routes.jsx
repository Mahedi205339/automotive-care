import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../pages/Home/Home";
import ErrorPage from "./ErrorPage";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registation/Registration";
import AddCar from "../pages/AddCar/AddCar";
import Details from "../components/Details";
import UpdateCar from "../pages/UpdateCar/UpdateCar";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://automotive-server-9mwwj9le3-mahedis-projects.vercel.app/cars')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: 'carsDetails/:id',
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: () => fetch('https://automotive-server-9mwwj9le3-mahedis-projects.vercel.app/cars')
            },
            {
                path: '/addCar',
                element: <PrivateRoute><AddCar></AddCar></PrivateRoute>
            },
            {
                path: '/register',
                element: <Registration></Registration>
            },
            {
                path: 'updateCar/:id',
                element: <PrivateRoute><UpdateCar></UpdateCar></PrivateRoute>,
                loader: ({ params }) => fetch(`https://automotive-server-9mwwj9le3-mahedis-projects.vercel.app/${params.id}`)

            }

        ],
        errorElement: <ErrorPage></ErrorPage>
    }
])

export default router;