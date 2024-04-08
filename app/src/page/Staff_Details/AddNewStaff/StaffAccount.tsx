import InputComponent from '@/components/Input/Input'


const StaffAccount = ({ formData, handleChange, handleKeyPress }) => {
  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
     
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
      
        </>
  )
}

export default StaffAccount