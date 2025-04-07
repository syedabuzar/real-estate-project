"use client";
import React, { useEffect, useState } from "react";
import SectionHeading from "@/components/Helper/SectionHeading";
import HotelSlider from "./HotelSlider";

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

  useEffect(() => {
    const fetchHotels = async () => {
      const response = await fetch("/api/hotels");
      const data = await response.json();
      setHotels(data);
    };
    fetchHotels();
  }, []);

  return (
    <div className="pt-20 pb-20">
      <SectionHeading heading="Recommended Hotels" />
      <div className="mt-16 w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-center">
        {hotels.map((hotel) => (
          <div key={hotel.id}>
            <HotelSlider hotel={hotel} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hotel;
