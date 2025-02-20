import CardTitle from "../../similar/CardTitle";
import SectionTitle from "../../similar/SectionTitle";
import { FaArrowDownWideShort } from "react-icons/fa6";
import Star from "../../similar/Star";
import AllResturantCard from "../../similar/AllResturantCard";
import { allResturant } from "../../db/db";
import { NavLink } from "react-router-dom";

const Resturant = () => {
  return (
    <>
      <section className="pb-20">
        <div className="flex justify-center items-start">
          <div className="mt-7 ms-5">
            <div className="bradcamb mb-3">
              <p className="text-base font-roboto text-secondary font-semibold">
                <NavLink to="/all">Home</NavLink>
                <span>/</span>
                <NavLink to="resturant">All Resturant</NavLink>
              </p>
            </div>
            <div className="flex justify-center items-center gap-7">
              <SectionTitle>best restaurants in singapore</SectionTitle>
              <div className="flex items-center justify-center gap-1 w-[98px] h-[36px] border border-[#5E5E5E] rounded-full text-[#5E5E5E] text-[17px] font-roboto cursor-pointer">
                <FaArrowDownWideShort />
                <p>short</p>
              </div>
            </div>

            {/*Resturant Item */}
            <div>
              {allResturant.map((item, index) => (
                <AllResturantCard key={index} {...item} />
              ))}
            </div>
          </div>

          <div className="ms-5">
            <img src="/map.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Resturant;
