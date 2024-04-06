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
import Header from '@/components/Header/Header';

const PAGE_SIZE = 7;
<<<<<<< HEAD
const invoices = [
    {
        saleDate: "2024-01-01",
        billNo: "INV001",
        merchantId: "MID001",
        finalAmount: "$200.00",
        totalAmountWithoutDiscount: "$220.00",
        paymentMethod: "Credit Card",
    },
    {
        saleDate: "2024-01-02",
        billNo: "INV002",
        merchantId: "MID002",
        finalAmount: "$180.00",
        totalAmountWithoutDiscount: "$190.00",
        paymentMethod: "PayPal",
    },
    {
        saleDate: "2024-01-03",
        billNo: "INV003",
        merchantId: "MID003",
        finalAmount: "$220.00",
        totalAmountWithoutDiscount: "$240.00",
        paymentMethod: "Bank Transfer",
    },
    {
        saleDate: "2024-01-04",
        billNo: "INV004",
        merchantId: "MID004",
        finalAmount: "$300.00",
        totalAmountWithoutDiscount: "$320.00",
        paymentMethod: "Credit Card",
    },
    {
        saleDate: "2024-01-05",
        billNo: "INV005",
        merchantId: "MID005",
        finalAmount: "$280.00",
        totalAmountWithoutDiscount: "$300.00",
        paymentMethod: "PayPal",
    },
    {
        saleDate: "2024-01-06",
        billNo: "INV006",
        merchantId: "MID006",
        finalAmount: "$240.00",
        totalAmountWithoutDiscount: "$260.00",
        paymentMethod: "Bank Transfer",
    },
    {
        saleDate: "2024-01-07",
        billNo: "INV007",
        merchantId: "MID007",
        finalAmount: "$320.00",
        totalAmountWithoutDiscount: "$340.00",
        paymentMethod: "Credit Card",
    },
    {
        saleDate: "2024-01-08",
        billNo: "INV008",
        merchantId: "MID008",
        finalAmount: "$350.00",
        totalAmountWithoutDiscount: "$370.00",
        paymentMethod: "Credit Card",
    },
    {
        saleDate: "2024-01-09",
        billNo: "INV009",
        merchantId: "MID009",
        finalAmount: "$290.00",
        totalAmountWithoutDiscount: "$310.00",
        paymentMethod: "PayPal",
    },
    {
        saleDate: "2024-01-10",
        billNo: "INV010",
        merchantId: "MID010",
        finalAmount: "$210.00",
        totalAmountWithoutDiscount: "$230.00",
        paymentMethod: "Bank Transfer",
    },
    {
        saleDate: "2024-01-11",
        billNo: "INV011",
        merchantId: "MID011",
        finalAmount: "$400.00",
        totalAmountWithoutDiscount: "$420.00",
        paymentMethod: "Credit Card",
    },
    {
        saleDate: "2024-01-12",
        billNo: "INV012",
        merchantId: "MID012",
        finalAmount: "$420.00",
        totalAmountWithoutDiscount: "$440.00",
        paymentMethod: "PayPal",
    },
    {
        saleDate: "2024-01-13",
        billNo: "INV013",
        merchantId: "MID013",
        finalAmount: "$180.00",
        totalAmountWithoutDiscount: "$200.00",
        paymentMethod: "Bank Transfer",
    },
    {
        saleDate: "2024-01-14",
        billNo: "INV014",
        merchantId: "MID014",
        finalAmount: "$360.00",
        totalAmountWithoutDiscount: "$380.00",
        paymentMethod: "Credit Card",
    },
    {
        saleDate: "2024-01-15",
        billNo: "INV015",
        merchantId: "MID015",
        finalAmount: "$400.00",
        totalAmountWithoutDiscount: "$420.00",
        paymentMethod: "Credit Card",
    },
    {
        saleDate: "2024-01-16",
        billNo: "INV016",
        merchantId: "MID016",
        finalAmount: "$290.00",
        totalAmountWithoutDiscount: "$310.00",
        paymentMethod: "PayPal",
    },
    {
        saleDate: "2024-01-17",
        billNo: "INV017",
        merchantId: "MID017",
        finalAmount: "$310.00",
        totalAmountWithoutDiscount: "$330.00",
        paymentMethod: "Bank Transfer",
    },
    {
        saleDate: "2024-01-18",
        billNo: "INV018",
        merchantId: "MID018",
        finalAmount: "$430.00",
        totalAmountWithoutDiscount: "$450.00",
        paymentMethod: "Credit Card",
    },
    {
        saleDate: "2024-01-19",
        billNo: "INV019",
        merchantId: "MID019",
        finalAmount: "$250.00",
        totalAmountWithoutDiscount: "$270.00",
        paymentMethod: "Credit Card",
    },
    {
        saleDate: "2024-01-20",
        billNo: "INV020",
        merchantId: "MID020",
        finalAmount: "$180.00",
        totalAmountWithoutDiscount: "$200.00",
        paymentMethod: "PayPal",
    },
    {
        saleDate: "2024-01-21",
        billNo: "INV021",
        merchantId: "MID021",
        finalAmount: "$320.00",
        totalAmountWithoutDiscount: "$340.00",
        paymentMethod: "Bank Transfer",
    },
    {
        saleDate: "2024-01-22",
        billNo: "INV022",
        merchantId: "MID022",
        finalAmount: "$400.00",
        totalAmountWithoutDiscount: "$420.00",
        paymentMethod: "Credit Card",
    },
    {
        saleDate: "2024-01-23",
        billNo: "INV023",
        merchantId: "MID023",
        finalAmount: "$380.00",
        totalAmountWithoutDiscount: "$400.00",
        paymentMethod: "PayPal",
    },
    {
        saleDate: "2024-01-24",
        billNo: "INV024",
        merchantId: "MID024",
        finalAmount: "$270.00",
        totalAmountWithoutDiscount: "$290.00",
        paymentMethod: "Bank Transfer",
    },
];


const SalesDisplay = () => {

    return (
    <>
    </>
  )
}

export default SalesDisplay;
