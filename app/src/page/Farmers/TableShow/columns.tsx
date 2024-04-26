import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
export type Farmer = {
    name: string,
    email: string,
    phoneNumber: string,
    gender: string,
    aadhaar: string,
    address: string,
    bankAccountHolderName: string,
    ifscCode: string,
    bankAccountNumber: string,
    shareholder: string,
    landType: string,
    farmerType: string,
    category: string,
    fatherName: string,
}

export const columns: ColumnDef<Farmer>[] = [
    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "email",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    email
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "phoneNumber",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    phone
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "aadhaar",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Aadhaar
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "address",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    address
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "bankAccountHolderName",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Bank Account Holder Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "bankAccountNumber",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Account Number
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
        {
        accessorKey: "ifscCode",
            header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          IFSC
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },

    },

    {
        accessorKey: "shareholder",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    is shareholder
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
        {
        accessorKey: "landType",
            header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          land type
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    }

    },
    {
        accessorKey: "farmerType",
            header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          farmer type
          <ArrowUpDown className="ml-2 h-4 w-4" />
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
          category
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },

    },
    {
        accessorKey: "fatherName",
            header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Father Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },

    }




]



