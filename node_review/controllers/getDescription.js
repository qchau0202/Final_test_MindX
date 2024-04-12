import { db } from "../db.js";

const getDescription = async (req, res) => {
  try {
    const orders = await db.orders.find().toArray();
    const inventory = await db.inventory.find().toArray();
  } catch (error) {
    res.status(500).json(error);
  }
};

export default getDescription;
