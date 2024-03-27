import express from "express";
import authController from "../../controllers/auth.controller.mjs";
import verifySignUp from "../../middleware/verifySignup.mjs";
const router = express.Router();

router.post("/signup", [ verifySignUp.checkDuplicateUsernameOrEmail], authController.signUp)
router.post("/signin", authController.signIn)

export default router;






