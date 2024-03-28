import express from "express";
import Farmer from "../../db/farmerSchema/farmerSchema.mjs";
import FPO from "../../db/fpoSchema/fpoSchema.mjs";
const farmerRouter = express.Router();

//farmer_details object format
// const farmerDetails = {
//     farmerId: "12",
//     name: "John Doe",
//     gender: "male",
//     address: {
//         addressLine1: "sweet house",
//         addressLine2:"mukuntan road",
//         district: "kerala",
//         city: "puthenkulam",
//         postOffice: "poothakulam",
//         pinNumber: 87123
//     },
//     mobile: "1234567890",
//     state: "California",
//     block: "Sample block",
//     dob: "1990-01-01", // Sample date of birth
//     fathersName: "Michael Doe",
//     farmerType: "Sample farmer type",
//     landType : "Sample land type",
//     landArea : 100, // Sample land area in hectares
//     balance : 1000, // Sample balance
//     category : "Sample category",
//     userType : "shareholder", // Assuming default value is 'shareholder'
//     equityAmount: 500, // Sample equity amount
//     equityShares: 50, // Sample equity shares
//     totalAmount : 1500, // Sample total amount
//     farmerProduct : "Sample product"
// };

//function to fetch fpo object id
async function getObjectId(fponame) {
  try {
    const fpo = await FPO.findOne({ name: fponame });
    if (fpo) {
      return fpo._id;
    } else {
      return null;
    }
  } catch (e) {
    console.error("failed fetch fpo : " + e.message);
    return null;
  }
}

//get post request
farmerRouter.post("/add", async (req, res) => {
  const fpoName = req.body.fpoName;
  const reg_obj_id = await getObjectId(fpoName);
  if (reg_obj_id === null) {
    res.status(400).send("enter a valid fpo name");
  } else {
    try {
        const farmer_details = req.body;
        const farmer = new Farmer({...farmer_details, fpoRegObjId: reg_obj_id});
        await farmer.save();
        res.status(201).json(farmer);
    } catch (error) {
      // Check if the error is a validation error
      if (error.name === "ValidationError") {
        res.status(400).json({ error: error.message });
      } else {
        console.error("Error creating farmer:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    }
  }
});

export default farmerRouter;


// farmerId: req.body.farmerId,
// fpoRegObjId: reg_obj_id,
// name: req.body.name,
// gender: req.body.gender,
// address: {
//     addressLine1: req.body.addressLine1,
//     addressLine2: req.body.addressLine2,
//     district: req.body.district,
//     city: req.body.city,
//     postOffice: req.body.postOffice,
//     pinNumber: req.body.pinNumber,
// },
// mobile: req.body.mobile,
// state: req.body.state,
// block: req.body.block,
// dob: req.body.dob,
// fatherName: req.body.fatherName,
// farmerType: req.body.farmerType,
// landType: req.body.landType,
// landArea: req.body.landArea,
// balance: req.body.balance,
// category: req.body.category,
// userType: req.body.userType,
// equityAmount: req.body.equityAmount,
// equityShares: req.body.equityShares,
// totalAmount: req.body.totalAmount,
// farmerProduct: req.body.farmerProduct,
