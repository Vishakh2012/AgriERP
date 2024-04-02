import React from "react";
import { Chart } from "react-google-charts";

interface PieChartData {
  labels: string[];
  data: [string, number][];
}


const PieChart: React.FC<{ graphData: PieChartData }> = ({ graphData }) => {

  const { labels, data } = graphData;
  const chartData = [labels, ...data];

  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="320px"
      data={chartData}
    />
  );
};

export default PieChart;
