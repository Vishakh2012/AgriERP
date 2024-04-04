import { Chart } from "react-google-charts";
import { useState, useEffect } from 'react';
import sample from '../../page/Dashboard/sample.json';


const LineChart = () => {

    const [LinechartData, setLineChartData] = useState(sample);

    useEffect(() => {
        fetchLineChartData();
      }, []);

    const fetchLineChartData = async()=>{
        try {
          const response = await fetch('http://localhost:5050/api/posts');
          const jsonData = await response.json();
          setLineChartData(jsonData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }

  const { labels, data } = LinechartData;
  const chartData = [labels, ...data];

  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="280px"
      data={chartData}
    />
  );
};

export default LineChart;