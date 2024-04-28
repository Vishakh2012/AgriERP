import express from "express";
const route = express.Router();
import getShareHolder from "../../controllers/shareHolderController.mjs/getShareHolder.mjs";

export default route.get("", getShareHolder);
