import Container from "../../similar/Container";
import { footerMenu } from "../../db/db";

const Footer = () => {
  return (
    <>
      <footer className="border-t border-[#DCDCDC]">
        <Container>
          <div className="flex justify-center gap-x-40 py-5">
            <div className="flex flex-col gap-2">
              <h2 className="footerHeading">About</h2>
              {footerMenu.menuOne.map((item, index) => (
                <a href={item.url} key={index} className="text-[#5E5E5E]">
                  {item.itemName}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="footerHeading">MyFeedback</h2>
              {footerMenu.menuTwo.map((item, index) => (
                <a href={item.url} key={index} className="text-[#5E5E5E]">
                  {item.itemName}
                </a>
              ))}
            </div>
            <div className="space-y-10">
              <div>
                <h2 className="footerHeading">Language</h2>
                <select className="text-[#5E5E5E]">
                  <option>English</option>
                </select>
              </div>
              <div>
                <h2 className="footerHeading">Countries</h2>
                <select className="text-[#5E5E5E]">
                  <option>Bangladesh</option>
                </select>
              </div>
            </div>
          </div>
          <div className="text-center font-bold font-roboto mt-10">
            <p>{`copyright © February ${new Date().getFullYear()} myfeedback, designed by scott `}</p>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
