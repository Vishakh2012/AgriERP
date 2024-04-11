import React, { useState } from 'react';
import InputComponent from './Input';
import { Button } from '@/components/ui/button';
import Select from 'react-select'
import cropsData from './cropsData.json';

const Forms = () => {
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
    locality: '',
    state: '',
    pincode: '',
    landArea: '',
    cropsProduced: [],
    block: '',
    district: '',
    bankAccountHolderName: '',
    ifscCode: '',
    bankAccountNumber: '',
    numberOfShares:'',
    shareholder:'',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleCropChange = (selectedOptions) => {
    const crops = selectedOptions.map(option => option.value);
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
      formData.cropsProduced.length > 0
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
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

        console.log('Form submitted successfully');
      } catch (error) {
        console.error('Error submitting form:', error.message);
      }
    } else {
      alert('Please fill in all required fields.');
    }
  };

  const handleShareholderChange = (selectedOption) => {
    const shareholder = selectedOption.value;
    setFormData(prevData => ({
      ...prevData,
      shareholder,
      numberOfShares: shareholder === 'yes' ? prevData.numberOfShares : '0', 
      
    }));
  };

  

  const handleKeyPress = (e) => {
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
    <div className=" md:w-11/12">
    <form onSubmit={handleSubmit} className='grid gap-5 p-4'>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div>
        <InputComponent
          label="First Name"
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
          required
          onKeyDown={handleKeyPress}
        />
        </div>
        <div>
        <InputComponent
          label="Middle Name"
          type="text"
          name="middleName"
          value={formData.middleName}
          onChange={handleChange}
          placeholder="Middle Name"
          onKeyDown={handleKeyPress}
        />
        </div>
        <div>
        <InputComponent
          label="Last Name"
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          required
          onKeyDown={handleKeyPress}
        />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
        <InputComponent
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
          onKeyDown={handleKeyPress}
        />
        </div>
        <div>
        <InputComponent
          label="Phone Number"
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Phone Number"
          required
          onKeyDown={handleKeyPress}
        />
        </div>
        <div>
          <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>
        </div>
        <div>
          <InputComponent
            label='Aadhaar Number'
            type="text"
            name="aadhaar"
            value={formData.aadhaar}
            onChange={handleChange}
            placeholder="Aadhaar Number"
            required
            onKeyDown={handleKeyPress}
          />
        </div>
        <div>
        <InputComponent
          label="Address Line 1"
          type="text"
          name="addressLine1"
          value={formData.addressLine1}
          onChange={handleChange}
          placeholder="Address Line 1"
          required
          onKeyDown={handleKeyPress}
        />
        </div>
        <div>
        <InputComponent
          label="Address Line 2"
          type="text"
          name="addressLine2"
          value={formData.addressLine2}
          onChange={handleChange}
          placeholder="Address Line 2"
          onKeyDown={handleKeyPress}
        />
        </div>
        <div>
        <InputComponent
          label="State"
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
          placeholder="State"
          required
          onKeyDown={handleKeyPress}
        />
        </div>
        <div>
        <InputComponent
          label="District"
          type="text"
          name="district"
          value={formData.district}
          onChange={handleChange}
          placeholder="District"
          required
          onKeyDown={handleKeyPress}
        />
        </div>
        <div>
        
        <InputComponent
          label="Block"
          type="text"
          name="block"
          value={formData.block}
          onChange={handleChange}
          placeholder="Block"
          required
          onKeyDown={handleKeyPress}
        />
        </div>
        <div>
        <InputComponent
          label="Pincode"
          type="text"
          name="pincode"
          value={formData.pincode}
          onChange={handleChange}
          placeholder="Pincode"
          required
          onKeyDown={handleKeyPress}
        />
        </div>
        <div>
        <InputComponent
          label="Land Area (in Acres)"
          type="text"
          name="landArea"
          value={formData.landArea}
          onChange={handleChange}
          placeholder="Land Area"
          required
          onKeyDown={handleKeyPress}
        />
        </div>
        <div className='pt-2'>
        <label htmlFor="cropsProduced" className="block text-sm font-medium text-gray-700">Crops Produced</label>
          <Select
            name="cropsProduced"
            value={formData.cropsProduced.map(crop => ({ label: crop, value: crop }))}
            onChange={handleCropChange}
            options={cropsData.map(crop => ({ label: crop.name, value: crop.name }))}
            isMulti
            placeholder="Select Crops"
            required
  
          />
        </div>
        <div>
        <InputComponent
          label="Bank Account Holder Name"
          type="text"
          name="bankAccountHolderName"
          value={formData.bankAccountHolderName}
          onChange={handleChange}
          placeholder="Bank Account Holder Name"
          required
          onKeyDown={handleKeyPress}
        />
        </div>
        <div>
        <InputComponent
          label="IFSC Code"
          type="text"
          name="ifscCode"
          value={formData.ifscCode}
          onChange={handleChange}
          placeholder="IFSC Code"
          required
          onKeyDown={handleKeyPress}
        />
        </div>
      </div>
      <div className='grid grid-cols-1'>
        <div>
        <InputComponent
          label="Bank Account Number"
          type="text"
          name="bankAccountNumber"
          value={formData.bankAccountNumber}
          onChange={handleChange}
          placeholder="Bank Account Number"
          required
          onKeyDown={handleKeyPress}
        />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="shareholder" className="block text-sm font-medium text-gray-700">ShareHolder</label>
          <select
            id="shareholder"
            value={formData.shareholder}
            onChange={handleShareholderChange}
            onKeyDown={handleKeyPress}
            required
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div>
        <InputComponent
          label="Number Of Shares"
          type="text"
          name="numberOfShares"
          value={formData.numberOfShares}
          onChange={handleChange}
          placeholder="Number Of Shares"
          required
          disabled={formData.shareholder=='no'}
          onKeyDown={handleKeyPress} 
          />
          
        </div>
      </div>
      <Button className='mt-3 w-full sm:w-auto justify-self-center' type="submit">Submit</Button>
    </form>
    </div>
  );
};

export default Forms;
