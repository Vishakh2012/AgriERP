import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
export type Product = {
    category: string
    productName: string
    hsn: string
    itemCode: string
    price: string
    SGST: number
    CGST: number
    IGST: number
    currentStock: string

}

export const columns: ColumnDef<Product>[] = [
    {
        accessorKey: "itemCode",
        header: "Item Code"
    },
    {
        accessorKey: "productName",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Name
                    <ArrowUpDown className="ml-2 h-4 w-4 print:hidden" />
                </Button>
            )
        },
    },
    {
        accessorKey: "hsn",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    HSN code
                    <ArrowUpDown className="ml-2 h-4 w-4 print:hidden" />
                </Button>
            )
        },
    },
    {
        accessorKey: "category",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Category
                    <ArrowUpDown className="ml-2 h-4 w-4 print:hidden" />
                </Button>
            )
        },
    },
    {
        accessorKey: "price",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Price
                    <ArrowUpDown className="ml-2 h-4 w-4 print:gidden" />
                </Button>
            )
        },
    },


    {
        accessorKey: "SGST",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    SGST
                    <ArrowUpDown className="ml-2 h-4 w-4 print:hidden" />
                </Button>
            )
        },
    },

    {
        accessorKey: "CGST",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    CGST
                    <ArrowUpDown className="ml-2 h-4 w-4 print:hidden" />
                </Button>
            )
        },
    },

    {
        accessorKey: "IGST",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    IGST
                    <ArrowUpDown className="ml-2 h-4 w-4 print:hidden" />
                </Button>
            )
        },
    },
    {
        accessorKey: "currentStock",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Current Stock
                    <ArrowUpDown className="ml-2 h-4 w-4 print:hidden" />
                </Button>
            )
        },
    },

]



