import Container from "../../similar/Container";
import Star from "../../similar/Star";
import { IoLocationSharp } from "react-icons/io5";
import { FaClock } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <section className="bg-[url('/singleResturant.png')] bg-cover bg-center text-white py-20 relative">
        <Container>
          <div className="w-[552px]">
            <h1 className="text-[52px] font-lexend font-semibold leading-[65px]">
              Bella italia
            </h1>
            <div className="flex items-center gap-2.5 pt-3 pb-7">
              <div className="flex justify-center items-center gap-2">
                {Array.from(Array(5).keys()).map((el) => (
                  <Star key={el} />
                ))}
              </div>
              <p className="text-[19px] font-semibold leading-[22.27px] flex gap-2">
                5.00
                <span>(875 reviews)</span>
              </p>
            </div>
            <p className="text-[19px] font-normal leading-[22.27px] pb-12">
              The lorem ipsum is, in printing, a series of meaningless words
              used temporarily to calibrate a layout. The lorem ipsum is, in
              printing, a series of meaningless words used temporarily to
              calibrate a layout.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <IoLocationSharp className="text-2xl" />
                <p className="text-[19px] font-normal leading-[22.27px]">
                  Singapour, Bishan-Ang Mo Kio Park{" "}
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <FaClock className="text-xl" />
                <p className="text-[19px] font-normal leading-[22.27px]">
                  7j/7, 08:00 - 22:00
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="pb-24">
        <div className="absolute top-130 left-150">
          <img src="/brandLogo.png" alt="" />
        </div>
      </section>
    </>
  );
};

export default Hero;
