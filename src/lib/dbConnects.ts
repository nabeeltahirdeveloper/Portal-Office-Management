import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("Already Connected to database");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || "");
    connection.isConnected = db.connections[0].readyState;

    console.log("DB Connected Successfully", process.env.MONGODB_URI);
// Log database name
    const dbName = mongoose.connection.db.databaseName;
    console.log(`Connected to Database: ${dbName}`);

    // Get all collection names
    const collections = await mongoose.connection.db.listCollections().toArray();

    for (const collection of collections) {
      const name = collection.name;
      const docs = await mongoose.connection.db.collection(name).find({}).toArray();
      console.log(`\nCollection: ${name}`);
      console.log(docs);
    }
  } catch (error) {
    console.log("Database connection failed", error);
    process.exit(1);
  }
}

export default dbConnect;
