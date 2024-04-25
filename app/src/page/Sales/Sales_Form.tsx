import Header from "@/components/Header/Header";
import ProductTable from './ProductTable';

const Sales_Form = () => {
    return (
        <div>
            <div className='m-3 p-4'>
                <Header text='Add New Sales' />
            </div>
            <div className='m-3 p-4'>
                <ProductTable />
            </div>
            </div>
  )
}

export default Sales_Form
