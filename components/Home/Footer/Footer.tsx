import Link from "next/link";
import React from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto items-start grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="space-y-5">
          <h1 className="text-lg font-bold">Comapny</h1>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            About Us
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            Careers
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            Blogs
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            Gift Cards
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            Magazine
          </p>
        </div>
        <div className="space-y-5">
          <h1 className="text-lg font-bold">Comapny</h1>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            About Us
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            Careers
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            Blogs
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            Gift Cards
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            Magazine
          </p>
        </div>
        <div className="space-y-5">
          <h1 className="text-lg font-bold">Comapny</h1>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            About Us
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            Careers
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            Blogs
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            Gift Cards
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            Magazine
          </p>
        </div>
        <div>
          <h1 className="text-lg font-bold">Contact Us</h1>
          <div className="mt-6">
            <h1 className=" text-sm text-gray-600">Our Mobile Number</h1>
            <h1 className="text-base font-bold text-blue-950 mt-1">
              1234567890
            </h1>
          </div>
          <div className="mt-6">
            <h1 className=" text-sm text-gray-600">Our Email</h1>
            <h1 className="text-base font-bold text-blue-950 mt-1">
              abc@gmail.com
            </h1>
          </div>
        </div>
      </div>
      <div className="mt-8 w-[80%] mx-auto border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
        <p className="text-center md:text-left">
          Copyright 2025 Abuzar. All Rights Reserved
        </p>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <span>Social : </span>
          <Link href="#" className="text-gray-500 hover:text-gray-800">
            <FaFacebook />
          </Link>
          <Link href="#" className="text-gray-500 hover:text-gray-800">
            <FaTwitter />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
