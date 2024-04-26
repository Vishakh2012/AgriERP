import Header from '@/components/Header/Header'
import { useState } from 'react'
import DemoPage from './TableShow/table-trial'


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



    return (
        <div className='w-full'>
            <div className='md:ml-4 w-full h-full'>
                <Header text='Shareholder Details' />
                <DemoPage displayData={initialFarmerDetails} buttonRoute='/farmers/forms' buttonText='Add Shareholder'/>
            </div>
        </div>
    )
}

export default StakeHolders
