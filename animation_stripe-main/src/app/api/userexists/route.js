import { NextResponse } from "next/server";
import User from "@/models/user";
import connection from "@/utils/db";
import { caesarEncrypt } from "@/app/api/utils/crypto";

export async function POST(req) {
  try {
    await connection();

    const { email } = await req.json();

    // 🔐 Encrypt email before search
    const encryptedEmail = caesarEncrypt(email);

    const user = await User.findOne({ email: encryptedEmail }).select("_id");

    return NextResponse.json({ user });
  } catch (err) {
    console.log("error", err);
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );
  }
}
