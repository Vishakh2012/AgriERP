import DashboardCard from "./DashboardCard"
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { IconContext } from "react-icons";
import { GrMoney } from "react-icons/gr";
import { IoPeople } from "react-icons/io5";
import { useEffect, useState } from "react";

const convertToNumber = (value: string) => {
    return Number(value) || 1;
};

const DashBoardCardGroup = () => {
    const [data, setData] = useState([]);

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

    return (
        <div className="flex flex-col md:gap-x-1 md:flex-row mt-12  w-full md:w-5/6 justify-center items-center md:justify-around md:items-start ">
            <DashboardCard text="Total Sales" icon={<IconContext.Provider value={{ color: "green", size: '24px', className: "mr-2" }}><FaMoneyBillTrendUp /></IconContext.Provider>} figures={convertToNumber(data[0])} difference={convertToNumber(data[0])} />
            <DashboardCard text="Total Purchase" icon={<IconContext.Provider value={{ color: "red", size: '24px', className: "mr-2" }}><GrMoney /></IconContext.Provider>} figures={convertToNumber(data[1])} difference={convertToNumber(data[1])} />
            <DashboardCard text="Profit/Loss" icon={<IconContext.Provider value={{ color: "green", size: '24px', className: "mr-2" }}><GrMoney /></IconContext.Provider>} figures={convertToNumber(data[2])} difference={convertToNumber(data[2])} />
            <DashboardCard text="Total Shareholders" icon={<IconContext.Provider value={{ color: "blue", size: '24px', className: "mr-2" }}><IoPeople /></IconContext.Provider>} figures={convertToNumber(data[3])} difference={convertToNumber(data[1])} />
        </div>
    )
}

export default DashBoardCardGroup
