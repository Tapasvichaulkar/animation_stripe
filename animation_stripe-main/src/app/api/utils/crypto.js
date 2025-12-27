import crypto from "crypto";

// Caesar Cipher
export function caesarEncrypt(text, shift = 3) {
  return text
    .split("")
    .map((char) =>
      String.fromCharCode(char.charCodeAt(0) + shift)
    )
    .join("");
}

// MD5 Hash
export function md5Hash(text) {
  return crypto.createHash("md5").update(text).digest("hex");
}
