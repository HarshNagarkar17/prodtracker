import db from "@/lib/db/db";
import { users } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) return new NextResponse("email is required", { status: 400 });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new NextResponse("Please enter valid email address", {
        status: 400,
      });
    }

    const existingUser = await db
      .select()
      .from(users)
      .where(eq(users.email, email));

    if (existingUser.length > 0) {
      return new NextResponse("You are already registered", { status: 200 });
    }

    await db.insert(users).values({ email });
    return new NextResponse("Thank you for joining the waitlist!", {
      status: 200,
    });
  } catch (error) {
    return new NextResponse("error", { status: 500 });
  }
}
