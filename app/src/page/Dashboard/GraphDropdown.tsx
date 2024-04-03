import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Fetching the data needed for chart

const GraphDropdown = ({ onDataFetched }) => {
    const fetchData = async (timePeriod) => {
        try {

            const response = await fetch('http://localhost:5050/api/dashboard/bargraphInfo/Example_FPO/${timePeriod}',
                {
                    method: 'GET', // Specify the HTTP method (GET in this case)
                    headers: {
                        // Set the Content-Type header
                        'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MDNiYTc0YmE1NTkyNTgwY2Y2YTVkZiIsImlhdCI6MTcxMjEyMDgxOSwiZXhwIjoxNzEyMjA3MjE5fQ.cPkVFqzL9qTLPN7NREo6KwavycPXEGd34KvOWpuWPfQ' // Set any other headers you need
                    }
                });
            const jsonData = await response.json();
            console.log(jsonData)
            onDataFetched(jsonData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">Select</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 shadow-lg bg-white rounded-md mt-2">
                <div className="py-2 px-4">
                    <Link to="#" onClick={() => fetchData(1)}>
                        <span className="cursor-pointer">Past 1 Month</span>
                    </Link>
                </div>
                <div className="border-t border-gray-200 py-2 px-4">
                    <Link to="#" onClick={() => fetchData(3)}>
                        <span className="cursor-pointer">Past 3 Months</span>
                    </Link>
                </div>
                <div className="border-t border-gray-200 py-2 px-4">
                    <Link to="#" onClick={() => fetchData(12)}>
                        <span className="cursor-pointer">Past 1 Year</span>
                    </Link>
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default GraphDropdown;
const fetchData = async () => {
    try {
        const response = await fetch('http://localhost:5050/api/purchase/getDetails/Example_FPO', {
            method: 'GET',
            headers: {
                'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MDNiYTc0YmE1NTkyNTgwY2Y2YTVkZiIsImlhdCI6MTcxMjEyMDgxOSwiZXhwIjoxNzEyMjA3MjE5fQ.cPkVFqzL9qTLPN7NREo6KwavycPXEGd34KvOWpuWPfQ'
            }
        });
        const jsonData = await response.json();
        setData(jsonData);
    } catch (error) {
        console.error('Error fetching data:', error);
    }

};

