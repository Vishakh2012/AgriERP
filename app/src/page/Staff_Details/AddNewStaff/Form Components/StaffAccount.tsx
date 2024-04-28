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
          onKeyDown={handleKeyPress}
        />
        </div>
      
        <div>
        <InputComponent
          label="Bank Account Number"
          type="text"
          name="bankAccountNumber"
          value={formData.bankAccountNumber}
          onChange={handleChange}
          placeholder="Bank Account Number"
          onKeyDown={handleKeyPress}
        />
        </div>
        <div>
    <InputComponent
          label="Salary"
          type="text"
          name="salary"
          value={formData.salary}
          onChange={handleChange}
          placeholder="salary"
          onKeyDown={handleKeyPress}
        />
        </div>
        </div>
        </>
  )
}

export default StaffAccount