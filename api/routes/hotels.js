import express from "express";
import {
  countByCity,
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
router.get("/find/:id", getHotel);

//UPDATE
router.put("/:id", verifyAdmin, updateHotel);

//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);

router.get("/", getAllHotels);
router.get("/countByCity", countByCity);
//router.get("/countByType", countByType);
export default router;
