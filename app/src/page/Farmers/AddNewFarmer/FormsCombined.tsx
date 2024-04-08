import  { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom'
import FarmerAddress from './FarmerAddress';
import FarmerShareholder from './FarmerShareholder';
import FarmerLandInfo from './FarmerLandInfo';
import FarmerPersonal from './FarmerPersonal';

const Forms = () => {


  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    gender:'',
    aadhaar:'',
    addressLine1: '',
    addressLine2: '',
    state: '',
    pincode: '',
    landArea: '',
    cropsProduced: [],
    block: '',
    district: '',
    bankAccountHolderName: '',
    ifscCode: '',
    bankAccountNumber: '',
    numberOfShares:0,
    shareholder:'',
    city:'',
    postOffice:'',
    landType:'',
    farmerType:'',
    dob:'',
    dateOfJoin:'',
    category:'',
    fatherName:''
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleCropChange = (selectedOptions:any) => {
    const crops = selectedOptions.map((option: { value: any; }) => option.value);
    setFormData(prevData => ({
      ...prevData,
      cropsProduced: crops
    }));
  };

  const validateForm = () => {
    return (
      formData.firstName !== '' &&
      formData.lastName !== '' &&
      formData.email !== '' &&
      formData.phoneNumber !== '' &&
      formData.addressLine1 !== '' &&
      formData.aadhaar !== '' &&
      formData.block !== '' &&
      formData.district !== '' &&
      formData.gender !== '' &&
      formData.bankAccountHolderName !=='' &&
      formData.bankAccountNumber !== '' &&
      formData.ifscCode !== '' &&
      formData.state !== '' &&
      formData.pincode !== '' &&
      formData.landArea !== '' &&
      formData.shareholder !== '' &&
      formData.cropsProduced.length > 0
    );
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        console.log(formData)
        const accessToken = localStorage.getItem('accessToken')
        const response = await fetch('http://localhost:5050/api/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-access-token': accessToken ? accessToken : '',
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error('Failed to submit form');
        }
        navigate('/farmers/forms/success');
        console.log('Form submitted successfully');
      } catch (error:any) {
        console.error('Error submitting form:', error.message);
      }
    } else {
      alert('Please fill in all required fields.');
    }
  };


  const handleKeyPress = (e: { key: string; preventDefault: () => void; target: { form: any; }; }) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const form = e.target.form;
      const index = Array.prototype.indexOf.call(form, e.target);
      const nextElement = form.elements[index + 1];
      if (nextElement && nextElement.name !== 'cropsProduced') {
        nextElement.focus();
      }
    }
  };


  return (
    <div className='m-6'>
    <form onSubmit={handleSubmit} className='grid gap-5 p-4'>
      <FarmerPersonal formData={formData} handleChange={handleChange} handleKeyPress={handleKeyPress}/>
      <FarmerAddress formData={formData} handleChange={handleChange} handleKeyPress={handleKeyPress}/>
    <FarmerLandInfo formData={formData} handleChange={handleChange} handleKeyPress={handleKeyPress} handleCropChange={handleCropChange}/>
        <FarmerShareholder formData={formData} handleChange={handleChange} handleKeyPress={handleKeyPress}/>
      <Button className='mt-3 w-full sm:w-auto justify-self-center' type="submit">Submit</Button>
    </form>
    </div>
  );
};

export default Forms;
