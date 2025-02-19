import React from "react";
import Container from "../../../similar/Container";
import SectionTitle from "../../../similar/SectionTitle";
import { latestTrand } from "../../../db/db";
import SliderCard from "../../../similar/SliderCard";

const Treands = () => {
  return (
    <>
      <section className="pt-10">
        <Container>
          <SectionTitle className="pb-10">The latest trends</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-y-3.5">
            {latestTrand.map((item, index) => (
              <SliderCard key={index} {...item} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Treands;
