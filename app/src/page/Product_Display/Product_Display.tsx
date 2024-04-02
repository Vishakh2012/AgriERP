import React, { useState } from 'react';
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
import Header from '@/components/Header/header';

const PAGE_SIZE = 10;
const products = [
    {
      category: "Electronics",
      name: "Smartphone",
      hsn: "123456",
      itemCode: "ITEM001",
      price: "$500.00",
      tax: "$50.00",
      currentStock: "100",
    },
    {
      category: "Electronics",
      name: "Laptop",
      hsn: "789012",
      itemCode: "ITEM002",
      price: "$1000.00",
      tax: "$100.00",
      currentStock: "50",
    },
    {
      category: "Clothing",
      name: "T-Shirt",
      hsn: "345678",
      itemCode: "ITEM003",
      price: "$20.00",
      tax: "$2.00",
      currentStock: "200",
    },
    {
      category: "Clothing",
      name: "Jeans",
      hsn: "901234",
      itemCode: "ITEM004",
      price: "$50.00",
      tax: "$5.00",
      currentStock: "150",
    },
    {
      category: "Books",
      name: "Novel",
      hsn: "567890",
      itemCode: "ITEM005",
      price: "$15.00",
      tax: "$1.50",
      currentStock: "300",
    },
    {
      category: "Books",
      name: "Textbook",
      hsn: "234567",
      itemCode: "ITEM006",
      price: "$80.00",
      tax: "$8.00",
      currentStock: "100",
    },
    {
      category: "Home Appliances",
      name: "Refrigerator",
      hsn: "890123",
      itemCode: "ITEM007",
      price: "$800.00",
      tax: "$80.00",
      currentStock: "80",
    },
    {
      category: "Home Appliances",
      name: "Microwave Oven",
      hsn: "456789",
      itemCode: "ITEM008",
      price: "$200.00",
      tax: "$20.00",
      currentStock: "120",
    },
    {
      category: "Furniture",
      name: "Sofa",
      hsn: "123450",
      itemCode: "ITEM009",
      price: "$700.00",
      tax: "$70.00",
      currentStock: "60",
    },
    {
      category: "Furniture",
      name: "Bed",
      hsn: "678901",
      itemCode: "ITEM010",
      price: "$600.00",
      tax: "$60.00",
      currentStock: "70",
    },
    {
      category: "Kitchenware",
      name: "Cookware Set",
      hsn: "234567",
      itemCode: "ITEM011",
      price: "$100.00",
      tax: "$10.00",
      currentStock: "200",
    },
    {
      category: "Kitchenware",
      name: "Cutlery Set",
      hsn: "789012",
      itemCode: "ITEM012",
      price: "$50.00",
      tax: "$5.00",
      currentStock: "150",
    },
    {
      category: "Sporting Goods",
      name: "Tennis Racket",
      hsn: "345678",
      itemCode: "ITEM013",
      price: "$80.00",
      tax: "$8.00",
      currentStock: "100",
    },
    {
      category: "Sporting Goods",
      name: "Football",
      hsn: "901234",
      itemCode: "ITEM014",
      price: "$30.00",
      tax: "$3.00",
      currentStock: "200",
    },
    {
      category: "Beauty",
      name: "Perfume",
      hsn: "567890",
      itemCode: "ITEM015",
      price: "$50.00",
      tax: "$5.00",
      currentStock: "150",
    },
    {
      category: "Beauty",
      name: "Makeup Kit",
      hsn: "234567",
      itemCode: "ITEM016",
      price: "$40.00",
      tax: "$4.00",
      currentStock: "180",
    },
    {
      category: "Tools",
      name: "Drill Machine",
      hsn: "890123",
      itemCode: "ITEM017",
      price: "$120.00",
      tax: "$12.00",
      currentStock: "90",
    },
    {
      category: "Tools",
      name: "Screwdriver Set",
      hsn: "456789",
      itemCode: "ITEM018",
      price: "$25.00",
      tax: "$2.50",
      currentStock: "250",
    },
    {
      category: "Toys",
      name: "Action Figure",
      hsn: "123450",
      itemCode: "ITEM019",
      price: "$15.00",
      tax: "$1.50",
      currentStock: "300",
    },
    {
      category: "Toys",
      name: "Doll",
      hsn: "678901",
      itemCode: "ITEM020",
      price: "$10.00",
      tax: "$1.00",
      currentStock: "400",
    },
    {
      category: "Jewelry",
      name: "Necklace",
      hsn: "234567",
      itemCode: "ITEM021",
      price: "$200.00",
      tax: "$20.00",
      currentStock: "50",
    },
    {
      category: "Jewelry",
      name: "Earrings",
      hsn: "789012",
      itemCode: "ITEM022",
      price: "$100.00",
      tax: "$10.00",
      currentStock: "80",
    },
    {
      category: "Electricals",
      name: "LED Bulb",
      hsn: "345678",
      itemCode: "ITEM023",
      price: "$5.00",
      tax: "$0.50",
      currentStock: "500",
    },
    {
      category: "Electricals",
      name: "Extension Cord",
      hsn: "901234",
      itemCode: "ITEM024",
      price: "$15.00",
      tax: "$1.50",
      currentStock: "200",
    },
  ];
  



