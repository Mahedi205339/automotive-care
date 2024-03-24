import useCars from "../../hooks/useCars";
import { IoSettingsSharp } from "react-icons/io5";
import { RiDeleteBinFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxoisPublic";
const AllCars = () => {

    const [cars, refetch] = useCars()
    console.log(cars);
    const axiosPublic = useAxiosPublic()
    console.log(typeof refetch);

    const handleCarDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            background: "rgba(0, 0, 0, 0.5)",
            backdrop: "blur(100px)",
            cancelButtonColor: "#d33",
            color: "white",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosPublic.delete(`/cars/${id}`);
                console.log(res.data)

                refetch()
                Swal.fire({
                    title: "Deleted!",
                    text: "Your Item has been deleted.",
                    icon: "success",
                    background: "rgba(0, 0, 0, 0.5)",
                    backdrop: "blur(100px)",
                    color: "white",
                    timer: 1500
                });
            }

        });
    }

    return (
        <div className="w-full min-h-screen bg-black text-red-600 featured-bg">
            <div className="max-w-7xl mx-auto py-4 md:py-10 lg:py-12 ">
                <h2 className=" text-xl md:text-3xl lg:text-5xl text-center ">All Cars</h2>
                <hr className="border-red-600 border-1 w-56 md:w-[350px] lg:w-[500px] mx-auto my-3" />
            </div>
            <div>
                <div className="overflow-x-auto px-1 md:px-3 lg:px-6">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="text-red-700 text-lg font-medium">
                                <th>No.</th>
                                <th>Cars</th>
                                <th>Details</th>
                                <th> category</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* rows */}

                            {
                                cars.map((item, index) => (

                                    <tr key={item._id} className="bg-transparent backdrop-blur-sm hover:bg-black hover:scale-x-100 hover:scale-y-125 ">
                                        <td>

                                            <h1 className="text-lg ">{index + 1}</h1>
                                        </td>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={item?.image} alt="Cars" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{item.title}</div>
                                                    <div className="text-sm text-neutral-300 opacity-50"> {item.brand}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <Link to={`/cars/${item._id}`}>
                                            <td className="text-lg text-red-600 " >
                                                Details
                                            </td>
                                        </Link>
                                        <td className="text-lg font-medium">{item?.category}</td>
                                        <td>
                                            <IoSettingsSharp className="ml-4" size={26} />
                                        </td>
                                        <td>
                                            <RiDeleteBinFill onClick={() => handleCarDelete(item._id)} className="ml-4" size={26} />
                                        </td>
                                    </tr>
                                ))

                            }


                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllCars;