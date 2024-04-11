import React from "react";

const TotalDetails = ({ totalPrice, totalDiscount, grandTotal }) => {
  return (
    <>
    <div className="p-4 bg-white border-t flex flex-col md:flex-row md:justify-end">
          <div className="md:flex md:items-center">
            <label htmlFor="totalPrice" className="mr-2">Total Price:</label>
            <input type="text" id="totalPrice" value={totalPrice} disabled className="border px-2 py-1 rounded focus:outline-none" />
          </div>
          <div className="mt-4 md:mt-0 md:ml-4">
            <label htmlFor="totalDiscount" className="mr-2">Total Discount:</label>
            <input type="text" id="totalDiscount" value={totalDiscount} disabled className="border px-2 py-1 rounded focus:outline-none" />
          </div>
        </div>
        <div className="p-4 bg-white border-t flex justify-end ">
        <div>
            <label htmlFor="totalPrice">Grand Total</label>
            <input type="text" id="totalPrice" value={grandTotal} disabled className="border px-2 py-1 rounded focus:outline-none ml-2" />
          </div>
        </div>
        </>
  );
};

export default TotalDetails;