const Product_Display= ()=> {
  const [filterCriteria, setFilterCriteria] = useState({
    itemCode: '',
    HSN: '',
    name: ''
  });
  const [currentPage, setCurrentPage] = useState(1);


  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilterCriteria(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    // Add your filtering logic here
    console.log("Filter criteria:", filterCriteria);
  };
  const filteredInvoices = products.filter(invoice => {
    if (
      (filterCriteria.itemCode !== '' && invoice.itemCode !== filterCriteria.itemCode) ||
      (filterCriteria.HSN !== '' && invoice.hsn !== filterCriteria.HSN) ||
      (filterCriteria.name !== '' && invoice.name !== filterCriteria.name)
    ) {
      return false; // Filter out invoices that don't match any criteria
    }
    return true; // Include invoices that meet all criteria
  });
  
  const applyPagination = (data) => {
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    return data.slice(startIndex, startIndex + PAGE_SIZE);
  };

  const pageCount = Math.ceil(filteredInvoices.length / PAGE_SIZE);
  const paginatedData = applyPagination(filteredInvoices);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  

  return (
    <div>
      <div className="mx-auto max-w-5xl px-4 mt-16"> {/* Center the content */}
      <form onSubmit={handleFilterSubmit} className="flex flex-wrap items-end justify-between mb-4">
          <input
            type="text"
            name="billNo"
            value={filterCriteria.itemCode}
            onChange={handleFilterChange}
            placeholder="Item Code"
            className="mr-2 mb-2 md:mb-0 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            name="saleDate"
            value={filterCriteria.HSN}
            onChange={handleFilterChange}
            placeholder="HSN"
            className="mr-2 mb-2 md:mb-0 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            name="finalAmount"
            value={filterCriteria.name}
            onChange={handleFilterChange}
            placeholder="Name"
            className="mr-2 mb-2 md:mb-0 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"> Apply Filter</button>
        </form>
        </div>
      <div className=" w-4/5 px-4 mt-16 rounded-3xl"> 
      <Table className="shadow-md w-full mx-auto rounded-3xl ">
      <div className=" max-h-[600px] bg-white">
        <TableHeader  className="sticky top-0 bg-white z-10">
          <TableRow>
            <TableHead className="w-[100px] text-center font-medium">Serial No</TableHead>
            <TableHead className="w-[200px] text-center font-medium">Category</TableHead>
            <TableHead className="w-[200px] text-center font-medium">Name</TableHead>
            <TableHead className="w-[200px] text-center font-medium">HSN</TableHead>
            <TableHead className="w-[200px] text-center font-medium">Item Code</TableHead>
            <TableHead className="w-[250px] text-center font-medium">Price</TableHead>
            <TableHead className="w-[250px] text-center font-medium">Tax</TableHead>
            <TableHead className="w-[250px] text-center font-medium">Current Stock</TableHead>

          </TableRow>
        </TableHeader>
        <TableBody>
        {paginatedData.map((product,index) => (
            <TableRow key={product.hsn}>
              <TableCell className="text-center">{(currentPage - 1) * PAGE_SIZE + index + 1}</TableCell>
              <TableCell className="text-center">{product.category}</TableCell>
              <TableCell className="text-center">{product.name}</TableCell>
              <TableCell className="text-center">{product.hsn}</TableCell>
              <TableCell className="text-center">{product.itemCode}</TableCell>
              <TableCell className="text-center">{product.price}</TableCell>
              <TableCell className="text-center">{product.tax}</TableCell>
              <TableCell className="text-center">{product.currentStock}</TableCell>

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
              className={`mx-1 px-3 py-1 rounded-full border ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white border-gray-300'}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
    </div>
  </div>
  )
}

export default Product_Display
