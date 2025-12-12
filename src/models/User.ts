import mongoose, { Schema, model, Document, Model } from "mongoose";

// TypeScript interface for User
export interface IUser extends Document {
  fullName: string;
  email: string;
  phone: string;
  password: string;
  role: string;
}

// Mongoose schema definition
const userSchema = new Schema<IUser>(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["hr", "employee", "project_manager", "admin"],
      required: true,
    },
  },
  { timestamps: true }
);

// Create model if it doesn't already exist
const User: Model<IUser> =
  mongoose.models.User || model<IUser>("User", userSchema);

export default User;
