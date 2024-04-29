import { SetStateAction, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import FarmerAddress from "./Form Components/FarmerAddress";
import FarmerShareholder from "./Form Components/FarmerShareholder";
import FarmerLandInfo from "./Form Components/FarmerLandInfo";
import FarmerPersonal from "./Form Components/FarmerPersonal";

interface FarmerFormProps {
  mode: 'add' | 'edit';
  selectedRowData?: any; // Data of the staff member to edit
}

const FarmerFormsCombined: React.FC<FarmerFormProps> = ({ mode, selectedRowData }) => {
  const navigate = useNavigate();
  const [activeComponent, setActiveComponent] = useState("personal");
  const [formData, setFormData] = useState({
    farmerId: '',
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    gender: "",
    aadhaar: "",
    addressLine1: "",
    addressLine2: "",
    state: "",
    pincode: "",
    landArea: "",
    cropsProduced: mode === 'edit' && selectedRowData ? selectedRowData.cropsProduced : [],
    block: "",
    district: "",
    bankAccountHolderName: "",
    ifscCode: "",
    bankAccountNumber: "",
    numberOfShares: 0,
    shareHolder: "",
    city: "",
    postOffice: "",
    landType: "",
    farmerType: "",
    dob: new Date(),
    dateOfJoin: new Date(),
    category: "",
    fatherName: "",
  });

  useEffect(() => {
    if (selectedRowData) {
      const formDataWithDefaults = { ...selectedRowData };
      setFormData(formDataWithDefaults);
    }
  }, [selectedRowData]);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCropChange = (selectedOptions: any) => {
    const crops = selectedOptions.map((option: { value: any }) => option.value);
    setFormData((prevData) => ({
      ...prevData,
      cropsProduced: crops,
    }));
  };

  const validateForm = () => {
    return (
      formData.firstName !== "" &&
      formData.addressLine1 !== "" 
    );
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData)

      try {
        const accessToken = localStorage.getItem("accessToken");
        const id = mode==='edit'?selectedRowData.farmerId:''
        const url = mode === 'add' ? 'http://localhost:5050/api/farmer/add' : `http://localhost:5050/api/farmer/update/${id}`; // Adjust the URL for adding and editing
        const method = mode === 'add' ? 'POST' : 'PUT';
        const response = await fetch(url, {
          method: method,
          headers: {
            "Content-Type": "application/json",
            "x-access-token": accessToken ? accessToken : "",
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error("Failed to submit form");
        }
        window.location.reload()
        console.log(formData)
        window.location.reload()
        navigate("/farmers");
        console.log("Form submitted successfully");
      } catch (error: any) {
        console.error("Error submitting form:", error.message);
      }
    } else {
      alert("Please fill in all required fields.");
    }
  };

  const handleKeyPress = (e: {
    key: string;
    preventDefault: () => void;
    target: { form: any };
  }) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const form = e.target.form;
      const index = Array.prototype.indexOf.call(form, e.target);
      const nextElement = form.elements[index + 1];
      if (nextElement && nextElement.name !== "cropsProduced") {
        nextElement.focus();
      }
    }
  };

  const handleNextButtonClick = () => {
    switch (activeComponent) {
      case "personal":
        setActiveComponent("address");
        break;
      case "address":
        setActiveComponent("landInfo");
        break;
      case "landInfo":
        setActiveComponent("shareholder");
        break;
    }
  }

  const handleButtonClick = (component: SetStateAction<string>) => {
    setActiveComponent(component);
  };

  return (
    <div className=" sm:max-w-[1200px] w-11/12 my-12">
      <div className="flex justify-center mb-12 w-full gap-1">
        <Button className="rounded-none" onClick={() => handleButtonClick("personal")}>Personal</Button>
        <Button className="rounded-none" onClick={() => handleButtonClick("address")}>Address</Button>
        <Button className="rounded-none" onClick={() => handleButtonClick("landInfo")}>Land Info</Button>
        <Button className="rounded-none" onClick={() => handleButtonClick("shareholder")}>Shareholder</Button>
      </div>
      <form onSubmit={handleSubmit} className="grid gap-5 p-4">
        {activeComponent === "personal" && (
          <>
          <FarmerPersonal
            formData={formData}
            handleChange={handleChange}
            handleKeyPress={handleKeyPress}
          />
          <Button type="button" onClick={handleNextButtonClick} className="mt-3 w-full sm:w-auto justify-self-center">
          Next
        </Button>
          </>
        )}
        {activeComponent === "address" && (
          <>
          <FarmerAddress
            formData={formData}
            handleChange={handleChange}
            handleKeyPress={handleKeyPress}
          />
          <Button type="button" onClick={handleNextButtonClick} className="mt-3 w-full sm:w-auto justify-self-center">
          Next
        </Button>
        </>
        )}
        {activeComponent === "landInfo" && (
          <>
          <FarmerLandInfo
            formData={formData}
            handleChange={handleChange}
            handleKeyPress={handleKeyPress}
            handleCropChange={handleCropChange}
          />
          <Button type="button" onClick={handleNextButtonClick} className="mt-3 w-full sm:w-auto justify-self-center">
          Next
        </Button>
        </>
        )}
        {activeComponent === "shareholder" && (
          <>
            <FarmerShareholder
              formData={formData}
              handleChange={handleChange}
              handleKeyPress={handleKeyPress}
            />
            <Button type="submit" className="mt-3 w-full sm:w-auto justify-self-center">
              Submit
            </Button>
          </>
        )}
      </form>
    </div>
  );
};

export default FarmerFormsCombined;
