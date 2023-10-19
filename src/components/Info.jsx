import img1 from '../assets/images/img1.png'
const Info = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <div className="my-10">
                <h2 className="text-3xl uppercase font-bold text-center mb-6 md:mb-10 lg:mb-14"> Well come to <br />
                    Automotive <span className="text-red-600">Care</span>
                </h2>

                <div className='flex flex-col md:flex-row gap-5 lg:gap-10 p-3'>
                    <div className='flex-1'>
                        <img src={img1} alt="" />
                    </div>
                    <div className='flex-1'>
                        <h1 className='text-3xl uppercase '>
                            <span className='text-gray-400'> meet our</span> <br />
                            <span className='text-red-600'>
                                CAR CLUB SINCE 1979
                            </span>
                        </h1>
                        <hr className='w-full my-3 h-[1px]' />
                        <p className='text-gray-400'>CUSTOME AND CLUB RACING</p>
                        <p className='text-gray-400 text-left mt-6'>
                            We work with industry leading manufacturers and dealerships to develop bespoke products for your customers. Calling upon over 45 years of industry experience, our goal is to provide reassurance and peace of mind to motorists worldwide.
                        </p>
                        <p className='my-10 text-gray-400'>
                            Our Honorable <br />
                            <span className='text-3xl uppercase'>MAHEDI HASAN</span>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Info;