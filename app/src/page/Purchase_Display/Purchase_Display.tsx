import React, { useState, useEffect } from 'react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Header from '@/components/Header/Header'

const PAGE_SIZE = 7;
const purchases = [
    {
        purchaseDate: "2024-04-01",
        billNumber: "PUR001",
        GSTin: "GST123456",
        farmerId: "FID001",
        totalAmount: "$500.00",
    },
    {
        purchaseDate: "2024-04-02",
        billNumber: "PUR002",
        GSTin: "GST234567",
        farmerId: "FID002",
        totalAmount: "$700.00",
    },
    {
        purchaseDate: "2024-04-03",
        billNumber: "PUR003",
        GSTin: "GST345678",
        farmerId: "FID003",
        totalAmount: "$600.00",
    },
    {
        purchaseDate: "2024-04-04",
        billNumber: "PUR004",
        GSTin: "GST456789",
        farmerId: "FID004",
        totalAmount: "$800.00",
    },
    {
        purchaseDate: "2024-04-05",
        billNumber: "PUR005",
        GSTin: "GST567890",
        farmerId: "FID005",
        totalAmount: "$900.00",
    },
    {
        purchaseDate: "2024-04-06",
        billNumber: "PUR006",
        GSTin: "GST678901",
        farmerId: "FID006",
        totalAmount: "$1000.00",
    },
    {
        purchaseDate: "2024-04-07",
        billNumber: "PUR007",
        GSTin: "GST789012",
        farmerId: "FID007",
        totalAmount: "$1200.00",
    },
    {
        purchaseDate: "2024-04-08",
        billNumber: "PUR008",
        GSTin: "GST890123",
        farmerId: "FID008",
        totalAmount: "$1100.00",
    },
    {
        purchaseDate: "2024-04-09",
        billNumber: "PUR009",
        GSTin: "GST901234",
        farmerId: "FID009",
        totalAmount: "$950.00",
    },
    {
        purchaseDate: "2024-04-10",
        billNumber: "PUR010",
        GSTin: "GST012345",
        farmerId: "FID010",
        totalAmount: "$850.00",
    },
    {
        purchaseDate: "2024-04-11",
        billNumber: "PUR011",
        GSTin: "GST123456",
        farmerId: "FID011",
        totalAmount: "$750.00",
    },
    {
        purchaseDate: "2024-04-12",
        billNumber: "PUR012",
        GSTin: "GST234567",
        farmerId: "FID012",
        totalAmount: "$650.00",
    },
    {
        purchaseDate: "2024-04-13",
        billNumber: "PUR013",
        GSTin: "GST345678",
        farmerId: "FID013",
        totalAmount: "$550.00",
    },
    {
        purchaseDate: "2024-04-14",
        billNumber: "PUR014",
        GSTin: "GST456789",
        farmerId: "FID014",
        totalAmount: "$450.00",
    },
    {
        purchaseDate: "2024-04-15",
        billNumber: "PUR015",
        GSTin: "GST567890",
        farmerId: "FID015",
        totalAmount: "$850.00",
    },
    {
        purchaseDate: "2024-04-16",
        billNumber: "PUR016",
        GSTin: "GST678901",
        farmerId: "FID016",
        totalAmount: "$750.00",
    },
    {
        purchaseDate: "2024-04-17",
        billNumber: "PUR017",
        GSTin: "GST789012",
        farmerId: "FID017",
        totalAmount: "$950.00",
    },
    {
        purchaseDate: "2024-04-18",
        billNumber: "PUR018",
        GSTin: "GST890123",
        farmerId: "FID018",
        totalAmount: "$1100.00",
    },
    {
        purchaseDate: "2024-04-19",
        billNumber: "PUR019",
        GSTin: "GST901234",
        farmerId: "FID019",
        totalAmount: "$1200.00",
    },
    {
        purchaseDate: "2024-04-20",
        billNumber: "PUR020",
        GSTin: "GST012345",
        farmerId: "FID020",
        totalAmount: "$1000.00",
    },
    {
        purchaseDate: "2024-04-21",
        billNumber: "PUR021",
        GSTin: "GST123456",
        farmerId: "FID021",
        totalAmount: "$900.00",
    },
    {
        purchaseDate: "2024-04-22",
        billNumber: "PUR022",
        GSTin: "GST234567",
        farmerId: "FID022",
        totalAmount: "$800.00",
    },
    {
        purchaseDate: "2024-04-23",
        billNumber: "PUR023",
        GSTin: "GST345678",
        farmerId: "FID023",
        totalAmount: "$700.00",
    },
    {
        purchaseDate: "2024-04-24",
        billNumber: "PUR024",
        GSTin: "GST456789",
        farmerId: "FID024",
        totalAmount: "$600.00",
    },
];

const PurchaseDisplay = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

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
