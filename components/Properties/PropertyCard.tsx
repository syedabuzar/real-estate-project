import Image from "next/image";
import Link from "next/link";
import { FaBed, FaBath, FaRulerCombined } from "react-icons/fa";

type PropertyCardProps = {
  id: string;
  title: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
};

const PropertyCard = ({
  id,
  title,
  price,
  location,
  bedrooms,
  bathrooms,
  area,
  image,
}: PropertyCardProps) => {
  return (
    <Link href={`/properties/${id}`}>
      <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="relative h-64 w-full">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
          <p className="text-[#9e9484] font-bold text-lg mb-2">
            ${price.toLocaleString()}
          </p>
          <p className="text-gray-600 mb-4">{location}</p>
          <div className="flex items-center justify-between text-gray-600">
            <div className="flex items-center space-x-2">
              <FaBed className="text-[#9e9484]" />
              <span>{bedrooms} Beds</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaBath className="text-[#9e9484]" />
              <span>{bathrooms} Baths</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaRulerCombined className="text-[#9e9484]" />
              <span>{area} sqft</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
