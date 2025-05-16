import { Outlet } from "react-router-dom";
import Navbar from "../components/portfolio/Navbar";

const Main = () => {
  return (
    <div className="overflow-hidden">
      <div className="w-11/12">
        <Navbar />
        {/* <SdNavbar /> */}
      </div>
      <Outlet />
    </div>
  );
};

export default Main;
