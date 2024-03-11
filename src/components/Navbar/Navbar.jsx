import { NavLink } from "react-router-dom";
import carlogo from '../../assets/images/carlogo.png'
import { useContext } from "react";
import userLogo from '../../assets/images/user.png'
import { AuthContext } from "../../AuthProvider/AuthProvider";
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
        </NavLink>
        </li>
        <li> <NavLink
            to="/addCar"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-red-600" : ""
            }
        >
            Add Car
        </NavLink>
        </li>
        <li>
            {

                user ? <button onClick={handleLogOut} className=" font-semibold px-2 py-1 lg:px-4 lg:py-2 rounded bg-red-600 border-collapse text-white">Log out</button> :
                    <NavLink
                        to="/login"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-red-600" : ""
                        }

                    >
                        Login
                    </NavLink>
            }

        </li>
    </>

    return (
        <div className="navbar mb-4 fixed z-20 backdrop-blur-sm bg-neutral-800 bg-opacity-10">
            <div>
                <img width={200} src={carlogo} alt="" />
            </div>
            <div>

            </div>


        </div>
    );
};

export default Navbar;