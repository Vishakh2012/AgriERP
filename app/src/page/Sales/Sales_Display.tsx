import React, { useState, useEffect } from 'react';
import Header from '@/components/Header/Header';
import DemoPage from './TableShow/table-trial';


interface Data {
    [key: string]: string;
}

const SalesDisplay = () => {
    return (
        <div className='w-full sm:w-[100%-320px]'>
            <div className='w-[100%-4rem]  md:ml-4'>
                <Header text='Sales Details' />
                <DemoPage buttonRoute='/sales/form' buttonText = 'add new sales' /> 
            </div>
        </div>
    )



}

export default SalesDisplay;
