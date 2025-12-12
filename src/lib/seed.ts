// import mongoose from "mongoose";
// import bcrypt from "bcryptjs";
// import User from "../models/User"; // ✅ Add .js extension for ESM

// async function seedUsers() {
//   try {
//     console.log("⏳ Connecting to MongoDB...");
//     await mongoose.connect(process.env.MONGODB_URI || "");

//     console.log("🚀 Seeding users...");

//     await User.deleteMany();

//     const hashedPassword = await bcrypt.hash("password123", 10);

//     await User.insertMany([
//       {
//         fullName: "Test User",
//         email: "test@example.com",
//         phone: "03000000000",
//         password: hashedPassword,
//       },
//       {
//         fullName: "Admin User",
//         email: "admin@example.com",
//         phone: "03110000000",
//         password: hashedPassword,
//       },
//     ]);

//     console.log("🌱 Seeding completed!");
//     process.exit(0);
//   } catch (error) {
//     console.error("❌ Seeding failed", error);
//     process.exit(1);
//   }
// }

// seedUsers();
