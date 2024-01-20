import express from "express";
import { verifyAdmin } from "../utils/verify.js";
import {
  createRoom,
  deleteRoom,
  getAllRooms,
  getRoom,
  updateRoomAvailability,
} from "../controllers/rooms.js";

const router = express.Router();

//CREATE
router.post("/:hotelid", verifyAdmin, createRoom);

//GET ALL
router.get("/", getAllRooms);

//GET
router.get("/:id", getRoom);

//UPDATE
router.put("/:id", verifyAdmin, updateRoomAvailability);

//DELETE
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

export default router;
