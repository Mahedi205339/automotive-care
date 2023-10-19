import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner";
import FeatureProduct from "../../components/FeatureProduct";
import Info from "../../components/Info";
import Comments from "../../components/Comments";
import BlogPost from "../../components/BlogPost";


const Home = () => {
    const products = useLoaderData()
    
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <FeatureProduct products={products}></FeatureProduct>
            <Comments></Comments>
            <BlogPost></BlogPost>
        </div>
    );
};

export default Home;