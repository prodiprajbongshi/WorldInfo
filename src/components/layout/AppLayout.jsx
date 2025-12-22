import { Outlet } from "react-router-dom";
import Header from "../layout/Header";
import Footer from "../layout/Footer";


export const Appleyout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
