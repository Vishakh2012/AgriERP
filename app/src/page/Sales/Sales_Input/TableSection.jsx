import React from "react";
import { Table, TableBody, TableHeader, TableHead, TableRow } from "@/components/ui/table";

const TableSection = ({ renderRows }) => {
  return (
    <Table className="table-auto border-collapse w-full ">
          <TableHeader className="sticky top-0 bg-white z-10">
            <TableRow>
              <TableHead className="w-[100px] text-center font-medium">Serial Number</TableHead>
              {Object.keys(staffDetails[0]).map((key) => (
                (gstType === "No gst" && key !== "SGST" && key !== "CGST" && key !== "IGST") ||
                (gstType === "Gst" && key !== "IGST") ||
                gstType === "Igst" ? (
                  <TableHead key={key} className="w-[100px] text-center font-medium">{key}</TableHead>
                ) : null
              ))}
            </TableRow>
          </TableHeader>
          <TableBody className="text-center">{renderRows()}</TableBody>
        </Table>
  );
};

export default TableSection;

