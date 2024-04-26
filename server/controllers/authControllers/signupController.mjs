import bcrypt from "bcryptjs";
import User from "../../models/userModel/userModel.mjs";
import FPO from "../../models/fpoModel/fpoModel.mjs";
import sendMail from "../../services/sendMail.mjs";
import createToken from "../../services/createToken.mjs";
import dotenv from "dotenv";
dotenv.config();

export default async function signUpController(req, res) {
  let createdFpo;

  try {
    const { userName, email, password, fpoName } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({
      email: email,
    });
    if (existingUser) {
      return res.status(400).send({
        errorCode: "DUPLICATE_EMAIL",
        message: "User already exists with the email.",
      });
    }

    // Create a FPO using the FPO name
    createdFpo = new FPO({ name: fpoName, email: email });
    await createdFpo.save();

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user
    const user = new User({
      userName: userName,
      email: email,
      password: hashedPassword,
      fpoRegId: createdFpo._id,
    });
    await user.save();

    // Generate token
    const token = await createToken(user._id);

    // Create URL for verification
    const url = `${process.env.BASE_URL}users/${user._id}/verify/${token.token}`;

    // Send email
    await sendMail(email, "Verification email", url);

    console.log("User created successfully");
    return res.status(201).send({ message: "User created successfully" });
  } catch (error) {
    console.error("Error creating user:", error);

    // Rollback if an error occurred during user creation
    if (createdFpo) {
      await FPO.deleteOne({ _id: createdFpo._id });
    }

    return res.status(500).send({
      errorCode: "INTERNAL_SERVER_ERROR",
      message: "Internal server error",
    });
  }
}
