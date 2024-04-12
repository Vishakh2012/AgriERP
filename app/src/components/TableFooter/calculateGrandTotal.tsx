interface Row {
    quantity: string;
    rate: string;
    discount: string;
    finalAmount?: number;
  }
  
  const calculateGrandTotal = (
    rows: Row[],
    setGrandTotal: React.Dispatch<React.SetStateAction<number>>,
    setTotalPrice: React.Dispatch<React.SetStateAction<number>>,
    setTotalDiscount: React.Dispatch<React.SetStateAction<number>>
  ) => {
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
        row.finalAmount = finalAmount;
      }
    });
    setGrandTotal(total);
    setTotalPrice(totalRate); // Total price is the same as grand total without discount
    setTotalDiscount(totalDiscountAmount);
  };
  
  export default calculateGrandTotal;
  