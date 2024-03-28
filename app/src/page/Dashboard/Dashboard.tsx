import React, { useState, useEffect } from 'react';
import DashboardCard from './DashboardCard';
import { PiHandbagFill } from 'react-icons/pi';

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5050/api/posts');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const convertToNumber = (value) => {
    return Number(value) || 1; 
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="h-40">heading portion</div>
        <div className="flex flex-row ml-4">
          <DashboardCard text="Total Sales" icon={<PiHandbagFill />} figures={convertToNumber(data[0])} difference={convertToNumber(data[4])} />
          <DashboardCard text="Total Purchase" icon={<PiHandbagFill />} figures={convertToNumber(data[1])} difference={convertToNumber(data[5])}/>
          <DashboardCard text="Profit/Loss" icon={<PiHandbagFill />} figures={convertToNumber(data[2])} difference={convertToNumber(data[6])}/>
          <DashboardCard text="Total Shareholders" icon={<PiHandbagFill />} figures={convertToNumber(data[3])} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
