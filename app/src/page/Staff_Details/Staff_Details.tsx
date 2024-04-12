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
import Header from '@/components/Header/Header';

const PAGE_SIZE = 5;
const staffDetails = [
    {
      staffId: "ST001",
      name: "John Doe",
      bloodGroup: "A+",
      designation: "Manager",
      phone: "+1234567890",
      email: "john.doe@example.com",
      dateofJoining: "2023-01-01",
      basicSalary: "$5000.00",
      accountNumber: "1234567890",
      address: "123 Main Street, Cityville",
    },
    {
      staffId: "ST002",
      name: "Jane Smith",
      bloodGroup: "B+",
      designation: "Assistant Manager",
      phone: "+1234567891",
      email: "jane.smith@example.com",
      dateofJoining: "2023-02-01",
      basicSalary: "$4000.00",
      accountNumber: "2345678901",
      address: "456 Oak Avenue, Townville",
    },
    {
      staffId: "ST003",
      name: "Michael Johnson",
      bloodGroup: "O+",
      designation: "Supervisor",
      phone: "+1234567892",
      email: "michael.johnson@example.com",
      dateofJoining: "2023-03-01",
      basicSalary: "$3500.00",
      accountNumber: "3456789012",
      address: "789 Elm Street, Villageton",
    },
    {
      staffId: "ST004",
      name: "Emily Brown",
      bloodGroup: "AB+",
      designation: "Clerk",
      phone: "+1234567893",
      email: "emily.brown@example.com",
      dateofJoining: "2023-04-01",
      basicSalary: "$3000.00",
      accountNumber: "4567890123",
      address: "987 Pine Road, Hamletville",
    },
    {
      staffId: "ST005",
      name: "William Wilson",
      bloodGroup: "A-",
      designation: "Accountant",
      phone: "+1234567894",
      email: "william.wilson@example.com",
      dateofJoining: "2023-05-01",
      basicSalary: "$4500.00",
      accountNumber: "5678901234",
      address: "654 Maple Lane, Suburbia",
    },
    {
      staffId: "ST006",
      name: "Olivia Taylor",
      bloodGroup: "B-",
      designation: "Receptionist",
      phone: "+1234567895",
      email: "olivia.taylor@example.com",
      dateofJoining: "2023-06-01",
      basicSalary: "$2800.00",
      accountNumber: "6789012345",
      address: "321 Cedar Street, Outskirts",
    },
    {
      staffId: "ST007",
      name: "James Martinez",
      bloodGroup: "O-",
      designation: "Security Guard",
      phone: "+1234567896",
      email: "james.martinez@example.com",
      dateofJoining: "2023-07-01",
      basicSalary: "$2500.00",
      accountNumber: "7890123456",
      address: "135 Walnut Drive, Countryside",
    },
    {
      staffId: "ST008",
      name: "Sophia Anderson",
      bloodGroup: "AB-",
      designation: "Janitor",
      phone: "+1234567897",
      email: "sophia.anderson@example.com",
      dateofJoining: "2023-08-01",
      basicSalary: "$2000.00",
      accountNumber: "8901234567",
      address: "246 Birch Avenue, Rural",
    },
    {
      staffId: "ST009",
      name: "Daniel Garcia",
      bloodGroup: "A+",
      designation: "Technician",
      phone: "+1234567898",
      email: "daniel.garcia@example.com",
      dateofJoining: "2023-09-01",
      basicSalary: "$3200.00",
      accountNumber: "9012345678",
      address: "753 Spruce Street, Farmland",
    },
    {
      staffId: "ST010",
      name: "Isabella Martinez",
      bloodGroup: "B+",
      designation: "Driver",
      phone: "+1234567899",
      email: "isabella.martinez@example.com",
      dateofJoining: "2023-10-01",
      basicSalary: "$3000.00",
      accountNumber: "0123456789",
      address: "852 Fir Road, Secluded",
    },
    {
      staffId: "ST011",
      name: "David Lopez",
      bloodGroup: "O+",
      designation: "Delivery Person",
      phone: "+1234567801",
      email: "david.lopez@example.com",
      dateofJoining: "2023-11-01",
      basicSalary: "$2700.00",
      accountNumber: "1234567890",
      address: "963 Oak Lane, Remote",
    },
    {
      staffId: "ST012",
      name: "Mia Wilson",
      bloodGroup: "AB+",
      designation: "Cleaner",
      phone: "+1234567802",
      email: "mia.wilson@example.com",
      dateofJoining: "2023-12-01",
      basicSalary: "$2200.00",
      accountNumber: "2345678901",
      address: "741 Elm Drive, Wilderness",
    },
  ];
  



