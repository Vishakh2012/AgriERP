import express from "express";
import purchase from "../../db/purchaseSchema/purchaseSchema.mjs"
const router = express.Router();

router.post("/add", async (req, res, next) => {

    try {
        // Create a new Purchase document
        const newPurchase = new purchase({
            billNumber: req.body.billNumber,
            farmerId: req.body.farmerId,
            taxMode: req.body.taxMode,
            GSTIN: req.body.GSTIN,
            purchaseDetails: {
                itemCode: req.body.purchaseDetails.itemCode,
                HSN: req.body.purchaseDetails.HSN,
                rate: req.body.purchaseDetails.rate,
                discount: req.body.purchaseDetails.discount,
                tax: req.body.purchaseDetails.tax
            },
            totalAmount: req.body.totalAmount
        });        // Save the new Purchase document to the database

        const savedPurchase = await newPurchase.save();

        res.status(201).json(savedPurchase);
    } catch (error) {
        console.error("Error adding purchase:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

export default router;





