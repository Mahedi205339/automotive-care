import { Outlet , useLocation } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar";
import { useState } from "react";
const DashboardLayout = () => {

    const [isSideOpen, setIsSideOpen] = useState(true);
    const location = useLocation();
    console.log("--------->>>>", location);
    const isDetailsPage = location.pathname.includes("/inboxDetails");
    const isInboxPage = location.pathname.includes("/inbox");
  
    // Define the background image URL based on the condition
    let backgroundImage = "";
  
    if (isInboxPage) {
      backgroundImage = "url('https://i.ibb.co/LkFYxJs/884.jpg')";
    } else if (isDetailsPage) {
      backgroundImage = "url('https://i.ibb.co/9rWHf8s/blur-bg.png')";
    }
    return (
        // <div className="relative min-h-screen md:flex flex-row">
        //     {/* sidebar component */}
        //     <div className="lg:w-[300px] ">
        //         <Sidebar>
        //         </Sidebar>
        //     </div>

        //     <div className="w-full">

        //         {/* outlet dynamic components */}
        //         <Outlet></Outlet>

        //     </div>
        // </div>
        <div className="w-full flex min-h-screen bg-[#eef1f8]">
        <div className="z-10">
          <Sidebar setIsSideOpen={setIsSideOpen}></Sidebar>
        </div>
        <div
          id="dashboard"
          style={{
            backgroundImage: backgroundImage,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "300%",
          }}
          className={`w-full transition-all duration-700 ease-in-out ${
            isSideOpen ? "ml-16 lg:ml-32 xl:ml-72" : "ml-16"
          }`}
        >
          <Outlet></Outlet>
        </div>
      </div>
    );
};

export default DashboardLayout;