import Header from "../shared/Header";
import Footer from "../shared/Footer";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <div className="flex h-screen flex-col">
        <Header />
        <Outlet />
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
