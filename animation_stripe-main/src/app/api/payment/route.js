import { NextResponse } from "next/server";
import connection from "@/utils/db";
import { caesarEncrypt, md5Hash } from "@/app/api/utils/crypto"; // optional
import CryptoJS from "crypto-js"; // AES
import UserPayment from "@/models/payment"; // Create this model

// Rail Fence Cipher
function railFenceEncrypt(text, key = 3) {
  if (!text) return "";
  const rail = Array.from({ length: key }, () => []);
  let dir = 1, row = 0;
  for (let char of text.toString()) {
    rail[row].push(char);
    if (row === 0) dir = 1;
    else if (row === key - 1) dir = -1;
    row += dir;
  }
  return rail.flat().join("");
}

export async function POST(req) {
  try {
    await connection();
    const { amount, cardNumber } = await req.json();

    // Encrypt data
    const encryptedAmount = railFenceEncrypt(amount);
    const secretKey = "myAESsecret123"; // 16 chars
    const encryptedCard = CryptoJS.AES.encrypt(cardNumber, secretKey).toString();

    // Save to MongoDB
    await UserPayment.create({
      amount: encryptedAmount,
      cardNumber: encryptedCard,
    });

    return NextResponse.json({ message: "Payment stored securely!" });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
