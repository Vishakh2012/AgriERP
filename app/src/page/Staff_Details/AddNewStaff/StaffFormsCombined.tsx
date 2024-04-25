import  { SetStateAction, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom'
import StaffPersonal from './Form Components/StaffPersonal';
import StaffAddress from './Form Components/StaffAddress';
import StaffAccount from './Form Components/StaffAccount';

interface StaffFormProps {
  mode: 'add' | 'edit';
  selectedRowData?: any; // Data of the staff member to edit
}

const StaffFormsCombined: React.FC<StaffFormProps> = ({ mode, selectedRowData }) => {

  const [activeComponent, setActiveComponent] = useState("personal");
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
    district: '',
    bankAccountHolderName: '',
    ifscCode: '',
    bankAccountNumber: '',
    city:'',
    postOffice:'',
    dob:'',
    dateOfJoin:'',
    salary:'',
    bloodGroup:''
  });

  useEffect(() => {
    if (selectedRowData) {
      const formDataWithDefaults = { ...selectedRowData };
      setFormData(formDataWithDefaults);
    }
  }, [selectedRowData]);

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
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
      formData.district !== '' &&
      formData.gender !== '' &&
      formData.bankAccountHolderName !=='' &&
      formData.bankAccountNumber !== '' &&
      formData.ifscCode !== '' &&
      formData.state !== '' &&
      formData.pincode !== '' &&
      formData.dateOfJoin!=='' &&
      formData.dob!==''
    );
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const accessToken = localStorage.getItem('accessToken');
        const url = mode === 'add' ? 'http://localhost:5050/api/posts' : 'http://localhost:5050/api/posts'; // Adjust the URL for adding and editing
        const method = mode === 'add' ? 'POST' : 'PUT';
        console.log(formData)
        const response = await fetch(url, {
          method: method,
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
      case "personal":
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
    <div className=' w-full'>
      <div className="flex justify-center gap-1 my-6">
        <Button className="rounded-none" onClick={() => handleButtonClick("personal")}>Personal</Button>
        <Button className="rounded-none" onClick={() => handleButtonClick("address")}>Address</Button>
        <Button className="rounded-none" onClick={() => handleButtonClick("account")}>Account</Button>
      </div>
    <form onSubmit={handleSubmit} className='grid gap-5 w-full'>
      {activeComponent === 'personal' &&
      <>
      <StaffPersonal formData={formData} handleChange={handleChange} handleKeyPress={handleKeyPress}/>
      <Button type="button" onClick={handleNextButtonClick} className="mt-3 w-full sm:w-auto justify-self-center">
          Next
        </Button>
      </>
  }
   {activeComponent === 'address' &&   
   <>
      <StaffAddress formData={formData} handleChange={handleChange} handleKeyPress={handleKeyPress}/>
      <Button type="button" onClick={handleNextButtonClick} className="mt-3 w-full sm:w-auto justify-self-center">
          Next
        </Button>
        </>
    }
    {activeComponent === 'account' &&
        <>
        <StaffAccount formData={formData} handleChange={handleChange} handleKeyPress={handleKeyPress}/>
        <Button className='mt-3 w-full sm:w-auto justify-self-center' type="submit">Submit</Button>
        </>
    }
      
    </form>
    </div>
  );
};

export default StaffFormsCombined;
