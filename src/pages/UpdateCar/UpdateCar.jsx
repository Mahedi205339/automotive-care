import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCar = () => {

    const car = useLoaderData()
    const { photo, details, brand, name, type, price, _id } = car;


    const handleUpdateCar = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCar = { name, brand, type, price, details, photo }
        console.log(updatedCar)

        fetch(`https://automotive-server-9mwwj9le3-mahedis-projects.vercel.app/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCar)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Successfully Updated',
                        text: 'Car Successfully updated',

                    })
                }
            })
    }

    return (
        <div>
            <h3 className="text-xl md:text-3xl lg:text-4xl text-center my-4 md:my-7 lg:my-12">Update Car : <span className="text-red-600">{name}</span></h3>
            <form className="" onSubmit={handleUpdateCar}>
                <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto">
                    <div className="form-control w-72 lg:w-96">
                        <label className="label">
                            <span className="label-text font-bold lg:text-xl text-red-700">Car Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" defaultValue={name} placeholder=" Name" className="input input-bordered w-full text-black" />
                        </label>
                    </div>
                    <div className="form-control w-72 lg:w-96">
                        <label className="label">
                            <span className="label-text font-bold lg:text-xl text-red-700"> Brand</span>
                        </label>
                        <label className="">
                            <input type="text" name="brand" defaultValue={brand} placeholder="brand" className="input input-bordered  lg:text-xl text-black w-full" />
                        </label>
                    </div>
                    <div className="form-control w-72 lg:w-96">
                        <label className="label">
                            <span className="label-text font-bold lg:text-xl text-red-700">Type </span>
                        </label>
                        <label className="">
                            <input type="text" name="type" defaultValue={type} placeholder="type" className="input input-bordered text-black w-full" />
                        </label>
                    </div>
                    <div className="form-control w-72 lg:w-96">
                        <label className="label">
                            <span className="label-text font-bold lg:text-xl text-red-700">Photo URL</span>
                        </label>
                        <label className=" w-full">
                            <input type="text" name="photo" defaultValue={photo} placeholder="Photo URL" className="input input-bordered text-black  w-full" />
                        </label>
                    </div>
                    <div className="w-72 lg:w-96">
                        <label className="label">
                            <span className="label-text font-bold lg:text-xl text-red-700">Price</span>
                        </label>
                        <label className="">
                            <input type="number" name="price" defaultValue={price} placeholder="price" className="input input-bordered text-black w-full" />
                        </label>
                    </div>
                    <div className="w-72 lg:w-96">
                        <label className="label">
                            <span className="label-text font-bold lg:text-xl text-red-700">Details</span>
                        </label>
                        <label className="">
                            <input type="text" name="details" defaultValue={details} placeholder="Details" className="input input-bordered  w-full  text-black" />
                        </label>
                    </div>
                </div>
                <div className="flex justify-center my-8">
                    <input className="w-32 h-10 hover:bg-red-700 font-semibold border border-red-700 rounded-lg mx-auto" type="submit" value="Update" />
                </div>

            </form>
        </div>
    );
};

export default UpdateCar;