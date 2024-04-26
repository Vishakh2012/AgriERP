import express from "express"
import signUpController from "../../controllers/authControllers/signupController.mjs";
const route = express.Router();

export default route.post("/signup", signUpController);