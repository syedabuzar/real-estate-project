"use client";
import React, { useEffect, useState } from "react";
import SectionHeading from "@/components/Helper/SectionHeading";
import HotelSlider from "./HotelSlider";
import { Skeleton } from "@/components/ui/skeleton";

const Hotel = () => {
  const [hotels, setHotels] = useState<
    Array<{
      id: number;
      image: string;
      name: string;
      location: string;
      rating: number;
      reviews: string;
      price: string;
    }>
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        // Check if data exists in localStorage
        const cachedData = localStorage.getItem("hotelsData");
        const cachedTimestamp = localStorage.getItem("hotelsTimestamp");
        const now = new Date().getTime();

        if (cachedData && cachedTimestamp) {
          const timestamp = parseInt(cachedTimestamp);
          // Use cached data if it's less than 5 minutes old
          if (now - timestamp < 5 * 60 * 1000) {
            setHotels(JSON.parse(cachedData));
            setLoading(false);
            return;
          }
        }

        const response = await fetch("/api/hotels");
        const data = await response.json();
        setHotels(data);
        setLoading(false);

        // Cache the data
        localStorage.setItem("hotelsData", JSON.stringify(data));
        localStorage.setItem("hotelsTimestamp", now.toString());
      } catch (error) {
        console.error("Error fetching hotels:", error);
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  return (
    <div className="pt-20 pb-20 bg-gray-50">
      <SectionHeading heading="Recommended Hotels" />
      <div className="mt-16 w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-center">
        {loading
          ? // Loading skeleton
            Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="space-y-4">
                <Skeleton className="h-[200px] w-full rounded-lg" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ))
          : hotels.map((hotel) => (
              <div key={hotel.id}>
                <HotelSlider hotel={hotel} />
              </div>
            ))}
      </div>
    </div>
  );
};

export default Hotel;
