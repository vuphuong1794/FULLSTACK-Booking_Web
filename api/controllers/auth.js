import User from "../models/Users.js";
import bcrypt from "bcryptjs";
import { createdError } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  try {
    //tranh tiet lo password cua user
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });
    await newUser.save();
    res.status(200).send("User has been created.  ");
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createdError(404, "User not found!"));

    const checkPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!checkPassword)
      return next(createdError(400, "Wrong password or username!"));

    //khong lo password khi login thanh cong
    const { password, isAdmin, ...otherDetails } = user._doc;

    //luu thong tin nguoi dung va luu vao cookie de dung xac minh cac tac vu cua admin
    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT
    );
    res
      //khong cho tiet lo thong tin cua client
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .send({ ...otherDetails });
  } catch (err) {
    next(err);
  }
};