const Staff_Details = ()=> {
  const [filterCriteria, setFilterCriteria] = useState({
    salary: '',
    designation: '',
    bloodGroup: ''
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
  const filteredInvoices = staffDetails.filter(invoice => {
    if (
      (filterCriteria.salary !== '' && invoice.basicSalary !== filterCriteria.salary) ||
      (filterCriteria.designation !== '' && invoice.designation !== filterCriteria.designation) ||
      (filterCriteria.bloodGroup !== '' && invoice.bloodGroup !== filterCriteria.bloodGroup)
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
      <div className='m-3'>
      <Header text='Staff Details'/>
      </div>
      <div className="w-4/5 px-4 mt-12"> {/* Center the content */}
      <form onSubmit={handleFilterSubmit} className="flex flex-wrap items-end justify-between mb-4">
          <input
            type="text"
            name="salary"
            value={filterCriteria.salary}
            onChange={handleFilterChange}
            placeholder="Salary"
            className="mr-2 mb-2 md:mb-0 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            name="designation"
            value={filterCriteria.designation}
            onChange={handleFilterChange}
            placeholder="Designation"
            className="mr-2 mb-2 md:mb-0 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            name="bloodGroup"
            value={filterCriteria.bloodGroup}
            onChange={handleFilterChange}
            placeholder="Blood Group"
            className="mr-2 mb-2 md:mb-0 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"> Apply Filter</button>
        </form>
        </div>
      <div className=" w-4/5 px-4 mt-14 rounded-3xl"> 
      <Table className="shadow-md w-full mx-auto rounded-3xl ">
      <div className=" max-h-[600px] bg-white">
        <TableHeader  className="sticky top-0 bg-white z-10">
          <TableRow>
            <TableHead className="w-[100px] text-center font-medium">Serial No</TableHead>
            <TableHead className="w-[100px] text-center font-medium">Name</TableHead>
            <TableHead className="w-[100px] text-center font-medium">Staff Id</TableHead>
            <TableHead className="w-[100px] text-center font-medium">Email</TableHead>
            <TableHead className="w-[100px] text-center font-medium">Phone</TableHead>
            <TableHead className="w-[100px] text-center font-medium">Address</TableHead>
            <TableHead className="w-[100px] text-center font-medium">Designaion</TableHead>
            <TableHead className="w-[100px] text-center font-medium">Blood Group</TableHead>
            <TableHead className="w-[100px] text-center font-medium">Date of Joining</TableHead>
            <TableHead className="w-[100px] text-center font-medium">Basic Pay</TableHead>
            <TableHead className="w-[100px] text-center font-medium">Account Number</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
        {paginatedData.map((staff,index) => (
            <TableRow key={staff.saleDate}>
              <TableCell className="text-center">{(currentPage - 1) * PAGE_SIZE + index + 1}</TableCell>
              <TableCell className="text-center">{staff.name}</TableCell>
              <TableCell className="text-center">{staff.staffId}</TableCell>
              <TableCell className="text-center">{staff.email}</TableCell>
              <TableCell className="text-center">{staff.phone}</TableCell>
              <TableCell className="text-center">{staff.address}</TableCell>
              <TableCell className="text-center">{staff.designation}</TableCell>
              <TableCell className="text-center">{staff.bloodGroup}</TableCell>
              <TableCell className="text-center">{staff.dateofJoining}</TableCell>
              <TableCell className="text-center">{staff.basicSalary}</TableCell>
              <TableCell className="text-center">{staff.accountNumber}</TableCell>
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

export default Staff_Details
