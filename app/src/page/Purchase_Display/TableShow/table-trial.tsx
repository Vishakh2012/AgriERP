import { Staff, columns  } from "./columns"
import React, {useState, useEffect} from "react"
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
 
  const [data, setData] = React.useState<Data[]>([]);

  
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const accessToken = localStorage.getItem('accessToken')
            const response = await fetch('http://localhost:5050/api/purchase/get', {
                headers: {
                    'x-access-token': accessToken ? accessToken : ''
                }
            }
            );
            const jsonData = await response.json();

            setData(jsonData.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
  return (
    <div className="container w-11/12 mx-0 py-10 px-0 max-w-[1900px] justify-center">
      <DataTable columns={columns} data={data} buttonText={buttonText} buttonRoute={buttonRoute} />
    </div>

  )
}
export default DemoPage
