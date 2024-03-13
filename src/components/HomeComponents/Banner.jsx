import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

import banner1 from "../../assets/images/banner2.png"
import banner2 from "../../assets/images/banner1.png"
import banner3 from "../../assets/images/banner3.png"
import banner4 from "../../assets/images/banner4.png"


// import required modules
import { Autoplay } from 'swiper/modules';

const Banner = () => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                <div>
                    <SwiperSlide>
                        <div id="slide1" className="carousel-item relative w-full">
                            <div className="hero h-[100vh] " style={{ backgroundImage: `url(${banner1})` }}>
                                <div className="hero-overlay bg-black opacity-60"></div>
                                <div className="hero-content text-left text-neutral-content">
                                    <div  className="">
                                        <h1 className="mb-5 text-2xl md:text-4xl lg:text-5xl font-bold xl:text-6xl my-5 md:my-7 lg:my-10">
                                            AUTOMOTIVE
                                            <span className="text-red-600">
                                                CARE
                                            </span>
                                            <br />
                                            <span className='text-xl md:text-3xl lg:text-4xl'>
                                                <span className='text-red-600'> EXPLORE</span> YOUR
                                                RANGE
                                            </span>

                                        </h1>
                                        <p className="mb-5">
                                            HIGH PERFORMANCE <span className='text-red-600'>||</span> HIGH EXPERIENCE <span className='text-red-600'>||</span> HIGH SPEED
                                        </p>

                                    </div>
                                </div>
                            </div>

                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="text-red-600 text-2xl md:text-3xl lg:text-5xl">❮</a>
                                <a href="#slide2" className="text-red-600 text-2xl md:text-3xl lg:text-5xl">❯</a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div id="slide1" className="carousel-item relative w-full">
                            <div className="hero h-[100vh] "style={{ backgroundImage: `url(${banner2})` }}>
                                <div className="hero-overlay bg-black opacity-60"></div>
                                <div className="hero-content text-left text-neutral-content">
                                    <div className="">
                                        <h1 className="mb-5 text-2xl md:text-4xl lg:text-5xl font-bold">
                                            AUTOMOTIVE
                                            <span className="text-red-600">
                                                CARE
                                            </span>
                                            <br />
                                            <span className='text-xl md:text-3xl lg:text-4xl'>
                                                <span className='text-red-600'> EXPLORE</span> YOUR
                                                RANGE
                                            </span>

                                        </h1>
                                        <p className="mb-5">
                                            HIGH PERFORMANCE <span className='text-red-600'>||</span> HIGH EXPERIENCE <span className='text-red-600'>||</span> HIGH SPEED
                                        </p>

                                    </div>
                                </div>
                            </div>

                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="text-red-600 text-2xl md:text-3xl lg:text-5xl">❮</a>
                                <a href="#slide2" className="text-red-600 text-2xl md:text-3xl lg:text-5xl">❯</a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div id="slide1" className="carousel-item relative w-full">
                            <div className="hero h-[100vh] " style={{ backgroundImage: `url(${banner3})` }}>
                                <div className="hero-overlay bg-black opacity-60"></div>
                                <div className="hero-content text-left text-neutral-content">
                                    <div className="">
                                        <h1 className="mb-5 text-2xl md:text-4xl lg:text-5xl font-bold">
                                            AUTOMOTIVE
                                            <span className="text-red-600">
                                                CARE
                                            </span>
                                            <br />
                                            <span className='text-xl md:text-3xl lg:text-4xl'>
                                                <span className='text-red-600'> EXPLORE</span> YOUR
                                                RANGE
                                            </span>

                                        </h1>
                                        <p className="mb-5">
                                            HIGH PERFORMANCE <span className='text-red-600'>||</span> HIGH EXPERIENCE <span className='text-red-600'>||</span> HIGH SPEED
                                        </p>

                                    </div>
                                </div>
                            </div>

                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="text-red-600 text-2xl md:text-3xl lg:text-5xl">❮</a>
                                <a href="#slide2" className="text-red-600 text-2xl md:text-3xl lg:text-5xl">❯</a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div id="slide1" className="carousel-item relative w-full">
                            <div className="hero h-[100vh] " style={{ backgroundImage: `url(${banner4})` }}>
                                <div className="hero-overlay bg-black opacity-60"></div>
                                <div className="hero-content text-left text-neutral-content">
                                    <div className="">
                                        <h1 className="mb-5 text-2xl md:text-4xl lg:text-5xl font-bold">
                                            AUTOMOTIVE
                                            <span className="text-red-600">
                                                CARE
                                            </span>
                                            <br />
                                            <span className='text-xl md:text-3xl lg:text-4xl'>
                                                <span className='text-red-600'> EXPLORE</span> YOUR
                                                RANGE
                                            </span>

                                        </h1>
                                        <p className="mb-5">
                                            HIGH PERFORMANCE <span className='text-red-600'>||</span> HIGH EXPERIENCE <span className='text-red-600'>||</span> HIGH SPEED
                                        </p>

                                    </div>
                                </div>
                            </div>

                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="text-red-600 text-2xl md:text-3xl lg:text-5xl">❮</a>
                                <a href="#slide2" className="text-red-600 text-2xl md:text-3xl lg:text-5xl">❯</a>
                            </div>
                        </div>
                    </SwiperSlide>


                </div>

            </Swiper>

        </>
    );
};

export default Banner;