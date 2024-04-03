import React, { useState, useEffect } from 'react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Header from '@/components/Header/Header'

const PAGE_SIZE = 7;
const Purchase_Display = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:5050/api/purchase/getDetails/Example_FPO',
                {
                    method: 'GET', // Specify the HTTP method (GET in this case)
                    headers: {
                        // Set the Content-Type header
                        'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MDNiYTc0YmE1NTkyNTgwY2Y2YTVkZiIsImlhdCI6MTcxMjEyMDgxOSwiZXhwIjoxNzEyMjA3MjE5fQ.cPkVFqzL9qTLPN7NREo6KwavycPXEGd34KvOWpuWPfQ' // Set any other headers you need
                    }
                });
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const [currentPage, setCurrentPage] = useState(1);

    const applyPagination = (data) => {
        const startIndex = (currentPage - 1) * PAGE_SIZE;
        return data.slice(startIndex, startIndex + PAGE_SIZE);
    };

    const pageCount = Math.ceil(data.length / PAGE_SIZE);
    const paginatedData = applyPagination(data);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <div className='m-3'>
                <Header text='Purchases' />
            </div>
            <div className="w-4/5 px-4 mt-12">
                <form onSubmit={(e) => e.preventDefault()} className="flex flex-wrap items-end justify-between mb-4">
                    <input
                        type="text"
                        name="billNo"
                        placeholder="Bill Number"
                        className="mr-2 mb-2 md:mb-0 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                    />
                    <input
                        type="text"
                        name="saleDate"
                        placeholder="Farmer ID"
                        className="mr-2 mb-2 md:mb-0 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                    />
                    <input
                        type="text"
                        name="finalAmount"
                        placeholder="GSTIN"
                        className="mr-2 mb-2 md:mb-0 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                    />
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"> Apply Filter</button>
                </form>
            </div>
            <div className="w-4/5 px-4 mt-16 rounded-3xl">
                <Table className="shadow-md w-full mx-auto rounded-3xl">
                    <div className=" max-h-[600px] bg-white">
                        <TableHeader className="sticky top-0 bg-white z-10">
                            <TableRow>
                                <TableHead className="w-[100px] text-center font-medium">Serial No</TableHead>
                                <TableHead className="w-[200px] text-center font-medium">Bill Number</TableHead>
                                <TableHead className="w-[200px] text-center font-medium">Purchase Date</TableHead>
                                <TableHead className="w-[200px] text-center font-medium">GSTIN</TableHead>
                                <TableHead className="w-[200px] text-center font-medium">Farmer ID</TableHead>
                                <TableHead className="w-[200px] text-center font-medium">Total Amount</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {paginatedData.map((purchase, index) => (
                                <TableRow key={purchase.purchaseDate}>
                                    <TableCell className="text-center">{(currentPage - 1) * PAGE_SIZE + index + 1}</TableCell>
                                    <TableCell className="text-center">{purchase.billNumber}</TableCell>
                                    <TableCell className="text-center">{purchase.purchaseDate}</TableCell>
                                    <TableCell className="text-center">{purchase.GSTIN}</TableCell>
                                    <TableCell className="text-center">{purchase.farmerId}</TableCell>
                                    <TableCell className="text-center">{purchase.totalAmount}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </div>
                </Table>
                <div className="flex justify-center mt-4">
                    {Array.from({ length: Math.min(pageCount, 3) }, (_, i) => (
                        <button
                            key={currentPage + i}
                            onClick={() => handlePageChange(currentPage + i)}
                            className={`mx-1 px-3 py-1 rounded-full border ${currentPage === currentPage + i ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white border-gray-300'}`}
                        >
                            {currentPage + i}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PurchaseDisplay;