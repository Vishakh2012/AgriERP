import { useState,useEffect } from "react"
interface rowInfo {
    [key:string] : string
}
 const usePriceCalc = (rows: rowInfo[]) => {
    
    const [grandTotal, setGrandTotal] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalDiscount, setTotalDiscount] = useState(0);

    const calculateGrandTotal = (rows: rowInfo[]) => {
        let total = 0;
        let totalDiscountAmount = 0;
        let totalRate = 0;
        rows.forEach((row) => {
            const quantity = parseFloat(row.quantity);
            const rate = parseFloat(row.rate);
            const discount = parseFloat(row.discount);
            if (!isNaN(quantity) && !isNaN(rate)) {
                const amountBeforeDiscount = quantity * rate;
                const discountAmount = (amountBeforeDiscount * discount) / 100;
                const finalAmount = amountBeforeDiscount - discountAmount;
                total += finalAmount;
                totalRate += amountBeforeDiscount;
                totalDiscountAmount += discountAmount;
                row.finalAmount = finalAmount.toString();
            }
        });
        setGrandTotal(total);
        setTotalPrice(totalRate); // Total price is the same as grand total without discount
        setTotalDiscount(totalDiscountAmount);
    };

    useEffect(() => {
        calculateGrandTotal(rows);
    }, [rows]);
    return {grandTotal, totalPrice, totalDiscount}
}
 
 export default usePriceCalc
