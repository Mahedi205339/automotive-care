/* eslint-disable react/no-unescaped-entities */
import "./signUp.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxoisPublic";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { TbFidgetSpinner } from 'react-icons/tb'
import Tilt from 'react-parallax-tilt';


const SignUp = () => {

    const { createUser, loading, updateUserProfile } = useAuth();
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    // password toggle function


    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };
    const onSubmit = async (data) => {
        const name = data.name;
        const email = data.email;
        const password = data.password;
        const photo_url = data.image;
        console.log(data);

        try {
            // upload image


            createUser(email, password).then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(name, photo_url).then(() => {
                    const userInfo = {
                        name: name,
                        email: email,
                        photo: photo_url,
                    };
                    axiosPublic.post("/users", userInfo).then((res) => {
                        if (res.data.insertedID) {
                            console.log("user info saved in database");
                        }
                    });
                    toast.success("Successfully signed up");
                    reset();
                    navigate("/add-car");
                });
            });
        } catch (err) {
            console.log(err.message);
            toast.error(err.message);
        }
    };
    // console.log(imgTitle);
    return (
        <>

        <div className="hero  sign-back min-h-screen  dark:bg-black ">
            <Tilt>
                <div className="hero-content flex flex-col md:flex-row-reverse w-full lg:gap-10">
                    <div className="card form-data flex-shrink-0 w-96 md:w-[300px] lg:w-[450px] h-auto py-7 bg-transparent bg-opacity-10 backdrop-blur-sm shadow-red-900 shadow-2xl my-5 md:my-10 lg:my-14">
                        <div className="text-center  text-[#ea3939]  md:text-2xl lg:text-4xl font-bold">
                            Sign Up
                        </div>
                        {/* form */}
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="relative z-0 my-5">
                                <input
                                    {...register("name", { required: true })}
                                    type="text"
                                    name="name"
                                    className="peer block w-full  appearance-none border-0 border-b border-neutral-400 bg-transparent py-2.5 px-0  text-white focus:border-red-600 focus:outline-none focus:ring-0"
                                    placeholder=" "
                                    required
                                />
                                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform  text-neutral-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-red-600 peer-focus:dark:text-red-500">
                                    Your name
                                </label>

                            </div>
                            {errors.name && (
                                <span className="text-red-700 font-bold">Name is required</span>
                            )}
                            <div className="relative z-0 ">
                                <input
                                    {...register("email", { required: true })}
                                    type="email"
                                    name="email"
                                    className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-wh focus:border-red-600 focus:outline-none focus:ring-0"

                                    placeholder=" "
                                    required
                                />
                                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform  text-neutral-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-red-600 peer-focus:dark:text-red-500">
                                    Your Email
                                </label>
                            </div>
                            {errors.name && (
                                <span className="text-red-700 font-bold">Email is required</span>
                            )}
                            <div className="relative z-0 my-5">
                                <div className="flex flex-row items-center">
                                    <input
                                        {...register("password", {
                                            required: true,
                                            minLength: 8,
                                            maxLength: 20,
                                            pattern: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/,
                                        })}
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0  text-white focus:border-red-600 focus:outline-none focus:ring-0"
                                        placeholder=" "
                                    />
                                    <button
                                        onClick={togglePasswordVisibility}
                                        className="relative -ml-16 z-50"
                                    >
                                        {showPassword ? (
                                            <FaEyeSlash className="text-[#ea3939]" size={20} />
                                        ) : (
                                            <FaEye className="text-[#ea3939]" size={20} />
                                        )}
                                    </button>
                                    <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-neutral-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-red-600 peer-focus:dark:text-red-500">
                                        Your Password
                                    </label>
                                </div>



                            </div>
                            <div className="text-center">
                                {errors.name && (
                                    <span className="text-red-400 font-bold">
                                        Password is required
                                    </span>
                                )}
                                {errors.password?.type === "minLength" && (
                                    <p className="text-red-400">
                                        {" "}
                                        Password must be 8 character
                                    </p>
                                )}
                                {errors.password?.type === "maxLength" && (
                                    <p className="text-red-400">
                                        {" "}
                                        Password must be less than 20 character
                                    </p>
                                )}
                                {errors.password?.type === "pattern" && (
                                    <p className="text-red-400">
                                        {" "}
                                        Password must have one uppercase , one lowercase and one
                                        number
                                    </p>
                                )}
                            </div>
                            <div className="relative z-0 mb-5">
                                <input
                                    {...register("image", { required: true })}
                                    type="text"
                                    name="image"
                                    className="peer block w-full  appearance-none border-0 border-b border-neutral-400 bg-transparent py-2.5 px-0  text-white focus:border-red-600 focus:outline-none focus:ring-0"
                                    placeholder=" "
                                    required
                                />


                                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform  text-neutral-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-red-600 peer-focus:dark:text-red-500">
                                    Image URL
                                </label>
                            </div>
                            <div className="flex justify-center ">
                                <button
                                    type='submit'
                                    className='bg-red-600 w-1/3 rounded-md py-3 text-white'
                                >
                                    {loading ? <TbFidgetSpinner className='animate-spin mx-auto' /> : 'Continue'}
                                </button>
                            </div>

                        </form>

                        <p className="text-center ">
                            <small className="text-neutral-400 ">
                                Already have an account?{" "}
                                <Link to="/login">
                                    <span className="font-extrabold text-red-700 text-xl">Login</span>
                                </Link>
                            </small>
                        </p>
                        <div className=" social-login flex justify-center">
                            <SocialLogin />
                        </div>
                        {/* social login  */}
                        <div className="flex justify-center home-btn ">
                            <Link
                                className="text-lg font-semibold flex flex-row gap-2 items-center"
                                to="/"
                            >
                                <p>Go to</p>
                                <span className="underline  font-extrabold  text-[#ea3939]">
                                    Home
                                </span>
                            </Link>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </Tilt>
        </div>
        </>
    );
};

export default SignUp;