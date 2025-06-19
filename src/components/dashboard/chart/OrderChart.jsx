import EChartsReact from "echarts-for-react";

const OrderChart = () => {
  const ar = [111,38,52,46,10]
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
          { value: ar[0], name: "Total Order", itemStyle: { color: "#5C6BC0" } }, 
          { value: ar[1], name: "Not Paid", itemStyle: { color: "#FFC107" } },
          { value: ar[2], name: "Paid", itemStyle: { color: "#2196F3" } },
          { value: ar[3], name: "Delivered", itemStyle: { color: "#4CAF50" } }, 
          { value: ar[4], name: "Canceled", itemStyle: { color: "#F44336" } },
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
