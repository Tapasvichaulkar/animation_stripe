import connection from "@/utils/db";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/user";
import { caesarEncrypt, md5Hash } from "@/app/api/utils/crypto";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          await connection();

          // 🔐 Encrypt input
          const encryptedEmail = caesarEncrypt(email);
          const hashedPassword = md5Hash(password);

          const user = await User.findOne({
            email: encryptedEmail,
            password: hashedPassword,
          });

          if (!user) {
            return null;
          }

          return user;
        } catch (error) {
          console.log("Auth error:", error);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
