import InputComponent from '@/components/Input/Input'
import React from 'react'

interface TaxPdtForm{
    formData:any,
    handleChange:any,
    handleKeyPress:any
}

const TaxProductDetails: React.FC<TaxPdtForm> = ({ formData, handleChange, handleKeyPress }) => {
  return (
    <div>
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-5 ">
        <div>
        <InputComponent
          label="CGST"
          type="number"
          name="cgst"
          value={formData.cgst}
          onChange={handleChange}
          placeholder="CGST"
          required
          onKeyDown={handleKeyPress}
        />
        </div>
      <div>
          <InputComponent
            label='SGST'
            type="number"
            name="sgst"
            value={formData.sgst}
            onChange={handleChange}
            placeholder="SGST"
            required
            onKeyDown={handleKeyPress}
          />
        </div>
       <div>
        <InputComponent
          label="IGST"
          type="number"
          name="igst"
          value={formData.igst}
          onChange={handleChange}
          placeholder="IGST"
          required
          onKeyDown={handleKeyPress}
        />
        </div>
    </div>
    </div>
  )
}

export default TaxProductDetails