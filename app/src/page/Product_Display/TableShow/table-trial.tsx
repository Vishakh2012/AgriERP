import { columns } from "./columns"
import React, { useEffect, useState } from "react"
import { DataTable } from "./data-table"
 
interface Data {
    [key: string] : string
}

interface propsTable {
    buttonText: string
    buttonRoute: string
}
interface tax {
    HSN: string,
    CGST: number,
    SGST: number,
    IGST: number
}

interface SelectedRow {
    itemCode: string;
    name: string;
    HSN: string;
    quantity: string;
    tax:tax[],
    price: number;
    discount: string;
    finalAmount: string;
    category:string
}


const getSelectedRows= (arrayOfObjects: SelectedRow[]) => {
    return arrayOfObjects.map(obj  => ({
        itemCode: obj.itemCode || '', // If itemCode is undefined, set it to an empty string
        productName: obj.name || '',
        hsn: obj.HSN || '',
        quantity: obj.quantity || '',
        SGST: obj.tax[0].SGST.toString() || '',
        CGST: obj.tax[0].CGST.toString() || '',
        IGST: obj.tax[0].IGST.toString() || '',
        price: obj.price || '',
        discount: obj.discount || '',
        finalAmount: obj.finalAmount || '',
        category:obj.category || ''
    }));
}

const DemoPage: React.FC<propsTable> = ({buttonText, buttonRoute}) =>  {
    const [data, setData] = useState(getSelectedRows(JSON.parse(localStorage.getItem("product")).data))


  
//    useEffect(() => {
//        fetchData();
//    }, []);
//
//    const fetchData = async () => {
//        try {
//            const accessToken = localStorage.getItem('accessToken')
//            const response = await fetch('http://localhost:5050/api/products/get', {
//                headers: {
//                    'x-access-token': accessToken ? accessToken : ''
//                }
//            }
//            );
//            const jsonData = await response.json();
//            console.log(Array.isArray(jsonData.data))
//
//            setData(jsonData.data);
//        } catch (error) {
//            console.error('Error fetching data:', error);
//        }
//    };

  const handleDelete = async (rowData: Data) => {
    try {
        const token = localStorage.getItem('accessToken')
        const item_code = rowData.itemCode
        // Make API call to delete data from the backend
        const response = await fetch(`http://localhost:5050/api/products/delete/${item_code}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': token ? token : "",
            },
        });
        console.log(rowData.itemCode)
        if (response.ok) {
            const updatedData = data.filter(item => item !== rowData);
            setData(updatedData);
            console.log(rowData.itemCode)
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
