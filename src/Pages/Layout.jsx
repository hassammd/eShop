import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useSelector } from "react-redux";

const Layout = () => {
  const themeData = useSelector((state) => state.theme.isDarktheme);
  return (
    <>
      <div className=" " data-theme={themeData ? "light" : "dark"}>
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};
export default Layout;
