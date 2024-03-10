import { NavLink } from "react-router-dom";
import carlogo from '../assets/images/carlogo.png'
import { useContext } from "react";
import userLogo from '../assets/images/user.png'
import { AuthContext } from "../AuthProvider/AuthProvider";
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log(user)
    const handleLogOut = () => {
        logOut()
            .then(result => {
                result.user
            })
            .catch(error => console.error(error))
    }


    const navLink = <>
        <li> <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-red-600" : ""
            }
        >
            Home
        </NavLink> </li>
        <li> <NavLink
            to="/addCar"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-red-600" : ""
            }
        >
            Add Car
        </NavLink> </li>
        <li> <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-red-600" : ""
            }
        >
            Login
        </NavLink> </li>
        <li> <NavLink
            to="/register"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-red-600" : ""
            }
        >
            Registration
        </NavLink> </li>
    </>

    return (
        <div className="navbar mb-4 fixed z-20 bg-black ">



            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabIndex={0} className="bt btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu font-semibold menu-sm dropdown-content mt-3 z-[10] p-2  bg-black rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                <img className="w-32 lg:w-44" src={carlogo} alt="" />
            </div>
            {/* <div className="navbar-center gap-2">
                
            </div> */}
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal gap-6 px-1 font-semibold mr-10">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="flex items-center gap-4">
                    <img className="h-10 md:h-14 rounded-full" src={user?.photoURL ? user.photoURL : userLogo} alt="" />
                    <p className="mr-3">{user?.displayName}</p>
                </div>

                {
                    user ? <button onClick={handleLogOut} className=" font-semibold px-2 py-1 lg:px-4 lg:py-2 rounded bg-red-600 border-collapse text-white">Log out</button> : null
                }

            </div> 
        </div>
    );
};

export default Navbar;