import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../pages/Home/Home";
import ErrorPage from "./ErrorPage";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registation/Registration";
import AddCar from "../pages/AddCar/AddCar";
import Details from "../components/Details";
import UpdateCar from "../pages/UpdateCar/UpdateCar";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/cars')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: 'carsDetails/:id',
                element: <Details></Details>,
                loader: () => fetch('http://localhost:5000/cars')
            },
            {
                path: '/addCar',
                element: <AddCar></AddCar>
            },
            {
                path: '/register',
                element: <Registration></Registration>
            },
            {
                path: 'updateCar/:id',
                element: <UpdateCar></UpdateCar>,
                loader: ({ params }) => fetch(`http://localhost:5000/cars/${params.id}`)

            }

        ],
        errorElement: <ErrorPage></ErrorPage>
    }
])

export default router;