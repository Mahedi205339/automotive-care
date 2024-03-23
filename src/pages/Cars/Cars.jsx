import Loading from "../../components/Loading/Loading";
import FeaturedCarousel from "../../components/featuredCars/FeaturedCarousel";
import useAxiosPublic from "../../hooks/useAxoisPublic";
import { useEffect, useState } from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { BsArrowLeftCircleFill } from "react-icons/bs";
const Cars = () => {

    const [asc, setAsc] = useState("asc")
    const [cars, setCars] = useState([])
    const [count, setCount] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const axiosPublic = useAxiosPublic();
    const [search, setSearch] = useState("")
    const allCars = []
    const [brands, setBrands] = useState("")
    const [currentPage, setCurrentPage] = useState(0)
    const carPerPage = 9;
    // pagination 


    useEffect(() => {
        setIsLoading(true);
        axiosPublic.get("/cars-count")
            .then(res => {
                setCount(res.data)
                setIsLoading(false)
            })

    }, [axiosPublic])

    const countCar = count.filter(car => car.category === 'cars').length
    const numberOfPages = Math.ceil(countCar / carPerPage)


    // type 1 
    // for (let i = 0; i < numberOfPages; i++) {
    //     pages.push(i)
    // }
    // type 2 (shortcut)
    const pages = [...Array(numberOfPages).keys()];
    // console.log(pages)
    const handlePervPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }

    }
    const handleNextPage = () => {
        if (currentPage < pages.length - 1)
            setCurrentPage(currentPage + 1)
    }



    // console.log(countCar);

    useEffect(() => {
        setIsLoading(true);
        axiosPublic.get(`/cars?sort=${asc}&page=${currentPage}&size=${carPerPage}`)
            .then(res => {
                setCars(res.data)
                setIsLoading(false)
            })


    }, [asc, axiosPublic, currentPage, carPerPage])


    // console.log((isLoading));



    const showCars = cars.filter((item) => item?.brand === brands)
    // console.log(showCars);
    if (showCars.length === 0) {
        const allCarData = cars?.filter(item => item?.category === 'cars')
        allCars.push(...allCarData)

    }

    if (isLoading) {
        <Loading />
    }



    // console.log(allCars);




    return (
        <div className="min-h-[calc(100vh-100px)] max-w-[1560px] mx-auto pt-[100px]">
            <div className=" caret-lime-50">
                <div className="flex justify-center my-3 md:my-5">
                    {
                        showCars.length === 0 ?
                            <h2 className="text-lg md:text-xl lg:text-2xl text-red-600 font-semibold">Total find cars {allCars.length}</h2> :
                            <h2 className="text-xl md:text-3xl lg:text-4xl text-red-600 font-semibold">Total find cars {showCars.length}</h2>
                    }
                </div>
                <div className="">
                    <div className="xl:max-w-[1400px] px-4 mx-auto flex flex-col-reverse md:flex-row md:justify-between items-center gap-3">

                        {/* <select name="" id=""></select> */}

                        <div>




                            <select onChange={(e) => setBrands(e?.target?.value)} className="select select-error text-base sm:w-80  w-80 md:w-96  bg-neutral-900">
                                <option disabled selected>Brands</option>
                                <option value="">All Cars</option>
                                <option value="BMW">BMW</option>
                                <option value="Lamborghini">Lamborghini</option>
                                <option value="Audi">Audi</option>
                                <option value="Tesla">Tesla</option>
                                <option value="Mercedes">Mercedes</option>
                                <option value="Honda">Honda</option>
                            </select>




                        </div>
                        <div>
                            <select onChange={(e) => setAsc(e.target.value)} className="select select-error text-base w-80 md:w-96  bg-neutral-900">
                                <option disabled selected>Sort Price</option>
                                <option value="asc">Low to High</option>
                                <option value="desc">High to Low</option>

                            </select>
                        </div>
                        <div>

                            <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search by Car name" className="input input-bordered sm:w-80 text-base w-72 md:w-96 h-10 border border-red-700 bg-neutral-900" />
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
            <div className="flex justify-center my-6 md:my-10 lg:my-14">
                <button onClick={handlePervPage} className="">
                    <BsArrowLeftCircleFill className="text-black border border-red-600 hover:text-red-600 bg-white rounded-full" size={30}/>
                    
                    </button>
                {
                    pages.map(page => <button
                        onClick={() => setCurrentPage(page)}
                        key={page} className={`${currentPage === page ? 'bg-red-600' : 'bg-black'} border border-red-600 px-3 py-1 rounded-full ml-3`}> {page+1}</button>)
                }
                <button onClick={handleNextPage} className="px-2 py-1">
                <BsArrowRightCircleFill className="text-black border border-red-600 hover:text-red-600 bg-white rounded-full" size={30}/>
                    
                </button>
            </div>
        </div >
    );
};

export default Cars;