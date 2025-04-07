import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Review from "@/models/Review";

export async function GET() {
  try {
    await connectDB();
    const reviews = await Review.find({});
    return NextResponse.json(reviews);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch reviews" },
      { status: 500 }
    );
  }
}
