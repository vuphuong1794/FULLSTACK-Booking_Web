import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connected to database");
  } catch (err) {
    throw err;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("disconnected to database");
});

//middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.listen(8800, () => {
  connect();
  console.log("connected to back end");
});
