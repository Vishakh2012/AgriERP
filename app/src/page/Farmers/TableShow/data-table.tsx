import { useEffect } from "react"
import * as React from "react"
import { Link } from "react-router-dom"
import {
    ColumnDef,
    flexRender,
    SortingState,
    getCoreRowModel,
    getSortedRowModel,
    useReactTable,
    getPaginationRowModel,
    getFilteredRowModel,
    VisibilityState
} from "@tanstack/react-table"
import { EditDialogBox } from "@/components/EditPopUp/EditPopup"
import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
//import StaffFormsCombined from "@/page/Staff_Details/AddNewStaff/StaffFormsCombined"

import { Input } from "@/components/ui/input"
interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
    buttonRoute: string
    buttonText: string
}
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { AlertDialogBox } from "@/components/DeletionAlert/DeletionAlert"
import FarmerFormsCombined from "../AddNewFarmer/FormsCombined"


export function DataTable<TData, TValue>({
    columns,
    data,
    buttonRoute,
    buttonText,
    onDelete
}: DataTableProps<TData, TValue>& { onDelete: (rowData: TData) => void }) {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [Filters, setFilters] = React.useState("")
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({ 
           middleName: false,
           postOffice: false,
           block:false,
            city:false,
            pincode:false,
            email:false,
            aadhaar:false,
           ifscCode:false,
           bankAccountHolderName:false,
           numberOfShares:false,
           shareAmount:false,
           landType:false,
           farmerType:false,
           category:false,
           cropsProduced:false,
    })
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        initialState: {
            pagination: {
                pageSize: 5,
            },
        },
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        state: {
            sorting,
            globalFilter: Filters,
            columnVisibility
        },
        onGlobalFilterChange: setFilters
    })
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') {
                table.previousPage();
            } else if (e.key === 'ArrowRight') {
                table.nextPage();
            }
            if (['ArrowLeft', 'ArrowRight'].includes(e.key)) {
                e.preventDefault();
            }
        };

        // Subscribe to keydown event
        window.addEventListener('keydown', handleKeyDown);

        // Cleanup function to unsubscribe from event
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [table]);

    // Only re-subscribe when currentPage or pageCount changes



    return (
        <div>
            <div className="flex items-center py-8">

                <div className="w-full max-w-[1900px] px-4  py-4 flex flex-col md:flex-row bg-white md:items-center shadow-sm md:h-[100px] justify-end sm:justify-between"> {/* Center the content */}
                    <div className='flex flex-col md:flex-row gap-x-2'>
                        <Input
                            placeholder="Search"
                            value={Filters}
                            onChange={(event) =>
                                setFilters(event.target.value)
                            }
                            className="max-w-sm"
                        />
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" className="mr-auto ml-2">
                                    Columns
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                {table
                                    .getAllColumns()
                                    .filter(
                                        (column) => column.getCanHide()
                                    )
                                    .map((column) => {
                                        return (
                                            <DropdownMenuCheckboxItem
                                                key={column.id}
                                                className="capitalize"
                                                checked={column.getIsVisible()}
                                                onCheckedChange={(value) =>
                                                    column.toggleVisibility(!!value)
                                                }
                                            >
                                                {column.id}
                                            </DropdownMenuCheckboxItem>
                                        )
                                    })}
                            </DropdownMenuContent>
                        </DropdownMenu>

                    </div>
                    <Link to={buttonRoute}>
                    <Button className='flex px-3 py-1 h-[40px] rounded-md border bg-blue-500 text-white hover:bg-blue-500 hover:text-white ml-auto'>{buttonText}</Button>
                    </Link>
                </div>
                </div>
                <div className="rounded-md border bg-white">
                    <Table>
                        <TableHeader>
                            {table.getHeaderGroups().map((headerGroup) => (
                                <TableRow key={headerGroup.id}>
                                    <TableHead>
                                        Action
                                    </TableHead>
                                    {headerGroup.headers.map((header) => {
                                        return (
                                            <TableHead key={header.id}>
                                                {header.isPlaceholder
                                                    ? null
                                                    : flexRender(
                                                        header.column.columnDef.header,
                                                        header.getContext()
                                                    )}
                                            </TableHead>
                                        )
                                    })}
                                </TableRow>
                            ))}
                        </TableHeader>
                        <TableBody>
                            {table.getRowModel().rows?.length ? (
                                table.getRowModel().rows.map((row) => {
                                    return (
                                        <TableRow
                                            key={row.id}
                                            data-state={row.getIsSelected() && "selected"}
                                        >
                                            <TableCell className="flex flex-row">

                                                <EditDialogBox formComponent={<FarmerFormsCombined mode="edit" />} selectedRowData={row.original} />
                                                <AlertDialogBox onDelete={() => onDelete(row.original)}/>
                                            </TableCell>
                                            {row.getVisibleCells().map((cell) => {

                                                return (
                                                    <TableCell key={cell.id}>
                                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                                    </TableCell>
                                                )
                                            })}
                                        </TableRow>)
                                })
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={columns.length} className="h-24 text-center">
                                        No results.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
                <div className="flex items-center justify-end space-x-2 py-4">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        Previous
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        Next
                    </Button>
                </div>
            </div>
            )
}
