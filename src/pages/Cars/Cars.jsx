// import Loading from "../../components/Loading/Loading";
import FeaturedCarousel from "../../components/featuredCars/FeaturedCarousel";
import useAxiosPublic from "../../hooks/useAxoisPublic";
import { useEffect, useState } from "react";

const Cars = () => {

    const [asc, setAsc] = useState("asc")
    const [cars, setCars] = useState([])


    const axiosPublic = useAxiosPublic();
    const [search, setSearch] = useState("")
    const allCars = []
    const [brands, setBrands] = useState("")

    useEffect(() => {
        axiosPublic.get(`/cars?sort=${asc}`)
            .then(res => setCars(res.data))
    }, [asc, axiosPublic])
    // console.log((isLoading));


    const showCars = cars.filter((item) => item?.brand === brands)
    // console.log(showCars);
    if (showCars.length === 0) {
        const allCarData = cars?.filter(item => item?.category === 'cars')
        allCars.push(...allCarData)

    }

    // console.log(allCars);




    return (
        <div className="min-h-[calc(100vh-100px)] max-w-[1560px] mx-auto pt-[100px]">
            <div className=" caret-lime-50">
                <div className="flex justify-center my-5 md:my-8">
                    {
                        showCars.length === 0 ?
                            <h2 className="text-2xl md:text-4xl lg:text-5xl text-red-600 font-semibold">Total find cars {allCars.length}</h2> :
                            <h2 className="text-2xl md:text-4xl lg:text-5xl text-red-600 font-semibold">Total find cars {showCars.length}</h2>
                    }
                </div>
                <div className="">
                    <div className="xl:max-w-[1400px] px-4 mx-auto flex flex-col-reverse md:flex-row md:justify-between items-center gap-3">


                        {/* <select name="" id=""></select> */}

                        <div>


                            <div>

                                <select onChange={(e) => setBrands(e?.target?.value)} className="select select-error text-xl w-96 h-16 bg-neutral-700">
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
                            <select onChange={(e) => setAsc(e.target.value)} className="select select-error text-xl w-96 h-16 bg-neutral-700">
                                <option disabled selected>Sort Price</option>
                                <option value="asc">Low to High</option>
                                <option value="desc">High to Low</option>

                            </select>
                        </div>
                        <div>

                            <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search by Car name" className="input bg-neutral-700 input-bordered text-xl h-16 input-error w-96" />
                        </div>

                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
                        {
                            showCars.length === 0 ?
                                allCars?.filter((item) => {
                                    return search.toLowerCase() === '' ? item : item?.title?.toLowerCase().includes(search)
                                }).map(item => <FeaturedCarousel item={item} key={item._id} />)
                                : showCars?.filter((item) => {
                                    return search.toLowerCase() === '' ? item : item?.title?.toLowerCase().includes(search)
                                }).map(item => <FeaturedCarousel item={item} key={item._id} />)
                        }
                    </div>

                </div>
            </div>

        </div >
    );
};

export default Cars;