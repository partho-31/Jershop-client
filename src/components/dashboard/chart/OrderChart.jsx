import EChartsReact from "echarts-for-react";
import { useEffect, useState } from "react";
import AuthAPiClient from "../../../services/AuthApiClient";

const OrderChart = () => {
  const [Overview, setOrderOverview] = useState(null);
  useEffect(() => {
    const fetchSalesReport = async () => {
      try {
        const response = await AuthAPiClient.get("/api/orders/overview/");
        setOrderOverview(response.data);
      } catch (error) {
        return { error: error };
      }
    };
    fetchSalesReport();
  }, []);

  const option = {
    title: {
      text: "Orders Overview",
      top: "bottom",
      left: "center",
    },
    tooltip: {
      trigger: "axis",
    },

    xAxis: {
      type: "category",
      data: ["Total", "Not Paid", "Paid", "Canceled", "Delivered", "Shipped"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [
          Overview?.order_overview.total,
          Overview?.order_overview.not_paid,
          Overview?.order_overview.paid,
          Overview?.order_overview.canceled,
          Overview?.order_overview.delivered,
          Overview?.order_overview.shipped || 1,
        ],
        type: "bar",
      },
    ],
  };

  return (
    <div className="w-full md:w-1/2 m-4">
      <EChartsReact option={option} style={{ height: "425px", width: "90%" }} />
    </div>
  );
};

export default OrderChart;
