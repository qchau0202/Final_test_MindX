import express from "express"
import { login } from "../controllers/login.js"
const userRouter = express.Router()

// Địa chỉ của login
userRouter.post("/login", login)

export default userRouter