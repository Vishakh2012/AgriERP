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
          type="string"
          name="CGST"
          value={formData.CGST}
          onChange={handleChange}
          placeholder="CGST"
          onKeyDown={handleKeyPress}
        />
        </div>
      <div>
          <InputComponent
            label='SGST'
            type="string"
            name="SGST"
            value={formData.SGST}
            onChange={handleChange}
            placeholder="SGST"
            onKeyDown={handleKeyPress}
          />
        </div>
       <div>
        <InputComponent
          label="IGST"
          type="string"
          name="IGST"
          value={formData.IGST}
          onChange={handleChange}
          placeholder="IGST"
          onKeyDown={handleKeyPress}
        />
        </div>
    </div>
    </div>
  )
}

export default TaxProductDetails