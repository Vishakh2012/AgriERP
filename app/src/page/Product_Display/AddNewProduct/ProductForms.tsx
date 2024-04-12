import Header from '@/components/Header/Header'
import ProductFormsCombined from './ProductFormsCombined'

const ProductForms = () => {
  return (
    <div className='w-full ml-4 h-screen'>
      <Header text='Add New Product'/>
      <ProductFormsCombined/>
    </div>
  )
}

export default ProductForms
