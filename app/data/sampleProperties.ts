export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  type: "sale" | "rent";
  description: string;
}

export const sampleProperties: Property[] = [
  // Properties for Sale
  {
    id: "s1",
    title: "Luxury 2BHK Apartment",
    price: 450000,
    location: "Downtown, New York",
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    image: "/images/d1.jpg",
    type: "sale",
    description:
      "Beautiful luxury apartment in the heart of downtown with stunning city views. Features modern amenities and high-end finishes throughout.",
  },
  {
    id: "s2",
    title: "Modern 3BHK Villa",
    price: 750000,
    location: "Beverly Hills, Los Angeles",
    bedrooms: 3,
    bathrooms: 3,
    area: 2500,
    image: "/images/d2.jpg",
    type: "sale",
    description:
      "Contemporary villa with spacious living areas, private garden, and pool. Perfect for family living with premium finishes.",
  },
  {
    id: "s3",
    title: "Cozy 1BHK Studio",
    price: 250000,
    location: "Brooklyn, New York",
    bedrooms: 1,
    bathrooms: 1,
    area: 800,
    image: "/images/d3.jpg",
    type: "sale",
    description:
      "Charming studio apartment in a vibrant neighborhood. Ideal for singles or couples with modern amenities.",
  },
  {
    id: "s4",
    title: "Spacious 4BHK Penthouse",
    price: 1200000,
    location: "Manhattan, New York",
    bedrooms: 4,
    bathrooms: 4,
    area: 3500,
    image: "/images/d4.jpg",
    type: "sale",
    description:
      "Luxurious penthouse with panoramic city views. Features include private terrace, high-end appliances, and smart home technology.",
  },
  {
    id: "s5",
    title: "Elegant 3BHK Townhouse",
    price: 650000,
    location: "San Francisco, California",
    bedrooms: 3,
    bathrooms: 2.5,
    area: 2200,
    image: "/images/d5.jpg",
    type: "sale",
    description:
      "Stunning townhouse in a prime location with modern architecture and premium finishes throughout.",
  },
  // Properties for Rent
  {
    id: "r1",
    title: "Modern 2BHK Apartment",
    price: 2500,
    location: "Miami Beach, Florida",
    bedrooms: 2,
    bathrooms: 2,
    area: 1100,
    image: "/images/d6.jpg",
    type: "rent",
    description:
      "Contemporary apartment steps from the beach with ocean views and resort-style amenities.",
  },
  {
    id: "r2",
    title: "Luxury 3BHK Condo",
    price: 3500,
    location: "Chicago, Illinois",
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    image: "/images/d7.jpg",
    type: "rent",
    description:
      "High-end condo in a prestigious building with city views and premium amenities.",
  },
  {
    id: "r3",
    title: "Charming 1BHK Studio",
    price: 1500,
    location: "Seattle, Washington",
    bedrooms: 1,
    bathrooms: 1,
    area: 700,
    image: "/images/d8.jpg",
    type: "rent",
    description:
      "Cozy studio in a vibrant neighborhood with modern finishes and convenient location.",
  },
  {
    id: "r4",
    title: "Spacious 4BHK House",
    price: 4500,
    location: "Austin, Texas",
    bedrooms: 4,
    bathrooms: 3,
    area: 2800,
    image: "/images/h1.jpg",
    type: "rent",
    description:
      "Family-friendly house with large backyard and modern amenities in a quiet neighborhood.",
  },
  {
    id: "r5",
    title: "Elegant 2BHK Apartment",
    price: 2800,
    location: "Boston, Massachusetts",
    bedrooms: 2,
    bathrooms: 2,
    area: 1300,
    image: "/images/h2.jpg",
    type: "rent",
    description:
      "Sophisticated apartment in a historic building with modern updates and premium features.",
  },
];
