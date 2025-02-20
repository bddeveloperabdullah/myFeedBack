import Container from "../../similar/Container";
import SectionTitle from "../../similar/SectionTitle";
import Star from "../../similar/Star";

const OverAllRating = () => {
  return (
    <>
      <section className="py-5">
        <Container>
          <div className="flex justify-center items-center gap-30 border-t border-b border-[#DCDCDC] py-10">
            <div className="flex justify-center items-start gap-5">
              <img src="/Groupstar.png" alt="" />
              <div className="space-y-2">
                <SectionTitle className="font-semibold">
                  Overall rating
                </SectionTitle>
                <p className="font-roboto mt-5 text-acent2">874 reviews</p>
                <div className="flex items-center gap-2 mt-5">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3">
                <p className="text-[17px] font-roboto font-semibold text-[#484848]">
                  5 stars
                </p>
                <div className="w-[487px] h-[9px] bg-primary rounded-full" />
              </div>

              <div className="flex items-center gap-3">
                <p className="text-[17px] font-roboto font-semibold text-[#484848]">
                  0 stars
                </p>
                <div className="w-[487px] h-[9px] bg-[#D9D9D9] rounded-full">
                  <div className="!w-[270.25px] !h-[9px] bg-primary rounded-full" />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <p className="text-[17px] font-roboto font-semibold text-[#484848]">
                  0 stars
                </p>
                <div className="w-[487px] h-[9px] bg-[#D9D9D9] rounded-full">
                  <div className="!w-[200.25px] !h-[9px] bg-primary rounded-full" />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <p className="text-[17px] font-roboto font-semibold text-[#484848]">
                  0 stars
                </p>
                <div className="w-[487px] h-[9px] bg-[#D9D9D9] rounded-full">
                  <div className="!w-[150.25px] !h-[9px] bg-primary rounded-full" />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <p className="text-[17px] font-roboto font-semibold text-[#484848]">
                  0 stars
                </p>
                <div className="w-[487px] h-[9px] bg-[#D9D9D9] rounded-full">
                  <div className="!w-[70.25px] !h-[9px] bg-primary rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default OverAllRating;
