import React, { useState, useEffect, useRef } from "react";
import ProductTable from './ProductTable'; // Import your ProductTable component here
import Header from "@/components/Header/Header";

const Sales_Form = () => {
  return (
    <div>
        <div className='m-3 p-4'>
           <Header text='Add New Sales' />
        </div>
        <div className="mb-8 mt-10">
            <ProductTable />
        </div>
        </div>
  )
}

export default Sales_Form;
