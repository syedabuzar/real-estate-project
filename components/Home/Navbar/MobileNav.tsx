"use client";
import { navLinks } from "@/constant/constant";
import Link from "next/link";
import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

type Props = {
  closeNav: () => void;
  showNav: boolean;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div>
      <div
        className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-[1002] bg-black opacity-70 w-full h-screen`}
      ></div>
      <div
        className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-black space-y-6 z-[1050]`}
      >
        {/* Logo at the top */}
        <div className="px-6 py-4 border-b border-gray-700">
          <Image
            src="/images/kwam-logo-full.png"
            alt="KWAM Logo"
            width={150}
            height={50}
            className="object-contain"
          />
        </div>

        {/* Navigation Links */}
        <div className="px-6 space-y-4">
          {navLinks.map((link) => (
            <div key={link.id}>
              {link.submenu ? (
                <div>
                  <button
                    onClick={() =>
                      setActiveSubmenu(
                        activeSubmenu === link.id.toString()
                          ? null
                          : link.id.toString()
                      )
                    }
                    className="text-white w-fit text-[20px] border-b-[1.5px] pb-1 border-white sm:text-[30px] flex items-center"
                  >
                    {link.label}
                    <span className="ml-2 text-sm">
                      {activeSubmenu === link.id.toString() ? "▼" : "▶"}
                    </span>
                  </button>
                  {activeSubmenu === link.id.toString() && (
                    <div className="ml-4 mt-2 space-y-2 bg-black p-3 rounded-lg">
                      {link.submenu.map((subItem) => (
                        <Link
                          key={subItem.id}
                          href={subItem.url || "#"}
                          onClick={closeNav}
                          className="block text-[16px] sm:text-[20px] text-gray-300 hover:text-[#9e9484] transition-colors duration-300"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link href={link.url || "#"} onClick={closeNav}>
                  <p className="text-white w-fit text-[20px] border-b-[1.5px] pb-1 border-white sm:text-[30px] hover:text-[#9e9484] transition-colors duration-300">
                    {link.label}
                  </p>
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Phone Number */}
        <div className="px-6 py-4 border-t border-gray-700">
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-white hover:text-[#9e9484] transition-colors duration-300"
          >
            <i className="houzez-icon icon-phone-actions-ring mr-1"></i>
            <span className="font-medium text-[20px] sm:text-[24px]">
              +1 234 567 890
            </span>
            <FaWhatsapp className="text-green-500 ml-1" />
          </a>
        </div>

        <CgClose
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6"
        />
      </div>
    </div>
  );
};

export default MobileNav;
