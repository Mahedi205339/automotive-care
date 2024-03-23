import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineBarChart } from "react-icons/ai";
import { RiFeedbackLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import { OpenContext } from "../Context/useOpen";
import { IoHome } from "react-icons/io5";
import { FaCarRear } from "react-icons/fa6";
import { MdOutlineCarCrash } from "react-icons/md";
const Sidebar = ({ setIsSideOpen }) => {
    const { open, setOpen } = useContext(OpenContext);
    useEffect(() => {
        setIsSideOpen(open);
    }, [open, setIsSideOpen]);
    const isAdmin = true;



    const adminMenus = [
        { name: "Home", link: "/", icon: IoHome },
        { name: "Dashboard", link: "/dashboard", icon: AiOutlineBarChart },
        { name: "Add Car", link: "/dashboard/add-cars", icon: MdOutlineCarCrash },
        { name: "All Cars", link: "/dashboard/all-cars", icon: FaCarRear },
        { name: "Feedback", link: "user-feedback", icon: RiFeedbackLine },
    ];

    //console.log(isUser);

    return (
        <>
            <section className="flex gap-6 fixed left-0">
                <div
                    className={`bg-[#000000] text-red-600 min-h-screen ${open ? "w-[300px] px-4" : "w-16 px-3"
                        } duration-700 text-red-600 -z-10 border-r-2 border-red-700`}
                >
                    <div
                        className={`py-6 flex ${open ? "justify-between" : "justify-center"
                            }`}
                    >
                        <Link className="h-[40px] text-base text-red-700 font-bold font- flex items-start" to="/">

                        </Link>
                        <HiMenuAlt3
                            size={26}
                            onClick={() => setOpen(!open)}
                            className="cursor-pointer"
                        ></HiMenuAlt3>
                    </div>
                    <div className="mt-0 md:mt-4 -ml-3 md:ml-0 flex  flex-col gap-4 relative">
                        {isAdmin &&
                            adminMenus?.map((menu, i) => (
                                <Link
                                    className={`${menu?.margin ? "mt-5" : menu?.marginBot ? "mb-5" : ""
                                        } group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-red-600 dark:hover:bg-red-600 rounded-md`}
                                    to={menu?.link}
                                    key={i}
                                >
                                    <div>{React.createElement(menu?.icon, { size: "24" })}</div>
                                    <h2
                                        style={{
                                            transitionDelay: `${i + 3}00ms`,
                                        }}
                                        className={`whitespace-pre text-base duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"
                                            }`}
                                    >
                                        {menu?.name}
                                    </h2>
                                    <h2
                                        className={`${open && "hidden"
                                            } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:right-14 group-hover:duration-300 group-hover:w-fit`}
                                    >
                                        {menu?.name}
                                    </h2>
                                </Link>
                            ))}
                    </div>
                </div>
            </section>

        </>
    );
};

export default Sidebar;