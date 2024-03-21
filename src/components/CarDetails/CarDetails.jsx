import { useLoaderData } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// requires a loader
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxoisPublic";
const CarDetails = () => {
    const carData = useLoaderData()
    const navigate = useNavigate()
    const location = useLocation()
    // console.log(carData);
    const { user } = useAuth()
    const axiosPublic = useAxiosPublic()
    const { title, image, brand, price, _id } = carData
    const handleBookings = () => {
        if (user && user.email) {
            //send cart item to the database
            const cartItem = {
                car_id: _id,
                email: user.email,
                title,
                image,
                price,
                brand
            }
            axiosPublic.post('/bookings', cartItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: `${title} successfully added on bookings`,
                            showConfirmButton: false,
                            background: "rgba(0, 0, 0, 0.5)",
                            backdrop: "blur(100px)",
                            color: "white",
                            timer: 2000
                        });
                        //refetch cart 
                    }else{
                        Swal.fire({
                            position: "center",
                            icon: "error",
                            title:  `Already booked a car`,
                            showConfirmButton: false,
                            background: "rgba(0, 0, 0, 0.5)",
                            backdrop: "blur(100px)",
                            color: "white",
                            timer: 2000
                        });
                    }
                })

        } else {
            Swal.fire({
                title: "You are not logged in",
                text: "Please login for any bookings",
                icon: "warning",
                showCancelButton: true,
                color: "white",
                confirmButtonColor: "#52793e",
                cancelButtonColor: "#d63030",
                confirmButtonText: "Login",
                background: "rgba(0, 0, 0, 0.5)",
                backdrop: "blur(100px)",
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });


        }


    }

    return (
        <div className="max-w-[1560px] mx-auto pt-[100px] min-h-screen flex flex-col md:flex-col lg:flex-row justify-between items-baseline">
            <div className="p-28  w-full flex-1">
                <Carousel className="text-center">
                    <div>
                        <img src={carData?.image} />
                    </div>
                    <div>
                        <img src={carData?.image1} />
                    </div>
                    <div>
                        <img src={carData?.image2} />
                    </div>
                    <div>
                        <img src={carData?.image3} />
                    </div>
                </Carousel>
            </div>
            <div className="flex-1 px-5">
                <div className="mb-2 md:mb-6 lg:mb-10 xl:mb-14">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl "> Model: <span className="text-red-600 font-semibold">{carData?.title}</span></h1>
                    <h1 className="text-2xl md:text-2xl lg:text-3xl  my-2 md:my-5 lg:my-7 ">Brand: <span className="text-red-600 font-semibold">{carData?.brand}</span></h1>
                </div>

                <div>
                    <div className=" my-0 md:my-4 ">
                        <h4 className="text-xl md:text-2xl lg:text-3xl text-red-600 font-bold">About Car:</h4>
                        <p className="text-neutral-400 text-sm  lg:text-base my-2 md:my-5 lg:my-70">
                            {carData?.description}
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row justify-start gap-6">
                        <h4 className="text-neutral-400">  Price : <span className="text-red-600 font-bold"> $ {carData?.price}</span></h4>
                        <h4 className="text-neutral-400">  Mileage : <span className="text-red-600 font-bold"> {carData?.mileage}</span></h4>
                        <h4 className="text-neutral-400">  Engine Type: <span className="text-red-600 font-bold"> {carData?.engine_type}</span></h4>
                    </div>
                </div>
                <div>
                    <button onClick={() => handleBookings(carData)} className="rounded-lg bg-transparent border-red-500   border-2 text-red-600 hover:shadow-xl font-semibold hover:text-white hover:bg-red-600 hover:shadow-red-600 py-1 px-2 md:py-2 md:px-3 my-2 md:my-5">
                        Book Now
                    </button>
                </div>
            </div>


        </div>
    );
};

export default CarDetails;