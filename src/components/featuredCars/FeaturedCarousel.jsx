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
                            item?.description.length < 100 ? item?.description :
                                item?.description.slice(0, 100)
                        }.....
                    </p>

                </div>
            </div>
        </div>
    );
};

export default featuredCarousel;