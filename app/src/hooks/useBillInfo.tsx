import { ChangeEvent, useState, useEffect } from "react";
const useBillInfo = () => {
    const [billNo, setBillNo] = useState<number>(100)
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
        setBillNo(prevBillNo => prevBillNo + 1);
    }, []);
    return { billNo, customerName, mobileNumber, handleCustomerName, handleMobileNumber }
}
export default useBillInfo
