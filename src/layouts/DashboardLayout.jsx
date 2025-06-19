import { Outlet } from "react-router";
import DashNav from "./DashNav";
import Footer from "./Footer";

const DashboardLayout = () => {
  return (
    <>
        
      <DashNav/>
      <Outlet />
      <Footer />

    </>
  );
};

export default DashboardLayout;
