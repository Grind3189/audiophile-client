import { useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { WidthContext } from "../context/WidthContextProvider";
import Menu from "../components/shared/Menu";
import useFetch from "../hooks/useFetch";
import CategoryProducts from "../components/category/CategoryProducts";

function Catergory() {
  const [searchParams] = useSearchParams();
  const queryParams = searchParams.get("cat");
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const { width } = useContext(WidthContext);
  const { data, loading, error } = useFetch(
    `/products?populate=*&&filters[category][$eq]=${queryParams}&&sort=name:desc`,
  );

  useEffect(() => {
    const goToTop = () => {
      window.scrollTo(0, 0);
    };
    goToTop();
  }, [queryParams]);

  return (
    <main className="mb-[120px]">
      <div className="mb-[64px] grid h-[102px] place-items-center bg-black-300 md:h-[200px]">
        <h1 className="text-[28px] font-bold uppercase tracking-[2px] text-white-100 md:text-[40px]">
          {queryParams === "headphones"
            ? queryParams
            : queryParams === "earphones"
            ? queryParams
            : queryParams === "speakers"
            ? queryParams
            : "Not found"}
        </h1>
      </div>

      <section className="px-6 xl:px-[165px]">
        {loading || error ? (
          <h1 className={`text-[38px] mb-[172px] text-center font-bold ${error && "text-red-900"}`}>{!error ? "Loading..." : "Something went wrong"}</h1>
        ) : (
          <>
            {data.map((product: any, index: number) => {
              return (
                <CategoryProducts
                  baseUrl={baseUrl}
                  product={product}
                  index={index}
                  width={width}
                  key={index}
                />
              );
            })}
          </>
        )}
        <div className="flex flex-col items-center justify-center gap-[68px] md:flex-row md:gap-[30px] xl:mt-[240px] xl:justify-between">
          <Menu />
        </div>
      </section>
    </main>
  );
}

export default Catergory;
