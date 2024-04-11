import Forms from './FormsCombined'
import Header from '@/components/Header/Header'

const FarmerForms = () => {
  return (
    <div className='w-full ml-4 h-screen'>
      <Header text='Add New Farmer'/>
      <Forms/>
    </div>
  )
}

export default FarmerForms
