import React from "react";
import Container from "../../../similar/Container";
import SectionTitle from "../../../similar/SectionTitle";
import Button from "../../../similar/Button";

const Explore = () => {
  return (
    <>
      <section className="bg-[#F2F2F2] py-10">
        <Container>
          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-5">
            <div>
              <h1 className="text-lg lg:text-[26px] font-lexend font-[800] lg:w-[502px] lg:leading-[32.5px] ">
                MyFeedback for Business has resources to help you plan, start,
                grow, and advertise your small business
              </h1>
              <p className="text-sm md:text-base font-roboto font-normal text-acent2 w-[453px] leading-[18.75px] mt-7 ">
                The lorem ipsum is, in printing, a series of meaningless words
                used temporarily to calibrate a layout.
              </p>
              <Button className="!w-[296px] !h-[52px] mt-10">
                Explore MyFeedback business
              </Button>
            </div>
            <div>
              <img src="/12.png" alt="" className="block w-full" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Explore;
