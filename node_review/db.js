import { MongoClient } from "mongodb";

const db = {};

const connectToDb = async (req,res) => {
  // const client = new MongoClient("mongodb://localhost:27017");
  const client = new MongoClient("mongodb+srv://web77:senhsenh02@web77.c28ns4g.mongodb.net/")
  try {
    await client.connect()
    const database = client.db("test");
    db.inventories = database.collection("inventories");
    db.orders = database.collection("orders");
    db.users = database.collection("users");
    console.log("Connected")
  } catch (error) {
    res.status(500).json(error)
  }

};

export { connectToDb, db };
