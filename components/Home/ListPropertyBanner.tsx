import React from "react";
import { Check } from "lucide-react";

const ListPropertyBanner = () => {
  const FeatureItem = ({
    label,
    noCheck = false,
  }: {
    label: string;
    noCheck?: boolean;
  }) => (
    <div className="flex items-center space-x-2">
      {!noCheck && <Check className="text-green-400 w-5 h-5" />}
      <span>{label}</span>
    </div>
  );

  return (
    <section className="relative w-full h-[80vh] text-white overflow-hidden flex items-center justify-center">
      {/* Wavy Background SVG or CSS background */}
      <div className="absolute inset-0 bg-[url('/images/wave.svg')] bg-cover bg-center"></div>

      {/* Overlay Content */}
      <div className="relative z-10 max-w-4xl px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
          List your property
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Take your property exclusive with Royal Pearl and enjoy all the
          exclusive benefits.
        </p>

        <div className="flex flex-wrap justify-center gap-6 text-lg font-medium mb-10">
          <FeatureItem label="Dedicated broker" />
          <FeatureItem label="Professional Photography" />
          <FeatureItem label="Upgraded listings" />
          <FeatureItem label="and much more..." noCheck />
        </div>

        <button className="bg-white text-black px-8 py-3 font-semibold uppercase tracking-wide hover:bg-gray-200 transition rounded-sm">
          Book a valuation
        </button>
      </div>
    </section>
  );
};

export default ListPropertyBanner;
