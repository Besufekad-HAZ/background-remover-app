import {
  BgSlider,
  Header,
  Steps,
  Testimonials,
  Upload,
} from "@/features/background-removal";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Steps />
      <BgSlider />
      <Testimonials />
      <Upload />
    </div>
  );
};

export default HomePage;
