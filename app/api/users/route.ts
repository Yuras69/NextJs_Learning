import { db } from "@/lib/db";
import { users } from "@/lib/db/schema";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const data = await db.select().from(users);

  return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  const { email } = body;

  await db.insert(users).values({
    name: email.split("@")[0], // temporary name
    email,
  });

  return NextResponse.json({
    message: "User created successfully",
  });
}