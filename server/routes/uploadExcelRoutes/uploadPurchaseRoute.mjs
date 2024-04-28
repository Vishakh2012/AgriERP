import uploadPurchase from "../../controllers/uploadExcelController/uploadPurchase.mjs";
import express from "express";
const routes = express.Router();

export default routes.post("", uploadPurchase);
