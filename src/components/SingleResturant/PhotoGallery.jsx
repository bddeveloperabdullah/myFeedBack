import React from "react";
import Container from "../../similar/Container";
import Button from "../../similar/Button";
import { RiGridFill } from "react-icons/ri";

const PhotoGallery = () => {
  return (
    <>
      <section className="relative">
        <Container>
          <div className="mt-10 space-y-5 ms-16">
            <h2 className="text-[34px] font-lexend font-semibold leading-[42.5px]  ">
              Discover our magnificent place in photos
            </h2>
            <p className="text-base font-roboto font-normal leading-[18.75px] text-[#5e5e5e] w-[601px]">
              The lorem ipsum is, in printing, a series of meaningless words
              used temporarily to calibrate a layout.The lorem ipsum is, in
              printing.
            </p>
          </div>

          <div className="mt-14 flex flex-col md:flex-row justify-center items-center gap-2.5">
            <div>
              <img src="/Rectangle 1266.png" alt="" />
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              <img src="/Rectangle 1268.png" alt="" />
              <img src="/recent1.png" alt="" />
              <img src="/recent2.png" alt="" />
              <img src="/recent3.png" alt="" />
            </div>
          </div>
          <div className="absolute top-160 left-50">
            <Button className="bg-white text-accent flex justify-center items-center gap-2 font-bold">
              <RiGridFill className="text-2xl" />
              View all photo (7)
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default PhotoGallery;
