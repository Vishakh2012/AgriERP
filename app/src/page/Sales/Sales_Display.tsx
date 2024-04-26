import React, { useState, useEffect } from 'react';
import Header from '@/components/Header/Header';
import DemoPage from './TableShow/table-trial';


interface Data {
    [key: string]: string;
}

const SalesDisplay = () => {
    const [data, setData] = useState<Data[]>([]);

   /* useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:5050/api/sales/getDetails/Example_FPO',
                {
                    method: 'GET', // Specify the HTTP method (GET in this case)
                    headers: {
                        // Set the Content-Type header
                        'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MDNiYTc0YmE1NTkyNTgwY2Y2YTVkZiIsImlhdCI6MTcxMjEyMDgxOSwiZXhwIjoxNzEyMjA3MjE5fQ.cPkVFqzL9qTLPN7NREo6KwavycPXEGd34KvOWpuWPfQ' // Set any other headers you need
                    }
                });
            const jsonData = await response.json();
            console.log(jsonData)
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }

    };*/
    return (
        <div className='w-full sm:w-[100%-320px]'>
            <div className='w-full  md:ml-4'>
                <Header text='Sales Details' />
                <DemoPage displayData={data} buttonRoute='/sales/form' buttonText = 'add new sales' /> 
            </div>
        </div>
    )



}

export default SalesDisplay;
