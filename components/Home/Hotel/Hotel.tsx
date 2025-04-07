import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import HotelSlider from "./HotelSlider";
import { hotelsData } from "@/data/data";

const Hotel = () => {
  return (
    <div className="pt-20 pb-20">
      <SectionHeading heading="Recommended Hotels" />
      <div className="mt-16 w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-center">
        {hotelsData.map((data) => {
          return (
            <div key={data.id}>
              <HotelSlider hotel={data} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hotel;
