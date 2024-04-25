// emailVerificationController.js
import User from "../../models/userModel/userModel.mjs";
import Token from "../../models/tokenModel/tokenModel.mjs";

export default async function emailVerificationContoller(req, res) {
  try {
    // Find user with the provided user ID
    const user = await User.findOne({ _id: req.params.userId });
    console.log("user id : " + req.params.userId);
    console.log("user" + user);

    // If user not found in the database
    if (!user) {
      return res.status(400).send({ message: "No user found" });
    }

    // Find token associated with the user and provided token
    const token = await Token.findOne({
      userId: req.params.userId,
      token: req.params.token,
    });

    // If token not found
    if (!token) {
      return res.status(400).send({ message: "Invalid link for verification" });
    }

    // Update user verification status
    await User.findByIdAndUpdate(req.params.userId, {
      verified: true,
      isAdmin: true,
    });

    // Delete the token from the database
    await Token.findOneAndDelete({
      userId: req.params.userId,
      token: req.params.token,
    });

    console.log("Token deleted successfully");
    res.status(200).send({ message: "Email verified successfully" });
  } catch (error) {
    console.error("Error verifying email:", error);
    res.status(500).send({ message: error.message });
  }
}
