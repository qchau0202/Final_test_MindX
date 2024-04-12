import bcrypt from "bcryptjs";
import joi from "joi";
import jwt from "jsonwebtoken";
import { db } from "../db.js";

export const login = async (req, res) => {
  const { compareSync } = bcrypt;
  try {
    const username = req.body.username;
    const password = req.body.password;

    console.log("Username:", username);
    console.log("Password:", password);

    const loginSchema = joi.object({
      username: joi.string().required(),
      password: joi.string().max(32).required(),
    });

    const validate = loginSchema.validate({ username, password });

    if (validate.error) {
      return res.status(400).json({
        error: validate.error.details[0].message,
      });
    }

    // Query tới collection users
    const user = await db.users.findOne({ username });
    console.log(user);

    if (!user) {
      return res.status(400).json({
        error: "Không tìm thấy người dùng",
      });
    }

    const checkPassword = compareSync(password, user.password);
    console.log("Hashed Password from DB:", checkPassword);
    console.log("Hashed Password from DB:", user.password);
    const accessToken = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "100d",
    });
    console.log(checkPassword);
    console.log("Hashed Password from DB:", user.password);
    console.log("Password Input:", password);

    const { password: userpassword, ...returnUser } = user;
    console.log(user)
    if (checkPassword) {
      return res.status(200).json({
        message: "Đăng nhập thành công",
        user: returnUser,
        accessToken,
      });
    }
    return res.status(401).json({
      error: "Sai mật khẩu",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};
