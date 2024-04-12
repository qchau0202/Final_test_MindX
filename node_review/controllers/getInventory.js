import { db } from "../db.js";

const getInventory = async (req, res) => {
  try {
    // Lấy sản phẩm trong inventory với quantity < 100
    const products = await db.inventories
      .find({ instock: { $lt: 100 } })
      .toArray();
    res.json(products);
  } catch (error) {
    res.status(500).json(error);
  }
};

export default getInventory;
