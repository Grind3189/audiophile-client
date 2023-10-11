import { Link, useLocation, Navigate } from "react-router-dom";
import { useState } from "react";
import { toggleScrollbar } from "../utils/toggleScrollbar";
import { UserDetailsType } from "../types";
import Summary from "../components/Checkout/Summary";
import CheckoutForm from "../components/Checkout/CheckoutForm";
import OrderSuccess from "../components/Checkout/OrderSuccess";
import Backdrop from "../components/shared/Backdrop";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

function Checkout() {
  const location = useLocation();
  const cartedProducts = useSelector((state: RootState) => state.cart.cartedProducts)

  if(!cartedProducts.length) {
    return <Navigate to="/" />
  }
 
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [userDetails, setUserDetails] = useState<UserDetailsType>(
    {} as UserDetailsType,
  );

  const handleChangeData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserDetails((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleToggleConfirmation();
  };

  const handleToggleConfirmation = () => {
    setShowConfirmation((prev) => {
      if (prev) {
        toggleScrollbar("auto");
      } else {
        toggleScrollbar("hidden");
      }
      return !prev;
    });
  };

  return (
    <main className="bg-white-300 px-6 pb-[120px] md:px-[39px] lg:px-[165px]">
      <Link
        to={location.state.prevPath}
        className="mb-6 mt-4 inline-block text-[15px] font-medium opacity-50"
      >
        Go Back
      </Link>

      <form
        className="flex flex-col gap-8 xl:flex-row xl:gap-[30px]"
        onSubmit={handleSubmit}
      >
        <div className="rounded-lg bg-white-100 p-6 md:p-7 xl:w-[70%]">
          <CheckoutForm
            userDetails={userDetails}
            handleChangeData={handleChangeData}
          />
        </div>

        <div className="rounded-lg bg-white-100 p-6 md:p-7 xl:w-[30%] xl:self-start">
          <Summary />
        </div>
      </form>
      <div
        className={`fixed left-0 top-0 h-full w-full ${
          showConfirmation ? "visible" : "invisible"
        }`}
      >
        <Backdrop isCenter={true}>
          <div
            className={`max-w-[540px] rounded-lg bg-white-100 p-8 transition-all md:w-[540px] md:p-12 ${
              showConfirmation
                ? "opacity-1 visible scale-100"
                : "invisible scale-75 opacity-0"
            } `}
          >
            <OrderSuccess />
          </div>
        </Backdrop>
      </div>
    </main>
  );
}

export default Checkout;
