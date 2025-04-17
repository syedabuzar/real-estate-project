"use client";
import { navLinks } from "@/constant/constant";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => {
      if (pathname === "/home" || pathname === "/") {
        if (window.scrollY >= 90) setNavBg(true);
        if (window.scrollY < 90) setNavBg(false);
      }
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, [pathname]);

  const shouldShowBackground =
    pathname !== "/home" && pathname !== "/" ? true : navBg;

  return (
    <div
      className={`${
        shouldShowBackground ? "bg-white shadow-md" : "fixed"
      } transition-all duration-200 h-[12vh] z-[1000] fixed w-full`}
    >
      <div className="flex items-center h-full justify-between w-[90%] mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/images/kwam-logo.png"
            alt="KWAM Logo"
            width={130}
            height={50}
            className="object-contain"
          />
        </div>

        {/* Navigation Links and Phone Number */}
        <div className="hidden lg:flex items-center space-x-8">
          {/* Navigation Links */}
          {navLinks.map((link) => (
            <div key={link.id} className="relative">
              {link.submenu ? (
                <div className="relative group">
                  <button className="text-[#9e9484] text-base font-semibold hover:text-[#8a8274] transition-colors duration-300">
                    {link.label}
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    {link.submenu.map((subItem) => (
                      <Link
                        key={subItem.id}
                        href={subItem.url || "#"}
                        className="block px-4 py-2 text-[#9e9484] hover:bg-[#9e9484] hover:text-white transition-colors duration-300"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  href={link.url || "#"}
                  className="text-[#9e9484] hover:text-[#8a8274] transition-colors duration-300 font-semibold"
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
          <div className="flex items-center space-x-2">
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 text-[#9e9484] hover:text-[#8a8274] transition-colors duration-300 font-semibold"
            >
              <i className="houzez-icon icon-phone-actions-ring mr-1"></i>
              <span className="font-semibold">+971502554533</span>
              <FaWhatsapp className="text-[#8a8274]" size={25} />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <HiBars3BottomRight
          onClick={openNav}
          className="w-8 h-8 cursor-pointer text-gray-800 lg:hidden"
        />
      </div>
    </div>
  );
};

export default Nav;
