import Header from "@/components/Header/Header";
import ProductTable from './ProductTable';
import DemoPage from "./TableShow/table-trial";

interface Data {
    [key: string] : string
}
const staffDetails: Data[] = [
];
const Sales_Form = () => {
    return (
        <div className="print:h-screen print:w-screen">
            <div className='md:ml-4 print:hidden print:p-0'>
                <Header text='Add New Sales' />
            </div>
            <div className=' md:ml-4 mt-4 print:m-0 print:p-0'>
            <ProductTable />
            {/*<DemoPage displayData={staffDetails} buttonText="hello" buttonRoute="hi"/>*/}
            </div>
            </div>
  )
}

export default Sales_Form
