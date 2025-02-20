import Slider from "../../components/Home/Slider/Slider";
import Treands from "../../components/Home/Treands/Treands";
import ShowMore from "../../components/Home/ShowMore/ShowMore";
import Explore from "../../components/Home/Explore/Explore";
import Recent from "../../components/Home/Recent/Recent";
import NavBar from "../../components/Header/NavBar";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <Slider />
      <Treands />
      <ShowMore />
      <Explore />
      <Recent />
    </>
  );
};

export default HomePage;
