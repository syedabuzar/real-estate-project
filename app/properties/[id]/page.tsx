import Image from "next/image";
import { FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt } from "react-icons/fa";
import { sampleProperties, Property } from "@/app/data/sampleProperties";

// ✅ Mark the function as `async` and await `params`
const PropertyDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params; // ✅ unwrap the params promise

  const property = sampleProperties.find((p: Property) => p.id === id);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Property not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Property Image */}
          <div className="relative h-[500px] w-full">
            <Image
              src={property.image}
              alt={property.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Property Details */}
          <div className="p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {property.title}
                </h1>
                <div className="flex items-center text-gray-600">
                  <FaMapMarkerAlt className="text-[#9e9484] mr-2" />
                  <span>{property.location}</span>
                </div>
              </div>
              <p className="text-[#9e9484] font-bold text-2xl">
                {property.type === "sale" ? "$" : ""}
                {property.price.toLocaleString()}
                {property.type === "rent" ? "/month" : ""}
              </p>
            </div>

            {/* Property Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center space-x-2">
                <FaBed className="text-[#9e9484] text-xl" />
                <div>
                  <p className="text-gray-600">Bedrooms</p>
                  <p className="font-semibold">{property.bedrooms}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <FaBath className="text-[#9e9484] text-xl" />
                <div>
                  <p className="text-gray-600">Bathrooms</p>
                  <p className="font-semibold">{property.bathrooms}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <FaRulerCombined className="text-[#9e9484] text-xl" />
                <div>
                  <p className="text-gray-600">Area</p>
                  <p className="font-semibold">{property.area} sqft</p>
                </div>
              </div>
            </div>

            {/* Property Description */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Description
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {property.description}
              </p>
            </div>

            {/* Contact Button */}
            <button className="w-full bg-[#9e9484] text-white py-3 rounded-lg font-semibold hover:bg-[#8a8274] transition-colors duration-300">
              Contact Agent
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsPage;
