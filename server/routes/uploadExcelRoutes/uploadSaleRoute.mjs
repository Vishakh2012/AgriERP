import uploadSalesController from "../../controllers/uploadExcelController/uploadSales.mjs";
import express from "express";
const routes = express.Router();

export default routes.post("", uploadSalesController);
