import Loading from "../../components/Loading/Loading";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxoisPublic";
import { useQuery } from "@tanstack/react-query";
const MyBookings = () => {
    const { user } = useAuth()

    const axiosPublic = useAxiosPublic();
    console.log(user?.email);
    const { data: myBookings = [], isLoading } = useQuery({
        queryKey: ['/cars'],

        queryFn: async () => {

            const res = await axiosPublic.get(`/bookings/${user?.email}`)
            return res.data;
        }

    })

    console.log(myBookings);
    if (isLoading) {
        <Loading />
    }

    return (
        <div className="featured-bg">
            <div className="min-h-[calc(100vh-100px)] flex justify-center items-center  pt-24 max-w-[1250px] mx-auto px-3 text-white">

                {
                    myBookings?.map(item => (
                        <div key={item?._id} className="card lg:card-side bg-black bg-opacity-10 backdrop-blur-sm shadow-xl">
                            <img draggable="false" className="lg:w-[500px]" src={item?.image} alt="Album" />
                            <div className="card-body lg:w-[500px]">
                                <h2 className="card-title md:text-2xl lg:text-3xl text-red-600">{item?.title}</h2>
                                <div>
                                    <p className="text-base md:text-lg lg:text-xl text-neutral-400">Brand : <span className="text-red-600 font-semibold"> {item?.brand} </span> </p>
                                    <p className="text-base md:text-lg lg:text-xl text-neutral-400 my-3">Price : <span className="text-red-600 font-semibold">$ {item?.price} </span> </p>
                                    <p className="text-neutral-400 text-lg my-3">
                                        Pay <span  className="text-red-600 font-semibold">10%</span>  for confirmation your bookings.
                                    </p>
                                    <p className="text-neutral-400">
                                        If you want to book another car .Please cancel and book another car. You cannot booked more than one car at a moment 
                                    </p>
                                </div>


                                <div className="flex flex-row gap-5">
                                    <button className="rounded-lg bg-transparent border-red-500   border-2 text-red-600 hover:shadow-xl font-semibold hover:text-white hover:bg-red-600 hover:shadow-red-600 py-1 px-2 md:py-2 md:px-3 my-2 md:my-5">Cancel</button>
                                    <button className="rounded-lg bg-transparent border-green-500   border-2 text-green-600 hover:shadow-xl font-semibold hover:text-white hover:bg-green-600 hover:shadow-green-600 py-1 px-2 md:py-2 md:px-3 my-2 md:my-5">Checkout</button>
                                </div>
                            </div>
                        </div>
                    ))
                }


            </div>
        </div>

    );
};

export default MyBookings;