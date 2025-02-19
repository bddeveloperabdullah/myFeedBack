import Button from "../../../similar/Button";
import Container from "../../../similar/Container";
import SectionTitle from "../../../similar/SectionTitle";

const ShowMore = () => {
  return (
    <>
      <section className="py-14">
        <Container>
          <SectionTitle className="!text-[22px] text-center font-normal">
            Discover more cool restaurants
          </SectionTitle>
          <div className="text-center mt-7">
            <Button className="bg-primary !w-[175px]">Show more</Button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ShowMore;
