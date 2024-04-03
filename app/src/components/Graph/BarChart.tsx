import React from "react";
import { Chart } from "react-google-charts";

interface BarChartData {
  labels: string[];
  data: [string, number][];
}


const BarChart: React.FC<{ graphData: BarChartData }> = ({ graphData }) => {

  const { labels, data } = graphData;
  const chartData = [labels, ...data];
  console.log(chartData)
  return (
    <Chart
      chartType="ColumnChart"
      width="100%"
      height="350px"
      data={chartData}
    />
  );
};

export default BarChart;
