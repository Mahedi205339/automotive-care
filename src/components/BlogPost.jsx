import slidePic1 from '../assets/images/banner2.png'
import slidePic2 from '../assets/images/car2.png'
const BlogPost = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <h3 className='text-xl md:text-2xl lg:text-4xl uppercase  text-center mb-6 md:mb-10 lg:mb-14'>TOP BLOG <span className='text-red-600 '>POSTS</span></h3>

            <div className='flex flex-col lg:flex-row gap-5 lg:gap-10'>
                <div className="card lg:card-side card-body bg-black flex-1">
                    <figure><img className='' src={slidePic2} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className='text-xl md:text-3xl text-red-600'>25/AUG</h2>
                        <p className='text-gray-400'>
                            This car is a limited edition car.
                            offer is limited so grab as soon as you can
                        </p>
                        <button className='px-4 py-2 border border-red-600 rounded-lg'>
                            Read More
                        </button>

                    </div>
                </div>
                <div className="card lg:card-side card-body bg-black flex-1">
                    <figure><img src={slidePic1} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className='text-xl md:text-3xl text-red-600'>25/AUG</h2>
                        <p className='text-gray-400 w-64'>
                            This car is a limited edition car.
                            offer is limited so grab as soon as you can
                        </p>
                        <button className='px-4 py-2 border border-red-600 rounded-lg'>
                            Read More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;