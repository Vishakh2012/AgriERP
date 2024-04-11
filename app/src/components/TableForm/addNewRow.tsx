import calculateGrandTotal from "../TableFooter/calculateGrandTotal";
import { useEffect,useState } from "react";

interface Row {
    itemCode: string;
    itemName: string;
    HSN: string;
    quantity: string;
    SGST: string;
    CGST: string;
    IGST: string;
    rate: string;
    discount: string;
    finalAmount: number;
  }
  
  interface StaffDetailsItem {
    itemCode: string;
    itemName: string;
    HSN: string;
    quantity: string;
    SGST: string;
    CGST: string;
    IGST: string;
    rate: string;
    discount: string;
    finalAmount: string;
    // Define other properties if needed
  }

  const initialRowState = (staffDetails: StaffDetailsItem[]): Row => {
    // Initialize each key with an empty string
    const initialState: Row = {
      itemCode: '',
      itemName: '',
      HSN: '',
      quantity: '',
      SGST: '',
      CGST: '',
      IGST: '',
      rate: '',
      discount: '',
      finalAmount:0,
    };
  
    return initialState;
  };
  const [grandTotal, setGrandTotal] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);
  const [rows, setRows] = useState<Row[]>([]);
  useEffect(() => {
    calculateGrandTotal(rows, setGrandTotal, setTotalPrice, setTotalDiscount);
  }, [rows]);

  const addNewRow = (
    rows: Row[],
    currentRowIndex: React.MutableRefObject<number>,
    setRows: React.Dispatch<React.SetStateAction<Row[]>>,
    staffDetails: StaffDetailsItem[]
  ): void => {
    if (currentRowIndex.current !== null && currentRowIndex.current < rows.length) {
      const oldRowIndex = currentRowIndex.current;
      const oldRow = rows[oldRowIndex];
      console.log("Old row:", oldRow);
      // salesBillData.push(oldRow as SalesBillDataItem); // Remove this line if not needed
    }
    const newRow = initialRowState(staffDetails); // Initialize new row with staff details
    setRows([...rows, newRow]);
    setCurrentRowIndex(rows.length, currentRowIndex);
  };
  
  const setCurrentRowIndex = (index: number, currentRowIndex: React.MutableRefObject<number>): void => {
    currentRowIndex.current = index;
  };
  
  export default addNewRow;
  