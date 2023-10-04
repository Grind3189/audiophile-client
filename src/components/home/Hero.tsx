import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="flex h-[670px] w-full flex-col items-center justify-center bg-hero-sm bg-cover bg-bottom text-center text-white-100 md:bg-hero-md lg:items-start lg:bg-hero-lg lg:text-left ">
      <span className="mb-4 text-[14px] uppercase tracking-[10px] opacity-40">
        New Product
      </span>
      <h1 className="mb-6 max-w-[328px] text-[36px] font-bold uppercase md:max-w-[396px] md:text-[56px]">
        XX99 Mark ii headphones
      </h1>
      <p className="mb-7 max-w-[328px] text-[15px] font-medium leading-6 opacity-75">
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </p>
      <Link
        to=""
        className="bg-red_orange-200 px-[31px] py-[15px] tracking-[1px] hover:bg-red_orange-100"
      >
        SEE PRODUCT
      </Link>
    </section>
  );
};

export default Hero;
