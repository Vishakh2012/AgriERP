import { columns } from "./columns"
import React from "react"
import { DataTable } from "./data-table"
 
interface Data {
    [key: string] : string
}

interface propsTable {
    buttonText: string
    buttonRoute: string
    displayData: Data []
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
    <div className="container w-11/12 print:w-full mx-0 py-10 px-0 max-w-[1900px]">
      <DataTable columns={columns} data={data} buttonText={buttonText} buttonRoute={buttonRoute} onDelete={handleDelete} />
    </div>

  )
}
export default DemoPage
