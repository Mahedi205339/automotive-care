import './featureCard.css'

const featuredCarousel = ({ item }) => {
    // console.log(item);
    // console.log(item.description.length);
    return (

        <div className='box-area w-[400px]'>
            <div className='box'>
                <img src={item?.image} alt="" />
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