import { Button } from "@/components/ui/button";
import { SetStateAction, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FpoBasicDetails from "./FPO Form components/FpoBasicDetails";
import FpoAddress from "./FPO Form components/FpoAddress";
import FpoAccount from "./FPO Form components/FpoAccount";

const FpoFormsCombined = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Fetch data from backend API
      const accessToken = localStorage.getItem("accessToken");
      const headers: Record<string, string> = {};
      if (accessToken) {
        headers["x-access-token"] = accessToken;
      }
      const response = await fetch("http://localhost:5050/api/fpo/get", {
        headers,
      });
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();

      // Replace null values with empty strings
      const formDataWithDefaults: typeof formData = {
        name: "",
        email: "",
        phone: "",
        addressLine1: "",
        addressLine2: "",
        state: "",
        pinCode: "",
        district: "",
        bankBranchName: "",
        IFSC: "",
        bankAccountNumber: "",
        city: "",
        postOffice: "",
        block: "",
        regYear: "",
        CEO: "",
        fpoRegNumber: "",
      };
      for (const key in data) {
        formDataWithDefaults[key as keyof typeof formData] = data[key] || "";
      }

      // Set the initial state of formData with fetched data
      setFormData(formDataWithDefaults);
    } catch (error: any) {
      console.error("Error fetching data:", error.message);
    }
  };
  const [activeComponent, setActiveComponent] = useState("basic"); //For the buttons above
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fpoRegNumber: "",
    name: "",
    email: "",
    phone: "",
    CEO: "",
    addressLine1: "",
    addressLine2: "",
    bankAccountNumber: "",
    block: "",
    postOffice: "",
    pinCode: "",
    bankBranchName: "",
    IFSC: "",
    city: "",
    regYear: "",
    district: "",
    state: "",
  });

  //For setting the values
  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //The required fields
  const validateForm = () => {
    return (
      formData.name !== "" &&
      formData.email !== "" &&
      formData.phone !== "" &&
      formData.addressLine1 !== "" &&
      formData.district !== "" &&
      formData.bankAccountNumber !== "" &&
      formData.IFSC !== "" &&
      formData.state !== "" &&
      formData.pinCode !== "" &&
      formData.regYear !== ""
    );
  };

  //Function for sending data to backend
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        console.log(formData);
        const accessToken = localStorage.getItem("accessToken");
        console.log(accessToken);
        const response = await fetch("http://localhost:5050/api/fpo/update", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-access-token": accessToken ? accessToken : "",
          },
          body: JSON.stringify(formData),
        });
        console.log(response);
        if (!response.ok) {
          throw new Error("Failed to submit form");
        }
        navigate("/staff/forms/success");
        console.log("Form submitted successfully");
      } catch (error: any) {
        console.error("Error submitting form:", error.message);
      }
    } else {
      alert("Please fill in all required fields.");
    }
  };

  //For toggling between fields using Enter
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
  //For toggling between differnet sections of forms(For buttons above)
  const handleNextButtonClick = () => {
    switch (activeComponent) {
      case "basic":
        setActiveComponent("address");
        break;
      case "address":
        setActiveComponent("account");
        break;
    }
  };
  //Activating the buttons above
  const handleButtonClick = (component: SetStateAction<string>) => {
    setActiveComponent(component);
  };

  return (
    <div className="m-6">
      <div className="flex justify-center gap-1">
        <Button
          className="rounded-none"
          onClick={() => handleButtonClick("basic")}
        >
          Basic
        </Button>
        <Button
          className="rounded-none"
          onClick={() => handleButtonClick("address")}
        >
          Address
        </Button>
        <Button
          className="rounded-none"
          onClick={() => handleButtonClick("account")}
        >
          Account
        </Button>
      </div>
      <form onSubmit={handleSubmit} className="grid gap-5 p-4">
        {activeComponent === "basic" && (
          <>
            <FpoBasicDetails
              formData={formData}
              handleChange={handleChange}
              handleKeyPress={handleKeyPress}
            />
            <Button
              type="button"
              onClick={handleNextButtonClick}
              className="mt-3 w-full sm:w-auto justify-self-center"
            >
              Next
            </Button>
          </>
        )}
        {activeComponent === "address" && (
          <>
            <FpoAddress
              formData={formData}
              handleChange={handleChange}
              handleKeyPress={handleKeyPress}
            />
            <Button
              type="button"
              onClick={handleNextButtonClick}
              className="mt-3 w-full sm:w-auto justify-self-center"
            >
              Next
            </Button>
          </>
        )}
        {activeComponent === "account" && (
          <>
            <FpoAccount
              formData={formData}
              handleChange={handleChange}
              handleKeyPress={handleKeyPress}
            />
            <Button
              className="mt-3 w-full sm:w-auto justify-self-center"
              type="submit"
            >
              Submit
            </Button>
          </>
        )}
      </form>
    </div>
  );
};

export default FpoFormsCombined;
