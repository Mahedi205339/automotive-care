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
                    <Link className='bg-transparent' to={`/cars/${item._id}`}>

                        <button className='rounded-lg bg-transparent border-red-500 text-xl border-2 text-red-600 hover:shadow-md font-bold hover:text-white hover:bg-red-600 hover:shadow-red-600 py-1 px-4 md:py-4 md:px-8 my-2'>
                            Details
                        </button>
                    </Link>


                </div>
            </div>
        </div>
    );
};

export default featuredCarousel;