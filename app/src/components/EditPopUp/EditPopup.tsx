import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import React, { ReactElement } from "react"
import { MdEdit } from "react-icons/md"

interface DialogboxContent{
  selectedRowData:any
  formComponent:ReactElement
}

export const EditDialogBox:React.FC<DialogboxContent>= (props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
      <button className=" border-2 rounded mr-2 print:hidden">
       <MdEdit size={'20px'}/>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[900px]">
      {React.cloneElement(props.formComponent,{ selectedRowData: props.selectedRowData })}
      </DialogContent>
    </Dialog>
  )
}
