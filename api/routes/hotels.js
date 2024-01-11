import express from "express";
import Hotels from "../models/Hotels.js";

const router = express.Router();

//CREATE
router.post("/", async (req, res) => {
  const newHotel = new Hotels(req.body);

  try {
    const saveHotel = await newHotel.save();
    res.status(200).json(saveHotel);
  } catch (err) {
    res.status(500).json(err);
  }
});
//DELETE
//GET
//GET ALL
//UPDATE
export default router;
