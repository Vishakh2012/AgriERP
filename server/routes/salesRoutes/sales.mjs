import express from "express";
import db from "../../db/conn.mjs";
import sales from "../../db/salesSchema/salesSchema.mjs"
const router = express.Router();

router.post("/add", async (req, res, next) => {

    try {
        const newSales = new sales({
            merchantId: req.body.merchantId,
            saleDate: req.body.saleDate,
            billNo: req.body.billNo,
            itemSold: {
                itemCode: req.body.itemSold.itemCode,
                itemName: req.body.itemSold.itemName,
                HSN: req.body.itemSold.HSN,
                rate: req.body.itemSold.rate,
                quantity: req.body.itemSold.quantity,
                discount: req.body.itemSold.discount,
                tax: req.body.itemSold.tax
            },
            totalAmountWithoutDiscount: req.body.totalAmountWithoutDiscount,
            finalAmount: req.body.finalAmount
        });        // Save the new Sales document to the database

        const savedSales = await newSales.save();

        res.status(201).json(savedSales);
    } catch (error) {
        console.error("Error adding sales:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

export default router;





