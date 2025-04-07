import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Hotel from "@/models/Hotel";

export async function GET() {
  try {
    await connectDB();
    const hotels = await Hotel.find({});
    // Transform MongoDB documents to include id field
    const transformedHotels = hotels.map((hotel) => ({
      ...hotel.toObject(),
      id: hotel._id.toString(),
    }));
    return NextResponse.json(transformedHotels);
  } catch (error) {
    console.error("Error fetching hotels:", error);
    return NextResponse.json(
      { error: "Failed to fetch hotels" },
      { status: 500 }
    );
  }
}
