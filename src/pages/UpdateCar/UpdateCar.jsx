/* eslint-disable react/no-unescaped-entities */
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxoisPublic";
import { useLoaderData } from "react-router-dom";

const UpdateCar = () => {
    const axiosPublic = useAxiosPublic()
    const { _id, title, description, brand, price, image, image1, image2, image3, engine_type, mileage, category } = useLoaderData()

    // console.log(_id);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        console.log(_id);
        await axiosPublic.patch(`/update-car/${_id}`, data)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${data?.title} successfully uploaded `,
                        showConfirmButton: false,
                        background: "rgba(0, 0, 0, 0.5)",
                        backdrop: "blur(100px)",
                        color: "white",
                        timer: 2000
                    });
                } else {
                    Swal.fire({
                        position: "center",
                        icon: "error",
                        title: `Something went wrong`,
                        showConfirmButton: false,
                        background: "rgba(0, 0, 0, 0.5)",
                        backdrop: "blur(100px)",
                        color: "white",
                        timer: 2000
                    });
                }
            })
        // console.log(data.insertedId);





        reset()
    }

    return (
        <div className="w-full min-h-screen bg-black text-red-600 featured-bg">
            <div className="max-w-7xl mx-auto py-4 md:py-10 lg:py-12 ">
                <h2 className=" text-xl md:text-3xl lg:text-5xl text-center ">Update Cars</h2>
                <hr className="border-red-600 border-1 w-56 md:w-[350px] lg:w-[500px] mx-auto my-3" />
            </div>

            <div className="w-full px-4 md:w-11/12 lg:w-9/12 mx-auto border-2 lg:px-10 border-red-600 py-5 md:py-6 lg:py-10 rounded-xl bg-transparent backdrop-blur-sm bg-opacity-10">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col md:flex-row items-center md:gap-3 lg:gap-8">
                        <div className="relative z-0 my-5 w-full">
                            <input
                                {...register("title", { required: true })}
                                type="text"
                                name="title"
                                defaultValue={title}
                                className="peer block w-full  appearance-none border-0 border-b border-neutral-400 bg-transparent py-2.5 px-0  text-white focus:border-red-600 focus:outline-none focus:ring-0"
                                placeholder=" "
                                required
                            />
                            <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform  text-neutral-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-red-600 peer-focus:dark:text-red-500">
                                Car Title
                            </label>
                            {errors.title && (
                                <span className="text-red-700 font-bold">Name is required</span>
                            )}
                        </div>

                        <div className="relative z-0 my-5 w-full">
                            <input
                                {...register("engine_type", { required: true })}
                                type="text"
                                defaultValue={engine_type}
                                name="engine_type"
                                className="peer block w-full  appearance-none border-0 border-b border-neutral-400 bg-transparent py-2.5 px-0  text-white focus:border-red-600 focus:outline-none focus:ring-0"
                                placeholder=" "
                                required
                            />
                            <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform  text-neutral-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-red-600 peer-focus:dark:text-red-500">
                                Engine Type
                            </label>

                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center md:gap-3 lg:gap-8">
                        <div className="relative z-0 my-5 w-full">
                            <input
                                {...register("image", { required: true })}
                                type="text"
                                defaultValue={image}
                                name="image"
                                className="peer block w-full  appearance-none border-0 border-b border-neutral-400 bg-transparent py-2.5 px-0  text-white focus:border-red-600 focus:outline-none focus:ring-0"
                                placeholder=" "
                                required
                            />
                            <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform  text-neutral-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-red-600 peer-focus:dark:text-red-500">
                                Profile Image URL
                            </label>

                        </div>
                        <div className="relative z-0 my-5 w-full">
                            <input
                                {...register("image1", { required: true })}
                                type="text"
                                defaultValue={image1}
                                name="image1"
                                className="peer block w-full  appearance-none border-0 border-b border-neutral-400 bg-transparent py-2.5 px-0  text-white focus:border-red-600 focus:outline-none focus:ring-0"
                                placeholder=" "
                                required
                            />
                            <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform  text-neutral-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-red-600 peer-focus:dark:text-red-500">
                                Backside Image URL
                            </label>

                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center md:gap-3 lg:gap-8">
                        <div className="relative z-0 my-5 w-full">
                            <input
                                {...register("image2", { required: true })}
                                type="text"
                                defaultValue={image2}
                                name="image2"
                                className="peer block w-full  appearance-none border-0 border-b border-neutral-400 bg-transparent py-2.5 px-0  text-white focus:border-red-600 focus:outline-none focus:ring-0"
                                placeholder=" "
                                required
                            />
                            <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform  text-neutral-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-red-600 peer-focus:dark:text-red-500">
                                Interior Image URL
                            </label>

                        </div>
                        <div className="relative z-0 my-5 w-full">
                            <input
                                {...register("image3", { required: true })}
                                type="text"
                                defaultValue={image3}
                                name="image3"
                                className="peer block w-full  appearance-none border-0 border-b border-neutral-400 bg-transparent py-2.5 px-0  text-white focus:border-red-600 focus:outline-none focus:ring-0"
                                placeholder=" "
                                required
                            />
                            <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform  text-neutral-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-red-600 peer-focus:dark:text-red-500">
                                Sit's Image URL
                            </label>

                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center md:gap-3 lg:gap-8">
                        <div className="relative z-0 my-5 w-full">
                            <input
                                {...register("mileage", { required: true })}
                                type="text"
                                defaultValue={mileage}
                                name="mileage"
                                className="peer block w-full  appearance-none border-0 border-b border-neutral-400 bg-transparent py-2.5 px-0  text-white focus:border-red-600 focus:outline-none focus:ring-0"
                                placeholder=" "
                                required
                            />
                            <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform  text-neutral-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-red-600 peer-focus:dark:text-red-500">
                                Mileage (mpg)
                            </label>

                        </div>
                        <div className="relative z-0 my-5 w-full">
                            <input
                                {...register("price", { required: true })}
                                type="number"
                                defaultValue={price}
                                name="price"
                                className="peer block w-full  appearance-none border-0 border-b border-neutral-400 bg-transparent py-2.5 px-0  text-white focus:border-red-600 focus:outline-none focus:ring-0"
                                placeholder=" "
                                required
                            />
                            <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform  text-neutral-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-red-600 peer-focus:dark:text-red-500">
                                Price
                            </label>

                        </div>
                    </div>

                    <div className="flex flex-col text-white md:flex-row items-center md:gap-3 lg:gap-8">
                        <select value={brand} {...register("brand", { required: true })}
                            className="select select-error text-base w-full  bg-neutral-900"
                        >
                            <option value="BMW">BMW</option>
                            <option value="Lamborghini">Lamborghini</option>
                            <option value="Audi">Audi</option>
                            <option value="Tesla">Tesla</option>
                            <option value="Mercedes">Mercedes</option>
                            <option value="Honda">Honda</option>
                        </select>
                        <select value={category} {...register("category", { required: true })}
                            className="select select-error text-base w-full bg-neutral-900"
                        >
                            <option value="cars">Cars</option>
                            <option value="featured">Featured</option>
                        </select>


                    </div>
                    <div>

                        <div className="relative z-0 my-5 w-full">
                            <textarea
                                {...register("description", { required: true })}
                                type="text"
                                defaultValue={description}
                                name="description"
                                className="peer block w-full  appearance-none border-0 border-b border-neutral-400 bg-transparent py-2.5 px-0  text-white focus:border-red-600 focus:outline-none focus:ring-0"
                                placeholder=" "
                                required
                            />
                            <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform  text-neutral-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-red-600 peer-focus:dark:text-red-500">
                                Car's Description
                            </label>

                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button type="submit" className="rounded-lg bg-transparent border-red-500   border-2 text-red-600 hover:shadow-xl font-semibold hover:text-white hover:bg-red-600 hover:shadow-red-600 py-1 px-2 md:py-2 md:px-3 my-2 md:my-5">
                            Update
                        </button>
                    </div>


                </form>
            </div>
        </div>
    );
};

export default UpdateCar;