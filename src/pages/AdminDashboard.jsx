import React from "react";
import Stats from "../components/dashboard/stats/Stats";
import OrderChart from "../components/dashboard/chart/OrderChart";
import SalesChart from "../components/dashboard/chart/SalesChart";
import RecentOrders from "../components/dashboard/recentsOrder/RecentOrders";
import Actions from "../components/dashboard/actions/Actions";
import useAuthContext from "../hooks/useAuthContext";

const AdminDashboard = () => {
  const { user } = useAuthContext();
  return (
    <div>
      {user?.is_staff && (
        <div>
          <Stats />
          <div className="flex flex-col md:flex-row md:mx-10">
            <OrderChart />
            <SalesChart />
          </div>
        </div>
      )}
      <RecentOrders />
      {user?.is_staff && <Actions />}
    </div>
  );
};

export default AdminDashboard;
