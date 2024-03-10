import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner";
import FeatureProduct from "../../components/FeatureProduct";
import Info from "../../components/Info";
import Comments from "../../components/Comments";
import BlogPost from "../../components/BlogPost";
import ContactUs from "../../components/ContactUs";


const Home = () => {
    const loadedProducts = useLoaderData();
    

    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <FeatureProduct
                loadedProducts={loadedProducts}></FeatureProduct>
            <Comments></Comments>
            <BlogPost></BlogPost>
            <ContactUs></ContactUs>
            <Comments></Comments>
        </div>
    );
};

export default Home;