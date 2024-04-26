import express from "express";
import cors from "cors";
import "express-async-errors";
import { connectDB } from "./db/connection.mjs";
import multer from "multer";
const multer_ = multer({ dest: "/uploads" });

//route imports
import signupRoute from "./routes/authenticationRoutes/signupRoute.mjs";
import updateFpoRoute from "./routes/fpoRoutes/updateFpoRoute.mjs";
import getFpoRoute from "./routes/fpoRoutes/getFpoRoute.mjs";
import emailVerificationRoute from "./routes/authenticationRoutes/emailVerificationRoute.mjs";
import signinRoute from "./routes/authenticationRoutes/signinRoute.mjs";
import verifyAccessToken from "./middlewares/verifyAccesToken.mjs";
import logoutRoute from "./routes/authenticationRoutes/logoutRoute.mjs";
import getFarmerRoute from "./routes/farmerRoutes/getFarmerRoute.mjs";
import updateFarmerRoute from "./routes/farmerRoutes/updateFarmerRoute.mjs";
import newFarmerRoute from "./routes/farmerRoutes/newFarmerRoute.mjs";
import deleteFarmerRoute from "./routes/farmerRoutes/deleteFarmerRoute.mjs";
import getProductRoute from "./routes/productRoutes/getProductsRoute.mjs";
import updateProductRoute from "./routes/productRoutes/updateProductRoute.mjs";
import deleteProductRoute from "./routes/productRoutes/deleteProductRoute.mjs";
import newProductRoute from "./routes/productRoutes/newProductRoute.mjs";
import getStaffRoute from "./routes/staffRoutes/getStaffRoute.mjs";
import deleteStaffRoute from "./routes/staffRoutes/deleteStaffRoute.mjs";
import newStaffRoute from "./routes/staffRoutes/newStaffRoute.mjs";
import updateStaffRoute from "./routes/staffRoutes/updateStaffRoute.mjs";
import getPurchaseRoute from "./routes/puchaseRoutes/getPurchaseRoute.mjs";
import newPurchaseRoute from "./routes/puchaseRoutes/newPurchaseRoute.mjs";
import newSalesRoute from "./routes/salesRoutes/newSalesRoute.mjs";
import getSalesRoute from "./routes/salesRoutes/getSalesRoute.mjs";
import uploadStaffRoute from "./routes/uploadRoutes/uploadStaffRoute.mjs";

const PORT = process.env.PORT || 5050;
const app = express();
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(express.json());
// Connect to MongoDB
connectDB();

//routes
//testing
app.get("/test", (req, res) => {
  res.status(200).send("hellow working.....");
});

//authentication routes
app.use("/api/user", signupRoute);
app.use("/users", emailVerificationRoute);
app.use("/api/user", signinRoute);
app.use("/api/user", verifyAccessToken, logoutRoute);

//fporoutes
app.use("/api/fpo/update", verifyAccessToken, updateFpoRoute);
app.use("/api/fpo/get", verifyAccessToken, getFpoRoute);

//farmer route
app.use("/api/farmer/get", verifyAccessToken, getFarmerRoute);
app.use("/api/farmer/update", verifyAccessToken, updateFarmerRoute);
app.use("/api/farmer/add", verifyAccessToken, newFarmerRoute);
app.use("/api/farmer/delete", verifyAccessToken, deleteFarmerRoute);

//product routes
app.use("/api/products/get", verifyAccessToken, getProductRoute);
app.use("/api/products/update", verifyAccessToken, updateProductRoute);
app.use("/api/products/delete", verifyAccessToken, deleteProductRoute);
app.use("/api/products/add", verifyAccessToken, newProductRoute);

//satff routes
app.use("/api/staffs/get", verifyAccessToken, getStaffRoute);
app.use("/api/staffs/delete", verifyAccessToken, deleteStaffRoute);
app.use("/api/staffs/update", verifyAccessToken, updateStaffRoute);
app.use("/api/staffs/add", verifyAccessToken, newStaffRoute);

//puchase route
app.use("/api/purchase/get", verifyAccessToken, getPurchaseRoute);
app.use("/api/puchase/add", verifyAccessToken, newPurchaseRoute);

//sales route
app.use("/api/sales/add", verifyAccessToken, newSalesRoute);
app.use("/api/sales/get", verifyAccessToken, getSalesRoute);

//upload file route
// app.use(
//   "/api/csv/farmer/upload",
//   verifyAccessToken,
//   multer_.single("csv"),
//   csvUploadRoutes
// );
// app.use(
//   "/api/csv/staff/upload",
//   verifyAccessToken,
//   multer_.single("csv"),
//   csvUploadRoutes
// );
app.use(
  "/api/csv/staff/upload",
  verifyAccessToken,
  multer_.single("csv"),
  uploadStaffRoute
);

// CORS setup
app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );

  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    return res.status(200).json({});
  }

  next();
});

// Global error handling
app.use((err, req, res, next) => {
  res.status(500).send("Uh oh! An unexpected error occurred.");
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
