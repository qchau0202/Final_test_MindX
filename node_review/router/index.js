import express from "express"
import userRouter from "./user.js"
import inventoryRouter from "./inventory.js"
import descriptionRouter from "./description.js"
const router = express.Router()

router.use("/user", userRouter)
router.use("/inventory", inventoryRouter)
router.use("/description", descriptionRouter)
export default router