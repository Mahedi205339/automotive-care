import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
const Sidebar = () => {
    return (
        <div className="lg:w-[300px] md:w-64 w-52 bg-black h-screen border-r-2 border-t-2 border-red-600">
            <div className="my-3 md:my-6 lg:my-10 ml-4 md:ml-10">
                <h2 className="text-2xl md:text-3xl text-red-600 font-bold ">Admin Dashboard</h2>
            </div>
            <hr />

            <ul className=" md:px-10 ">
                <Link to="/">
                    <li className="pl-4 mb-2 rounded hover:shadow hover:bg-red-500 py-2  my-3">

                        <FaHome className="inline-block w-6 h-6 mr-2 -mt-2"></FaHome>
                        Home

                    </li>
                </Link>
                <Link to="/dashboard/add-cars">
                    <li className="mb-2 pl-4 rounded hover:shadow hover:bg-red-500 py-2  my-3">

                        <FaHome className="inline-block w-6 h-6 mr-2 -mt-2"></FaHome>
                        Add Car

                    </li>
                </Link>

                <Link to="/">
                    <li className="mb-2 pl-4 rounded hover:shadow hover:bg-red-500 py-2  my-3">

                        <FaHome className="inline-block w-6 h-6 mr-2 -mt-2"></FaHome>
                        Update Car

                    </li>
                </Link>
                <Link to="/">
                    <li className="mb-2 pl-4 rounded hover:shadow hover:bg-red-500 py-2  my-3">

                        <FaHome className="inline-block w-6 h-6 mr-2 -mt-2"></FaHome>
                        Total Bookings

                    </li>
                </Link>
            </ul>

        </div>


    );
};

export default Sidebar;