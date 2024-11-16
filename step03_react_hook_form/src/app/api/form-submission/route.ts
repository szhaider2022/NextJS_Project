import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const req=await request.json();

    if (req.email & req.password) {
        console.log("You are logged in.");
        return NextResponse.json({message: "user logged in"});
    } else {
        return NextResponse.json({message: "Invalid email or password"});
    }
    }
