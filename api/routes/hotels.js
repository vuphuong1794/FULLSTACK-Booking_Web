import express from "express";
import {
  createHotel,
  deleteHotel,
  getAllHotels,
  getHotel,
  updateHotel,
} from "../controllers/hotels.js";

const router = express.Router();

//CREATE
router.post("/", createHotel);

//GET ALL
router.get("/", getAllHotels);

//GET
router.get("/:id", getHotel);

//UPDATE
router.put("/:id", updateHotel);

//DELETE
router.delete("/:id", deleteHotel);

export default router;
