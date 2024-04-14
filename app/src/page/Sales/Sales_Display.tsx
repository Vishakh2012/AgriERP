import React, { useState, useEffect } from 'react';
import Header from '@/components/Header/Header';
import TableTools from '@/components/TableTools/TableTools';
import TableShow from '@/components/TableShow/TableShow';
import usePagination from '@/hooks/usePagination';
import useSort from '@/hooks/useSort';
import useFilter from '@/hooks/useFilter';


interface Data {
    [key: string]: string;
}

const SalesDisplay = () => {
    const [data, setData] = useState<Data[]>([{hello: "hi"}]);

    useEffect(() => {
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

    };
    const { filterCriteria, filteredData, handleFilterChange } = useFilter(data)
    const { handleSortOptionChange, sortOption, handleColumnSort, sortedData, sortColumn } = useSort(filteredData)
    const { pageCount, paginatedData, handlePageChange, currentPage, PAGE_SIZE } = usePagination(sortedData)
    return (
        <div className='w-full'>
            <div className='w-full md:ml-4'>
                <Header text='Staff Details' />
                <TableTools filterCriteria={filterCriteria} handleColumnSort={handleColumnSort} handleFilterChange={handleFilterChange} handleSortOptionChange={handleSortOptionChange} sortColumn={sortColumn} sortOption={sortOption} Details={data} />
                <TableShow pageCount={pageCount} paginatedData={paginatedData} currentPage={currentPage} handlePageChange={handlePageChange} Details={data} PAGE_SIZE={PAGE_SIZE} />
            </div>
        </div>
    )



}

export default SalesDisplay;
