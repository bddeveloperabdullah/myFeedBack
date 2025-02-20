import Container from "../../similar/Container";
import { IoFilter } from "react-icons/io5";
import { FaArrowDownShortWide } from "react-icons/fa6";
import { recentItem } from "../../db/db";
import Star from "../../similar/Star";
import CardTitle from "../../similar/CardTitle";

const Review = () => {
  return (
    <>
      <section className="pt-5 pb-40">
        <Container>
          <div className="flex gap-4 ms-26">
            <div className="flex justify-center items-center gap-2.5 w-[128px] h-[49px] border border-[#5E5E5E] rounded-full cursor-pointer">
              <IoFilter className="text-2xl" />
              <p className="text-[19px] font-roboto font-[500] text-[#5E5E5E]">
                Filter
              </p>
            </div>
            <div className="flex justify-center items-center gap-2.5 w-[128px] h-[49px] border border-[#5E5E5E] rounded-full cursor-pointer">
              <FaArrowDownShortWide className="text-2xl" />
              <p className="text-[19px] font-roboto font-[500] text-[#5E5E5E]">
                Short
              </p>
            </div>
          </div>
          <div className="mt-10">
            <div className="space-y-7 w-[1055px] mx-auto">
              {recentItem.map((item, index) => (
                <div
                  key={index}
                  className="w-full bg-[#F8F8F8] p-5 rounded-2xl hover:scale-101 transition-all duration-300 cursor-pointer"
                >
                  <div className="w-[579px] flex gap-5">
                    <div>
                      <div className="size-[59px] bg-white rounded-full flex justify-center items-center">
                        <img src={`/${item.icon}`} alt="" />
                      </div>
                    </div>
                    <div>
                      <CardTitle>{item.title}</CardTitle>
                      <p className="text-base font-roboto text-acent2 pb-4">
                        {item.countryName}
                      </p>
                      <div className="flex items-center gap-3 pb-5">
                        <div className="flex gap-2">
                          <Star />
                          <Star />
                          <Star />
                          <Star />
                        </div>
                        <p className="font-roboto text-acent2">
                          {item.review.date}
                        </p>
                      </div>
                      <div>
                        <p className="font-roboto text-[#5E5E5E]">
                          {item.desc1}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Review;
