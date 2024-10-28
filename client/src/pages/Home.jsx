import BgSlider from "../components/BgSlider";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Steps from "../components/Steps";
import Testimonials from "../components/Testimonials";
import Upload from "../components/Upload";

const Home = () => {
  return (
    <div>
      <Header />
      <Steps />
      <BgSlider />
      <Testimonials />
      <Upload />
      <Footer />
    </div>
  );
};

export default Home;
