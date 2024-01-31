import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

const Root = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Toaster />
      <Footer></Footer>
    </div>
  );
};

export default Root;
