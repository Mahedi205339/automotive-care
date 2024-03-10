import useCars from "../../hooks/useCars";
import FeaturedCarousel from "./featuredCarosel";
import { useRef } from 'react';
import Swiper from 'react-id-swiper';
const FeaturedCars = () => {
    const [cars] = useCars();
    // console.log(cars);
    const featuredCars = cars.filter(cars => cars.category === 'featured')
    // console.log(featuredCars);

    const ref = useRef(null);

    const goNext = () => {
        if (ref.current !== null && ref.current.swiper !== null) {
            ref.current.swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (ref.current !== null && ref.current.swiper !== null) {
            ref.current.swiper.slidePrev();
        }
    };

    return (
        <div>
            {
                featuredCars.map(item =>
                    <div key={item._id}>
                        <Swiper item={item} ref={ref}>
                           <FeaturedCarousel item={item}>
                        
                           </FeaturedCarousel>
                        </Swiper>
                        <button onClick={goPrev}>Prev</button>
                        <button onClick={goNext}>Next</button>
                    </div>

                )
            }


        </div >
    );
};

export default FeaturedCars;