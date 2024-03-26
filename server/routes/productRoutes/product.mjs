import express from "express"
import db from "../../db/conn.mjs";
import product from "../../db/productSchema/productSchema.mjs"
const router = express.Router();

router.post("/add", async (req, res, next) => {
    
    try {
        // Create a new Product document
        const newProduct = new product({
            category: req.body.category,
            name: req.body.name,
            HSN: req.body.HSN,
            itemCode: req.body.itemCode,
            price: req.body.price,
            currentStock: req.body.currentStock,
            tax: req.body.tax,
            dailySalesHistory: req.body.dailySalesHistory
        });        // Save the new Product document to the database
        const savedProduct = await newProduct.save();

        res.status(201).json(savedProduct);
    } catch (error) {
        console.error("Error adding product:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


export default router;




