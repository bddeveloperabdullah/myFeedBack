import React from "react";
import CardTitle from "./CardTitle";
import Star from "./Star";

const SliderCard = ({ photo, title, desc, totalReview }) => {
  return (
    <>
      <div className="w-[285px] h-[363px] rounded-[14px] bg-[#F8F8F8] p-2.5">
        <div className="relative">
          <img src={photo} alt="" />
          <div className="absolute bottom-2 left-20 flex justify-center items-center gap-2">
            {Array.from(Array(4).keys()).map((el) => (
              <div
                className="size-2 bg-[#eee] rounded-full cursor-pointer"
                key={el}
              />
            ))}
          </div>
        </div>
        <CardTitle className={"py-2"}>{title}</CardTitle>
        <p className="text-sm text-acent2 leading-[16.41px] pb-3">{desc}</p>
        <div className="flex gap-x-1">
          {Array.from(Array(5).keys()).map((el) => (
            <Star key={el} />
          ))}
          <p className="font-roboto font-bold flex justify-center items-center gap-2 ms-2">
            5<span className="font-normal text-acent2">{totalReview}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default SliderCard;
