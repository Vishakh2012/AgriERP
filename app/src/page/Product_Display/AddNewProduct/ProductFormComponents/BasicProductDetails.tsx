import InputComponent from '@/components/Input/Input'
import React from 'react'

interface BasicPdtForm{
    formData:any,
    handleChange:any,
    handleKeyPress:any
}

const BasicProductDetails: React.FC<BasicPdtForm> = ({ formData, handleChange, handleKeyPress }) => {
  return (
    <div>
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-5">
        <div>
        <InputComponent
          label="Product Name"
          type="text"
          name="productName"
          value={formData.productName}
          onChange={handleChange}
          placeholder="Product Name"
          required
          onKeyDown={handleKeyPress}
        />
        </div>
        
      </div>
      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-5">
      <div>
          <label htmlFor="productCategory" className="block text-sm font-medium text-gray-700">Product Category</label>
          <select
            id="productCategory"
            name="productCategory"
            value={formData.productCategory}
            onChange={handleChange}
            required
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option value="">Select Category</option>
            <option value="Vegetables">Vegetables</option>
            <option value="Processed Products">Processed Products</option>
            <option value="Others">Others</option>
          </select>
        </div>
      <div>
          <InputComponent
            label='HSN Number'
            type="string"
            name="hsnNumber"
            value={formData.hsnNumber}
            onChange={handleChange}
            placeholder="HSN Number"
            required
            onKeyDown={handleKeyPress}
          />
        </div>
       <div>
        <InputComponent
          label="Price"
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
          required
          onKeyDown={handleKeyPress}
        />
        </div>
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">Unit</label>
          <select
            id="unit"
            name="unit"
            value={formData.unit}
            onChange={handleChange}
            required
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option value="">Select Unit</option>
            <option value="Nos">Nos</option>
            <option value="Kg">Kg</option>
            <option value="Litre">Litre</option>
          </select>
        </div>
        <div>
          <InputComponent
            label='Initial Stock'
            type="number"
            name="stockCount"
            value={formData.stockCount}
            onChange={handleChange}
            placeholder="Initial Stock"
            required
            onKeyDown={handleKeyPress}
          />
        </div>
    </div>
    </div>
  )
}

export default BasicProductDetails