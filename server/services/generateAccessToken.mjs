import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import createJsonWebToken from "./createJsonWebToken.mjs";
dotenv.config();

export default async function generateAccessToken(refreshToken, req) {
  try {
    //get refresh token from the database
    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      (error, userData) => {
        if (error) {
          console.error("refresh token is not valid");
        }
        //create a new access token
        const accessToken = createJsonWebToken({
          userId: userData.userId,
          fpoId: userData.fpoId,
        });
          req.user = { userId: userData.userId, fpoId: userData.fpoId };
        return accessToken;
      }
    );
  } catch (e) {
    console.error(e.message);
  }
}
