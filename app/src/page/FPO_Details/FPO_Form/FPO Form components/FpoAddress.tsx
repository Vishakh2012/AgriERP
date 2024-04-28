import InputComponent from '@/components/Input/Input'

interface Formdetails{
  formData:any,
  handleChange?:any,
  handleKeyPress?:any,
  onClick?:any
  disabled?:boolean
}

const FpoAddress:React.FC<Formdetails> = ({ formData, handleChange, handleKeyPress ,onClick,disabled }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
    <div>
      <InputComponent
        label="Address Line 1"
        type="text"
        name="addressLine1"
        value={formData.addressLine1}
        onChange={handleChange}
        disabled={disabled}
        onClick={onClick}
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
        onClick={onClick}
        disabled={disabled}
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
        onClick={onClick}
        disabled={disabled}
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
        onClick={onClick}
        disabled={disabled}
        onChange={handleChange}
        placeholder="District"
        onKeyDown={handleKeyPress}
      />
    </div>
    <div>
      <InputComponent
        label="City"
        type="text"
        name="city"
        value={formData.city}
        onClick={onClick}
        disabled={disabled}
        onChange={handleChange}
        placeholder="City"
        onKeyDown={handleKeyPress}
      />
    </div>
    <div>
      <InputComponent
        label="Block"
        type="text"
        name="block"
        value={formData.block}
        onClick={onClick}
        disabled={disabled}
        onChange={handleChange}
        placeholder="Block"
        onKeyDown={handleKeyPress}
      />
    </div>
    <div>
      <InputComponent
        label="Post Office"
        type="text"
        name="postOffice"
        value={formData.postOffice}
        onClick={onClick}
        disabled={disabled}
        onChange={handleChange}
        placeholder="Post Office"
        onKeyDown={handleKeyPress}
      />
    </div>
    <div>
      <InputComponent
        label="Pincode"
        type="text"
        name="pincode"
        value={formData.pincode}
        onClick={onClick}
        disabled={disabled}
        onChange={handleChange}
        placeholder="Pincode"
        onKeyDown={handleKeyPress}
      />
    </div>
  </div>

  )
}

export default FpoAddress