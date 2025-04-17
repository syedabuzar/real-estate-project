import React from "react";

type Props = {
  heading: string;
};

const SectionHeading = ({ heading }: Props) => {
  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-xl sm:text-3xl text-black font-bold">{heading}</h1>
      <p className="mt-2 text-gray-700 sm:text-base text-sm font-medium">
        Lorem ipsum dolor sit amet consdasf.
      </p>
    </div>
  );
};

export default SectionHeading;
