import React from "react";
import Hero from "./Hero/Hero";
import Destination from "./Destination/Destination";
import Hotel from "./Hotel/Hotel";
import WhyChoose from "./WhyChoose/WhyChoose";
import Review from "./Reviews/Review";
import ListPropertyBanner from "./ListPropertyBanner";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Destination />
      <ListPropertyBanner />
      <Hotel />
      <WhyChoose />
      <Review />
    </div>
  );
};

export default Home;
