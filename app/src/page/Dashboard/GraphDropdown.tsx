import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Fetching the data needed for chart


const GraphDropdown = ({ onDataFetched }) => {

    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        try {
            const token = localStorage.getItem('accessToken');
            if (!token) {
                throw new Error('Access token not found in localStorage');
            }
        
            const response = await fetch(`http://localhost:5050/api/graph/get/year`, {
                method: 'GET',
                headers: {
                    'x-access-token': token,
                }
            });
        
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
        
            const jsonData = await response.json();
            console.log(jsonData);
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
                    <Link to="#" onClick={() => fetchData('month')}>
                        <span className="cursor-pointer">Past 1 Month</span>
                    </Link>
                </div>
                <div className="border-t border-gray-200 py-2 px-4">

                    <Link to="#" onClick={() => fetchData('year')}>
                        <span className="cursor-pointer">Past 1 year</span>
                    </Link>
                </div>
                
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default GraphDropdown;


