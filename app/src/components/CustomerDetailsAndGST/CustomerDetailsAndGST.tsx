import useBillInfo from "@/hooks/useBillInfo"
import { ChangeEvent } from "react"
interface propsForHeader{
    gstType: string,
    handleImport: (e: ChangeEvent<HTMLInputElement>) => void,
    handleGSTChange: (e: ChangeEvent<HTMLSelectElement> ) => void
}
const CustomerDetailsAndGST: React.FC<propsForHeader> = (props) => {

    const { billNo, customerName, mobileNumber, handleCustomerName, handleMobileNumber } = useBillInfo()
    return(

            <div className="flex flex-col h-full">
                <div className="p-4">
                    <div className="flex flex-col md:flex-row md:justify-between">
                        <div className="flex flex-col md:flex-row">
                            <div className="flex flex-col mb-4 md:mb-0">
                                <label htmlFor="customerName" className="mb-2">Customer Name:</label>
                                <input
                                    type="text"
                                    id="customerName"
                                    value={customerName}
                                    onChange={handleCustomerName}
                                    className=" border print:border-none px-2 py-1 rounded focus:outline-none"
                                />
                            </div>
                            <div className="flex flex-col mb-4 md:mb-0 md:ml-4">
                                <label htmlFor="mobileNumber" className="mb-2">Mobile Number:</label>
                                <input
                                    type="text"
                                    id="mobileNumber"
                                    value={mobileNumber}
                                    onChange={handleMobileNumber}
                                    className=" border print:border-none px-2 py-1 rounded focus:outline-none"
                                />
                            </div>
                            <div className="flex flex-col mb-4 md:mb-0 md:ml-4">
                                <label htmlFor="billNo" className="mb-2">Bill No:</label>
                                <input type="text" id="billNo" value={billNo} disabled className=" border print:border-none px-2 py-1 rounded focus:outline-none" />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-end">
                            <label htmlFor="gstType" className="mb-2 md:mr-2">GST Type:</label>
                            <select id="gstType" value={props.gstType} onChange={props.handleGSTChange} className=" border print:border-none px-2 py-1 rounded focus:outline-none md:ml-2">
                                <option value="No gst">No GST</option>
                                <option value="Gst">GST</option>
                                <option value="Igst">IGST</option>
                            </select>
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center md:ml-4">
                            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => document.getElementById('fileInput').click()}>Import Excel</button>
                            <input id="fileInput" type="file" style={{ display: 'none' }} onChange={props.handleImport} />
                        </div>
                    </div>
                </div>
            </div>
    )}

    export default CustomerDetailsAndGST
