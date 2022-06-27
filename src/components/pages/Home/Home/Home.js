import Bikes from "../../Bikes/Bikes";
import Banner from "../Banner/Banner";
import Choose from "../Choose/Choose";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Bikes></Bikes>
          <Testimonials></Testimonials>
          <Choose></Choose>
        </div>
    );
};

export default Home;