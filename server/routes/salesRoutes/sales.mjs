import express from "express";
import db from "../../db/conn.mjs";
import salesTransactionSchema from "../../db/salesSchema/salesSchema.mjs";
import getCollectionForFPO from "../../controllers/getModel.mjs";
const router = express.Router();

router.post("/add/:fpoName", async (req, res, next) => {
  try {
    const fpoName = req.params.fpoName;
    const sales_deatails = req.body;
    const salesFpo = await getCollectionForFPO(
      fpoName,
      salesTransactionSchema,
      "Sales"
    );
    const newSales = new salesFpo({
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
        tax: req.body.itemSold.tax,
      },
      totalAmountWithoutDiscount: req.body.totalAmountWithoutDiscount,
      finalAmount: req.body.finalAmount,
    }); // Save the new Sales document to the database

    const savedSales = await newSales.save();
    res.status(201).json(savedSales);
  } catch (error) {
    console.error("Error adding sales:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//get connection
router.post("/getDetails/:fpoName/:filter", async (req, res, next) => {
  try {
    let filter = req.params.filter;
    let req_body = req.body;
    let filters = req_body.filters || {};
    let query = {};
    if (filters.itemcode) {
      query.itemCode = filter; // Case-insensitive regex match
    }
    if (filters.salesDate) {
      query.saleDate = filter; // Case-insensitive regex match
    }
    if (filters.mechantId) {
      query.merchantId = filter; // Case-insensitive regex match
    }
    let fpoName = req.params.fpoName;
    let model = await getCollectionForFPO(
      fpoName,
      salesTransactionSchema,
      "Sales"
    );
    const sales = await model.find(query);
    if (!sales) {
      res.status(500).send("failed to fetch transactions!");
    } else {
      res.status(200).send("trasaction successful!");
    }
  } catch (error) {
    console.error("something went wrong !");
    res.status(500).send(error.message);
  }
});

export default router;






