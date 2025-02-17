import { NavLink } from "react-router-dom";
import Container from "../../similar/Container";
import { menuItem } from "../../db/db";

const NavBar = () => {
  return (
    <>
      <nav className="mt-5">
        <Container>
          <div className="flex justify-center items-center gap-x-12">
            {menuItem.map((item, index) => (
              <NavLink
                to={`/${item.url}`}
                className="font-roboto flex flex-col justify-center items-center text-[15px]"
                key={index}
                style={({ isActive }) => ({
                  color: isActive ? "#1677bd" : "#AFAFAF",
                  fontWeight: isActive ? "500" : "normal",
                })}
              >
                <img src={item.icon} alt="" className="size-[20px] mb-2" />
                {item.itemName}
              </NavLink>
            ))}
          </div>
        </Container>
      </nav>
    </>
  );
};

export default NavBar;
