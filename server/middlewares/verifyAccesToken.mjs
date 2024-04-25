import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import generateAccessToken from "../services/generateAccessToken.mjs";
import refreshToken from "../models/refreshTokenModel/refreshTokenModel.mjs";

dotenv.config();

export default async function verifyAccessToken(req, res, next) {
  try {
    const token = req.headers["x-access-token"];
    if (!token) {
      return res.status(400).send({ message: "AccessToken not found" });
    }

    // Verify the access token
    jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: process.env.ACCESS_TOKEN_EXPIRATION },
      async (error, user) => {
        if (error) {
          if (error.name === "TokenExpiredError") {
            const refreshTokenDoc = await refreshToken.findOne({
              accessToken: token,
            });

            let accessToken;
            if (refreshTokenDoc) {
              accessToken = await generateAccessToken(
                refreshTokenDoc.refreshToken,
                req
              );

              await refreshToken.updateOne(
                { accessToken: token },
                { accessToken: accessToken }
              );
            } else {
              return res.status(404).send({ message: error.message });
            }

            req.headers["x-access-token"] = accessToken;
          } else {
            // If error other than TokenExpiredError, return an error
            return res.status(401).send({ message: "in valid accesstoken" });
          }
          next();
        } else {
          // If access token is valid, set the user object in the request
          req.user = user;
          next();
        }
      }
    );
  } catch (e) {
    return res.status(500).send({ message: e.message });
  }
}
