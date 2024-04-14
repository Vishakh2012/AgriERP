import  { useEffect, useState } from 'react'
import FpoBasicDetails from '../FPO Form/FPO Form components/FpoBasicDetails'
import FpoAddress from '../FPO Form/FPO Form components/FpoAddress';
import FpoAccount from '../FPO Form/FPO Form components/FpoAccount';
import { Button } from '@/components/ui/button';

const FieldsCombined = () => {
        const [formData, setFormData] = useState({
        fpoName: '',
        email: '',
        phoneNumber: '',
        addressLine1: '',
        addressLine2: '',
        state: '',
        pincode: '',
        district: '',
        bankBranchName: '',
        ifscCode: '',
        bankAccountNumber: '',
        city:'',
        postOffice:'',
        block:'',
        dateOfFormation:'',
        fpoCeo:'',
        fpoRegNo:''
      });

    useEffect(() => {
        fetchData();
      }, []);
    
      const fetchData = async () => {
        try {
            // Fetch data from backend API
            const response = await fetch('http://localhost:5050/api/fpoFormData');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            
            // Replace null values with empty strings
            const formDataWithDefaults: typeof formData = {
              fpoName: '',
              email: '',
              phoneNumber: '',
              addressLine1: '',
              addressLine2: '',
              state: '',
              pincode: '',
              district: '',
              bankBranchName: '',
              ifscCode: '',
              bankAccountNumber: '',
              city: '',
              postOffice: '',
              block: '',
              dateOfFormation: '',
              fpoCeo: '',
              fpoRegNo: ''
            };
            for (const key in data) {
              formDataWithDefaults[key as keyof typeof formData] = data[key] || '';
            }
            
            // Set the initial state of formData with fetched data
            setFormData(formDataWithDefaults);
        } catch (error:any) {
            console.error('Error fetching data:', error.message);
        }
    };

  return (
    <div className=" sm:max-w-[1200px] w-11/12 my-12">
        <div className='flex flex-col'>
            <Button className='max-w-[120px] ml-4'>Edit FPO Details</Button>
            <div className='grid gap-5 p-4'>
                <FpoBasicDetails formData={formData} disabled={true} />
                <FpoAddress formData={formData} disabled={true}/>
                <FpoAccount formData={formData} disabled={true}/>
            </div>
        </div>
    </div>
  )
}

export default FieldsCombined