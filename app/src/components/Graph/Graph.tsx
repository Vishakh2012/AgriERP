import React from "react";
import { Chart } from "react-google-charts";

interface GraphData {
  labels: string[];
  data: [string, number][];
}


const Graph: React.FC<{ graphData: GraphData }> = ({ graphData }) => {

  const { labels, data } = graphData;
  const chartData = [labels, ...data];

  return (
    <Chart
      chartType="ColumnChart"
      width="100%"
      height="350px"
      data={chartData}
    />
  );
};

export default Graph;
