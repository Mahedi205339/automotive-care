import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar";
const DashboardLayout = () => {
    return (
        <div className="relative min-h-screen md:flex flex-row">
            {/* sidebar component */}
            <div className="w-[300px]">
                <Sidebar>
                </Sidebar>
            </div>

            <div className="w-full">

                {/* outlet dynamic components */}
                <Outlet></Outlet>

            </div>
        </div>
    );
};

export default DashboardLayout;