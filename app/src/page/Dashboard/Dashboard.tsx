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
    const [barchartData, setBarChartData] = useState(sample);

        useEffect(() => {
        fetchProduct();
    }, []);

    const fetchProduct = async () => {
        try {
            const accessToken = localStorage.getItem('accessToken')
            const response = await fetch('http://localhost:5050/api/products/get', {
                headers: {
                    'x-access-token': accessToken ? accessToken : ''
                }
            }
            );
            const jsonData = await response.json();
                const prodData = JSON.stringify(jsonData)
            localStorage.setItem("product", prodData);
            
            console.log(JSON.parse(localStorage.getItem("product")).data)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

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
            <div className="flex flex-col items-center h-full md:items-start md:items-right w-full md:ml-4">

                <Header text='Welcome to AgriERP' />

                <DashBoardCardGroup />
                <div className='w-5/6 sm:w-11/12 h-1/3'>
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

        </>
    );
};

export default Dashboard;
