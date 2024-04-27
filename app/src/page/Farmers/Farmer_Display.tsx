import Header from '@/components/Header/Header'
import { useState, useEffect } from 'react'
import FarmerFormsCombined from './AddNewFarmer/FormsCombined'
import DemoPage from './TableShow/table-trial'

const initialFarmerDetails = [
    {
        name: "vish",
        email: "d",
        phoneNumber: "e",
        gender: "f",
        aadhaar: "g",
        address: "cashville street mainpur",
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
    useEffect(() => {
        fetchData();

    }, []);

    const fetchData = async () => {
        try {
            const accessToken = localStorage.getItem('accessToken')
            const response = await fetch('http://localhost:5050/api/farmer/get', {
                headers: {
                    'x-access-token': accessToken ? accessToken : ''
                }
            }
            );
            const jsonData = await response.json();
            setFarmerDetails(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


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
                <DemoPage displayData={farmerDetails} buttonText='Add Farmer' buttonRoute='/farmer/form' />
            </div>
        </div>
    )
}

export default FarmerTable
