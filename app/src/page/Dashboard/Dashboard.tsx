import React, { useState, useEffect } from 'react';
import DashboardCard from './DashboardCard';
import { PiHandbagFill } from 'react-icons/pi';
import Graph from '@/components/Graph/Graph';
import sample from './sample.json'
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { IconContext } from "react-icons";
import { GrMoney } from "react-icons/gr";
import { IoPeople } from "react-icons/io5";


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
      <div className="flex flex-col mt-10">
        <div className="h-40">heading portion</div>
        <div className="flex flex-row ml-4">
          <DashboardCard text="Total Sales" icon={<IconContext.Provider value={{ color: "green",size:'20px', className: "mr-2" }}><FaMoneyBillTrendUp /></IconContext.Provider>} figures={convertToNumber(data[0])} difference={convertToNumber(data[4])} />
          <DashboardCard text="Total Purchase" icon={<IconContext.Provider value={{ color: "red",size:'20px', className: "mr-2" }}><GrMoney /></IconContext.Provider>} figures={convertToNumber(data[1])} difference={convertToNumber(data[5])}/>
          <DashboardCard text="Profit/Loss" icon={<IconContext.Provider value={{ color: "green",size:'20px', className: "mr-2" }}><GrMoney /></IconContext.Provider>} figures={convertToNumber(data[2])} difference={convertToNumber(data[6])}/>
          <DashboardCard text="Total Shareholders" icon={<IconContext.Provider value={{ color: "blue",size:'20px', className: "mr-2" }}><IoPeople /></IconContext.Provider>} figures={convertToNumber(data[3])} />
        </div>
        <div className='mt-5 flex flex-col items-center'>
          <div>
            <Graph graphData={sample}/>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Dashboard;
