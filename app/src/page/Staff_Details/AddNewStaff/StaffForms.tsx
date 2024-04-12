import Header from '@/components/Header/Header'
import StaffFormsCombined from './StaffFormsCombined'

const StaffForms = () => {
  return (
    <div className='w-full ml-4 h-screen'>
    <Header text='Add New Staff'/>
    <StaffFormsCombined/>
    </div>
  )
}

export default StaffForms