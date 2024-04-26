import express from "express"
import emailVerificationContoller from "../../controllers/authControllers/emailVerificationContoller.mjs";
const route = express.Router();

export default route.get(
    "/:userId/verify/:token",
    emailVerificationContoller
  );