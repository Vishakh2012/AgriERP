import Header from "@/components/Header/Header";
import SalesTransactionTable from './PurchaseTransactionTable';

interface Data {
    [key: string] : string
}
const Purchase_Form = () => {
    return (
        <div className="print:h-screen print:w-screen">
            <div className='md:ml-4 print:hidden print:p-0'>
                <Header text='Add New Purchase' />
            </div>
            <div className=' md:ml-4 mt-4 print:m-0 print:p-0'>
            <SalesTransactionTable />
            </div>
            </div>
  )
}

export default Purchase_Form
