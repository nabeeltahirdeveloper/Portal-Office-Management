import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/dbConnects";
import User from "@/models/User";

export async function POST(req: Request) {
  try {
    await dbConnect();

    const body = await req.json();
    const { fullName, phone, email, password, role } = body;
    console.log("Received role:", role);


    // Validate required fields
    if (!fullName || !phone || !email || !password || !role) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    // Phone validation (Pakistan — 11 digits)
    if (!/^\d{11}$/.test(phone)) {
      return NextResponse.json(
        { success: false, message: "Phone number must be 11 digits" },
        { status: 400 }
      );
    }

    // Check existing email
    if (await User.findOne({ email })) {
      return NextResponse.json(
        { success: false, message: "Email already registered" },
        { status: 409 }
      );
    }

    // Check existing phone
    if (await User.findOne({ phone })) {
      return NextResponse.json(
        { success: false, message: "Phone already registered" },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = await User.create({
      fullName,
      phone,
      email,
      password: hashedPassword,
      role,
    });
    

    return NextResponse.json(
      {
        success: true,
        message: "Account created successfully",
        user: {
          id: newUser._id.toString(),
          fullName: newUser.fullName,
          phone: newUser.phone,
          email: newUser.email,
          role: newUser.role,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}
