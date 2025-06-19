import React from "react";
import Stats from "../components/dashboard/stats/Stats";
import OrderChart from "../components/dashboard/chart/OrderChart";
import SalesChart from "../components/dashboard/chart/SalesChart";
import RecentOrders from "../components/dashboard/recentsOrder/RecentOrders";
import Actions from "../components/dashboard/actions/Actions";

const AdminDashboard = () => {
  return (
    <div>
      <Stats />
      <div className="flex flex-col md:flex-row md:mx-10">
        <OrderChart />
        <SalesChart />
      </div>
      <RecentOrders />
      <Actions />
    </div>
  );
};

export default AdminDashboard;
