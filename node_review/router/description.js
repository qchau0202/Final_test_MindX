import express from "express";
import getDescription from './../controllers/getDescription.js';
const descriptionRouter = express.Router();

// Địa chỉ của description
descriptionRouter.get("/", getDescription);

export default descriptionRouter;
