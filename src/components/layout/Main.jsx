import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

const Main = () => {
  return (
    <div className="overflow-hidden">
      <div className="w-11/12">
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
};

export default Main;
