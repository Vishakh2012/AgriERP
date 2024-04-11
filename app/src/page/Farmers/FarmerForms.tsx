import Forms from './Forms'
import Header from '@/components/Header/Header'

const FarmerForms = () => {
    return (
        <div className=''>
            <div className=' w-1/2 md:ml-4'>
                <Header text='Add New Farmer' />
                <Forms />
            </div>
        </div>
    )
}

export default FarmerForms
