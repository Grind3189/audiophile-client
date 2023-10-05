import { Link, useSearchParams } from "react-router-dom";
import burgerIc from "../../assets/icons/icon-hamburger.svg";
import logo from "../../assets/icons/logo.svg";
import cartIc from "../../assets/icons/icon-cart.svg";
import Menu from "./Menu";
import Backdrop from "./Backdrop";
import { useState, useContext } from "react";
import { WidthContext } from "../../context/WidthContextProvider";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const [searchParams] = useSearchParams();
  const queryParams = searchParams.get("cat");
  const link = "tracking-[2px] hover:text-red_orange-200";
  const { width } = useContext(WidthContext);
  const handleToggleMenu = () => {
    setToggleMenu((prev) => !prev);
  };

  document.body.style.overflow = toggleMenu ? "hidden" : "auto";
  return (
    <header className="bg-black-300 lg:px-[165px]">
      <div className="relative flex h-[90px] items-center justify-center border-b border-b-zinc-800 bg-black-300 px-6 md:px-[39px] lg:px-0">
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
            <Link
              to="/"
              className={`${link} ${
                !queryParams ? "text-red_orange-200" : "text-white-100"
              }`}
            >
              HOME
            </Link>
            <Link
              to="category?cat=headphones"
              className={`${link} ${
                queryParams === "headphones"
                  ? "text-red_orange-200"
                  : "text-white-100"
              }`}
            >
              HEADPHONES
            </Link>
            <Link
              to="category?cat=speakers"
              className={`${link} ${
                queryParams === "speakers"
                  ? "text-red_orange-200"
                  : "text-white-100"
              }`}
            >
              SPEAKERS
            </Link>
            <Link
              to="category?cat=earphones"
              className={`${link} ${
                queryParams === "earphones"
                  ? "text-red_orange-200"
                  : "text-white-100"
              }`}
            >
              EARPHONES
            </Link>
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
