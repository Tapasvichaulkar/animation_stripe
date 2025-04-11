import { NextResponse } from "next/server";

import User from "@/models/user";
import bcrypt from "bcrypt";
import connection from "@/utils/db";



export async function POST(request) {
    try{
        const {name, email, password} = await request.json()
        const hashedPassword = await bcrypt.hash(password, 5);
        await connection();
        await User.create({name, email, password:hashedPassword});
         return NextResponse.json({message: "User registered successfully!"}, {status: 201});
    }
    catch(err){
        console.log("error", err);
        return NextResponse.json({message: "Server error", error: err.message}, {status: 500});
    }

}
