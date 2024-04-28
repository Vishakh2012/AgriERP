import { ChangeEvent } from "react"
interface propsForHeader{
    gstType: string,
    handleImport: (e: ChangeEvent<HTMLInputElement>) => void,
    handleGSTChange: (e: ChangeEvent<HTMLSelectElement> ) => void
    handleCustomerDetailsEnterKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void
    billNo: string
    customerName: string
    mobileNumber: string
    handleCustomerName:(e: ChangeEvent<HTMLInputElement>) => void
    handleMobileNumber: (e: ChangeEvent<HTMLInputElement>) => void
}
const CustomerDetailsAndGST: React.FC<propsForHeader> = (props) => {
    // const handleCustomerNameKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    //     if (e.key === " ") {
    //         e.preventDefault();
    //         const input = e.target as HTMLInputElement;
    //         const start = input.selectionStart;
    //         const end = input.selectionEnd;
    //         const value = input.value;
    //         // Insert space at cursor position
    //         input.value = value.substring(0, start) + " " + value.substring(end);
    //         // Move cursor position after the inserted space
    //         input.setSelectionRange(start + 1, start + 1);
    //         // Trigger handleCustomerName function to update state
    //         props.handleCustomerName(e as ChangeEvent<HTMLInputElement>);
    //     } else {
    //         props.handleCustomerDetailsEnterKeyPress(e);
    //     }
    // };

    return(

            <div className="flex flex-col h-full">
                <div className="p-4">
                    <div className="flex flex-col md:flex-row print:flex-col md:justify-between">
                        <div className="flex flex-col md:flex-row print:flex-col">
                            <div className="flex flex-col mb-4 md:mb-0 print:flex-row">
                                <label htmlFor="customerName" className="mb-2">Customer Name:</label>
                                <input
                                    type="text"
                                    id="customerName"
                                    name="customerName"
                                    value={ props.customerName }
                                    onChange={ props.handleCustomerName }
                                    onKeyDown={handleCustomerNameKeyDown} // Modified this line
                                    autoFocus
                                    className=" border print:border-none px-2 py-1 rounded focus:outline-none"
                                />
                            </div>
                            <div className="flex flex-col mb-4 md:mb-0 md:ml-4 print:ml-0 print:flex-row">
                                <label htmlFor="mobileNumber" className="mb-2">Mobile Number:</label>
                                <input
                                    type="text"
                                    id="mobileNumber"
                                    name="mobileNumber"
                                    value={ props.mobileNumber }
                                    onChange={ props.handleMobileNumber }
                                    onKeyDown={ props.handleCustomerDetailsEnterKeyPress}
                                    className=" border print:border-none px-2 py-1 rounded focus:outline-none"
                                />
                            </div>
                            <div className="flex flex-col mb-4 md:mb-0 md:ml-4 print:ml-0 print:flex-row">
                                <label htmlFor="billNo" className="mb-2">Bill No:</label>
                                <input type="text" id="billNo" value={props.billNo} disabled className=" border print:border-none px-2 py-1 rounded focus:outline-none" />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-end print:mr-auto">
                            <label htmlFor="gstType" className="mb-2 md:mr-2 print:mr-auto ">GST Type:</label>
                            <select id="gstType" value={props.gstType} onChange={props.handleGSTChange} className=" border print:border-none print:bg-white px-2 py-1 rounded focus:outline-none md:ml-2">
                                <option value="No GST">No GST</option>
                                <option value="GST">GST</option>
                                <option value="IGST">IGST</option>
                            </select>
                        </div>
                        <div className="flex flex-col mt-4 print:mt-0 md:flex-row md:items-center md:ml-4 print:hidden">
                            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 print:hidden" onClick={() => document.getElementById('fileInput').click()}>Import Excel</button>
                            <input id="fileInput" type="file" style={{ display: 'none' }} onChange={props.handleImport} />
                        </div>
                    </div>
                </div>
            </div>
    )}

    export default CustomerDetailsAndGST
