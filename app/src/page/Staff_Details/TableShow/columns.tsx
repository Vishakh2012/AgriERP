import {ColumnDef} from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
export type Staff = {
    staffId: string,
    firstName: string,
    lastName:string,
    middleName:string,
    bloodGroup: string,
    designation: string,
    phone: string,
    email: string,
    dateOfJoin:string,
    basicSalary: string,
    accountNumber: string,
    address: string
}

export const columns: ColumnDef<Staff>[] = [
    {
        accessorKey:"staffId",
        header: "Id"
    },
        {
        accessorKey:"firstName",
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
        accessorKey:"bloodGroup",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
         Blood Group 
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    }, 
        {
        accessorKey:"phoneNumber",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Phone Number
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    },
  {  accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },


        {
        accessorKey:"dateofJoining",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
         Date of Joining 
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    },
        {
        accessorKey:"basicSalary",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Basic Salary
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    },
        {
        accessorKey:"accountNumber",
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
        accessorKey: "address",
            header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Address
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },

    }

]



