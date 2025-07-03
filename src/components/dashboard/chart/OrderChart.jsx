import EChartsReact from "echarts-for-react";
import { useEffect, useState } from "react";
import AuthAPiClient from "../../../services/AuthApiClient";

const OrderChart = () => {

  const [Overview,setOrderOverview] = useState(null) 

  useEffect(()=>{
    const fetchSalesReport = async ()=> {
    try {
      const response = await AuthAPiClient.get('/api/orders/overview/')
      setOrderOverview(response.data)
    } catch (error) {
      return { "error" : error}
    }
  }
  fetchSalesReport()
  },[])

  const option = {
    title: {
      text: "Orders Overview",
      top : 'bottom',
      left : 'center'
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "vertical",
      left: 'left',
    },
    series: [
      {
        name: "Order Insights",
        type: "pie",
        radius: "50%",
        data: [
          { value: Overview?.order_overview.total, name: "Total Order", itemStyle: { color: "#5C6BC0" } }, 
          { value: Overview?.order_overview.not_paid, name: "Not Paid", itemStyle: { color: "#FFC107" } },
          { value: Overview?.order_overview.paid, name: "Paid", itemStyle: { color: "#2196F3" } },
          { value: Overview?.order_overview.delivered, name: "Delivered", itemStyle: { color: "#4CAF50" } }, 
          { value: Overview?.order_overview.canceled, name: "Canceled", itemStyle: { color: "#F44336" } },
        ],
 
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };
  return (
    <div className="w-full md:w-1/2 m-4" >
      <EChartsReact
        option={option}
        style={{ height: "425px", width: "90%" }}
      />
    </div>
  );
};

export default OrderChart;
