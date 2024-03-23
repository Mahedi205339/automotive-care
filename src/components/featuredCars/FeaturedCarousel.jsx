import { Link } from 'react-router-dom';
import './featureCard.css'

const featuredCarousel = ({ item }) => {
    // console.log(item);
    // console.log(item.description.length);
    return (

        <div className='box-area [400px] mx-auto px-2'>
            <div className='box'>
                <img className='h-72 object-fill' src={item?.image} alt="" />
                <div className='overlay'>
                    <h3>{item?.title}</h3>
                    <p>
                        {
                            item?.description.length < 80 ? item?.description :
                                item?.description.slice(0, 80)
                        }.....
                    </p>
                    {
                        item.category == 'cars' &&
                        <Link className='bg-transparent' to={`/cars/${item._id}`}>

                            <button className='rounded-lg bg-transparent border-red-500   border-2 text-red-600 hover:shadow-xl font-semibold hover:text-white hover:bg-red-600 hover:shadow-red-600 py-1 px-2 md:py-2 md:px-3 my-2 md:my-5'>
                                Details
                            </button>
                        </Link>
                    }



                </div>
                {
                    item?.category == 'cars' &&
                    <button className='bg-red-600 px-2 py-1 absolute z-20 top-0'>
                        $ {item.price}
                    </button>
                }




            </div>
        </div>
    );
};

export default featuredCarousel;