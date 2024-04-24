import Header from '@/components/Header/Header'
//import TableShow from '@/components/TableShow/TableShow'
//import TableTools from '@/components/TableTools/TableTools'
import useFilter from '@/hooks/useFilter'
import usePagination from '@/hooks/usePagination'
import useSort from '@/hooks/useSort'
import { useState } from 'react'


const StakeHolders = () => {
    const initialFarmerDetails = [
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
    ]


    const [farmerDetails, setFarmerDetails] = useState(initialFarmerDetails)

    return (
        <div className='w-full'>
            <div className='md:ml-4 w-full h-full'>
                <Header text='Farmer Details' />
                {
                    //  <TableTools filterCriteria={filterCriteria} handleColumnSort={handleColumnSort} handleFilterChange={handleFilterChange} handleSortOptionChange={handleSortOptionChange} sortColumn={sortColumn} sortOption={sortOption} Details={farmerDetails} buttonText='Add New StakeHolder' buttonRoute='/farmers/forms'/>
                }
                {
                    //                    <TableShow  pageCount={pageCount} paginatedData={paginatedData} currentPage={currentPage} handlePageChange={handlePageChange} Details={farmerDetails} PAGE_SIZE={5} edit={true} delete={true} />
                }
            </div>
        </div>
    )
}

export default StakeHolders
