import express from "express";
import db from "../../db/conn.mjs";
import staff from "../../db/staffSchema/staffSchema.mjs"
const router = express.Router();

router.post("/add", async (req, res, next) => {

    try {
        // Create a new Staff document
        const newStaff = new staff({
            staff_id: req.body.staff_id,
            name: req.body.name,
            blood_group: req.body.blood_group,
            designation: req.body.designation,
            address: req.body.address,
            phone: req.body.phone,
            email: req.body.email,
            dateOfJoining: req.body.dateOfJoining,
            basicSalary: req.body.basicSalary,
            accountNumber: req.body.accountNumber
        });        // Save the new Staff document to the database

        const savedStaff = await newStaff.save();

        res.status(201).json(savedStaff);
    } catch (error) {
        console.error("Error adding staff:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

export default router;




