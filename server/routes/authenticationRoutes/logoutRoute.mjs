import express from "express"
import logoutController from "../../controllers/authControllers/logoutContoller.mjs";
const route = express.Router();

export default route.delete("/logout", logoutController)