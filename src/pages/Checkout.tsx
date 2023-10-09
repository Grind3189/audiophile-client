import { Link, useLocation } from "react-router-dom";
import Summary from "../components/Checkout/Summary";
import CheckoutForm from "../components/Checkout/CheckoutForm";
import OrderSuccess from "../components/Checkout/OrderSuccess";
import Backdrop from "../components/shared/Backdrop";

function Checkout() {
  const location = useLocation();

  return (
    <main className="bg-white-300 px-6 pb-[120px] md:px-[39px] lg:px-[165px]">
      <Link
        to={location.state.prevPath}
        className="mb-6 mt-4 inline-block text-[15px] font-medium opacity-50"
      >
        Go Back
      </Link>

      <section className="flex flex-col gap-8 xl:flex-row xl:gap-[30px]">
        <div className="rounded-lg bg-white-100 p-6 md:p-7 xl:w-[70%]">
          <CheckoutForm />
        </div>

        <div className="rounded-lg bg-white-100 p-6 md:p-7 xl:w-[30%] xl:self-start">
          <Summary />
        </div>

        <div className="">
          <div className="max-w-[540px] rounded-lg bg-white-100 p-8">
            <OrderSuccess />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Checkout;
