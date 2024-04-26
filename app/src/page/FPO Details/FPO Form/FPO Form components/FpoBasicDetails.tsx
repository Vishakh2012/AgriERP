import InputComponent from '@/components/Input/Input'
import { ChangeEvent } from 'react';

interface Formdetails{
  formData:any,
  handleChange?:any,
  handleKeyPress?:any,
  onClick?:any
  disabled?:boolean
  onFileChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const FpoBasicDetails:React.FC<Formdetails> = ({ formData, handleChange, handleKeyPress ,onClick,disabled,onFileChange }) => {
  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
     
    <div>
        <InputComponent
          label="FPO Name"
          type="text"
          name="fpoName"
          value={formData.fpoName}
          onClick={onClick}
          onChange={handleChange}
          placeholder="FPO Name"
          disabled={disabled}
          required
          onKeyDown={handleKeyPress}
        />
        </div>
        <div>
        <InputComponent
          label="FPO Registration Number"
          type="text"
          name="fpoRegNo"
          value={formData.fpoRegNo}
          onClick={onClick}
          onChange={handleChange}
          disabled={disabled}
          placeholder="FPO Registration Number"
          required
          onKeyDown={handleKeyPress}
        />
        </div>
        <div>
        <InputComponent
          label="CEO"
          type="text"
          name="fpoCeo"
          value={formData.fpoCeo}
          onClick={onClick}
          onChange={handleChange}
          disabled={disabled}
          placeholder="CEO"
          required
          onKeyDown={handleKeyPress}
        />
        </div>
        <div>
        <InputComponent
          label="Date of Formation"
          type="date"
          name="dateOfFormation"
          value={formData.dateOfFormation}
          onClick={onClick}
          onChange={handleChange}
          disabled={disabled}
          placeholder='Date of Formation'
          required
          onKeyDown={handleKeyPress}
        />
        </div>
        <div>
        <InputComponent
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onClick={onClick}
          disabled={disabled}
          onChange={handleChange}
          placeholder='Email'
          required
          onKeyDown={handleKeyPress}
        />
        </div>
        <div>
        <InputComponent
          label="Phone Number"
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onClick={onClick}
          disabled={disabled}
          onChange={handleChange}
          placeholder='Phone Number'
          required
          onKeyDown={handleKeyPress}
        />
        </div>
      </div>
      <div>
      <InputComponent
            label="Upload Image"
            type="file"
            accept="image/*" // Accept only image files
            name="headerImage"
            onChange={onFileChange} // Call onFileChange when file is selected
            disabled={disabled}
            required
          />
      </div>
      
        </>
  )
}

export default FpoBasicDetails