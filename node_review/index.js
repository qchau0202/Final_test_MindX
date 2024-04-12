import express from "express";
import { connectToDb } from "./db.js";
import dotenv from "dotenv"
import router from "./router/index.js";

const app = express();
const PORT = 3000
dotenv.config()
connectToDb();

app.use(express.json())
app.use(router)

app.listen(PORT, () => {
  console.log("App is running at 3000");
});
