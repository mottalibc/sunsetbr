import ResortFAQ from "@/components/ui/Faq";
import Gallery from "@/components/ui/Gallery";
import Hero from "@/components/ui/Hero";
import RoomBooking from "@/components/ui/RoomBooking";
import React from "react";
import Script from "next/script";

<Script id="ld-json" type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: "Sunset Beach Resort",
    description: "Eco-friendly resort in Cox’s Bazar with sea-view rooms.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cox's Bazar",
      addressRegion: "Chittagong",
      addressCountry: "BD",
    },
    url: "https://sunsetbeachresort.info",
    telephone: "8801624888044",
  })}
</Script>;

const page = () => {
  return (
    <div className="bg-stone-50">
      <Hero />
      <Gallery />
      <RoomBooking />
      <ResortFAQ />
    </div>
  );
};

export default page;
