import bcrypt from "bcryptjs";
import User from "../../models/userModel/userModel.mjs";
import Token from "../../models/tokenModel/tokenModel.mjs";
import refreshToken from "../../models/refreshTokenModel/refreshTokenModel.mjs";
import FPO from "../../models/fpoModel/fpoModel.mjs";
import createJsonWebToken from "../../services/createJsonWebToken.mjs";
import jwt from "jsonwebtoken";

export default async function loginController(req, res, next) {
  try {
    const { userName, password } = req.body;

    // Find user by username
    const user = await User.findOne({ userName });

    if (!user) {
      return res.status(404).send({ message: "Cannot find user" });
    }

    // Find associated FPO
    const fpo = await FPO.findOne({ _id: user.fpoRegId });

    if (!fpo) {
      return res.status(404).send({ message: "Cannot find FPO for the user" });
    }

    // Check if the user is verified
    if (!user.verified) {
      // If not verified, check if a token exists for the user
      const token = await Token.findOne({ userId: user._id });
      if (token) {
        // If a token exists, resend the verification email
        const url = `${process.env.BASE_URL}users/${user._id}/verify/${token.token}`;
        await sendMail(user.email, "Verification Email", url);
        return res.status(401).send({
          message:
            "Verification email successfully sent to your email. Please verify.",
        });
      } else {
        // If no token exists, create a new token for the user and send the verification email
        const newToken = await createToken(user._id);
        const url = `${process.env.BASE_URL}users/${user._id}/verify/${newToken.token}`;
        await sendMail(fpo.email, "Verification Email", url);
        return res.status(401).send({
          message:
            "An email has been sent to your email address. Please verify.",
        });
      }
    }

    // If user is verified, compare passwords using bcryptjs
    const match = bcrypt.compare(password, user.password);

    if (match) {
      // Create access token
      const accessToken = createJsonWebToken({
        userId: user._id,
        fpoId: user.fpoRegId,
      });

      //create refresh token
      const refresh_token = jwt.sign(
        { userId: user._id, fpoId: user.fpoRegId },
        process.env.REFRESH_TOKEN_SECRET
      );

      const existing_refresh = await refreshToken.findOne({ user: user._id });

      if (existing_refresh) {
        //update the access token and refresh token
        await refreshToken.updateOne(
          { user: user._id },
          { accessToken: accessToken, refreshToken: refresh_token }
        );
      } else {
        await refreshToken.create({
          user: user._id,
          refreshToken: refresh_token,
          accessToken: accessToken,
        });
      }

      return res.status(200).send({
        message: "Successfully logged in",
        accessToken: accessToken,
        refreshToken: refresh_token,
      });
    } else {
      return res.status(401).send({ message: "Password mismatch" });
    }
  } catch (e) {
    console.error("Unable to login:", e);
    return res.status(500).send({ message: "Internal server error" });
  }
}
