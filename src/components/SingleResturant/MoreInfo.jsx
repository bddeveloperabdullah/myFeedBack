import { moreInfo } from "../../db/db";
import Container from "../../similar/Container";
import SectionTitle from "../../similar/SectionTitle";

const MoreInfo = () => {
  return (
    <>
      <section className="py-20">
        <Container>
          <div className="flex justify-center gap-20">
            <div className="space-y-14">
              <SectionTitle>More informations</SectionTitle>
              <div className="space-y-7">
                {moreInfo.infoItem.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-start items-center gap-2.5"
                  >
                    <img src={`/${item.icon}`} alt="" />
                    <p className="text-xl font-roboto">{item.itemName}</p>
                  </div>
                ))}

                <div className="flex justify-start items-center gap-5 !pt-3">
                  {moreInfo.socialInfo.map((item, index) => (
                    <div key={index}>
                      <a href={item.url}>
                        <img src={`/${item.icon}`} alt="" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <img src="/map2.png" alt="" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default MoreInfo;
