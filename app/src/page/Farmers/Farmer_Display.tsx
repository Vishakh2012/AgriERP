import Header from '@/components/Header/Header'
import DemoPage from './TableShow/table-trial'

const initialFarmerDetailsDisplayed = [
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
        shareHolder: "",
        landType: "",
        farmerType: "",
        category: "",
        fatherName: "",
    },
]

/*
    DateOfJoining: "2024-04-27T05:24:22.606Z"
__v: 0
_id: "662c8c0922b709109b707bd0"
addressLine1: "Mullaparambu"
addressLine2: "Poochackal P.O"
bankAccouHolderName: ""
bankAccountNumber: ""
block: ""
city: ""
cropsProduced: ""
district: "alappuzha"
dob: null
email: ""
farmerId: "3zpd2wmyllvhnpy2m"
farmerType: ""
fatherName: ""
firstName: "Rejeena"
fpoId: "662bce93919f225cd80a9b92"
gender: ""
ifscCode: ""
landArea: null
landType: ""
lastName: "Salim"
middleName: ""
numberOfShares: 1
phoneNumber: ""
pincode: null
postOffice: ""
shareAmount: null
shareHolder: "yes"
state: "kerala"
userType: "shareholder"

*/



const FarmerTable = () => {

    return (
        <div className='w-full'>
            <div className='ml-4 w-[100%-4rem] h-screen sm:justify-center'>
                <Header text='Farmer Details' />
                <DemoPage buttonText='Add Farmer' buttonRoute='/farmer/form' />
            </div>
        </div>
    )
}

export default FarmerTable
