import { Staff, columns } from "./columns"
import React from "react"
import { DataTable } from "./data-table"
 
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
interface Data {
    [key: string] : string
}

interface propsTable {
    buttonText: string
    buttonRoute: string
    displayData: Data[] 
}
const DemoPage: React.FC<propsTable> = ({buttonText, buttonRoute, displayData}) =>  {
    const [data, setData] = React.useState<Data[]>(displayData);

  const handleDelete = async (rowData: Data) => {
    const updatedData = data.filter(item => item !== rowData);  //Remove this when api is successfully connected
    setData(updatedData);
    try {
        // Make API call to delete data from the backend
        const response = await fetch('/deleteData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: rowData.id }) 
        });

        if (response.ok) {
            const updatedData = data.filter(item => item !== rowData);
            setData(updatedData);
        } else {
            throw new Error('Failed to delete data from the backend');
        }
    } catch (error) {
        console.error("Error deleting data:", error);
    }
};
 
  return (
    <div className="container w-11/12 mx-0 py-10 px-0 max-w-[1900px]">
      <DataTable columns={columns} data={data} buttonText={buttonText} buttonRoute={buttonRoute} onDelete={handleDelete}/>
    </div>

  )
}
export default DemoPage
