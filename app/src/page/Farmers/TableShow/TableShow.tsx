import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import Pagination from "@/components/Pagination/Pagination";
import { IoMdClose } from "react-icons/io";
import { ReactElement, useEffect, useState } from "react";
import { AlertDialogDemo } from "@/components/DeletionAlert/DeletionAlert";
import { EditDialogBox } from "@/components/EditPopUp/EditPopup";

interface Data {
    [key: string]: string;
}

interface TableContents {
    paginatedData: Data[];
    pageCount: number;
    currentPage: number;
    handlePageChange: (e: number) => void;
    Details: Data[];
    PAGE_SIZE: number
    edit?:boolean
    delete?:boolean
    onDelete?:(index: number) => void
    resourceId?:string
    formComponent?:ReactElement
}

const TableShow: React.FC<TableContents> = (props) => {
    const [allHeaders, setAllHeaders] = useState<string[]>([]);
    const [visibleHeaders, setVisibleHeaders] = useState<string[]>([]);
    const [hiddenHeaders, setHiddenHeaders] = useState<string[]>([]);

    useEffect(() => {
        // Extract all headers from props.Details
        if (props.Details.length > 0) {
            const headers = Object.keys(props.Details[0]);
            setAllHeaders(headers);
            setVisibleHeaders(headers);
        }
    }, [props.Details]);

    const removeRow = (headerToRemove: string) => {
        setVisibleHeaders(visibleHeaders.filter((header) => header !== headerToRemove));
        setHiddenHeaders([...hiddenHeaders, headerToRemove]);
    };

    const addField = (selectedField: string) => {
        if (selectedField === "restore") {
            setVisibleHeaders(allHeaders);
            setHiddenHeaders([]);
        } else {
            setVisibleHeaders([...visibleHeaders, selectedField]);
            setHiddenHeaders(hiddenHeaders.filter((header) => header !== selectedField));
        }
    };


    const handleDelete = async (index: number) => {
        // Remove the row from the paginatedData
        const newData = props.paginatedData.filter((_, i) => i !== index);
        props.onDelete(index); // Call onDelete to handle client-side state update
    
        try {
            const response = await fetch(`/api/deleteRow/${props.resourceId}/${index}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                    
                },
            });
    
            if (!response.ok) {
                // Handle non-successful responses
                throw new Error(`Error deleting row: ${response.status} - ${response.statusText}`);
            }
    
            console.log('Row deleted successfully from the database.');
        } catch (error) {
            console.error('Error deleting row from the database:', error);
        }
    };

    

    return (
        <div className="mt-4 mb-12 w-5/6 sm:w-11/12 sm:max-w-[1400px] flex flex-col">
        <div className="bg-white">
            <Table className="border-collapse w-full">
                    <TableHeader className="text-center sticky top-0 bg-white z-10">
                        <TableRow>
                            <TableHead>
                                <select
                                    id="sortHeaderSelect"
                                    value="default"
                                    onChange={(e) => addField(e.target.value)}
                                    className="mr-2 mb-2 sm:mb-0 w-[100px] sm:w-[100px] px-2 py-2 rounded-md  focus:outline-none bg-blue-500 text-white"
                                >
                                    <option value="default" disabled>Add Field</option>
                                    {hiddenHeaders.map((column) => (
                                        <option key={column} value={column}>{column}</option>
                                    ))}
                                    <option value="restore">Restore</option>
                                </select>
                            </TableHead>
                            <TableHead className="font-medium">Sl No</TableHead>
                            {visibleHeaders.map((key) => (
                                <TableHead key={key} className="font-medium">
                                    <span className="flex flex-row justify-center items-center">
                                        {key}
                                        <div className="" onClick={() => { removeRow(key) }}>
                                            <IoMdClose />
                                        </div>
                                    </span>
                                </TableHead>
                            ))}
                            
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {props.paginatedData.map((staff: Data, index: number) => (
                            <TableRow key={(props.currentPage - 1)*props.PAGE_SIZE + index}>
                                <TableCell className="flex justify-center">
                                        {props.edit && props.formComponent && (
                                            <EditDialogBox formComponent={props.formComponent} selectedRowData={staff}/>
                                        )}
                                        {props.delete && (
                    <AlertDialogDemo onDelete={() => handleDelete((props.currentPage - 1) * props.PAGE_SIZE + index)} />
                  )}
                                    </TableCell>
                                {/* Render the Serial Number cell only in the table body */}
                                <TableCell className="">{(props.currentPage-1)*props.PAGE_SIZE + index + 1}</TableCell>
                                {visibleHeaders.map((key, i) => (
                                    <TableCell key={i} className="">
                                        {staff[key]}
                                    </TableCell>
                                ))}
                                
                            </TableRow>
                        ))}
                    </TableBody>
            </Table>
            </div>
            <Pagination
                pageCount={props.pageCount}
                currentPage={props.currentPage}
                handlePageChange={props.handlePageChange}
            />
            
        </div>
    );
};

export default TableShow;

