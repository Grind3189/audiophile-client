import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import facebookIc from "../../assets/icons/icon-facebook.svg";
import twitterIc from "../../assets/icons/icon-twitter.svg";
import instagramIc from "../../assets/icons/icon-instagram.svg";
const Footer = () => {
  const {pathname} = useLocation()
  return (
    <footer>
      {pathname !== "/checkout" && <div className="mb-[120px] px-6 text-center lg:px-[165px] xl:mx-auto xl:flex xl:h-[588px] xl:flex-row-reverse xl:items-center xl:justify-between xl:gap-[30px]">
        {/* img */}
        <div className="bg-footer-sm md:bg-footer-md xl:bg-footer-lg mb-10 h-[300px] max-md:max-w-[380px] rounded-lg bg-cover max-xl:mx-auto md:mb-[63px] md:w-[689px] xl:mb-0 xl:h-full xl:w-[50%]" />
        <div className="mx-auto max-w-[327px] md:max-w-[573px] xl:w-[50%] xl:text-left">
          <h1 className="mx-auto mb-8 text-[28px] font-bold uppercase leading-[44px] tracking-[1px] md:text-[40px] xl:mx-0 xl:max-w-[445px] ">
            Bringing you the <span className="text-red_orange-200">best</span>{" "}
            audio gear
          </h1>
          <p className="mx-auto text-[15px] font-medium leading-[25px] opacity-50 xl:mx-0 xl:max-w-[445px]">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>}

      <div className="h-[654px] bg-black-100 px-6 text-white-100 md:h-[400px] md:px-[39px] lg:px-[165px] xl:h-[365px]">
        {/* hr line */}
        <div className="mx-auto mb-[48px] w-[101px] border-t-4 border-t-red_orange-200 md:mx-0" />

        <div className="md:grid-row gap-y-8 text-center max-md:flex max-md:flex-col max-md:gap-12 md:grid md:grid-cols-2 md:text-left">
          <img
            src={logo}
            alt="logo image"
            className="max-md:mx-auto md:col-start-1 md:col-end-[-1] xl:col-end-2"
          />
          <div
            className={`flex flex-col items-center justify-center gap-4
           text-[13px] font-bold md:col-start-1 md:col-end-[-1] md:flex-row
            md:justify-start xl:col-start-2 xl:justify-end`}
          >
            <Link
              to="/"
              className="tracking-[2px] lg:hover:text-red_orange-200"
            >
              HOME
            </Link>
            <Link
              to="category?cat=headphones"
              className="tracking-[2px] hover:text-red_orange-200"
            >
              HEADPHONES
            </Link>
            <Link
              to="category?cat=speakers"
              className="tracking-[2px] hover:text-red_orange-200"
            >
              SPEAKERS
            </Link>
            <Link
              to="category?cat=earphones"
              className="tracking-[2px] hover:text-red_orange-200"
            >
              EARPHONES
            </Link>
          </div>
          <p className="text-[15px] font-medium leading-[25px] opacity-50 md:col-start-1 md:col-end-[-1] md:mb-[80px] xl:col-end-2 xl:mb-0">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <span className="text-[15px] font-medium opacity-50 xl:col-start-1 xl:col-end-[-1] xl:mt-[56px]">
            Copyright 2021. All Rights Reserved
          </span>
          <div className="flex items-center justify-end gap-4 max-md:mx-auto xl:col-start-2 xl:row-start-2 xl:items-end">
            <img src={facebookIc} alt="facebook icon" />
            <img src={twitterIc} alt="twitter icon" />
            <img src={instagramIc} alt="instagram icon" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
