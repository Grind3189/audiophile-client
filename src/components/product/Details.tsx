import Features from "./Features";

interface DetailsProp {
  baseUrl: string;
  width: number;
  productData: any;
}

const Details = ({ baseUrl, width, productData }: DetailsProp) => {
  const {
    mobile,
    tablet,
    desktop,
    isNew,
    name,
    description,
    price
  } = productData.attributes;
  return (
    <>
      <section>
        <div className="md:flex md:h-[480px] md:items-center md:gap-[69px] xl:h-[560px] xl:justify-between">
          <div className="mx-auto mb-8 grid h-[327px] max-w-[689px] place-items-center rounded-lg bg-white-300 md:mx-0 md:mb-0 md:h-full md:w-[50%] xl:max-w-[800px]">
            {/* img */}
            <div
              className={`h-[300px] w-[281px] bg-cover bg-center md:h-[386px] md:w-[350px]`}
              style={{
                backgroundImage: `url(${
                  baseUrl +
                  (width < 768
                    ? mobile.data.attributes.url
                    : width < 1440
                    ? tablet.data.attributes.url
                    : desktop.data.attributes.url)
                })`,
              }}
            />
          </div>
          <div className="md:w-[50%] xl:max-w-[650px]">
            {isNew && (
              <span className="font-[14px] tracking-[10px] text-red_orange-200">
                NEW PRODUCT
              </span>
            )}
            <h1 className="my-6 mb-8 mr-auto text-[28px] font-bold uppercase tracking-[1px] md:mt-4 xl:text-[40px]">
              {name}
            </h1>
            <p className="mb-6 text-[15px] font-medium leading-[25px] opacity-50 md:mb-8">
              {description}
            </p>
            <span className="text-[18px] font-bold tracking-[1.3px]">
              $ {price}
            </span>

            <div className="mt-[31px] flex h-[48px] items-center justify-start gap-4 text-[13px] font-bold">
              <div className="flex h-full min-w-[120px] items-center justify-between bg-white-300">
                <button className="w-[30%] self-stretch  opacity-25">-</button>
                <span className=" w-[40%] text-center">1</span>
                <button className="w-[30%] self-stretch  opacity-25">+</button>
              </div>
              <button className="h-full w-[160px] bg-red_orange-200 tracking-[1px] text-white-100">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>

        <div className="my-[88px]">
          <Features productData={productData}/>
        </div>

      </section>
    </>
  );
};

export default Details;
