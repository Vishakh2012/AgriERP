import express from "express";
import graphController from "../../controllers/dashBoardControllers/graphController.mjs";
const route = express.Router();

export default route.get("/:range", graphController);
