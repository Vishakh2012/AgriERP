import { ChangeEvent, useState, useEffect } from "react";
const useBillInfo = () => {
    const [billNo, setBillNo] = useState("")
    const [customerName, setCustomerName] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");

    const handleMobileNumber = (e: ChangeEvent<HTMLInputElement>) => {
        setMobileNumber(e.target.value.trim())
    }

    const handleCustomerName = (e: ChangeEvent<HTMLInputElement>) => {
        setCustomerName(e.target.value.trim())
    }


    useEffect(() => {
        // Increment the bill number when a new bill is generated
        const randomPart = Math.random().toString(36).slice(2, 11);

        const timestampPart = new Date().getTime().toString(36);
        const uniqueId = randomPart + timestampPart;
        setBillNo(uniqueId);
    }, []);
    return { billNo, customerName, mobileNumber, handleCustomerName, handleMobileNumber, setBillNo }
}
export default useBillInfo
