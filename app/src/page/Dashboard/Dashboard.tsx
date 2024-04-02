import { useState, useEffect } from 'react';
import DashboardCard from './DashboardCard';
import sample from './sample.json';
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { IconContext } from "react-icons";
import { GrMoney } from "react-icons/gr";
import { IoPeople } from "react-icons/io5";
import GraphDropdown from './GraphDropdown';
import Header from '@/components/Header/Header';
import BarChart from '@/components/Graph/BarChart';
import cardSample from './cardSample.json'
import LineChart from '@/components/Graph/LineChart';
import TopSellingProducts from './TopSellingProducts';
import TopFarmers from './TopFarmers';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [barchartData, setBarChartData] = useState(sample);


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

  const handleBarChartData = (newGraphData) => {
    setBarChartData(newGraphData);
  };

  return (
    <>
      <div className="flex flex-col">

          <div className='m-3'><Header text='Welcome to AgriERP'/></div>
        
        <div className="flex flex-row mt-12 ml-4">

              <DashboardCard text="Total Sales" icon={<IconContext.Provider value={{ color: "green",size:'24px', className: "mr-2" }}><FaMoneyBillTrendUp /></IconContext.Provider>} figures={convertToNumber(data[0])} difference={convertToNumber(data[0])} />
              <DashboardCard text="Total Purchase" icon={<IconContext.Provider value={{ color: "red",size:'24px', className: "mr-2" }}><GrMoney /></IconContext.Provider>} figures={convertToNumber(data[1])} difference={convertToNumber(data[1])}/>
              <DashboardCard text="Profit/Loss" icon={<IconContext.Provider value={{ color: "green",size:'24px', className: "mr-2" }}><GrMoney /></IconContext.Provider>} figures={convertToNumber(data[2])} difference={convertToNumber(data[2])}/>
              <DashboardCard text="Total Shareholders" icon={<IconContext.Provider value={{ color: "blue",size:'24px', className: "mr-2" }}><IoPeople /></IconContext.Provider>} figures={convertToNumber(data[3])} />

          </div>
          <div className='mt-10 flex flex-row p-6 justify-between '>
            <div className='w-[600px] bg-white ml-5'>
              <GraphDropdown onDataFetched={handleBarChartData} />
              <BarChart graphData={barchartData}/>
            </div>
            <div className='w-[600px] bg-white mr-5'>
                <LineChart graphData={barchartData}/>
            </div>
            
        </div>
        <div className='mt-10 flex flex-row p-6 justify-between '>
            <div className='w-[600px] bg-white h-[320px]'>
              <div className='p-3'>
              <TopSellingProducts/>
              </div>
            </div>
            <div className='w-[600px] bg-white h-[320px]'>
              <div className='p-3'>
              <TopFarmers/>
              </div>
            </div>
            
        </div>  
        </div>

    </>
  );
};

export default Dashboard;
