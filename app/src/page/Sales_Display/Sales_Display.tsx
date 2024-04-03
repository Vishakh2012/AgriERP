import React, { useState, useEffect } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Header from '@/components/Header/Header';

const PAGE_SIZE = 7;

const SalesDisplay = () => {
    const [data, setData] = useState([]);
    const [filterCriteria, setFilterCriteria] = useState({
        billNo: '',
        saleDate: '',
        finalAmount: ''
    });
    const [currentPage, setCurrentPage] = useState(1);
    const [filteredData, setFilteredData] = useState([]);

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
                        'x-access-token':   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MDNiYTc0YmE1NTkyNTgwY2Y2YTVkZiIsImlhdCI6MTcxMjEyMDgxOSwiZXhwIjoxNzEyMjA3MjE5fQ.cPkVFqzL9qTLPN7NREo6KwavycPXEGd34KvOWpuWPfQ' // Set any other headers you need
                    }
                });

            const jsonData = await response.json();
            console.log(jsonData)
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const applyFilter = () => {
        const filteredInvoices = data.filter(invoice => {
            return (
                (filterCriteria.billNo === '' || invoice.billNo === filterCriteria.billNo) &&
                (filterCriteria.saleDate === '' || invoice.saleDate === filterCriteria.saleDate) &&
                (filterCriteria.finalAmount === '' || invoice.finalAmount === filterCriteria.finalAmount)
            );
        });
        setFilteredData(filteredInvoices);
        setCurrentPage(1); // Reset page to first page after filtering
    };

    const applyPagination = (data) => {
        const startIndex = (currentPage - 1) * PAGE_SIZE;
        return data.slice(startIndex, startIndex + PAGE_SIZE);
    };

    const pageCount = Math.ceil(filteredData.length / PAGE_SIZE);
    const paginatedData = applyPagination(filteredData);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilterCriteria(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleFilterSubmit = (e) => {
        e.preventDefault();
        applyFilter();
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <div className='m-3'>
                <Header text='Sales Details' />
            </div>
            <div className="w-4/5 px-4 mt-12">
                <form onSubmit={handleFilterSubmit} className="flex flex-wrap items-end justify-between mb-4">
                    <input
                        type="text"
                        name="billNo"
                        value={filterCriteria.billNo}
                        onChange={handleFilterChange}
                        placeholder="Bill No"
                        className="mr-2 mb-2 md:mb-0 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                    />
                    <input
                        type="text"
                        name="saleDate"
                        value={filterCriteria.saleDate}
                        onChange={handleFilterChange}
                        placeholder="Sales Date"
                        className="mr-2 mb-2 md:mb-0 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                    />
                    <input
                        type="text"
                        name="finalAmount"
                        value={filterCriteria.finalAmount}
                        onChange={handleFilterChange}
                        placeholder="Final Amount"
                        className="mr-2 mb-2 md:mb-0 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                    />
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"> Apply Filter</button>
                </form>
            </div>
            <div className="w-4/5 px-4 mt-14 rounded-3xl">
                <Table className="shadow-md w-full mx-auto rounded-3xl ">
                    <div className=" max-h-[600px] bg-white">
                        <TableHeader className="sticky top-0 bg-white z-10">
                            <TableRow>
                                <TableHead className="w-[100px] text-center font-medium">Serial No</TableHead>
                                <TableHead className="w-[200px] text-center font-medium">Sale Date</TableHead>
                                <TableHead className="w-[200px] text-center font-medium">Bill No</TableHead>
                                <TableHead className="w-[200px] text-center font-medium">Merchant Id</TableHead>
                                <TableHead className="w-[200px] text-center font-medium">Final Amount</TableHead>
                                <TableHead className="w-[250px] text-center font-medium">Total Amount Without Discount</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {paginatedData.map((invoice, index) => (
                                <TableRow key={invoice.saleDate}>
                                    <TableCell className="text-center">{(currentPage - 1) * PAGE_SIZE + index + 1}</TableCell>
                                    <TableCell className="text-center">{invoice.saleDate}</TableCell>
                                    <TableCell className="text-center">{invoice.billNo}</TableCell>
                                    <TableCell className="text-center">{invoice.merchantId}</TableCell>
                                    <TableCell className="text-center">{invoice.finalAmount}</TableCell>
                                    <TableCell className="text-center">{invoice.totalAmountWithoutDiscount}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </div>
                </Table>
                <div className="flex justify-center mt-4">
                    {Array.from({ length: pageCount }, (_, i) => (
                        <button
                            key={i}
                            onClick={() => handlePageChange(i + 1)}
                            className={`mx - 1 px-3 py-1 rounded-full border ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white border-gray-300'}`}
            >
                    {i + 1}
                </button>
          ))}
            </div>
        </div>
    </div >
  )
}

export default SalesDisplay;
