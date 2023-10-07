import { Link, useLocation } from "react-router-dom";

interface RecommendedProp {
  recommendedData: any;
  baseUrl: string;
  width: number;
}
const Recommended = ({ recommendedData, baseUrl, width }: RecommendedProp) => {
  const location = useLocation();
  console.log(location);
  return (
    <section className="mb-[172px] text-center text-[24px] font-bold">
      <h1 className="mb-10">YOU MAY ALSO LIKE</h1>
      <div className="items-center justify-center md:flex md:gap-[11px] xl:justify-between xl:gap-[30px]">
        {recommendedData.map((product: any) => {
          return (
            <div
              className="mx-auto flex max-w-[327px] flex-col items-center justify-center gap-8 max-md:mb-[56px] md:mx-0 md:w-[223px] xl:w-[350px]"
              key={product.id}
            >
              <div className="grid h-[120px] w-full place-items-center overflow-hidden rounded-lg bg-white-300 md:h-[318px] ">
                {/* img */}
                <div
                  className="h-full w-[100px] bg-cover bg-center md:w-full"
                  style={{
                    backgroundImage: `url(${
                      baseUrl +
                      (width < 768
                        ? product.attributes.mobile.data.attributes.url
                        : width < 1110
                        ? product.attributes.tablet.data.attributes.url
                        : product.attributes.desktop.data.attributes.url)
                    })`,
                  }}
                />
              </div>
              <h1 className="uppercase">{product.attributes.name}</h1>
              <Link
                to={`/product/${product.attributes.slug}`}
                state={{ prevPath: location.pathname }}
                className="bg-red_orange-200 px-8 py-[15px] text-[13px] tracking-[1px] text-white-100 lg:hover:bg-red_orange-100"
              >
                SEE PRODUCT
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Recommended;
