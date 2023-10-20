import Product from "./Product";
import { useState } from "react";
import PropTypes from 'prop-types';
const FeatureProduct = ({ loadedProducts }) => {
    const [products, setProducts] = useState(loadedProducts)
    console.log(products)

    return (
        <div className="max-w-7xl mx-auto">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center my-10">
                <span className="text-red-600"> Feature</span>  Products
            </h3>

            <div data-aos="zoom-in" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    products.map(product => <Product
                        products={products}
                        product={product} key={product._id}
                        setProducts={setProducts}
                    ></Product>)
                }
                {/*  */}
            </div>
        </div>
    );
};

FeatureProduct.propTypes = {
    loadedProducts: PropTypes.array,
};

export default FeatureProduct;