import React from "react";

const GstTypeDropdown = ({ gstType, handleGstTypeChange }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-end">
      <label htmlFor="gstType" className="mb-2 md:mr-2">GST Type:</label>
      <select id="gstType" value={gstType} onChange={handleGstTypeChange} className="border px-2 py-1 rounded focus:outline-none md:ml-2">
        <option value="No gst">No GST</option>
        <option value="Gst">GST</option>
        <option value="Igst">IGST</option>
      </select>
    </div>
  );
};

export default GstTypeDropdown;