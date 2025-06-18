import RoomBooking from "@/components/ui/RoomBooking";
import React from "react";
export const metadata = {
  title:
    "Rooms | Sunset Beach Resort – Sea View & Beachfront Rooms in Cox’s Bazar",
  description:
    "Discover our luxurious and affordable rooms at Sunset Beach Resort in Inani Beach, Cox’s Bazar. Enjoy sea-facing views, private beach access, and nature-friendly stays.",
  keywords: [
    "Sunset Beach Resort rooms",
    "Cox's Bazar sea view rooms",
    "Inani Beach resort rooms",
    "Beachfront rooms Cox's Bazar",
    "Private beach room",
    "Eco resort rooms Inani",
    "Affordable rooms Cox's Bazar",
    "Family resort rooms",
    "Couple friendly hotel Cox’s Bazar",
    "Sea facing accommodation",
  ],
  authors: [
    { name: "Sunset Beach Resort", url: "https://sunsetbeachresort.info" },
  ],
  openGraph: {
    title: "Rooms | Sunset Beach Resort",
    description:
      "View our room types at Sunset Beach Resort – from sea-facing suites to cozy nature rooms. Ideal for couples, families, and groups.",
    url: "https://sunsetbeachresort.info/rooms",
    siteName: "Sunset Beach Resort",
    images: [
      {
        url: "https://sunsetbeachresort.info/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rooms at Sunset Beach Resort, Inani Beach, Cox’s Bazar",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rooms | Sunset Beach Resort",
    description:
      "Explore our beachfront rooms in Inani Beach, Cox’s Bazar. Book your stay with sea views and natural vibes.",
    images: ["https://sunsetbeachresort.info/og-image.jpg"],
  },
  metadataBase: new URL("https://sunsetbeachresort.info"),
};

const page = () => {
  return <RoomBooking />;
};

export default page;
