import FeaturedCarousel from "../../components/featuredCars/FeaturedCarousel";
import useCars from "../../hooks/useCars";

const Cars = () => {

    const [cars] = useCars()
    // console.log(cars);
    const showCars = cars.filter(item => item.category === 'cars')
    console.log(showCars);

    return (
        <div className="min-h-[calc(100vh-250px)] max-w-[1560px] mx-auto pt-[200px]">
            <div className=" caret-lime-50">
                <div>

                </div>
                <div className="">
                    <div>
                        <h2>Total find cars {showCars.length}</h2>
                        {/* <select name="" id=""></select> */}
                    </div>
                    <div className="grid grid-cols-3">
                        {
                            showCars.map(item => <FeaturedCarousel item={item} key={item._id} />)
                        }
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Cars;