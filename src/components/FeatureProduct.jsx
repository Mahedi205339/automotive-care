import Product from "./Product";

const FeatureProduct = ({ products }) => {



    return (
        <div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center my-10">
                <span className="text-red-600"> Feature</span>  Products
            </h3>

            <div data-aos="zoom-in" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                {
                    products.map(product => <Product product={product} key={product.id}></Product>)
                }
            </div>
        </div>
    );
};

export default FeatureProduct;