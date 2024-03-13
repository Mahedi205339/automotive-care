import FeaturedCarousel from "../../components/featuredCars/FeaturedCarousel";
import useCars from "../../hooks/useCars";
import { useState } from "react";

const Cars = () => {
    const [cars] = useCars()
    const [search, setSearch] = useState("")
    console.log(search);
    const allCars = []
    const [brands, setBrands] = useState("")
    // console.log(brands);
    const showCars = cars.filter((item) => item?.brand === brands)
    // console.log(showCars);
    if (showCars.length === 0) {
        const allCarData = cars?.filter(item => item?.category === 'cars')
        allCars.push(...allCarData)

    }

    // console.log(allCars);




    return (
        <div className="min-h-[calc(100vh-250px)] max-w-[1560px] mx-auto pt-[200px]">
            <div className=" caret-lime-50">
                <div>

                </div>
                <div className="">
                    <div className="xl:max-w-[1400px] px-4 mx-auto flex flex-col-reverse md:flex-row md:justify-between items-center gap-3">
                        {
                            showCars.length === 0 ?
                                <h2>Total find cars {allCars.length}</h2> :
                                <h2>Total find cars {showCars.length}</h2>
                        }

                        {/* <select name="" id=""></select> */}

                        <div>
                            <div>

                                <select onChange={(e) => setBrands(e?.target?.value)} className="select select-error text-xl w-96 bg-neutral-700">
                                    <option disabled selected>Brands</option>
                                    <option value="">All Cars</option>
                                    <option value="BMW">BMW</option>
                                    <option value="Lamborghini">Lamborghini</option>
                                    <option value="Audi">Audi</option>
                                    <option value="Tesla">Tesla</option>
                                    <option value="Mercedes">Mercedes</option>
                                </select>
                            </div>



                        </div>
                        <div>
                            <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search by Car name" className="input bg-neutral-700 input-bordered text-xl input-error w-96" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
                        {
                            showCars.length === 0 ?
                                allCars?.filter((item) => {
                                    return search.toLowerCase() === '' ? item : item?.title?.toLowerCase().includes(search)
                                }).map(item => <FeaturedCarousel item={item} key={item._id} />)
                                : showCars.map(item => <FeaturedCarousel item={item} key={item._id} />)
                        }
                    </div>

                </div>
            </div>

        </div >
    );
};

export default Cars;