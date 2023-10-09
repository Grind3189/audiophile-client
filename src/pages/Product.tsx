import { Link, useLocation, useParams } from "react-router-dom";
import { WidthContext } from "../context/WidthContextProvider";
import { useContext } from "react";
import useFetch from "../hooks/useFetch";
import Details from "../components/product/Details";
import Gallery from "../components/product/Gallery";
import Recommended from "../components/product/Recommended";
import Menu from "../components/shared/Menu";

function Product() {
  const { slug } = useParams();
  const location = useLocation();
  const { width } = useContext(WidthContext);
  const { data, loading, error } = useFetch(
    `/products?filters[slug][$eq]=${slug}&&populate=mobile&populate=tablet&populate=desktop
    &populate=categoryMobile&populate=categoryTablet&populate=categoryDesktop&populate=included_items
    &populate[=gallery_images&populate=gallery_images.mobile&populate=gallery_images.tablet&populate=gallery_images.desktop
    &populate=recommends&populate=recommends.mobile&populate=recommends.tablet&populate=recommends.desktop`,
  );

  const productData = data[0];
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const goToTop = () => {
    window.scrollTo(0, 0);
  };
  goToTop();

  return (
    <main className="mb-[120px] px-6 md:px-[39px] xl:px-[165px]">
      <Link
        to={location.state ? location.state.prevPath : ".."}
        className="mb-6 mt-4 inline-block text-[15px] font-medium opacity-50"
      >
        {location.state ? "Go back" : "Go home"}
      </Link>
      {error && (
        <h1 className="text-[38px] text-red-900">Something went wrong</h1>
      )}
      {!loading && productData ? (
        <>
          <Details baseUrl={baseUrl} width={width} productData={productData} />
          <Gallery
            gallery_images={productData.attributes.gallery_images.data}
            baseUrl={baseUrl}
            width={width}
          />
          <Recommended
            recommendedData={productData.attributes.recommends.data}
            baseUrl={baseUrl}
            width={width}
          />
          <div className="flex flex-col items-center justify-center gap-[68px] md:flex-row md:gap-[10px] xl:justify-between">
            <Menu />
          </div>
        </>
      ) : (
        !error && <h1 className="text-[38px] font-bold">Loading...</h1>
      )}
    </main>
  );
}

export default Product;
