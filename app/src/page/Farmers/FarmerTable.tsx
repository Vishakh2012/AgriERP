import Header from '@/components/Header/Header'
import TableShow from '@/components/TableShow/TableShow'
import TableTools from '@/components/TableTools/TableTools'
import useFilter from '@/hooks/useFilter'
import usePagination from '@/hooks/usePagination'
import useSort from '@/hooks/useSort'
import { useState } from 'react'
import FarmerFormsCombined from './AddNewFarmer/FormsCombined'

const initialFarmerDetails=[
    {
        firstName: "a",
    middleName: "b",
    lastName: "c",
    email: "d",
    phoneNumber: "e",
    gender: "f",
    aadhaar: "g",
    addressLine1: "h",
    addressLine2: "i",
    state: "",
    pincode: "",
    landArea: "",
    block: "",
    district: "",
    bankAccountHolderName: "",
    ifscCode: "",
    bankAccountNumber: "",
    shareholder: "",
    city: "",
    postOffice: "",
    landType: "",
    farmerType: "",
    category: "",
    fatherName: "",
    },
    {
        firstName: "",
        middleName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        gender: "",
        aadhaar: "",
        addressLine1: "",
        addressLine2: "",
        state: "",
        pincode: "",
        landArea: "",
        block: "",
        district: "",
        bankAccountHolderName: "",
        ifscCode: "",
        bankAccountNumber: "",
        shareholder: "",
        city: "",
        postOffice: "",
        landType: "",
        farmerType: "",
        category: "",
        fatherName: "",
    }
    
]

const FarmerTable = () => {
    const [farmerDetails, setFarmerDetails] = useState(initialFarmerDetails)
    const { filterCriteria, filteredData, handleFilterChange } = useFilter(farmerDetails)
    const { handleSortOptionChange, sortOption, handleColumnSort, sortedData, sortColumn } = useSort(filteredData)
    const { pageCount, paginatedData, handlePageChange, currentPage } = usePagination(sortedData)
  
    const handleDelete = (indexToDelete: number) => {
        // Create a copy of the farmerDetails array
        const updatedFarmerDetails = [...farmerDetails];
        // Remove the item at the specified index
        updatedFarmerDetails.splice(indexToDelete, 1);
        // Update the state with the new array
        setFarmerDetails(updatedFarmerDetails);
    };

    return (
        <div className='w-full'>
            <div className='md:ml-4 w-full h-screen'>
                <Header text='Farmer Details' />
                <TableTools filterCriteria={filterCriteria} handleColumnSort={handleColumnSort} handleFilterChange={handleFilterChange} handleSortOptionChange={handleSortOptionChange} sortColumn={sortColumn} sortOption={sortOption} Details={farmerDetails} buttonText='Add New Farmer' buttonRoute='/farmers/forms'/>
                <TableShow formComponent={<FarmerFormsCombined mode='edit'/>} pageCount={pageCount} paginatedData={paginatedData} currentPage={currentPage} handlePageChange={handlePageChange} Details={farmerDetails} PAGE_SIZE={5} edit={true} delete={true} onDelete={handleDelete}/>
            </div>
        </div>
    )
}

export default FarmerTable
