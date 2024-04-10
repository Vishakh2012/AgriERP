import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Pagination from "../Pagination/Pagination"

interface Data {
    [key: string]: string;
}

interface TableContents {
    paginatedData: Data[],
    pageCount: number,
    currentPage: number,
    handlePageChange: (e: number) => void
    Details: Data[]
    edit?: boolean
    delete?: boolean

}
const TableShow: React.FC<TableContents> = (props) => {
    return (
        <div className="mt-4 mb-12 w-5/6 sm:w-9/10 flex flex-col">
            <Table className="border-collapse w-full">
                <div className="bg-white">
                    <TableHeader className="text-center sticky top-0 bg-white z-10">
                        <TableRow>
                            <TableHead className="font-medium">Serial Number</TableHead>
                            {Object.keys(props.Details[0]).map((key) => (
                                <TableHead key={key} className="font-medium">{key}</TableHead>
                            ))}
                            {(props.edit || props.delete) && <TableHead className="font-medium">Actions</TableHead>}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {(props.paginatedData).map((staff: Data, index: number) => (
                            <TableRow key={index}>
                                {/* Render the Serial Number cell only in the table body */}
                                <TableCell className="">{index + 1}</TableCell>
                                {Object.values(staff).map((value, i) => (
                                    <TableCell key={i} className="">{value}</TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </div>
            </Table>
            <Pagination pageCount={props.pageCount} currentPage={props.currentPage} handlePageChange={props.handlePageChange} />
        </div>
    )
}
export default TableShow
