import React from "react";
import { Chart } from "react-google-charts";

interface LineChartData {
  labels: string[];
  data: [string, number][];
}


const LineChart: React.FC<{ graphData: LineChartData }> = ({ graphData }) => {

  const { labels, data } = graphData;
  const chartData = [labels, ...data];

  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="350px"
      data={chartData}
    />
  );
};

export default LineChart;
