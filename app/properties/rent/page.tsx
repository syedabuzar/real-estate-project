"use client";
import PropertyCard from "@/components/Properties/PropertyCard";
import React, { useState } from "react";
import { sampleProperties } from "@/app/data/sampleProperties";

const RentPropertiesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const rentProperties = sampleProperties.filter(
    (property) => property.type === "rent"
  );

  const filteredProperties = rentProperties.filter((property) => {
    const matchesSearch =
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBedrooms =
      bedrooms === "" || property.bedrooms === parseInt(bedrooms);
    const matchesPrice =
      priceRange === "" ||
      (priceRange === "low" && property.price < 2000) ||
      (priceRange === "medium" &&
        property.price >= 2000 &&
        property.price < 4000) ||
      (priceRange === "high" && property.price >= 4000);

    return matchesSearch && matchesBedrooms && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-12">
      <div className="w-[90%] mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Properties for Rent
        </h1>

        {/* Search and Filter Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Search by title or location..."
              className="border border-gray-300 rounded-lg px-4 py-2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
              className="border border-gray-300 rounded-lg px-4 py-2"
              value={bedrooms}
              onChange={(e) => setBedrooms(e.target.value)}
            >
              <option value="">All Bedrooms</option>
              <option value="1">1 BHK</option>
              <option value="2">2 BHK</option>
              <option value="3">3 BHK</option>
              <option value="4">4 BHK</option>
            </select>
            <select
              className="border border-gray-300 rounded-lg px-4 py-2"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
            >
              <option value="">All Prices</option>
              <option value="low">Under $2,000</option>
              <option value="medium">$2,000 - $4,000</option>
              <option value="high">Over $4,000</option>
            </select>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No properties found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RentPropertiesPage;
