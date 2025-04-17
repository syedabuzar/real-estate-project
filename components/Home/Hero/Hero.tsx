"use client";
// import SearchBox from "@/components/Helper/SearchBox";
// import Link from "next/link";
import React from "react";
import SearchBox from "@/components/Helper/SearchBox";
// import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative w-full h-[120vh] sm:h-[100vh]">
      <div className="absolute top-0 left-0 w-full h-full  backdrop-opacity-70">
        {/* Background Image */}
        <img
          // width={400}
          // height={400}
          src={"/images/banner-dark.jpg"}
          alt="Hero Background"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        {/* <div className="absolute inset-0  bg-opacity-50" /> */}

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-white">
          <div className="w-[90%] mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional. Transparent. Authentic.
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white">
              The award-winning brokerage provides a new standard of service.
            </p>

            {/* Search Box */}
            <div className="mt-8">
              <SearchBox />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
