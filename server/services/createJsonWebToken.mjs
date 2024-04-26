import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export default function createJsonWebToken(user) {
  try {
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRATION,
    });
    return accessToken;
  } catch (e) {
    console.log("Unable to create JSON web token:", e);
    throw e;
  }
}
