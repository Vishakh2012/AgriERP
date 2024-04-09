import { useState, useEffect } from 'react';
import sample from './sample.json';
import GraphDropdown from './GraphDropdown';
import Header from '@/components/Header/Header';
import BarChart from '@/components/Graph/BarChart';
import LineChart from '@/components/Graph/LineChart';
import TopSellingProducts from './TopSellingProducts';
import TopFarmers from './TopFarmers';
import DashBoardCardGroup from './DashboardShortCards';

const Dashboard = () => {
    const [data, setData] = useState([]);
    const [barChartData, setBarChartData] = useState(sample);

    useEffect(() => {
        fetchData();

    }, []);

    const fetchData = async () => {
        try {
            const accessToken = localStorage.getItem('accessToken')
            const response = await fetch('http://localhost:5050/api/posts', {
                headers: {
                    'x-access-token': accessToken ? accessToken : ''
                }
            }
            );
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    const handleBarChartData = (newGraphData) => {
        setBarChartData(newGraphData);
    };

    return (
        <>
            <div className="flex flex-col justify-around items-center md:items-start md:ml-4 w-[100%-4rem] ">

               <Header text='Welcome to AgriERP' />

                <DashBoardCardGroup />
                <div className='w-5/6 h-1/3'>
                    <div className='mt-3 flex flex-col md:flex-row gap-x-2 rounded-lg'>
                        <div className='w-full md:w-1/2 mb-2 md:mb-0 bg-white rounded-lg'>
                            <GraphDropdown onDataFetched={handleBarChartData} />
                            <BarChart graphData={barchartData} />
                        </div>
                        <div className='w-full md:w-1/2 mb-2 md:mb-0 bg-white h-[390px] rounded-lg'>
                            <div className='p-3'>
                                <TopFarmers />
                            </div>
                        </div>

                    </div>
                    <div className='flex flex-col md:flex-row rounded-lg gap-x-2 mt-2 '>
                        <div className='w-full md:w-1/2 mb-2 md:mb-0 bg-white h-[390px]'>
                            <div className='p-3'>
                                <TopSellingProducts />
                            </div>
                        </div>

                        <div className='w-full md:w-1/2 bg-white'>
                            <LineChart graphData={barchartData} />
                        </div>

                    </div>
                </div>
            </div>
            <div className='mt-10 flex flex-row p-6 justify-between '>
                <div className='w-[560px] ml-5 bg-white h-[350px]'>
                    <div className='p-3'>
                        <TopSellingProducts />
                    </div>
                </div>

                <div className='w-[600px] bg-white ml-5'>
                    <GraphDropdown onDataFetched={handleBarChartData} />
                    <BarChart graphData={barChartData} />
                </div>

            </div>

        </>
    );
};

export default Dashboard;
