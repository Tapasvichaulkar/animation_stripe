import { NextResponse } from "next/server";
import User from "@/models/user";
import connection from "@/utils/db";
import { caesarEncrypt, md5Hash } from "@/app/api/utils/crypto";

export async function POST(request) {
  try {
    const { name, email, password } = await request.json();

    await connection();

    // 🔐 Encrypt data
    const encryptedEmail = caesarEncrypt(email);
    const hashedPassword = md5Hash(password);

    await User.create({
      name,
      email: encryptedEmail,
      password: hashedPassword,
    });

    return NextResponse.json(
      { message: "User registered successfully!" },
      { status: 201 }
    );
  } catch (err) {
    console.log("error", err);
    return NextResponse.json(
      { message: "Server error", error: err.message },
      { status: 500 }
    );
  }
}
