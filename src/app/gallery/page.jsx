import Gallery from "@/components/ui/Gallery";
import React from "react";
export const metadata = {
  title: "Gallery | Sunset Beach Resort – Sea View Resort in Cox’s Bazar",
  description:
    "Explore stunning photos and videos of Sunset Beach Resort in Inani Beach, Cox’s Bazar. View our sea-facing rooms, beachside camp, night views, and more.",
  keywords: [
    "Sunset Beach Resort gallery",
    "Cox's Bazar resort gallery",
    "Inani Beach hotel images",
    "Resort photos Cox's Bazar",
    "Sunset Beach Resort videos",
    "Beach camp images",
    "Private beach gallery",
    "Nature resort Cox’s Bazar gallery",
    "Sea view resort gallery",
    "Inani sea beach resort pictures",
  ],
  authors: [
    { name: "Sunset Beach Resort", url: "https://sunsetbeachresort.info" },
  ],
  openGraph: {
    title: "Gallery | Sunset Beach Resort",
    description:
      "See our beachfront resort in Cox’s Bazar through real images and videos. Experience the view before you visit.",
    url: "https://sunsetbeachresort.info/gallery",
    siteName: "Sunset Beach Resort",
    images: [
      {
        url: "https://cdn.jsdelivr.net/gh/mottalibc/video-sunsetbr@main/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sunset Beach Resort in Cox’s Bazar – Gallery",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery | Sunset Beach Resort",
    description:
      "View photos and videos of our sea-facing rooms, beach, and camping experiences in Cox’s Bazar.",
    images: [
      "https://cdn.jsdelivr.net/gh/mottalibc/video-sunsetbr@main/og-image.jpg",
    ],
  },
  metadataBase: new URL("https://sunsetbeachresort.info"),
};

const page = () => {
  return <Gallery />;
};

export default page;
