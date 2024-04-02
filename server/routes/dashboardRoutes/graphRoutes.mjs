import express from "express"
const router = express.Router();
import Sales  from '../../db/salesSchema/salesSchema.mjs'
import Purchase from '../../db/purchaseSchema/purchaseSchema.mjs'
import { addMonths }  from 'date-fns'

router.get("/bargraphInfo/:months", async (req, res) => {
    const numberOfMonths = parseInt(req.params.months);

    try {
        const endDate = new Date();
        const startDate = addMonths(endDate, -numberOfMonths);

        // Aggregate sales data for the past `numberOfMonths` months
        const salesData = await Sales.aggregate([
            {
                $match: {
                    saleDate: { $gte: startDate, $lte: endDate }
                }
            },
            {
                $group: {
                    _id: null,
                    totalSales: { $sum: "$finalAmount" }
                }
            }
        ]);

        // Aggregate purchase data for the past `numberOfMonths` months
        const purchaseData = await Purchase.aggregate([
            {
                $match: {
                    purchaseDate: { $gte: startDate, $lte: endDate }
                }
            },
            {
                $group: {
                    _id: null,
                    totalPurchase: { $sum: "$totalAmount" }
                }
            }
        ]);

        // Calculate revenue, expense, and profit/loss
        const totalSales = salesData.length > 0 ? salesData[0].totalSales : 0;
        const totalPurchase = purchaseData.length > 0 ? purchaseData[0].totalPurchase : 0;
        const revenue = totalSales;
        const expense = totalPurchase;
        const profitOrLoss = totalSales - totalPurchase;

        // Formatting the data as per the required format
        const formattedData = {
            labels: ["Property", "Amount"],
            data: [
                ["Revenue", revenue],
                ["Expense", expense],
                ["Profit/Loss", profitOrLoss]
            ]
        };

        res.json(formattedData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

export default router;

