import InputComponent from '@/components/Input/Input'


const FpoBasicDetails = ({ formData, handleChange, handleKeyPress }) => {
  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
     
    <div>
        <InputComponent
          label="FPO Name"
          type="text"
          name="fpoName"
          value={formData.fpoName}
          onChange={handleChange}
          placeholder="FPO Name"
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
          onChange={handleChange}
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
          onChange={handleChange}
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
          onChange={handleChange}
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
          onChange={handleChange}
          placeholder='Email'
          required
          onKeyDown={handleKeyPress}
        />
        </div>
        <div>
        <InputComponent
          label="Phone Number"
          type="number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder='Phone Number'
          required
          onKeyDown={handleKeyPress}
        />
        </div>
      </div>
      
        </>
  )
}

export default FpoBasicDetails