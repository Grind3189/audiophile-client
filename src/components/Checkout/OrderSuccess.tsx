import { Link } from "react-router-dom";
import orderConfirmationIc from "../../assets/icons/icon-order-confirmation.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { toggleScrollbar } from "../../utils/toggleScrollbar";
import { removeAll } from "../../redux/cartReducer";

const OrderSuccess = () => {
  const cartedProducts = useSelector(
    (state: RootState) => state.cart.cartedProducts,
  );
  const dispatch = useDispatch()
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const getTotal = () => {
    let total: number = 0;

    for (let i = 0; i < cartedProducts.length; i++) {
      total += cartedProducts[i].quantity * cartedProducts[i].price;
    }
    const vat = total * 0.2;
    return Math.floor(vat + total + 50).toLocaleString();
  };

  const handleGoHome = () => {
    dispatch(removeAll())
    toggleScrollbar("auto")
  }
  return (
    <section>
      <img src={orderConfirmationIc} alt="check icon" className="mb-[23px]" />
      <h1 className="mb-4 text-[24px] font-bold leading-[28px] md:text-[32px] md:leading-[36px]">
        THANK YOU <br /> FOR YOUR ORDER
      </h1>
      <span className="text-[15px] font-medium leading-[25px] opacity-50">
        You will receive an email confirmation shortly.
      </span>

      <div className="my-6 md:flex">
        <div className="bg-white-300 p-6 max-md:rounded-t-lg md:w-[60%] md:rounded-l-lg">
          <div className="flex items-center gap-[27px] md:gap-2">
            <img
              src={baseUrl + cartedProducts[0].imageUrl}
              alt="image icon"
              className="h-[64px] w-[64px] object-cover"
            />
            <div className="flex-1 overflow-hidden whitespace-nowrap">
              <h2 className="overflow-hidden overflow-ellipsis text-[15px] font-bold">
                {cartedProducts[0].name}
              </h2>
              <span className="text-[14px] font-bold opacity-50">
                ${cartedProducts[0].price}
              </span>
            </div>
            <span className="ml-auto text-[15px] font-bold opacity-50">
              x{cartedProducts[0].quantity}
            </span>
          </div>
          <div className="my-3 w-full border-t-2" />
          <div className="text-center">
            <span className="text-[12px] font-bold opacity-50">
              and {cartedProducts.length - 1} other item(s)
            </span>
          </div>
        </div>
        <div className="flex h-[92px] flex-col gap-2 rounded-r-lg bg-black-200 px-6 text-white-100 max-md:rounded-b-lg md:h-[unset] md:w-[40%] md:justify-center">
          <span className="mt-[15px] text-[15px] font-medium opacity-50 md:mt-0">
            GRAND TOTAL
          </span>
          <span className="text-[18px] font-bold">${getTotal()}</span>
        </div>
      </div>

      <Link
        to="/"
        className="grid place-items-center bg-red_orange-200 py-[15px] text-[13px] font-bold tracking-[1px] text-white-100 lg:hover:bg-red_orange-100"
        onClick={handleGoHome}
      >
        BACK TO HOME
      </Link>
    </section>
  );
};

export default OrderSuccess;
