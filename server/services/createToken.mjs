import crypto from "crypto";
import Token from "../models/tokenModel/tokenModel.mjs";

export default async function createToken(userId) {
  try {
    const token = new Token({
      userId,
      token: crypto.randomBytes(64).toString("hex"),
    });

    const createdToken = await token.save();
    return createdToken;
  } catch (error) {
    console.error("Error creating token:", error);
    throw new Error("Unable to create token");
  }
}
