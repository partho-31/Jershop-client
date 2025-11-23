import ReactECharts from 'echarts-for-react';

const SalesChart = () => {
    const salesData = {
    dates: ['Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue'],
    thisWeek: [13, 15, 10, 18, 20, 9, 21],
    lastWeek: [9, 4, 15, 7, 18, 17, 19]
  };

  const option = {
    title: {
      text: 'Sales Overview',
      top : 'bottom',
      left : 'center'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['This Week', 'Last Week'],
      top: 'top'
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '10%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: salesData.dates
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'This Week',
        type: 'line',
        data: salesData.thisWeek,
        smooth: true,
        lineStyle: { color: '#5470C6' },
        itemStyle: { color: '#5470C6' }
      },
      {
        name: 'Last Week',
        type: 'line',
        data: salesData.lastWeek,
        smooth: true,
        lineStyle: { color: '#91CC75' },
        itemStyle: { color: '#91CC75' }
      }
    ]
  };
    return (
        <div className="w-full md:w-1/2 m-4">
            <ReactECharts  option={option} style={{ height: '425px', width: '90%' }} />
        </div>
    );
};

export default SalesChart;