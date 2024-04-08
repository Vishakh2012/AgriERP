import InputComponent from '@/components/Input/Input'


const FarmerPersonal = ({ formData, handleChange, handleKeyPress }) => {
  return (
    <div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div>
        <InputComponent
          label="First Name"
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
          required
          onKeyDown={handleKeyPress}
        />
        </div>
        <div>
        <InputComponent
          label="Middle Name"
          type="text"
          name="middleName"
          value={formData.middleName}
          onChange={handleChange}
          placeholder="Middle Name"
          onKeyDown={handleKeyPress}
        />
        </div>
        <div>
        <InputComponent
          label="Last Name"
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          required
          onKeyDown={handleKeyPress}
        />
        </div>
      </div>
      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-5">
      <div>
          <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>
        </div>
      <div>
          <InputComponent
            label='Date Of Birth'
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            placeholder="Date Of Birth"
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
          placeholder="Email"
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
          onChange={handleChange}
          placeholder="Phone Number"
          required
          onKeyDown={handleKeyPress}
        />
        </div>
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option value="">Select category</option>
            <option value="sc">SC</option>
            <option value="st">ST</option>
            <option value="obc">OBC</option>
            <option value="general">General</option>
            <option value="others">Others</option>
          </select>
        </div>
        <div>
          <InputComponent
            label='Aadhaar Number'
            type="text"
            name="aadhaar"
            value={formData.aadhaar}
            onChange={handleChange}
            placeholder="Aadhaar Number"
            required
            onKeyDown={handleKeyPress}
          />
        </div>
        
        <div>
          <InputComponent
            label='Name Of Father'
            type="text"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
            placeholder="Name Of Father"
            required
            onKeyDown={handleKeyPress}
          />
        </div>
        <div>
          <InputComponent
            label='Date Of Joining'
            type="date"
            name="dateOfJoin"
            value={formData.dateOfJoin}
            onChange={handleChange}
            placeholder="Date Of Joining"
            required
            onKeyDown={handleKeyPress}
          />
        </div>
    </div>
    </div>
  )
}

export default FarmerPersonal