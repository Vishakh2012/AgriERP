import uploadProductController from "../../controllers/uploadExcelController/uploadProductController.mjs";
import express from "express";
const routes = express.Router();

export default routes.post("", uploadProductController);
