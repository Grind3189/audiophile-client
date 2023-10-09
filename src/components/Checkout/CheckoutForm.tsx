import codIc from "../../assets/icons/icon-cash-on-delivery.svg";
import { UserDetailsType } from "../../types";

interface CheckoutFormProp {
  handleChangeData: (e: React.ChangeEvent<HTMLInputElement>) => void;
  userDetails: UserDetailsType;
}

const CheckoutForm = ({ handleChangeData, userDetails }: CheckoutFormProp) => {
  const labelStyle = "text-[12px] font-bold tracking-[0.21px]";
  const flexCol = "flex flex-col gap-[9px] relative";
  const inputStyle =
    "border border-[#CFCFCF] px-6 py-[18px] rounded-lg text-[14px] font-bold peer outline-none focus:border-red_orange-100 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 ";
  const h2Style = "text-[13px] text-red_orange-200 font-bold mb-4";

  return (
    <div>
      <h1 className="mb-8 text-[28px] font-bold tracking-[1px] md:mb-[41px] md:text-[32px]">
        CHECKOUT
      </h1>

      <div className="mb-8 md:mb-[53px]">
        <h2 className={h2Style}>BILLING DETAILS</h2>
        <div className="flex flex-col gap-6 md:mb-6 md:flex-row md:gap-4">
          <div className={`${flexCol} md:w-[50%]`}>
            <label className={labelStyle}>Name</label>
            <input
              type="text"
              placeholder="Lowell B."
              className={inputStyle}
              name="name"
              onChange={handleChangeData}
              value={userDetails.name}
              pattern="^[a-zA-Z\s]+$"
              required
            />
            <span
              className={`${labelStyle} invisible absolute right-0 font-medium text-[#CD2C2C] peer-[&:not(:placeholder-shown):not(:focus):invalid]:visible`}
            >
              Wrong format
            </span>
          </div>
          <div className={`${flexCol} max-md:mb-6 md:w-[50%]`}>
            <label className={labelStyle}>Email Address</label>
            <input
              type="email"
              placeholder="lowell@gmail.com"
              className={inputStyle}
              name="email"
              onChange={handleChangeData}
              value={userDetails.email}
              pattern="^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$"
              required
            />
            <span
              className={`${labelStyle} invisible absolute right-0 font-medium text-[#CD2C2C] peer-[&:not(:placeholder-shown):not(:focus):invalid]:visible`}
            >
              Wrong format
            </span>
          </div>
        </div>
        <div className={flexCol}>
          <label className={labelStyle}>Phone Number</label>
          <input
            type="number"
            placeholder="09128238215"
            className={inputStyle}
            name="phoneNumber"
            onChange={handleChangeData}
            value={userDetails.phoneNumber}
            required
          />
          <span
            className={`${labelStyle} invisible absolute right-0 font-medium text-[#CD2C2C] peer-placeholder-shown:visible`}
          >
            *
          </span>
        </div>
      </div>

      <div className="mb-8 md:mb-[61px]">
        <h2 className={h2Style}>SHIPPING INFO</h2>
        <div className="flex flex-col gap-6">
          <div className={flexCol}>
            <label className={labelStyle}>Your Address</label>
            <input
              type="text"
              placeholder="1137 Williams Avenue"
              className={inputStyle}
              name="address"
              onChange={handleChangeData}
              value={userDetails.address}
              required
            />
            <span
              className={`${labelStyle} invisible absolute right-0 font-medium text-[#CD2C2C] peer-placeholder-shown:visible`}
            >
              *
            </span>
          </div>
          <div className="flex flex-col gap-6 md:flex-row md:gap-4">
            <div className={`${flexCol} md:flex-1`}>
              <label className={labelStyle}>Zip Code</label>
              <input
                type="text"
                placeholder="10001"
                className={inputStyle}
                name="zipCode"
                onChange={handleChangeData}
                value={userDetails.zipCode}
                required
              />
              <span
                className={`${labelStyle} invisible absolute right-0 font-medium text-[#CD2C2C] peer-placeholder-shown:visible`}
              >
                *
              </span>
            </div>
            <div className={`${flexCol} md:flex-1`}>
              <label className={labelStyle}>City</label>
              <input
                type="text"
                placeholder="New York"
                className={inputStyle}
                name="city"
                onChange={handleChangeData}
                value={userDetails.city}
                required
              />
              <span
                className={`${labelStyle} invisible absolute right-0 font-medium text-[#CD2C2C] peer-placeholder-shown:visible`}
              >
                *
              </span>
            </div>
          </div>
          <div className={`${flexCol} md:w-[50%]`}>
            <label className={labelStyle}>Country</label>
            <input
              type="text"
              placeholder="United States"
              className={inputStyle}
              name="country"
              onChange={handleChangeData}
              value={userDetails.country}
              required
            />
            <span
              className={`${labelStyle} invisible absolute right-0 font-medium text-[#CD2C2C] peer-placeholder-shown:visible`}
            >
              *
            </span>
          </div>
        </div>
      </div>

      <div>
        <h2 className={h2Style}>Payment Details</h2>
        <div className="gap-4 md:flex">
          <label className={`${labelStyle} mb-[17px] inline-block md:flex-1`}>
            Payment Method
          </label>
          <div className="md:flex-1">
            <div
              className={`relative mb-4 flex items-center gap-4 rounded-lg border p-[18px] ${
                userDetails.paymentMethod === "eMoney" &&
                "border-red_orange-100"
              }`}
            >
              <input
                type="radio"
                name="paymentMethod"
                id="eMoney"
                value="eMoney"
                onChange={handleChangeData}
                required
              />
              <label className="text-[14px] font-bold" htmlFor="eMoney">
                e-Money
              </label>
              <span
                className={`${labelStyle} invisible absolute right-[18px] font-medium text-[#CD2C2C] peer-placeholder-shown:visible`}
              >
                *
              </span>
            </div>
            <div
              className={`relative flex items-center gap-4 rounded-lg border p-[18px] ${
                userDetails.paymentMethod === "cod" && "border-red_orange-100"
              }`}
            >
              <input
                type="radio"
                name="paymentMethod"
                id="cod"
                value="cod"
                onChange={handleChangeData}
                required
              />
              <label className="text-[14px] font-bold" htmlFor="cod">
                Cash on Delivery
              </label>
              <span
                className={`${labelStyle} invisible absolute right-[18px] font-medium text-[#CD2C2C] peer-placeholder-shown:visible`}
              >
                *
              </span>
            </div>
          </div>
        </div>
        {userDetails.paymentMethod === "eMoney" && (
          <div className="mt-8 flex flex-col gap-6 md:flex-row">
            <div className={`${flexCol} md:flex-1`}>
              <label className={`${labelStyle}`}>e-Money Number</label>
              <input
                type="number"
                placeholder="12312541"
                className={inputStyle}
                name="eMoneyNumber"
                onChange={handleChangeData}
                value={userDetails.eMoneyNumber}
                required
              />
              <span
                className={`${labelStyle} invisible absolute right-0 font-medium text-[#CD2C2C] peer-placeholder-shown:visible`}
              >
                *
              </span>
            </div>
            <div className={`${flexCol} md:flex-1`}>
              <label className={labelStyle}>e-Money Pin</label>
              <input
                type="number"
                placeholder="3598"
                className={inputStyle}
                name="eMoneyPin"
                onChange={handleChangeData}
                value={userDetails.eMoneypin}
                required
              />
              <span
                className={`${labelStyle} invisible absolute right-0 font-medium text-[#CD2C2C] peer-placeholder-shown:visible`}
              >
                *
              </span>
            </div>
          </div>
        )}

        {userDetails.paymentMethod === "cod" && (
          <div className="mt-8 flex items-center gap-5">
            <img
              src={codIc}
              alt="cod image icon"
              className="h-[48px] w-[48px]"
            />
            <p className="w-[80%] text-[15px] font-medium leading-[25px] opacity-50">
              The ‘Cash on Delivery’ option enables you to pay in cash when our
              delivery courier arrives at your residence. Just make sure your
              address is correct so that your order will not be cancelled.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutForm;
