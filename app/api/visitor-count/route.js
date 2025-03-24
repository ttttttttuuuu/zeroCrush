import { getVisitorCount, incrementVisitorCount } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const count = getVisitorCount();
    return NextResponse.json({ count });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to get visitor count" },
      { status: 500 }
    );
  }
}

export async function POST() {
  try {
    const count = incrementVisitorCount();
    return NextResponse.json({ count });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update visitor count" },
      { status: 500 }
    );
  }
}
