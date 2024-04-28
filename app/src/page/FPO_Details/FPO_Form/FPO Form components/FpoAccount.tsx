import InputComponent from '@/components/Input/Input'

interface Formdetails{
  formData:any,
  handleChange?:any,
  handleKeyPress?:any,
  onClick?:any
  disabled?:any
}

const FpoAccount:React.FC<Formdetails> = (props) => {
  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
    <div>
        <InputComponent
          label="Price of One Share"
          type="text"
          name="shareAmount"
          value={props.formData.shareAmount}
          onChange={props.handleChange}
          disabled={props.disabled}
          onClick={props.onClick}
          placeholder="Bank Account Number"
          onKeyDown={props.handleKeyPress}
        />
        </div> 
    <div>
        <InputComponent
          label="Bank Branch Name"
          type="text"
          name="bankBranchName"
          value={props.formData.bankBranchName}
          onChange={props.handleChange}
          disabled={props.disabled}
          placeholder="Bank Branch Name"
          onClick={props.onClick}
          onKeyDown={props.handleKeyPress}
        />
        </div>
        <div>
        <InputComponent
          label="IFSC Code"
          type="text"
          name="ifscCode"
          value={props.formData.ifscCode}
          onChange={props.handleChange}
          onClick={props.onClick}
          disabled={props.disabled}
          placeholder="IFSC Code"
          onKeyDown={props.handleKeyPress}
        />
        </div>
     
        <div>
        <InputComponent
          label="Bank Account Number"
          type="text"
          name="bankAccountNumber"
          value={props.formData.bankAccountNumber}
          onChange={props.handleChange}
          disabled={props.disabled}
          onClick={props.onClick}
          placeholder="Bank Account Number"
          onKeyDown={props.handleKeyPress}
        />
        </div>
      </div>
        </>
  )
}

export default FpoAccount