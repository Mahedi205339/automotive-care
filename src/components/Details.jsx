import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
    const cars = useLoaderData();
    const { id } = useParams();

    // const idInt = parseInt(id)



    const car = cars.find(car => car._id === id);
    console.log(car)

    const { photo, details, name, type, price } = car;

    return (
        <div className="max-w-6xl mx-auto">
            <div className="card  bg-black shadow-xl">
                <figure><img src={photo} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{details}</p>
                    <p>{type}</p>
                    <p className="text-3xl text-red-700">${price}</p>
                </div>
            </div>
        </div>
    );
};

export default Details;