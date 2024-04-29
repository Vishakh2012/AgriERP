import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
export type itemPurchaseDetails = {
    name: string,
    itemCode: string,
    HSN: string,
    rate: string,
    discount: string,
    quantity: string
}
export type Purchase = {
    billNumber: string,
    farmerId: string,
    GSTIN: string,
    purchaseDetails: itemPurchaseDetails[],
    totalAmount: string,
    purchaseDate: string
}

export const columns: ColumnDef<Purchase>[] = [
    {
        accessorKey: "billNumber",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Bill No.
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "farmerId",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    farmer Id
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "GSTIN",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    GSTIN
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "purchaseDetails",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    purchase details
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },


    {
        accessorKey: "purchaseDate",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    purchase date
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ((row: any) => {
            const dateString: string = row.getValue("purchaseDate").toString()
            const actualDate = dateString.slice(0,10)
            return <div className="">{actualDate}</div>
        })
    },
    {
        accessorKey: "totalAmount",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    total
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },

]



