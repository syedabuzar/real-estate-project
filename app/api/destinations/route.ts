import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Destination from "@/models/Destination";

export async function GET() {
  try {
    await connectDB();
    const destinations = await Destination.find({});
    return NextResponse.json(destinations);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch destinations" },
      { status: 500 }
    );
  }
}
