import { Link, NavLink } from "react-router-dom";
import burgerIc from "../../assets/icons/icon-hamburger.svg";
import logo from "../../assets/icons/logo.svg";
import cartIc from "../../assets/icons/icon-cart.svg";
import Menu from "./Menu";
import Backdrop from "./Backdrop";
import { useEffect, useState } from "react";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const [width, setWidth] = useState<number>(window.innerWidth);
  useEffect(() => {
    const handleChangeWidth = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleChangeWidth);

    return () => {
      window.removeEventListener("resize", handleChangeWidth);
    };
  });

  const handleToggleMenu = () => {
    setToggleMenu((prev) => !prev);
  };

  document.body.style.overflow = toggleMenu ? "hidden" : "auto"
  return (
    <header className="lg:px-[165px] bg-black-300">
      <div className="bg-black-300 relative flex h-[90px] items-center justify-center border-b-2 border-b-zinc-800 px-6 md:px-[39px] lg:px-0">
        <nav className="flex w-full items-center justify-between">
          {width < 1110 && (
            <img
              src={burgerIc}
              alt=""
              onClick={handleToggleMenu}
              className="cursor-pointer"
            />
          )}
          <Link to="/" onClick={() => setToggleMenu(false)}>
            <img src={logo} />
          </Link>
          <div className="flex gap-[34px] text-[13px] font-bold max-lg:hidden">
            <NavLink
              to="/"
              className="tracking-[2px] text-white-100 hover:text-red_orange-200"
              style={({ isActive }) =>
                isActive ? { color: "#D87D4A" } : undefined
              }
            >
              HOME
            </NavLink>
            <NavLink
              to="/headphones"
              className="tracking-[2px] text-white-100 hover:text-red_orange-200"
              style={({ isActive }) =>
                isActive ? { color: "#D87D4A" } : undefined
              }
            >
              HEADPHONES
            </NavLink>
            <NavLink
              to="/speakers"
              className="tracking-[2px] text-white-100 hover:text-red_orange-200"
              style={({ isActive }) =>
                isActive ? { color: "#D87D4A" } : undefined
              }
            >
              SPEAKERS
            </NavLink>
            <NavLink
              to="/earphones"
              className="tracking-[2px] text-white-100 hover:text-red_orange-200"
              style={({ isActive }) =>
                isActive ? { color: "#D87D4A" } : undefined
              }
            >
              EARPHONES
            </NavLink>
          </div>
          <img src={cartIc} alt="cart icon" />
        </nav>
        {width < 1110 && (
          <div
            className={`absolute left-0 right-0 top-[90px] z-10 h-[calc(100dvh-90px)]
          transition-all ${
            toggleMenu
              ? "opacity-1 visible max-md:translate-x-0 md:translate-y-0"
              : "invisible opacity-0 max-md:-translate-x-1/2 md:-translate-y-[20%]"
          }`}
          >
            <Backdrop toggle={handleToggleMenu}>
              <div className="z-20 flex h-fit flex-col items-center gap-[84px] rounded-b-lg bg-white-100 px-6 pb-[37px] pt-[84px] md:flex-row md:justify-evenly md:gap-[10px]">
                <Menu toggle={handleToggleMenu} />
              </div>
            </Backdrop>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
