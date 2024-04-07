import React, { useState } from 'react';
import Input from './Input';
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
    shareholder:''
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Perform form submission logic here
      console.log(formData);
      // Reset form data after submission if needed
      setFormData({
        firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
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
    shareholder:''
      });
    } else {
      alert('Please fill in all required fields.');
    }
  };

  const validateForm = () => {
    return (
      formData.firstName !== '' &&
      formData.lastName !== '' &&
      formData.email !== '' &&
      formData.phoneNumber !== '' &&
      formData.addressLine1 !== '' &&
      formData.state !== '' &&
      formData.pincode !== '' &&
      formData.landArea !== '' &&
      formData.cropsProduced.length > 0
    );
  };

  return (
    <div>
    <form onSubmit={handleSubmit} className='grid gap-4'>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
        <Input
          label="First Name"
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
          required
        />
        </div>
        <div>
        <Input
          label="Middle Name"
          type="text"
          name="middleName"
          value={formData.middleName}
          onChange={handleChange}
          placeholder="Middle Name"
        />
        </div>
        <div>
        <Input
          label="Last Name"
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          required
        />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
        <Input
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        </div>
        <div>
        <Input
          label="Phone Number"
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Phone Number"
          required
        />
        </div>
        <div>
          <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>
        </div>
        <div>
          <label htmlFor="aadhaar" className="block text-sm font-medium text-gray-700">Aadhaar Number</label>
          <Input
            type="text"
            name="aadhaar"
            value={formData.aadhaar}
            onChange={handleChange}
            placeholder="Aadhaar Number"
          />
        </div>
        <div>
        <Input
          label="Address Line 1"
          type="text"
          name="addressLine1"
          value={formData.addressLine1}
          onChange={handleChange}
          placeholder="Address Line 1"
          required
        />
        </div>
        <div>
        <Input
          label="Address Line 2"
          type="text"
          name="addressLine2"
          value={formData.addressLine2}
          onChange={handleChange}
          placeholder="Address Line 2"
        />
        </div>
        <div>
        <Input
          label="Block"
          type="text"
          name="block"
          value={formData.block}
          onChange={handleChange}
          placeholder="Block"
          required
        />
        </div>
        <div>
        <Input
          label="District"
          type="text"
          name="district"
          value={formData.district}
          onChange={handleChange}
          placeholder="District"
          required
        />
        </div>
        <div>
        <Input
          label="State"
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
          placeholder="State"
          required
        />
        </div>
        <div>
        <Input
          label="Pincode"
          type="text"
          name="pincode"
          value={formData.pincode}
          onChange={handleChange}
          placeholder="Pincode"
          required
        />
        </div>
        <div>
        <Input
          label="Land Area (in Acres)"
          type="text"
          name="landArea"
          value={formData.landArea}
          onChange={handleChange}
          placeholder="Land Area"
          required
        />
        </div>
        <div>
        <label htmlFor="cropsProduced" className="block text-sm font-medium text-gray-700">Crops Produced</label>
          <Select
            name="cropsProduced"
            value={formData.cropsProduced.map(crop => ({ label: crop, value: crop }))}
            onChange={handleCropChange}
            options={cropsData.map(crop => ({ label: crop.name, value: crop.name }))}
            isMulti
            placeholder="Select Crops"
          />
        </div>
        <div>
        <Input
          label="Bank Account Holder Name"
          type="text"
          name="bankAccountHolderName"
          value={formData.bankAccountHolderName}
          onChange={handleChange}
          placeholder="Bank Account Holder Name"
          required
        />
        </div>
        <div>
        <Input
          label="IFSC Code"
          type="text"
          name="ifscCode"
          value={formData.ifscCode}
          onChange={handleChange}
          placeholder="IFSC Code"
          required
        />
        </div>
      </div>
      <div className='grid grid-cols-1'>
        <div>
        <Input
          label="Bank Account Number"
          type="text"
          name="bankAccountNumber"
          value={formData.bankAccountNumber}
          onChange={handleChange}
          placeholder="Bank Account Number"
          required
        />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="shareholder" className="block text-sm font-medium text-gray-700">ShareHolder</label>
          <select
            id="shareholder"
            value={formData.shareholder}
            onChange={handleChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option value="">Select</option>
            <option value="male">Yes</option>
            <option value="female">No</option>
          </select>
        </div>
        <div>
        <Input
          label="Number Of Shares"
          type="text"
          name="numberOfShares"
          value={formData.numberOfShares}
          onChange={handleChange}
          placeholder="Number Of Shares"
          required
        />
          
        </div>
      </div>
      <Button className='mt-3 w-full sm:w-auto justify-self-center' type="submit">Submit</Button>
    </form>
    </div>
  );
};

export default Forms;
