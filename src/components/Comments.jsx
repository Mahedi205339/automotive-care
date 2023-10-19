import backImg from '../assets/images/backimg.png'
import memberimg from '../assets/images/member3.png'
import { BsRocketTakeoffFill ,BsFillCreditCardFill ,BsPersonLinesFill} from 'react-icons/bs'
const Comments = () => {
    return (
        <div className=''>
            <div className="w-full  hero h-[50vh]" style={{
                backgroundImage: `url(${backImg}) `,
            }}>
                <div className='flex flex-col justify-center items-center'>
                    <img className='w-28 my-2' src={memberimg} alt="" />
                    <p className='max-w-5xl text-center lg:text-xl text-gray-400'>
                        We work with industry leading manufacturers and dealerships to develop bespoke products for your customers. Calling upon over 45 years of industry experience, our goal is to provide reassurance and peace of mind to motorists worldwide
                    </p>

                    <h2 className='text-2xl md:text-2xl lg:text-3xl text-red-600 mt-10'> Mahedi Hasan</h2>
                    <p>--Director</p>
                </div>
            </div>

            <div className='my-10'>
                <h3 className='text-xl md:text-3xl lg:text-4xl uppercase  text-center mb-6 md:mb-10 lg:mb-14'>Our <span className='text-red-600 font-bold'>Specialties</span></h3>
                <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3'>
                    <div className='border border-gray-500 h-20 flex justify-between w-96 rounded items-center '>
                        <div className='p-3'>
                            <h2 className='text-xl md:text-2xl  text-gray-400'>FREE DELIVERY</h2>
                            <p className='text-gray-500'>We provide our products all over the world . <br />
                                So we have access to all over the world !
                            </p>
                        </div>
                        <BsRocketTakeoffFill className='text-5xl text-red-600 -mr-5 bg-black'></BsRocketTakeoffFill>
                    </div>
                    <div className='border border-gray-500 h-20 flex justify-between w-96 rounded items-center '>
                        <div className='p-3'>
                            <h2 className='text-xl md:text-2xl  text-gray-400'>MONEY GUARANTEE</h2>
                            <p className='text-gray-500'>We provide our products all over the world . <br />
                                So we have access to all over the world !
                            </p>
                        </div>
                        <BsFillCreditCardFill className='text-5xl text-red-600 -mr-5 bg-black'></BsFillCreditCardFill>
                    </div>
                    <div className='border border-gray-500 h-20 flex justify-between w-96 rounded items-center '>
                        <div className='p-3'>
                            <h2 className='text-xl md:text-2xl  text-gray-400'>ONLINE SUPPORT</h2>
                            <p className='text-gray-500'>We provide our products all over the world . <br />
                                So we have access to all over the world !
                            </p>
                        </div>
                        <BsPersonLinesFill className='text-5xl text-red-600 -mr-5 bg-black'></BsPersonLinesFill>
                    </div>
                </div>

            </div>
        </div>






    );
};

export default Comments;