import InputComponent from '@/components/Input/Input'


const StaffAddress = ({ formData, handleChange, handleKeyPress }) => {
   
  return (
    
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
        
        <InputComponent
          label="Address Line 1"
          type="text"
          name="addressLine1"
          value={formData.addressLine1}
          onChange={handleChange}
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
          onChange={handleChange}
          placeholder="District"
          required
          onKeyDown={handleKeyPress}
        />
        </div>
        <div>
        <InputComponent
          label="City"
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="City"
          required
          onKeyDown={handleKeyPress}
        />
        </div>
        <div>
        <InputComponent
          label="Post Office"
          type="text"
          name="postOffice"
          value={formData.postOffice}
          onChange={handleChange}
          placeholder="Post Office"
          required
          onKeyDown={handleKeyPress}
        />
        </div>
        <div>
        <InputComponent
          label="Pincode"
          type="text"
          name="pincode"
          value={formData.pincode}
          onChange={handleChange}
          placeholder="Pincode"
          required
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
          required
          onKeyDown={handleKeyPress}
        />
        </div>
        </div>
    
  )
}

export default StaffAddress