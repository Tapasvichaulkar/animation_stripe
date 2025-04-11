import { NextResponse } from "next/server";
import User from "@/models/user";
import connection from "@/utils/db";

export async function POST(req) {
  try {
    await connection();
    const { email } = await req.json();
    const user = await User.findOne({ email }).select("_id");

    console.log("user:", user);
    return NextResponse.json({ user });
  } catch (err) {
    console.log("error", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
