import { Staff, columns } from "./columns"
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
  const data = displayData
 
  return (
    <div className="container w-11/12 print:w-full mx-0 py-10 px-0 max-w-[1900px]">
      <DataTable columns={columns} data={data} buttonText={buttonText} buttonRoute={buttonRoute} />
    </div>

  )
}
export default DemoPage
