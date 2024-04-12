import express from "express";
import getInventory from "../controllers/getInventory.js";
const inventoryRouter = express.Router();

// Địa chỉ của product
inventoryRouter.get("/products", getInventory);

export default inventoryRouter;
