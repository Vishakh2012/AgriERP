import csvUploadController from "../../controllers/uploadControllers/csvUploadController.mjs";
import express from "express";
const router = express.Router();
export default router.post("", csvUploadController);
