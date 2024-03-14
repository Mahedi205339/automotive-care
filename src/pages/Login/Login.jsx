/* eslint-disable react/no-unescaped-entities */
import './login.css'
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { useState } from "react";
import SocialLogin from '../../components/SocialLogin/SocialLogin';
const Login = () => {
    const { userLogin } = useAuth();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    // password toggle function

    const [showPassword, setShowPassword] = useState(false)

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    // handle OnSubmit
    const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;
        console.log(email, password);

        userLogin(email, password)
            .then(() => {
                toast.success("User Login Successfully");

                axios.patch(`/monthly-user-count/${email}`).then((res) => res.data);
                reset();
                navigate("/");
            })
            .catch((err) => {
                console.log(err.message);
                toast.error(err.message);
            });
    };

    return (
        <div className="hero sign-back min-h-screen  dark:bg-black">
            <div className=" px-5 flex flex-col items-center justify-center md:flex-row-reverse w-full lg:gap-10">
                <div className="card flex-shrink-0 w-80 md:w-96 lg:w-[450px] py-7 bg-transparent bg-opacity-10 backdrop-blur-sm shadow-red-900 shadow-2xl">
                    <div className="login-text text-center my-2 md:my-5 lg:my-8 text-[#ea3939] text-2xl md:text-4xl font-bold">
                        Login to your account
                    </div>
                    {/* form */}
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        
                        <div className="relative z-0 ">
                            <input
                                {...register("email", { required: true })}
                                type="email"
                                name="from_name"
                                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-xl text-wh focus:border-red-600 focus:outline-none focus:ring-0"

                                placeholder=" "
                                required
                            />
                            <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-xl text-neutral-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-red-600 peer-focus:dark:text-red-500">
                                Your Email
                            </label>
                        </div>
                        <div className="relative z-0 my-5">
                            <input
                                {...register("password", { required: true })}
                                type="email"
                                name="from_name"
                                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-xl text-white focus:border-red-600 focus:outline-none focus:ring-0"
                                placeholder=" "
                                required
                            />
                            <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-xl text-neutral-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-red-600 peer-focus:dark:text-red-500">
                                Your Password
                            </label>
                        </div>

                    </form>


                    <p className="md:text-center account-comment my-4">
                        <small className="text-neutral-400">
                            Don't Have an account?{" "}
                            <Link to="/signUp">
                                <span className="font-extrabold text-red-600">
                                    {" "}
                                    Sign Up
                                </span>
                            </Link>
                        </small>
                    </p>
                    {/* social login  */}
                    <div className="flex justify-center social-login">
                        <SocialLogin />
                    </div>
                    <div className="flex justify-center home-btn ">
                        <Link
                            className="text-xl font-semibold flex flex-row gap-2 items-center"
                            to="/"
                        >
                            <p>Go to</p>
                            <span className="underline font-extrabold text-base text-[#213d5e]">Home</span>
                        </Link>
                    </div>

                </div>
            </div>
            <div>
            </div>
        </div>
    );
};

export default Login;