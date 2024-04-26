import InputComponent from "@/components/Input/Input";

interface Formdetails {
  formData: any;
  handleChange?: any;
  handleKeyPress?: any;
  onClick?: any;
  disabled?: boolean;
}

const FpoBasicDetails: React.FC<Formdetails> = ({
  formData,
  handleChange,
  handleKeyPress,
  onClick,
  disabled,
}) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <InputComponent
            label="FPO Name"
            type="text"
            name="fpoName"
            value={formData.name}
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
            placeholder="Date of Formation"
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
            placeholder="Email"
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
            onClick={onClick}
            disabled={disabled}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            onKeyDown={handleKeyPress}
          />
        </div>
      </div>
    </>
  );
};

export default FpoBasicDetails;
