import Button from "../../similar/Button";
import Container from "../../similar/Container";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { IoIosSearch } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import NavBar from "./NavBar";
import { NavLink } from "react-router-dom";

const Search = () => {
  return (
    <>
      <header className="">
        <div className="w-full mx-auto border-b border-[#DCDCDC] py-6">
          <Container>
            <div className="flex justify-between items-center">
              <div>
                <NavLink to="/">
                  <img src="/logo.png" alt="" />
                </NavLink>
              </div>
              <div className="w-[625px] h-[51px] border border-[#ADADAD] rounded-full flex justify-between items-center px-4 shadow-searhShadow">
                <input
                  type="text"
                  placeholder="restaurant, hotel, service...."
                  className="w-[250px] focus:outline-none "
                />
                <span>
                  <TfiLayoutLineSolid className="rotate-90" />
                </span>
                <input
                  type="text"
                  placeholder="Singapour..."
                  className="w-[230px] focus:outline-none"
                />
                <div className="size-[43px] bg-primary flex justify-center items-center rounded-full text-white cursor-pointer">
                  <IoIosSearch className="text-2xl" />
                </div>
              </div>
              <div className="flex items-center gap-x-3">
                <TbWorld className="text-3xl text-[#595959]" />
                <Button>MyFeedback for business</Button>
              </div>
            </div>
          </Container>
        </div>
        <NavBar />
      </header>
    </>
  );
};

export default Search;
