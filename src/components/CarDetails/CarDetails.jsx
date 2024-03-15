import { useLoaderData } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// requires a loader
import { Carousel } from 'react-responsive-carousel';
const CarDetails = () => {
    const carData = useLoaderData()
    console.log(carData);
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
                    <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl"> Model: <span className="text-red-600 font-semibold">{carData?.title}</span></h1>
                    <h1 className="text-2xl md:text-2xl lg:text-3xl xl:text-4xl my-3 md:my-6 lg:my-10 ">Brand: <span className="text-red-600 font-semibold">{carData?.brand}</span></h1>
                </div>

                <div>
                    <div className=" my-2 md:my-6 ">
                        <h4 className="text-2xl md:text-3xl lg:text-4xl text-red-600 font-bold">About Car:</h4>
                        <p className="text-neutral-400  my-2 md:my-6 lg:my-10">
                            {carData?.description}
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row justify-start gap-6">
                        <h4 className="text-neutral-400">  Price : <span className="text-red-600 font-bold"> {carData?.price}</span></h4>
                        <h4 className="text-neutral-400">  Mileage : <span className="text-red-600 font-bold"> {carData?.mileage}</span></h4>
                        <h4 className="text-neutral-400">  Engine Type: <span className="text-red-600 font-bold"> {carData?.engine_type}</span></h4>
                    </div>
                </div>
                <div>
                    <button className="rounded-lg bg-transparent border-red-500 text-xl border-2 text-red-600 hover:shadow-xl font-bold hover:text-white hover:bg-red-600 hover:shadow-red-600 py-1 px-4 md:py-4 md:px-8 my-2 md:my-5">
                        Book Now
                    </button>
                </div>
            </div>


        </div>
    );
};

export default CarDetails;