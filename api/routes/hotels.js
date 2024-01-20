import express from "express";
import {
  createHotel,
  deleteHotel,
  getAllHotels,
  getHotel,
  updateHotel,
} from "../controllers/hotels.js";
import { verifyAdmin } from "../utils/verify.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createHotel);

//GET ALL
router.get("/", getAllHotels);

//GET
router.get("/:id", getHotel);

//UPDATE
router.put("/:id", verifyAdmin, updateHotel);

//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);

export default router;
