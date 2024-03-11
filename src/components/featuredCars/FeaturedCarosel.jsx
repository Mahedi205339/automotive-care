

const featuredCarosel = ({ item }) => {
    console.log(item);
    return (
        <div className="card bg-black  shadow-xl">
            <figure><img className="w-96 h-72 object-cover" src={item?.image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{item?.title}</h2>
                <p></p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default featuredCarosel;