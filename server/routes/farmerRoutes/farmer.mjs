import express from "express";
import Farmer from "../../db/farmerSchema/farmerSchema.mjs";
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

//get post request
farmerRouter.post("/add", async (req, res) => {
    const farmer_details = req.body;
    try {
        const farmer = new Farmer(farmer_details);
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
});

export default farmerRouter;
