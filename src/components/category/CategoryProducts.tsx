import { Link, useLocation } from "react-router-dom";

interface CategoryProducts {
  product: any;
  index: number;
  baseUrl: string;
  width: number;
}
const CategoryProducts = ({
  product,
  index,
  baseUrl,
  width,
}: CategoryProducts) => {
  const location = useLocation();

  const {
    categoryMobile,
    categoryTablet,
    categoryDesktop,
    isNew,
    name,
    description,
    slug,
  } = product.attributes;
  const isEven = index % 2 === 0;
  return (
    <div
      key={product.id}
      className={`mb-[120px] text-center xl:flex xl:h-[500px] xl:items-center xl:justify-between xl:gap-[125px] ${
        !isEven && "flex-row-reverse"
      }`}
    >
      <div
        className={`mx-auto mb-7 grid h-[352px] max-w-[689px] place-items-center rounded-lg bg-white-300
                 md:mb-[52px] xl:mb-0 xl:h-full xl:w-[50%]`}
      >
        {/* img */}
        <div
          className={`h-[300px] w-[280px] bg-cover md:bg-center xl:h-[386px] xl:w-[349px]`}
          style={{
            backgroundImage: `url(${
              baseUrl +
              (width < 768
                ? categoryMobile.data.attributes.url
                : width < 1440
                ? categoryTablet.data.attributes.url
                : categoryDesktop.data.attributes.url)
            })`,
          }}
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-6 md:gap-0 xl:w-[50%] xl:items-start xl:text-left">
        {isNew && (
          <span className="inline-block text-[14px] uppercase tracking-[10px] text-red_orange-200">
            New product
          </span>
        )}
        <h1
          className={`max-w-[372px] text-[28px] font-bold uppercase tracking-[1px]
                   md:mb-8 md:mt-4 xl:text-[40px] xl:leading-[44px] xl:tracking-[1.4px]`}
        >
          {name}
        </h1>
        <p className="max-w-[572px] text-[15px] font-medium leading-6 opacity-50 md:mb-6">
          {description}
        </p>
        <Link
          to={`/product/${slug}`}
          state={{ prevPath: location.pathname + location.search }}
          className="bg-red_orange-200 px-8 py-[15px] text-[13px] font-bold tracking-[1px] text-white-100 lg:hover:bg-red_orange-100"
        >
          SEE PRODUCT
        </Link>
      </div>
    </div>
  );
};

export default CategoryProducts;
