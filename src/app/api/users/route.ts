// app/api/users/route.ts
import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnects";
import User from "@/models/User";

export async function GET(req: Request) {
  try {
    await dbConnect();

    const url = new URL(req.url);
    const role = url.searchParams.get("role"); // Get role from query ?role=hr

    // Build query
    const query: any = {};
    if (role) {
      query.role = role; // filter by role if provided
    }

    // Fetch users from DB
    const users = await User.find(query).select("_id fullName email phone role");

    return NextResponse.json({ success: true, users });
  } catch (error) {
    console.error("Fetch users error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch users" },
      { status: 500 }
    );
  }
}
