import { NextResponse, NextRequest } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Hello, World!" });
}

export async function POST(request: NextRequest) {
  const data = await request.json();
  return NextResponse.json({ message: "Data received", data });
}