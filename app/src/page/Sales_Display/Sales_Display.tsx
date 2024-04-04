import React, { useState, useEffect } from 'react';
import {
    Table,
    TableBody,
<<<<<<< HEAD
<<<<<<< HEAD
    TableCaption,
    TableCell,
    TableFooter,
=======
=======
>>>>>>> 5b93208 (FEAT:)
    TableCell,
>>>>>>> 074edb2 (FEAT:)
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Header from '@/components/Header/Header';

const PAGE_SIZE = 7;
<<<<<<< HEAD
const invoices = [
    {
        saleDate: "2024-01-01",
        billNo: "INV001",
        merchantId: "MID001",
        finalAmount: "$200.00",
        totalAmountWithoutDiscount: "$220.00",
        paymentMethod: "Credit Card",
    },
    {
        saleDate: "2024-01-02",
        billNo: "INV002",
        merchantId: "MID002",
        finalAmount: "$180.00",
        totalAmountWithoutDiscount: "$190.00",
        paymentMethod: "PayPal",
    },
    {
        saleDate: "2024-01-03",
        billNo: "INV003",
        merchantId: "MID003",
        finalAmount: "$220.00",
        totalAmountWithoutDiscount: "$240.00",
        paymentMethod: "Bank Transfer",
    },
    {
        saleDate: "2024-01-04",
        billNo: "INV004",
        merchantId: "MID004",
        finalAmount: "$300.00",
        totalAmountWithoutDiscount: "$320.00",
        paymentMethod: "Credit Card",
    },
    {
        saleDate: "2024-01-05",
        billNo: "INV005",
        merchantId: "MID005",
        finalAmount: "$280.00",
        totalAmountWithoutDiscount: "$300.00",
        paymentMethod: "PayPal",
    },
    {
        saleDate: "2024-01-06",
        billNo: "INV006",
        merchantId: "MID006",
        finalAmount: "$240.00",
        totalAmountWithoutDiscount: "$260.00",
        paymentMethod: "Bank Transfer",
    },
    {
        saleDate: "2024-01-07",
        billNo: "INV007",
        merchantId: "MID007",
        finalAmount: "$320.00",
        totalAmountWithoutDiscount: "$340.00",
        paymentMethod: "Credit Card",
    },
    {
        saleDate: "2024-01-08",
        billNo: "INV008",
        merchantId: "MID008",
        finalAmount: "$350.00",
        totalAmountWithoutDiscount: "$370.00",
        paymentMethod: "Credit Card",
    },
    {
        saleDate: "2024-01-09",
        billNo: "INV009",
        merchantId: "MID009",
        finalAmount: "$290.00",
        totalAmountWithoutDiscount: "$310.00",
        paymentMethod: "PayPal",
    },
    {
        saleDate: "2024-01-10",
        billNo: "INV010",
        merchantId: "MID010",
        finalAmount: "$210.00",
        totalAmountWithoutDiscount: "$230.00",
        paymentMethod: "Bank Transfer",
    },
    {
        saleDate: "2024-01-11",
        billNo: "INV011",
        merchantId: "MID011",
        finalAmount: "$400.00",
        totalAmountWithoutDiscount: "$420.00",
        paymentMethod: "Credit Card",
    },
    {
        saleDate: "2024-01-12",
        billNo: "INV012",
        merchantId: "MID012",
        finalAmount: "$420.00",
        totalAmountWithoutDiscount: "$440.00",
        paymentMethod: "PayPal",
    },
    {
        saleDate: "2024-01-13",
        billNo: "INV013",
        merchantId: "MID013",
        finalAmount: "$180.00",
        totalAmountWithoutDiscount: "$200.00",
        paymentMethod: "Bank Transfer",
    },
    {
        saleDate: "2024-01-14",
        billNo: "INV014",
        merchantId: "MID014",
        finalAmount: "$360.00",
        totalAmountWithoutDiscount: "$380.00",
        paymentMethod: "Credit Card",
    },
    {
        saleDate: "2024-01-15",
        billNo: "INV015",
        merchantId: "MID015",
        finalAmount: "$400.00",
        totalAmountWithoutDiscount: "$420.00",
        paymentMethod: "Credit Card",
    },
    {
        saleDate: "2024-01-16",
        billNo: "INV016",
        merchantId: "MID016",
        finalAmount: "$290.00",
        totalAmountWithoutDiscount: "$310.00",
        paymentMethod: "PayPal",
    },
    {
        saleDate: "2024-01-17",
        billNo: "INV017",
        merchantId: "MID017",
        finalAmount: "$310.00",
        totalAmountWithoutDiscount: "$330.00",
        paymentMethod: "Bank Transfer",
    },
    {
        saleDate: "2024-01-18",
        billNo: "INV018",
        merchantId: "MID018",
        finalAmount: "$430.00",
        totalAmountWithoutDiscount: "$450.00",
        paymentMethod: "Credit Card",
    },
    {
        saleDate: "2024-01-19",
        billNo: "INV019",
        merchantId: "MID019",
        finalAmount: "$250.00",
        totalAmountWithoutDiscount: "$270.00",
        paymentMethod: "Credit Card",
    },
    {
        saleDate: "2024-01-20",
        billNo: "INV020",
        merchantId: "MID020",
        finalAmount: "$180.00",
        totalAmountWithoutDiscount: "$200.00",
        paymentMethod: "PayPal",
    },
    {
        saleDate: "2024-01-21",
        billNo: "INV021",
        merchantId: "MID021",
        finalAmount: "$320.00",
        totalAmountWithoutDiscount: "$340.00",
        paymentMethod: "Bank Transfer",
    },
    {
        saleDate: "2024-01-22",
        billNo: "INV022",
        merchantId: "MID022",
        finalAmount: "$400.00",
        totalAmountWithoutDiscount: "$420.00",
        paymentMethod: "Credit Card",
    },
    {
        saleDate: "2024-01-23",
        billNo: "INV023",
        merchantId: "MID023",
        finalAmount: "$380.00",
        totalAmountWithoutDiscount: "$400.00",
        paymentMethod: "PayPal",
    },
    {
        saleDate: "2024-01-24",
        billNo: "INV024",
        merchantId: "MID024",
        finalAmount: "$270.00",
        totalAmountWithoutDiscount: "$290.00",
        paymentMethod: "Bank Transfer",
    },
];
=======
>>>>>>> 074edb2 (FEAT:)

const SalesDisplay = () => {
    const [data, setData] = useState([]);



    useEffect(() => {
        fetchData();
    }, []);

<<<<<<< HEAD

const SalesDisplay = () => {
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
            })
            const jsonData = await response.json();
            console.log(jsonData)
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
=======
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
>>>>>>> 074edb2 (FEAT:)

            const jsonData = await response.json();
            console.log(jsonData)
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

<<<<<<< HEAD
    };
    const [currentPage, setCurrentPage] = useState(1);


    const applyPagination = (data) => {
        const startIndex = (currentPage - 1) * PAGE_SIZE;
        return data.slice(startIndex, startIndex + PAGE_SIZE);
    };

    const pageCount = Math.ceil(data.length / PAGE_SIZE);
    const paginatedData = applyPagination(data);

