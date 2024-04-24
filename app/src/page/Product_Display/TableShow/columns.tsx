import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
export type Product = {
    category: string
    name: string
    hsn: string
    itemCode: string
    price: string
    tax: string
    currentStock: string

}

export const columns: ColumnDef<Product>[] = [
    {
        accessorKey: "itemCode",
        header: "Item Code"
    },
    {
        accessorKey: "name",
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
        accessorKey: "tax",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Tax
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



