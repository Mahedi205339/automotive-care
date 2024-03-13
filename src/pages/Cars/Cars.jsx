import FeaturedCarousel from "../../components/featuredCars/FeaturedCarousel";
import useCars from "../../hooks/useCars";
import { useState } from "react";

const Cars = () => {
    const [cars] = useCars()
    // const { register, handleSubmit } = useForm()
    // const onSubmit = async (data) => {
    //     console.log(data.brands)
    //     return data
    // }
    const [brands, setBrands] = useState("cars")
    console.log(brands);
    console.log();
    const showCars = cars.filter(item => item?.brand === brands)

    // console.log(cars);




    return (
        <div className="min-h-[calc(100vh-250px)] max-w-[1560px] mx-auto pt-[200px]">
            <div className=" caret-lime-50">
                <div>

                </div>
                <div className="">
                    <div>
                        <h2>Total find cars {showCars.length}</h2>
                        {/* <select name="" id=""></select> */}

                        <div>
                            <form >
                                <label >Select Brand</label>
                                <select  onChange={(e) => setBrands(e?.target?.value)} name="brands" className="bg-black text-white" >
                                    <option value="BMW">BMW</option>
                                    <option value="Honda">Honda</option>
                                </select>
                                <button >search</button>
                            </form>
                        </div>
                    </div>
                    <div className="grid grid-cols-3">
                        {
                            showCars.map(item => <FeaturedCarousel item={item} key={item._id} />)
                        }
                    </div>

                </div>
            </div>

        </div >
    );
};

export default Cars;