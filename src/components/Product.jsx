
const Product = ({product}) => {
    const {image , short_description , name , type , price } = product ;
    return (
        <div data-aos="zoom-in" className="max-w-7xl mx-auto ">
            <div className="card w-96 bg-black shadow-xl">
                <figure><img src={image} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{short_description}</p>
                    <p>{type}</p>
                    <p>${price}</p>
                    <div className="card-actions justify-end  ">
                        <button className=" bg-red-600 hover:bg-black hover:text-red-600 font-bold px-4 md:px-4 py-1 md:py-2 rounded-lg">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;