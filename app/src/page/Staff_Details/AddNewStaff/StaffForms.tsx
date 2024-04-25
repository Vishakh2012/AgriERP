import Header from '@/components/Header/Header'
import StaffFormsCombined from './StaffFormsCombined'

const StaffForms = () => {
  return (
    <div className='ml-4 w-full'>
    <Header text='Add New Staff'/>

    <div className='w-full flex sm:w-11/12'>
    <StaffFormsCombined mode='add'/>
    </div>
    </div>
  )
}

export default StaffForms
