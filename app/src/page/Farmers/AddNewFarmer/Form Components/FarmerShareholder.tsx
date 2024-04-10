import InputComponent from '@/components/Input/Input'

const FarmerShareholder = ({ formData, handleChange, handleKeyPress }) => {
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="shareholder" className="block text-sm font-medium text-gray-700">ShareHolder</label>
          <select
            id="shareholder"
            name='shareholder'
            value={formData.shareholder}
            onChange={handleChange}
            required
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div>
        <InputComponent
          label="Number Of Shares"
          type="number"
          name="numberOfShares"
          value={formData.numberOfShares}
          onChange={handleChange}
          placeholder="Number Of Shares"
          required
          disabled={formData.shareholder=='No'}
          onKeyDown={handleKeyPress} 
          />
        </div>
        </div>
        </>
  )
}

export default FarmerShareholder