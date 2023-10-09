import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

function Summary() {
  const cartedProducts = useSelector(
    (state: RootState) => state.cart.cartedProducts,
  );
  const baseUrl = import.meta.env.VITE_BASE_URL;
  let total: number = 0;
  let shipping: number = 50;
  let vat: number = 0;
  let grandTotal: number = 0;

  return (
    <section>
      <h1 className="mb-[31px] text-[18px] font-bold tracking-[1.28px]">
        SUMMARY
      </h1>
      {cartedProducts.map((product) => {
        total += product.quantity * product.price;
        vat = Math.floor(total * 0.2);
        grandTotal = Math.floor(vat + shipping + total);
        return (
          <div className="mb-8 flex items-center gap-4" key={product.id}>
            <div className="h-[64px] w-[64px] overflow-hidden rounded-lg bg-white-300">
              <img
                src={baseUrl + product.imageUrl}
                alt={product.name + "image"}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex-1 overflow-hidden whitespace-nowrap font-bold">
              <h2 className="overflow-hidden overflow-ellipsis text-[15px]">
                {product.name}
              </h2>
              <span className="text-[14px] opacity-50">${product.price}</span>
            </div>
            <span className="ml-auto font-bold">x{product.quantity}</span>
          </div>
        );
      })}
      <div className="mb-8 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="text-[15px] font-medium opacity-50">TOTAL</span>
          <span className="text-[18px] font-bold">$ {total.toLocaleString()}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[15px] font-medium opacity-50">SHIPPING</span>
          <span className="text-[18px] font-bold">$ {shipping}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[15px] font-medium opacity-50">
            VAT (INCLUDED)
          </span>
          <span className="text-[18px] font-bold">$ {vat.toLocaleString()}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[15px] font-medium opacity-50">
            GRAND TOTAL
          </span>
          <span className="text-[18px] font-bold text-red_orange-200">
            $ {grandTotal.toLocaleString()}
          </span>
        </div>
      </div>
      <button
        className="h-[48px] w-full bg-red_orange-200 text-[13px] font-bold tracking-[1px] text-white-100 lg:w-[284px] lg:hover:bg-red_orange-100 xl:w-full"
      >
        CONTINUE & PAY
      </button>
    </section>
  );
}

export default Summary;
