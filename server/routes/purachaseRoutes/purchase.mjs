import express from "express";
import purchaseSchema from "../../db/purchaseSchema/purchaseSchema.mjs"
import mongoose from "mongoose";
import getCollectionForFPO from "../../controllers/getModel.mjs";
const Router = express.Router();



Router.post("/add/:fpoName", async (req, res, next) => {

    try {
        const purchase_details = req.body
        const fpoName = req.params.fpoName
        const PurchaseFPO = await getCollectionForFPO(fpoName, purchaseSchema, "Purchase")
        const purchase = new PurchaseFPO({ ...purchase_details })
        await purchase.save()
        res.status(201).send(purchase)
    } catch (error) {
        if (error.name === "ValidationError") {
            res.status(400).json({ error: error.message });
        } else {
            console.error("Error creating purchase:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
})

Router.get("/getDetails/:fpoName", async (req, res) => {
    try {
        const fpoName = req.params.fpoName
        const PurchaseFPO = await getCollectionForFPO(fpoName, purchaseSchema, "Purchase")

        const purchase = await PurchaseFPO.find({})
        if (!purchase)
            return res.status(500).send({ message: "FPO not found" })
        return res.status(200).json(purchase)
    } catch (error) {
        res.status(404).send("internal server error");
        return
    }
});

export default Router;





