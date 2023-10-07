import circlePattern from "../../assets/icons/pattern-circles.svg";
import { Link } from "react-router-dom";
const Featured = () => {
  return (
    <section className="flex flex-col gap-[24px] md:gap-8 xl:gap-12">
      <div
        className={`relative flex h-[600px] flex-col items-center justify-center
          overflow-hidden rounded-lg bg-red_orange-200 
          text-center text-white-100 md:h-[720px] 
          xl:h-[560px] xl:flex-row xl:items-end xl:justify-evenly`}
      >
        {/* image */}
        <div className="xl:bg-zx9-xl z-10 mb-8 h-[207px] w-[172px] bg-zx9-sm bg-cover md:mb-[64px] md:h-[237px] md:w-[197px] md:bg-zx9-md xl:mb-[-8px] xl:h-[493px] xl:w-[410px]" />
        <div className="xl:mt-[110px] z-20 xl:self-start xl:text-left">
          <h1 className="mb-6 text-[36px] font-bold leading-10 tracking-[1.3px] md:text-[56px] md:leading-[56px] md:tracking-[2px]">
            ZX9 <br />
            SPEAKER
          </h1>
          <p className="mb-6 text-[15px] font-medium leading-[25px] opacity-75 md:mb-10">
            Upgrade to premium speakers that are <br />
            phenomenally built to deliver truly <br />
            remarkable sound.
          </p>
          <Link
            to="product/zx9-speaker"
            className="z-10 bg-black-200 px-8 py-[15px] lg:hover:bg-[#4C4C4C]"
          >
            SEE PRODUCT
          </Link>
        </div>
        <img
          src={circlePattern}
          alt="circle pattern"
          className="absolute left-0 right-0 top-[-70px] scale-150 md:top-[-190px] md:scale-125 xl:top-0 xl:scale-110"
        />
      </div>

      <div className="flex h-[320px] flex-col items-start justify-center rounded-lg bg-zx7-sm bg-cover bg-center px-6 md:bg-zx7-md md:px-[62px] xl:bg-zx7-lg xl:px-[95px]">
        <h1 className="mb-8 text-[28px] font-bold tracking-[2px]">
          ZX7 SPEAKER
        </h1>
        <Link
          to="product/zx7-speaker"
          className="border-2 border-black-200 px-8 py-[15px] text-[13px] font-bold tracking-[1px] lg:hover:bg-black-200 lg:hover:text-white-100"
        >
          SEE PRODUCT
        </Link>
      </div>

      <div className="md:flex md:h-[320px] md:items-center md:justify-center md:gap-[11px] xl:gap-[30px]">
        {/* img */}
        <div className="mb-6 h-[200px] md:w-[50%] rounded-lg bg-yx1-sm bg-cover bg-center md:mb-0 md:h-full md:bg-yx1-md xl:bg-yx1-lg" />
        <div className="flex h-[200px] md:w-[50%] flex-col items-start justify-center gap-8 rounded-lg bg-white-300 px-6 md:h-full md:px-[41px] xl:px-[95px]">
          <h1 className="text-[28px] font-bold tracking-[2px]">
            YX1 EARPHONES
          </h1>
          <Link
            to="product/yx1-earphones"
            className="border-2 border-black-200 px-8 py-[15px] text-[13px] font-bold tracking-[1px] lg:hover:bg-black-200 lg:hover:text-white-100"
          >
            SEE PRODUCT
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Featured;
