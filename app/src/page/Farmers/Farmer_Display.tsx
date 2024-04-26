import Header from '@/components/Header/Header'
import { useState } from 'react'
import FarmerFormsCombined from './AddNewFarmer/FormsCombined'
import DemoPage from './TableShow/table-trial'

const initialFarmerDetails=[
    {
        name: "vish",
    email: "d",
    phoneNumber: "e",
    gender: "f",
    aadhaar: "g",
    address : "cashville street mainpur",
    bankAccountHolderName: "",
    ifscCode: "",
    bankAccountNumber: "",
    shareholder: "",
    landType: "",
    farmerType: "",
    category: "",
    fatherName: "",
    },
]

const FarmerTable = () => {
    const [farmerDetails, setFarmerDetails] = useState(initialFarmerDetails)
  
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
                <DemoPage displayData={initialFarmerDetails} buttonText='Add Farmer' buttonRoute='/farmers/forms'/>
            </div>
        </div>
    )
}

export default FarmerTable
