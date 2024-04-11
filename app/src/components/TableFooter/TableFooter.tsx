import React from 'react';
import TotalDetails from './TotalDetails';
import GenerateBill from './generateBill';

interface TableFooterProps {
  totalPrice: number;
  totalDiscount: number;
  grandTotal: number;
}

const TableFooter: React.FC<TableFooterProps> = ({ totalPrice, totalDiscount, grandTotal }) => {
  return (
    <>
      <TotalDetails totalPrice={totalPrice} totalDiscount={totalDiscount} grandTotal={grandTotal} />
      <GenerateBill />
    </>
  );
};

export default TableFooter;
