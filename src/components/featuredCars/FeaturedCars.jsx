import useCars from "../../hooks/useCars";
import Heading from "../Heading/Heading";
import FeaturedCarousel from "./FeaturedCarousel";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './featureCard.css'
const FeaturedCars = () => {
    const [cars] = useCars();
    // console.log(cars);
    const featuredCars = cars.filter(cars => cars.category === 'featured')
    console.log(featuredCars);
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,

        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


    return (

        <div className=" md:my-10 lg:my-16">
            <Heading title={"Featured"}
                sideTitle={"Products"}
            />

            <div className="xl:max-w-[1560px] mx-auto  px-4">
                <div id='card-area' className="">
                    <div className='wrapper gap-6'>
                    <Carousel
                        autoPlay={true}
                        autoPlaySpeed={2000}
                        keyBoardControl={true}
                        transitionDuration={2500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        responsive={responsive}
                        itemClass="carousel-item"
                    >
                        {

                            featuredCars.map(item =>
                                <FeaturedCarousel key={item?._id}
                                    item={item}
                                />
                            )
                        }

                    </Carousel>

                </div>
            </div>
        </div>

            </div >


            );
};

export default FeaturedCars;