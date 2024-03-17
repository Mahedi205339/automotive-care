import img1 from '../../assets/images/img1.png'
import Container from '../Container/Container';
import Heading from '../Heading/Heading';
const Info = () => {
    return (
        <Container>
            <div className="my-10 w-full min-h-screen">
                <Heading
                    title={" automotive"}
                    sideTitle={"care"}
                    subTitle={"welcome to automotive care. Here we ready to make your life more comfortable"}
                />

                <div className='flex flex-col md:flex-row justify-center items-center gap-5 lg:gap-10 p-3 w-full'>
                    <div data-aos="zoom-in" className='flex-1'>
                        <img src={img1} alt="" />
                    </div>
                    <div className='flex-1 px-3 md:px-10'>
                        <h1 className='lg:text-2xl md:text-xl text-lg uppercase '>
                            <span className='text-gray-400 lg:text-3xl md:text-2xl text-xl'> meet our</span> <br />
                            <span className='text-red-600 my-4'>
                                CAR CLUB SINCE 1979
                            </span>
                        </h1>
                        <hr className='w-full my-3 h-[1px]' />
                        <p className='text-gray-400'>CUSTOME AND CLUB RACING</p>
                        <p className='text-gray-400 text-left mt-6'>
                            We work with industry leading manufacturers and dealerships to develop bespoke products for your customers. Calling upon over 45 years of industry experience, our goal is to provide reassurance and peace of mind to motorists worldwide.
                        </p>
                        <p className='my-10 text-gray-400'>
                            Sincerely <br />
                            <span className='text-3xl font-bold font-Corinthia'>MD. Mahedi Hasan</span>
                        </p>
                    </div>
                </div>
            </div>

        </Container>
    );
};

export default Info;