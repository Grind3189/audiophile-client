import cartIc from "../../assets/icons/icon-cart.svg";
import Backdrop from "./Backdrop";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, removeAll } from "../../redux/cartReducer";
import { RootState } from "../../redux/store";
import React from 'react'
interface CartProp {
  showCart: boolean;
  handleToggleCart: () => void;
}
const Cart = ({ showCart, handleToggleCart }: CartProp) => {
  const dispatch = useDispatch()
  const cartedProducts = useSelector(
    (state: RootState) => state.cart.cartedProducts,
  );
  const baseUrl = import.meta.env.VITE_BASE_URL;
  let totalPrice: number = 0;
  
  const handleIncrement = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(increment({id: e.currentTarget.dataset.productid}))
  }
  const handleDecrement = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(decrement({id: e.currentTarget.dataset.productid}))
  }
  const handleRemoveAll = () => {
    dispatch(removeAll())
  }
  return (
    <div className="relative">
      <img
        src={cartIc}
        alt="cart icon"
        className="cursor-pointer"
        onClick={handleToggleCart}
      />
      {showCart && (
        <div className="fixed bottom-0 left-0 right-[0] top-[90px] z-10">
          <Backdrop toggle={handleToggleCart}>
            <div className="mx-au fixed left-[24px] right-[24px] top-[110px] rounded-lg bg-white-100 px-7 py-8 md:absolute md:left-[unset] md:right-[40px] md:top-[20px] md:w-[377px] lg:right-[160px]">
              <div className="mb-[31px] flex items-center justify-between">
                <h1 className="text-[18px] font-bold tracking-[1.28px]">
                  CART ({cartedProducts.length})
                </h1>
                <button className="text-[15px] font-medium underline decoration-gray-500 opacity-50 lg:hover:text-red_orange-200 lg:hover:decoration-red_orange-200 lg:hover:opacity-100" onClick={handleRemoveAll}>
                  Remove all
                </button>
              </div>

              {cartedProducts.map((product) => {
                totalPrice += (product.price * product.quantity)
                return (
                  <React.Fragment key={product.id}>
                    <div className="mb-8 flex items-center gap-4">
                      <div className="h-[64px] w-[64px] overflow-hidden rounded-lg bg-white-300">
                        <img
                          src={baseUrl + product.imageUrl}
                          alt={product.name + "image"}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="w-[40%] overflow-hidden whitespace-nowrap font-bold">
                        <h2 className="overflow-hidden overflow-ellipsis text-[15px]">
                          {product.name}
                        </h2>
                        <span className="text-[14px] opacity-50">
                          ${product.price}
                        </span>
                      </div>
                      <div className="ml-auto flex h-[32px] min-w-[96px] items-center justify-between bg-white-300 text-[13px] font-bold">
                        <button className="w-[30%] self-stretch opacity-25 lg:hover:text-red_orange-200 lg:hover:opacity-100" data-productid={product.id} onClick={handleDecrement}>
                          -
                        </button>
                        <span className=" w-[40%] text-center">{product.quantity}</span>
                        <button className="w-[30%] self-stretch opacity-25 lg:hover:text-red_orange-200 lg:hover:opacity-100" onClick={handleIncrement} data-productid={product.id}>
                          +
                        </button>
                      </div>
                    </div>
                  </React.Fragment>
                );
              })}
              <div className="mb-6 flex items-center justify-between">
                <span className="text-[15px] font-medium opacity-50">
                  TOTAL
                </span>
                <h2 className="text-[18px] font-bold">${totalPrice}</h2>
              </div>

              <button className="h-12 w-full bg-red_orange-200 text-[13px] font-bold tracking-[1px] text-white-100 lg:hover:bg-red_orange-100">
                CHECKOUT
              </button>
            </div>
          </Backdrop>
        </div>
      )}
    </div>
  );
};

export default Cart;
