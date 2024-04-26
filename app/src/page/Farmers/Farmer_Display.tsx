import Header from '@/components/Header/Header'
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
