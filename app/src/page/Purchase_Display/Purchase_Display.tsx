import React, { useState, useEffect } from 'react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,

    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Header from '@/components/Header/Header'

const purchases = [
    {
        purchaseDate: "2024-04-01",
        billNumber: "PUR001",
        GSTin: "GST123456",
        farmerId: "FID001",
        totalAmount: "$500.00",
    },
    {
        purchaseDate: "2024-04-02",
        billNumber: "PUR002",
        GSTin: "GST234567",
        farmerId: "FID002",
        totalAmount: "$700.00",
    },
    {
        purchaseDate: "2024-04-03",
        billNumber: "PUR003",
        GSTin: "GST345678",
        farmerId: "FID003",
        totalAmount: "$600.00",
    },
    {
        purchaseDate: "2024-04-04",
        billNumber: "PUR004",
        GSTin: "GST456789",
        farmerId: "FID004",
        totalAmount: "$800.00",
    },
    {
        purchaseDate: "2024-04-05",
        billNumber: "PUR005",
        GSTin: "GST567890",
        farmerId: "FID005",
        totalAmount: "$900.00",
    },
    {
        purchaseDate: "2024-04-06",
        billNumber: "PUR006",
        GSTin: "GST678901",
        farmerId: "FID006",
        totalAmount: "$1000.00",
    },
    {
        purchaseDate: "2024-04-07",
        billNumber: "PUR007",
        GSTin: "GST789012",
        farmerId: "FID007",
        totalAmount: "$1200.00",
    },
    {
        purchaseDate: "2024-04-08",
        billNumber: "PUR008",
        GSTin: "GST890123",
        farmerId: "FID008",
        totalAmount: "$1100.00",
    },
    {
        purchaseDate: "2024-04-09",
        billNumber: "PUR009",
        GSTin: "GST901234",
        farmerId: "FID009",
        totalAmount: "$950.00",
    },
    {
        purchaseDate: "2024-04-10",
        billNumber: "PUR010",
        GSTin: "GST012345",
        farmerId: "FID010",
        totalAmount: "$850.00",
    },
    {
        purchaseDate: "2024-04-11",
        billNumber: "PUR011",
        GSTin: "GST123456",
        farmerId: "FID011",
        totalAmount: "$750.00",
    },
    {
        purchaseDate: "2024-04-12",
        billNumber: "PUR012",
        GSTin: "GST234567",
        farmerId: "FID012",
        totalAmount: "$650.00",
    },
    {
        purchaseDate: "2024-04-13",
        billNumber: "PUR013",
        GSTin: "GST345678",
        farmerId: "FID013",
        totalAmount: "$550.00",
    },
    {
        purchaseDate: "2024-04-14",
        billNumber: "PUR014",
        GSTin: "GST456789",
        farmerId: "FID014",
        totalAmount: "$450.00",
    },
    {
        purchaseDate: "2024-04-15",
        billNumber: "PUR015",
        GSTin: "GST567890",
        farmerId: "FID015",
        totalAmount: "$850.00",
    },
    {
        purchaseDate: "2024-04-16",
        billNumber: "PUR016",
        GSTin: "GST678901",
        farmerId: "FID016",
        totalAmount: "$750.00",
    },
    {
        purchaseDate: "2024-04-17",
        billNumber: "PUR017",
        GSTin: "GST789012",
        farmerId: "FID017",
        totalAmount: "$950.00",
    },
    {
        purchaseDate: "2024-04-18",
        billNumber: "PUR018",
        GSTin: "GST890123",
        farmerId: "FID018",
        totalAmount: "$1100.00",
    },
    {
        purchaseDate: "2024-04-19",
        billNumber: "PUR019",
        GSTin: "GST901234",
        farmerId: "FID019",
        totalAmount: "$1200.00",
    },
    {
        purchaseDate: "2024-04-20",
        billNumber: "PUR020",
        GSTin: "GST012345",
        farmerId: "FID020",
        totalAmount: "$1000.00",
    },
    {
        purchaseDate: "2024-04-21",
        billNumber: "PUR021",
        GSTin: "GST123456",
        farmerId: "FID021",
        totalAmount: "$900.00",
    },
    {
        purchaseDate: "2024-04-22",
        billNumber: "PUR022",
        GSTin: "GST234567",
        farmerId: "FID022",
        totalAmount: "$800.00",
    },
    {
        purchaseDate: "2024-04-23",
        billNumber: "PUR023",
        GSTin: "GST345678",
        farmerId: "FID023",
        totalAmount: "$700.00",
    },
    {
        purchaseDate: "2024-04-24",
        billNumber: "PUR024",
        GSTin: "GST456789",
        farmerId: "FID024",
        totalAmount: "$600.00",
    },
];

const Purchase_Display = () => {
    return ( 
    <>
    </>
    )
}
export default Purchase_Display;
