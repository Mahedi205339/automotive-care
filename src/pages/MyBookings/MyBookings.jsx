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
                            <img className="lg:w-[500px]" src={item?.image} alt="Album" />
                            <div className="card-body lg:w-[500px]">
                                <h2 className="card-title">{item?.title}</h2>
                                <div>
                                    <p>Price : {item?.price} </p>
                                    <p className="">{item?.brand}</p>
                                </div>


                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Listen</button>
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