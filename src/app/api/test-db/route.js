import dbConnect from "@/lib/dbConnects";

export async function GET() {
  await dbConnect();
  return Response.json({ ok: true, message: "MongoDB Connected" });
}
