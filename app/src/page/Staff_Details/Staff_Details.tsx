import React, { useState ,useEffect} from 'react';
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
  const [filterCriteria, setFilterCriteria] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState('');
  const [sortedData, setSortedData] = useState([]);
  const [sortColumn, setSortColumn] = useState('');
  

  const handleFilterChange = (e) => {
    const { value } = e.target;
    setFilterCriteria(value);
  };

  const handleSortOptionChange = (e) => {
    const { value } = e.target;
    setSortOption(value);
  };

  const applySorting = (data) => {
    if (sortColumn === '') return data;
    const sorted = [...data].sort((a, b) => {
      if (sortOption === 'ascending') {
        return a[sortColumn].localeCompare(b[sortColumn]);
      } else {
        return b[sortColumn].localeCompare(a[sortColumn]);
      }
    });
    return sorted;
  };

  const applyPagination = (data) => {
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    return data.slice(startIndex, startIndex + PAGE_SIZE);
  };

  const pageCount = Math.ceil(sortedData.length / PAGE_SIZE);
  const paginatedData = applyPagination(sortedData);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft' && currentPage > 1) {
        setCurrentPage(currentPage - 1);
      } else if (e.key === 'ArrowRight' && currentPage < pageCount) {
        setCurrentPage(currentPage + 1);
      } else if (e.key === 'ArrowUp') {
        const sortSelect = document.getElementById('sortSelect');
        if (sortSelect.selectedIndex > 0) {
          sortSelect.selectedIndex--;
        }
      }
      if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
        e.preventDefault();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentPage, pageCount]);

  useEffect(() => {
    const sortedAndFilteredData = applySorting(staffDetails.filter(invoice => {
      return Object.values(invoice).some(value =>
        value.toString().toLowerCase().includes(filterCriteria.toLowerCase())
      );
    }));
    setSortedData(sortedAndFilteredData);
  }, [filterCriteria, sortColumn, sortOption]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleColumnSort = (column) => {
    setSortColumn(column);
    setSortOption('ascending');
  };
  return (
    <div>
      <div className='m-3'>
      <Header text='Staff Details'/>
      <div className="w-4/5 px-4 mt-12"> {/* Center the content */}
      <input
            type="text"
<<<<<<< HEAD
            name="salary"
            value={filterCriteria.salary}
=======
            value={filterCriteria}
>>>>>>> 8cf75d9 (FEAT:)
            onChange={handleFilterChange}
            placeholder="Search"
            className="mr-2 mb-2 md:mb-0 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
<<<<<<< HEAD
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
=======
          <select
            id="sortSelect"
            value={sortColumn}
            onChange={(e) => handleColumnSort(e.target.value)}
            className="mr-2 mb-2 md:mb-0 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          >
            <option value="">Sort By</option>
            {Object.keys(staffDetails[0]).map(column => (
              <option key={column} value={column}>{column}</option>
            ))}
          </select>
          <select
           id="orderSelect"
            value={sortOption}
            onChange={handleSortOptionChange}
>>>>>>> 8cf75d9 (FEAT:)
            className="mr-2 mb-2 md:mb-0 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          >
            <option value="">Order</option>
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
      </div>
      <div className=" w-5/6 px-4 mt-14 rounded-3xl"> 
      <Table className="shadow-md w-full mx-auto rounded-3xl ">
      <div className=" max-h-[600px] bg-white">
        <TableHeader  className="sticky top-0 bg-white z-10">
          <TableRow>
                {Object.keys(staffDetails[0]).map((key) => (
                  <TableHead key={key} className="w-[100px] text-center font-medium">{key}</TableHead>
                ))}
              </TableRow>
        </TableHeader>
        <TableBody>
        {paginatedData.map((staff,index) => (
            <TableRow key={index}>
            {Object.values(staff).map((value, i) => (
              <TableCell key={i} className="text-center">{value}</TableCell>
            ))}
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
    </div>
)
}

export default Staff_Details
