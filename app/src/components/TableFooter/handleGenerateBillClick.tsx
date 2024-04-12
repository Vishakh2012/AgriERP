const handleGenerateBillClick = (setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>) => {
    // Check if mobile number is entered before opening the dialog
    const mobileNumber: string = ''; // Replace this with the actual value
    if (!mobileNumber || mobileNumber.trim() === "") {
      alert("Please enter the mobile number.");
      return;
    }
    // Open the dialog box if mobile number is entered
    setOpenDialog(true);
  };
  
  export default handleGenerateBillClick;
  