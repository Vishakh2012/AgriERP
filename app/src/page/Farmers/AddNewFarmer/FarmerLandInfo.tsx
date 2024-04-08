import InputComponent from '@/components/Input/Input'
import { useEffect, useState } from 'react';
import Select from 'react-select'
import cropsData from './cropsData.json';

const FarmerLandInfo = ({ formData, handleChange, handleKeyPress ,handleCropChange }) => {

    const [products,setProducts]=useState(cropsData)
    useEffect(() => {
      fetchProducts();
  
  }, []);
  
  const fetchProducts = async () => {
      try {
          const accessToken = localStorage.getItem('accessToken')
          const response = await fetch('http://localhost:5050/api/posts', {
              headers: {
                  'x-access-token': accessToken ? accessToken : ''
              }
          }
          );
          const data = await response.json();
          setProducts(data);
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  };

  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="landType" className="block text-sm font-medium text-gray-700">Land Type</label>
          <select
            id="landType"
            name='landType'
            value={formData.landType}
            onChange={handleChange}
            required
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option value="">Select</option>
            <option value="yes">Owned</option>
            <option value="no">Lease</option>
          </select>
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
        </div>

        <div className="grid grid-cols-1 gap-5 ">
            <div>
        <label htmlFor="cropsProduced" className="block text-sm font-medium text-gray-700">Crops Produced</label>
          <Select
            name="cropsProduced"
            value={formData.cropsProduced.map(crop => ({ label: crop, value: crop }))}
            onChange={handleCropChange}
            options={products.map(crop => ({ label: crop.name, value: crop.name }))}
            isMulti
            placeholder="Select Crops"
            required
  
          />
          </div>
          </div>

    </>
  )
}

export default FarmerLandInfo