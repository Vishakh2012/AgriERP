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
      const response = await fetch(
        `http://localhost:5050/api/data?period=${timePeriod}`
      );
      const jsonData = await response.json();
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
          <Link to="#" onClick={() => fetchData("past1Month")}>
            <span className="cursor-pointer">Past 1 Month</span>
          </Link>
        </div>
        <div className="border-t border-gray-200 py-2 px-4">
          <Link to="#" onClick={() => fetchData("past3Months")}>
            <span className="cursor-pointer">Past 3 Months</span>
          </Link>
        </div>
        <div className="border-t border-gray-200 py-2 px-4">
          <Link to="#" onClick={() => fetchData("past1Year")}>
            <span className="cursor-pointer">Past 1 Year</span>
          </Link>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default GraphDropdown;
