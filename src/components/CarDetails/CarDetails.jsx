import { useLoaderData } from "react-router-dom";
const CarDetails = () => {
    const carData = useLoaderData()
    console.log(carData);
    return (
        <div>

        </div>
    );
};

export default CarDetails;