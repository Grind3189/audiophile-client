import headphone from "../../assets/shared/mobile/image-xx99-mark-one-headphones.png";
import speaker from "../../assets/shared/mobile/image-zx9-speaker.png";
import earphone from "../../assets/shared/mobile/image-category-thumbnail-earphones.png";
import arrowRightIc from "../../assets/icons/icon-arrow-right.svg";
import { Link } from "react-router-dom";

interface MenuProp {
  toggle?: () => void
}
const Menu = ({toggle}: MenuProp) => {
  return (
    <>
      <Link to="/category?cat=headphones" onClick={toggle && toggle}>
        <div className="flex flex-col w-[327px] items-center rounded-lg bg-white-300 h-[165px] md:w-[223px] xl:w-[350px]">
          <img src={headphone} alt="headphone image" className="mt-[-55px] mb-[36px]" style={{filter: "drop-shadow(0px 30px 30px #000000)"}}/>
          <h3 className="font-bold text-[15px] mb-[15px] tracking-[1px]">HEADPHONES</h3>
          <div className="flex items-center gap-3">
            <span className="opacity-50 font-bold tracking-[1px] text-[13px] lg:hover:text-red_orange-200 lg:hover:opacity-100">SHOP</span>
            <img src={arrowRightIc} />
          </div>
        </div>
      </Link>
      <Link to="/category?cat=speakers" onClick={toggle && toggle}>
        <div className="flex flex-col w-[327px] items-center rounded-lg bg-white-300 h-[165px] md:w-[223px] xl:w-[350px]">
          <img src={speaker} alt="speaker image" className="mt-[-55px] mb-[36px]" style={{filter: "drop-shadow(0px 30px 30px #000000)"}}/>
          <h3 className="font-bold text-[15px] mb-[15px] tracking-[1px]">SPEAKERS</h3>
          <div className="flex items-center gap-3">
            <span className="opacity-50 font-bold tracking-[1px] text-[13px] lg:hover:text-red_orange-200 lg:hover:opacity-100">SHOP</span>
            <img src={arrowRightIc} />
          </div>
        </div>
      </Link>
      <Link to="/category?cat=earphones" onClick={toggle && toggle}>
        <div className="flex flex-col w-[327px] items-center rounded-lg bg-white-300 h-[165px] md:w-[223px] xl:w-[350px]">
          <img src={earphone} alt="earphone image" className="mt-[-55px] mb-[36px]" style={{filter: "drop-shadow(0px 30px 30px #000000)"}}/>
          <h3 className="font-bold text-[15px] mb-[15px] tracking-[1px]">EARPHONES</h3>
          <div className="flex items-center gap-3">
            <span className="opacity-50 font-bold tracking-[1px] text-[13px] lg:hover:text-red_orange-200 lg:hover:opacity-100">SHOP</span>
            <img src={arrowRightIc} />
          </div>
        </div>
      </Link>
    </>
  );
};

export default Menu;
