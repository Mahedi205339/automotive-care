
import Banner from "../../components/Banner";
import Info from "../../components/Info";
import Comments from "../../components/Comments";
import BlogPost from "../../components/BlogPost";
import ContactUs from "../../components/ContactUs";
import FeaturedCars from "../../components/featuredCars/FeaturedCars";


const Home = () => {


    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <FeaturedCars />
            <Comments></Comments>
            <BlogPost></BlogPost>
            <ContactUs></ContactUs>
            <Comments></Comments>
        </div>
    );
};

export default Home;