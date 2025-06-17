import Gallery from "@/components/ui/Gallery";
import Hero from "@/components/ui/Hero";
import RoomBooking from "@/components/ui/RoomBooking";
import React from "react";

const page = () => {
  return (
    <div className="bg-stone-50">
      <Hero />
      <Gallery />
      <RoomBooking />
    </div>
  );
};

export default page;
