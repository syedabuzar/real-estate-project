"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import CustomDropdown from "@/components/ui/CustomDropdown";

const SearchBox = () => {
  const [searchType, setSearchType] = useState("Buy");
  const [bedrooms, setBedrooms] = useState("Bedrooms");
  const [priceRange, setPriceRange] = useState("Price Range");
  const [propertyType, setPropertyType] = useState("All Types");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const searchTypes = ["Buy", "Sell"];
  const bedroomOptions = ["1+", "2+", "3+", "4+", "5+", "6+", "7+", "8+"];
  const priceRanges = [
    "Any",
    "Under 500,000",
    "500,000 - 1,000,000",
    "1,000,000 - 2,000,000",
    "2,000,000 - 5,000,000",
    "5,000,000+",
  ];
  const propertyTypes = [
    "All Types",
    "Apartment",
    "Duplex",
    "Townhouse",
    "Penthouse",
    "Plot",
    "Villa",
    "Land",
  ];

  return (
    <div className="search-form-features flex flex-col xl:flex-row items-center justify-between bg-white rounded-lg p-4 w-full shadow-lg">
      {/* Mobile Menu Button */}
      <div className="xl:hidden w-full mb-4">
        <button
          className="w-full flex items-center justify-between p-2 border rounded-lg"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span>Search Options</span>
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`transform transition-transform duration-200 ${
              isMobileMenuOpen ? "rotate-180" : ""
            }`}
          >
            <path
              d="M1 1L6 6L11 1"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Content */}
      <div
        className={`w-full xl:hidden space-y-4 mb-4 ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="grid grid-cols-2 gap-4">
          <CustomDropdown
            options={searchTypes}
            value={searchType}
            onChange={setSearchType}
            width="w-full"
          />
          <CustomDropdown
            options={bedroomOptions}
            value={bedrooms}
            onChange={setBedrooms}
            width="w-full"
          />
          <CustomDropdown
            options={priceRanges}
            value={priceRange}
            onChange={setPriceRange}
            width="w-full"
          />
          <CustomDropdown
            options={propertyTypes}
            value={propertyType}
            onChange={setPropertyType}
            width="w-full"
          />
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden xl:flex items-center w-full">
        {/* Buy/Sell Dropdown */}
        <div className="search-buyrent-wrapper ms-5 flex items-center">
          <div className="select-control">
            <CustomDropdown
              options={searchTypes}
              value={searchType}
              onChange={setSearchType}
              width="w-[80px]"
            />
          </div>
          <div className="search-divider h-6 w-px bg-gray-300 mx-4"></div>
        </div>

        {/* Location Input */}
        <div className="search-bar-wrapper flex-1 max-w-[400px]">
          <div className="form-group">
            <input
              type="text"
              placeholder="City, community or area"
              className="w-full p-2 border-0 focus:outline-none focus:ring-0 text-gray-800 placeholder-gray-500"
            />
          </div>
        </div>

        {/* Bedrooms Dropdown */}
        <div className="search-bedrooms-wrapper flex items-center">
          <div className="search-divider h-6 w-px bg-gray-300 mx-4"></div>
          <div className="select-control">
            <CustomDropdown
              options={bedroomOptions}
              value={bedrooms}
              onChange={setBedrooms}
              width="w-[120px]"
            />
          </div>
        </div>

        {/* Price Range Dropdown */}
        <div className="search-price-wrapper pe-2">
          <div className="price-filter-dropdown flex items-center">
            <div className="search-divider h-6 w-px bg-gray-300 mx-4"></div>
            <div className="select-control">
              <CustomDropdown
                options={priceRanges}
                value={priceRange}
                onChange={setPriceRange}
                width="w-[180px]"
              />
            </div>
          </div>
        </div>

        {/* Property Type Dropdown */}
        <div className="search-property-wrapper flex items-center">
          <div className="search-divider h-6 w-px bg-gray-300 mx-4"></div>
          <div className="select-control">
            <CustomDropdown
              options={propertyTypes}
              value={propertyType}
              onChange={setPropertyType}
              width="w-[150px]"
            />
          </div>
        </div>
      </div>

      {/* Search Button */}
      <div className="search-btn-wrapper w-full xl:w-[200px] mt-4 xl:mt-0 xl:ml-4">
        <button className="search-btn bg-[#9e9484] text-white p-2 rounded-lg hover:bg-[#8a8274] transition-colors duration-300 flex items-center justify-center gap-2 w-full xl:w-full">
          <FaSearch />
          <span>Search</span>
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
