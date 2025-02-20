import React from "react";
import Star from "./Star";
import CardTitle from "./CardTitle";

const AllResturantCard = ({ photo, title, desc }) => {
  return (
    <>
      <div className="flex justify-start items-start gap-3 py-5 mt-5 border-b border-[#DCDCDC] cursor-pointer">
        <div>
          <img
            className="w-full max-w-[209px] h-full max-h-[189px] object-cover"
            src={photo}
            alt=""
          />
        </div>
        <div className="w-[280px] space-y-3">
          <CardTitle>{title}</CardTitle>
          <p className="font-roboto font-normal leading-[18.75px] text-acent2">
            {desc}
          </p>
          <div className="flex justify-start items-center gap-2.5">
            <div className="flex justify-center items-center gap-1">
              {Array.from(Array(5).keys()).map((el) => (
                <Star key={el} />
              ))}
            </div>
            <p className="flex gap-2 font-roboto font-semibold leading-[18.16px]">
              4.5
              <span className="text-acent2">(875 review)</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllResturantCard;
