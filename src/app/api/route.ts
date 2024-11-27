import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Hello, this is a GET request!' });
}

export async function POST(request: Request) {
  const body = await request.json();
  const name = body.name || 'Guest';
  return NextResponse.json({ message: `Hello, ${name}!` });
}
