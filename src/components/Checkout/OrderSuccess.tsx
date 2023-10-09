import { Link } from "react-router-dom";
import orderConfirmationIc from "../../assets/icons/icon-order-confirmation.svg";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const OrderSuccess = () => {
  const cartedProducts = useSelector(
    (state: RootState) => state.cart.cartedProducts,
  );
  const baseUrl = import.meta.env.VITE_BASE_URL;
  console.log(cartedProducts);
  return (
    <section>
      <img src={orderConfirmationIc} alt="check icon" className="mb-[23px]" />
      <h1 className="mb-4 text-[24px] font-bold leading-[28px] md:text-[32px]">
        THANK YOU <br /> FOR YOUR ORDER
      </h1>
      <span className="text-[15px] font-medium leading-[25px] opacity-50">
        You will receive an email confirmation shortly.
      </span>

      <div className="my-6 md:flex">
        <div className="max-md:rounded-t-lg bg-white-300 p-6 md:w-[60%] md:rounded-l-lg">
          <div className="flex items-center gap-[27px]">
              <img
                src={baseUrl + cartedProducts[0].imageUrl}
                alt="image icon"
                className="h-[64px] w-[64px] object-cover"
              />
            <div className="flex-1 overflow-hidden whitespace-nowrap">
              <h2 className="overflow-hidden overflow-ellipsis text-[15px] font-bold">Title</h2>
              <span className="font-bold text-[14px] opacity-50">$12121</span>
            </div>
            <span className="ml-auto font-bold text-[15px] opacity-50">x2</span>
          </div>
          <div className="w-full border-t-2 my-3"/>
          <div className="text-center">
          <span className="opacity-50 text-[12px] font-bold">and {cartedProducts.length - 1} other item(s)</span>
          </div>
        </div>
        <div className="bg-black-200 text-white-100 h-[92px] flex flex-col gap-2 px-6 max-md:rounded-b-lg md:h-[unset] md:w-[40%] md:justify-center rounded-r-lg">
          <span className="opacity-50 text-[15px] font-medium mt-[15px] md:mt-0">GRAND TOTAL</span>
          <span className="font-bold text-[18px]">$5122</span>
        </div>
      </div>

      <Link to="/" className="bg-red_orange-200 text-white-100 grid place-items-center py-[15px] text-[13px] font-bold tracking-[1px] lg:hover:bg-red_orange-100">BACK TO HOME</Link>
    </section>
  );
};

export default OrderSuccess;
