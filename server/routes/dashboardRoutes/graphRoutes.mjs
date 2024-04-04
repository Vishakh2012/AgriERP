import express from "express";
const router = express.Router();
import Sales from '../../db/salesSchema/salesSchema.mjs';
import Purchase from '../../db/purchaseSchema/purchaseSchema.mjs';
import { addMonths } from 'date-fns';
import getCollectionForFPO from "../../controllers/getModel.mjs";

router.get("/bargraphInfo/:fponame/:months", async (req, res) => {
    const numberOfMonths = parseInt(req.params.months);
    const fpoName = req.params.fponame;

    try {
        const endDate = new Date();
        const startDate = addMonths(endDate, -numberOfMonths);

        const Sales_ = await getCollectionForFPO(fpoName, Sales, "Sales");
        const Purchase_ = await getCollectionForFPO(fpoName, Purchase, "Purchase");

        const sales = await Sales_.find({ saleDate: { $gte: startDate } });
        const purchases = await Purchase_.find({ purchaseDate: { $gte: startDate} });

        // Calculate revenue, expense, and profit/loss
        let totalSales = 0;
        sales.forEach(sale => totalSales += sale.finalAmount);

        let totalPurchase = 0;
        purchases.forEach(purchase => totalPurchase += purchase.totalAmount);
        const expense = totalPurchase;
        const revenue = totalSales
        const profitOrLoss = totalSales - totalPurchase;

        // Formatting the data as per the required format
        const formattedData = {
            labels: ["Property", "Amount"],
            data: [
                ["Revenue", revenue],
                ["Expense", expense],
                ["Profit/Loss", profitOrLoss]
            ],
            start: startDate,
            sales:sales
        };

        res.json(formattedData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
})

export default router;

