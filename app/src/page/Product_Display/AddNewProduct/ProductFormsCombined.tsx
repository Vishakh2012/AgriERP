import { Button } from "@/components/ui/button";
import { SetStateAction, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BasicProductDetails from "./ProductFormComponents/BasicProductDetails";
import TaxProductDetails from "./ProductFormComponents/TaxProductDetails";

interface ProductFormProps {
  mode: 'add' | 'edit';
  selectedRowData?: any; // Data of the staff member to edit
}

const ProductFormsCombined: React.FC<ProductFormProps> = ({ mode, selectedRowData }) => {
    const navigate = useNavigate();
    const [activeComponent, setActiveComponent] = useState("basic");
    const [formData, setFormData] = useState({
      name: "",
      price: '',
      CGST: '',
      SGST: '',
      IGST: '',
      category: "",
      HSN: '',
      unit: "",
      currentStock: '',
      itemCode:''
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

  
    const handleSubmit = async (e: { preventDefault: () => void }) => {
      e.preventDefault();
        try {
          console.log(formData);
          const accessToken = localStorage.getItem("accessToken");
          const item_code = mode==='edit'? selectedRowData.itemCode:''
          const url = mode === 'add' ? 'http://localhost:5050/api/products/add' : `http://localhost:5050/api/products/update/${item_code}`; // Adjust the URL for adding and editing
          const method = mode === 'add' ? 'POST' : 'PUT';
          const response = await fetch(url, {
            method: method,
            headers: {
              "Content-Type": "application/json",
              "x-access-token": accessToken ? accessToken : "",
            },
            body: JSON.stringify(formData),
          });
          console.log(response)
          if (!response.ok) {
            throw new Error("Failed to submit form");
          }
          navigate("/products");
          console.log("Form submitted successfully");
        } catch (error: any) {
          console.error("Error submitting form:", error.message);
        }
      
      }
    
  
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
        case "basic":
          setActiveComponent("tax");
          break;
      }
    }
  
    const handleButtonClick = (component: SetStateAction<string>) => {
      setActiveComponent(component);
    };
  
    return (
      <div className=" sm:max-w-[1200px] w-11/12 my-12">
        <div className="flex justify-center mb-12 w-full gap-1">
          <Button className="rounded-none" onClick={() => handleButtonClick("basic")}>Basic</Button>
          <Button className="rounded-none" onClick={() => handleButtonClick("tax")}>Tax</Button>
        </div>
        <form onSubmit={handleSubmit} className="grid gap-5 p-4">
          {activeComponent === "basic" && (
            <>
            <BasicProductDetails
              formData={formData}
              handleChange={handleChange}
              handleKeyPress={handleKeyPress}
            />
            <Button type="button" onClick={handleNextButtonClick} className="mt-3 w-full sm:w-auto justify-self-center">
            Next
          </Button>
            </>
          )}
          {activeComponent === "tax" && (
            <>
            <TaxProductDetails
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
  
  export default ProductFormsCombined;