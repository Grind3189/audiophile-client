import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";
import Menu from "../components/shared/Menu";
import { WidthContext } from "../context/WidthContextProvider";

function Catergory() {
  const [searchParams] = useSearchParams();
  const [data, setData] = useState<any>([]);
  const queryParams = searchParams.get("cat");
  const apiUrl = import.meta.env.VITE_API_URL;
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const token = import.meta.env.VITE_TOKEN;
  const { width } = useContext(WidthContext);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `${apiUrl}/products?populate=*&&filters[category][$eq]=${queryParams}&&sort=name:desc`,
        {
          headers: {
            Authorization: "bearer " + token,
          },
        },
      );
      setData(data.data);
    };
    const goToTop = () => {
      window.scrollTo(0, 0);
    };
    goToTop();
    queryParams && fetchData();
  }, [queryParams]);

  console.log(data);

  return (
    <main>
      <div className="mb-[64px] grid h-[102px] place-items-center bg-black-300 md:h-[200px]">
        <h1 className="text-[28px] font-bold uppercase tracking-[2px] text-white-100 md:text-[40px]">
          {queryParams}
        </h1>
      </div>

      <section className="px-6 xl:px-[165px]">
        <div>
          {data.map((product: any, index: number) => {
            const {
              categoryMobile,
              categoryTablet,
              categoryDesktop,
              isNew,
              name,
              description,
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
                  <div
                    className={`h-[300px] w-[280px] bg-cover md:bg-center xl:h-[386px] xl:w-[349px]`}
                    style={{
                      backgroundImage: `url(${
                        baseUrl +
                        (width < 768
                          ? categoryMobile.data.attributes
                              .url
                          : width < 1440
                          ? categoryTablet.data.attributes
                              .url
                          : categoryDesktop.data.attributes
                              .url)
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
                    to=""
                    className="bg-red_orange-200 px-8 py-[15px] text-[13px] font-bold tracking-[1px] text-white-100 lg:hover:bg-red_orange-100"
                  >
                    SEE PRODUCT
                  </Link>
                </div>
              </div>
            );
          })}
          <div className="flex flex-col items-center justify-center gap-[68px] md:flex-row md:gap-[30px] xl:mt-[240px] xl:justify-between">
            <Menu />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Catergory;
