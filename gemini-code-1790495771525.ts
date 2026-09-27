import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // You can connect free Airtable, Google Sheets, or Supabase here.
    console.log(`[Vaani AI Waitlist Signup]: ${email}`);

    return NextResponse.json({ success: true, message: "Welcome to the Vaani AI early access list!" });
  } catch {
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}