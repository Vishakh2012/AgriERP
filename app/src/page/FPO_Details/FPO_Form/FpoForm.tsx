import Header from '@/components/Header/Header'
import FpoFormsCombined from './FpoFormsCombined'

const FpoForm = () => {
  return (
    <div className='w-full'>
            <div className='md:ml-4 w-full h-screen'>
        <Header text='Edit FPO Details'/>
        <FpoFormsCombined/>
    </div>
    </div>
  )
}

export default FpoForm