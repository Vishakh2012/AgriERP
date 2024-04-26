import uploadStaffController from "../../controllers/uploadControllers/uploadStaffController.mjs";
import express from "express";
const router = express.Router();
export default router.post("", uploadStaffController);
