import { Button } from '@/components/ui/button';
import { SetStateAction, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import FpoBasicDetails from './FPO Form components/FpoBasicDetails';
import FpoAddress from './FPO Form components/FpoAddress';
import FpoAccount from './FPO Form components/FpoAccount';

const FpoFormsCombined = () => {
    const [activeComponent, setActiveComponent] = useState("basic");
    const navigate = useNavigate();
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
  
    const handleChange = (e: { target: { name: any; value: any; }; }) => {
      const { name, value } = e.target;
      setFormData(prevData => ({
        ...prevData,
        [name]: value
      }));
    };
  
   
  
    const validateForm = () => {
      return (
        formData.fpoName !== '' &&
        formData.email !== '' &&
        formData.phoneNumber !== '' &&
        formData.addressLine1 !== '' &&
        formData.district !== '' &&
        formData.bankAccountNumber !== '' &&
        formData.ifscCode !== '' &&
        formData.state !== '' &&
        formData.pincode !== '' &&
        formData.dateOfFormation!=='' &&
        formData.fpoRegNo!==''
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
          navigate('/staff/forms/success');
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
  
    const handleNextButtonClick = () => {
      switch (activeComponent) {
        case "basic":
          setActiveComponent("address");
          break;
        case "address":
          setActiveComponent("account");
          break;
      }
    }
    const handleButtonClick = (component: SetStateAction<string>) => {
      setActiveComponent(component);
    };
  
  
    return (
      <div className='m-6'>
        <div className="flex justify-center gap-1">
          <Button className="rounded-none" onClick={() => handleButtonClick("basic")}>Basic</Button>
          <Button className="rounded-none" onClick={() => handleButtonClick("address")}>Address</Button>
          <Button className="rounded-none" onClick={() => handleButtonClick("account")}>Account</Button>
        </div>
      <form onSubmit={handleSubmit} className='grid gap-5 p-4'>
        {activeComponent === 'basic' &&
        <>
        <FpoBasicDetails formData={formData} handleChange={handleChange} handleKeyPress={handleKeyPress}/>
        <Button type="button" onClick={handleNextButtonClick} className="mt-3 w-full sm:w-auto justify-self-center">
            Next
          </Button>
        </>
    }
     {activeComponent === 'address' &&   
     <>
        <FpoAddress formData={formData} handleChange={handleChange} handleKeyPress={handleKeyPress}/>
        <Button type="button" onClick={handleNextButtonClick} className="mt-3 w-full sm:w-auto justify-self-center">
            Next
          </Button>
          </>
      }
      {activeComponent === 'account' &&
          <>
          <FpoAccount formData={formData} handleChange={handleChange} handleKeyPress={handleKeyPress}/>
          <Button className='mt-3 w-full sm:w-auto justify-self-center' type="submit">Submit</Button>
          </>
      }
        
      </form>
      </div>
    );
}

export default FpoFormsCombined