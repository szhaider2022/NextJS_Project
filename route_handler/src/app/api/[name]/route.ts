import { NextRequest, NextResponse } from "next/server";

interface IParams {
    params: {name: string}
}

export async function GET(request: NextRequest, {params}: IParams) {
    return NextResponse.json({
        From: params.name,
        Message: "Greeting from Pakistan",
        RequestType: "GET",
    });
}