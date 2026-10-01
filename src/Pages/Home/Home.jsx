import Paths from "../Paths";
import Banner from "./Banner";
import CreatorCta from "./CreatorCta";
import Discover from "./Discover";
import Growth from "./Growth";
import Logos from "./Logos";
import Testimonials from "./Testimonials";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Logos></Logos>
            <Discover></Discover>
             <Paths></Paths>
             <Growth></Growth>
             <CreatorCta></CreatorCta>
             <Testimonials></Testimonials>

        </div>
    );
};

export default Home;