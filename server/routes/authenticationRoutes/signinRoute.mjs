import express from "express"
import loginController from "../../controllers/authControllers/signinContoller.mjs";
const route = express.Router();

export default route.post("/signin", loginController)