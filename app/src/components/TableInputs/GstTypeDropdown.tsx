import React, { useState, ChangeEvent } from 'react';

const GstTypeDropdown: React.FC = () => { // Omitting props since there are none
  const [gstType, setGstType] = useState<string>("No gst");

  const handleGstTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setGstType(e.target.value);
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-end">
      <label htmlFor="gstType" className="mb-2 md:mr-2">GST Type:</label>
      <select 
        id="gstType" 
        value={gstType} 
        onChange={handleGstTypeChange} 
        className="border px-2 py-1 rounded focus:outline-none md:ml-2"
      >
        <option value="No gst">No GST</option>
        <option value="Gst">GST</option>
        <option value="Igst">IGST</option>
      </select>
    </div>
  );
}

export default GstTypeDropdown;