=======
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

>>>>>>> 074edb2 (FEAT:)
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

<<<<<<< HEAD

=======
>>>>>>> 074edb2 (FEAT:)
    return (
        <div>
            <div className='m-3'>
                <Header text='Sales Details' />
            </div>
<<<<<<< HEAD
            <div className="w-4/5 px-4 mt-12"> {/* Center the content */}
                <form onSubmit={(e) => e.preventDefault()} className="flex flex-wrap items-end justify-between mb-4">
                    <input
                        type="text"
                        name="billNo"

=======
            <div className="w-4/5 px-4 mt-12">
                <form onSubmit={handleFilterSubmit} className="flex flex-wrap items-end justify-between mb-4">
                    <input
                        type="text"
                        name="billNo"
                        value={filterCriteria.billNo}
                        onChange={handleFilterChange}
>>>>>>> 074edb2 (FEAT:)
                        placeholder="Bill No"
                        className="mr-2 mb-2 md:mb-0 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                    />
                    <input
                        type="text"
                        name="saleDate"
<<<<<<< HEAD

=======
                        value={filterCriteria.saleDate}
                        onChange={handleFilterChange}
>>>>>>> 074edb2 (FEAT:)
                        placeholder="Sales Date"
                        className="mr-2 mb-2 md:mb-0 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                    />
                    <input
                        type="text"
                        name="finalAmount"
<<<<<<< HEAD

=======
                        value={filterCriteria.finalAmount}
                        onChange={handleFilterChange}
>>>>>>> 074edb2 (FEAT:)
                        placeholder="Final Amount"
                        className="mr-2 mb-2 md:mb-0 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                    />
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"> Apply Filter</button>
                </form>
            </div>
<<<<<<< HEAD
            <div className=" w-4/5 px-4 mt-14 rounded-3xl">
=======
            <div className="w-4/5 px-4 mt-14 rounded-3xl">
>>>>>>> 074edb2 (FEAT:)
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
<<<<<<< HEAD

=======
>>>>>>> 074edb2 (FEAT:)
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
<<<<<<< HEAD

=======
>>>>>>> 074edb2 (FEAT:)
                                </TableRow>
                            ))}
                        </TableBody>
                    </div>
                </Table>
                <div className="flex justify-center mt-4">
<<<<<<< HEAD
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
=======
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
>>>>>>> 074edb2 (FEAT:)
}

export default SalesDisplay;
