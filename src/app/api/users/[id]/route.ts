import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import dbConnect from "@/lib/dbConnects";
import User from "@/models/User";

export async function PATCH(
  req: Request,
  ctx: { params: Promise<{ id: string }> }
) {
  const { id } = await ctx.params;
  console.log("Received ID:", id);

  try {
    await dbConnect();

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, message: "Invalid user id" },
        { status: 400 }
      );
    }

    const body = await req.json();
    const { fullName, phone, email, password, role } = body;

    const existingUser = await User.findById(id);
    if (!existingUser)
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );

    if (
      email &&
      email !== existingUser.email &&
      (await User.findOne({ email }))
    ) {
      return NextResponse.json(
        { success: false, message: "Email already registered" },
        { status: 409 }
      );
    }

    if (
      phone &&
      phone !== existingUser.phone &&
      (await User.findOne({ phone }))
    ) {
      return NextResponse.json(
        { success: false, message: "Phone already registered" },
        { status: 409 }
      );
    }

    const hashedPassword = password
      ? await bcrypt.hash(password, 10)
      : existingUser.password;

    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        fullName,
        email,
        phone,
        password: hashedPassword,
        role: role || existingUser.role,
      },
      { new: true }
    );

    return NextResponse.json({
      success: true,
      message: "User updated successfully",
      user: {
        id: updatedUser!._id.toString(),
        fullName: updatedUser!.fullName,
        email: updatedUser!.email,
        phone: updatedUser!.phone,
        role: updatedUser!.role,
      },
    });
  } catch (error) {
    console.error("Update error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}

/* ============================================================
   DELETE User
   ============================================================ */

export async function DELETE(
  req: Request,
  ctx: { params: Promise<{ id: string }> }
) {
  const { id } = await ctx.params;
  console.log("Deleting ID:", id);

  try {
    await dbConnect();

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, message: "Invalid user id" },
        { status: 400 }
      );
    }

    const deleted = await User.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    console.error("Delete error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}


