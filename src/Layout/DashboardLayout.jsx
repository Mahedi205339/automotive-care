import Dashboard from "../components/Dashboard/Dashboard";
import Sidebar from "../components/Dashboard/Sidebar";

const DashboardLayout = () => {
    return (
        <div className="flex pt-[100px] h-[calc(100vh)]">
            <Sidebar />
            <Dashboard />
        </div>
    );
};

export default DashboardLayout;