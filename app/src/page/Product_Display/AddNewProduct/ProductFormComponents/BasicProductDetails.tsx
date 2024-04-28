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
          type="string"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Product Name"
          required
          onKeyDown={handleKeyPress}
        />
        </div>
        
      </div>
      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-5">
      <div>
        <InputComponent
          label="Item Code"
          type="string"
          name="itemCode"
          value={formData.itemCode}
          onChange={handleChange}
          placeholder="Item Code"
          required
          onKeyDown={handleKeyPress}
        />
        </div>
      <div>
          <label htmlFor="productCategory" className="block text-sm font-medium text-gray-700">Product Category</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
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
            name="HSN"
            value={formData.HSN}
            onChange={handleChange}
            placeholder="HSN Number"
            onKeyDown={handleKeyPress}
          />
        </div>
       <div>
        <InputComponent
          label="Price"
          type="string"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
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
            type="string"
            name="currentStock"
            value={formData.currentStock}
            onChange={handleChange}
            placeholder="Initial Stock"
            onKeyDown={handleKeyPress}
          />
        </div>
    </div>
    </div>
  )
}

export default BasicProductDetails