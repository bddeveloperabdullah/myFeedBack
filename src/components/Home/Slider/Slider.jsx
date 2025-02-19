import Container from "../../../similar/Container";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import SectionTitle from "../../../similar/SectionTitle";
import { sliderCard } from "../../../db/db";
import Star from "../../../similar/Star";
import CardTitle from "../../../similar/CardTitle";
import SliderCard from "../../../similar/SliderCard";

const Slider = () => {
  return (
    <>
      <section className="py-10">
        <Container>
          <div className="bg-primary w-full max-w-[1345px] h-[509px] mx-auto rounded-[10px] overflow-hidden ">
            <SectionTitle className="text-white mt-10 px-10 font-normal">
              Find the best restaurant ratings below
            </SectionTitle>
            <div className="flex justify-between items-center gap-x-5 mt-10 px-10 relative">
              {/* Left Arrow  */}
              <div className="sliderArrow absolute top-26 left-3">
                <FaArrowLeft className="text-2xl" />
              </div>

              {/* Slider Content  */}
              <div className="flex justify-center items-center gap-x-2">
                {sliderCard.map((item, index) => (
                  <div key={index}>
                    <SliderCard key={index} {...item} />
                  </div>
                ))}
              </div>

              {/* Right Arrow  */}
              <div className="sliderArrow absolute top-26 right-4">
                <FaArrowRight className="text-2xl" />
              </div>
            </div>

            {/* Bottom Dot  */}
            <div className="flex justify-center gap-2.5 pt-7">
              {Array.from(Array(sliderCard.length).keys()).map((el) => (
                <div
                  className="size-3 bg-white rounded-full cursor-pointer"
                  key={el}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Slider;
