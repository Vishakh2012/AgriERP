import express from "express";
import FPO from "../../db/fpoSchema/fpoSchema.mjs";
const router = express.Router();

router.post("/add", async (req, res) => {
  try {
    const newFpo = new FPO({
      fpoId: req.body.id,
      name: req.body.name,
      regYear: req.body.regYear,
      district: req.body.district,
      state: req.body.state,
      balance: req.body.balance,
    });
    const savedFpo = await newFpo.save();
    res.status(201).json(savedFpo);
  } catch (e) {
    console.error("something went wrong cannot register fpo : ", e.message);
    res.status(500).send("something went wrong!" + e.message);
  }
});
export default router;
