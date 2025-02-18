import Container from "../../../similar/Container";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import SectionTitle from "../../../similar/SectionTitle";
import { sliderCard } from "../../../db/db";
import Star from "../../../similar/Star";

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
                    <div className="w-[285px] h-[363px] rounded-[14px] bg-[#F8F8F8] p-2.5">
                      <div className="relative">
                        <img src={item.photo} alt="" />
                        <div className="absolute bottom-2 left-20 flex justify-center items-center gap-2">
                          {Array.from(Array(4).keys()).map((el) => (
                            <div
                              className="size-2 bg-[#eee] rounded-full cursor-pointer"
                              key={el}
                            />
                          ))}
                        </div>
                      </div>
                      <h1>{item.title}</h1>
                      <p>{item.desc}</p>
                      <div className="flex gap-x-1">
                        {Array.from(Array(4).keys()).map((el) => (
                          <Star key={el} />
                        ))}
                      </div>
                    </div>
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
