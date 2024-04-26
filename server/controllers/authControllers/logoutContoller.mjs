import refreshToken from "../../models/refreshTokenModel/refreshTokenModel.mjs";
export default async function logoutController(req, res, next) {
  try {
    const user = req.user;
    console.log(user);
    await refreshToken.deleteOne({ user: user.userId });
    res.status(200).send({ message: "successfully logged out" });
  } catch (e) {
    return res.status(500).send({ message: e.message });
  }
}
