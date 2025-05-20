import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();

  // Log to console (only you can see this in your terminal)
  console.log("Sketch received:", data);

  return NextResponse.json({ message: "Sketch received!" });
}
