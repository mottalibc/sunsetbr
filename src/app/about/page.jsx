"use client";
import Image from "next/image";
import { useHashScroll } from "@/hooks/useHashScroll";

export const metadata = {
  title: "About Sunset Beach Resort | Experience Tranquility at Cox’s Bazar",
  description:
    "Learn more about Sunset Beach Resort — a serene beachfront resort in Inani, Cox’s Bazar offering comfortable sea-view rooms, eco-friendly camping, and unforgettable experiences.",
  keywords: [
    "Sunset Beach Resort",
    "About Sunset Beach Resort",
    "Cox's Bazar resort",
    "Beachfront hotel Cox's Bazar",
    "Eco resort Cox's Bazar",
    "Inani Beach resort",
    "Nature-friendly hotel",
    "Sustainable resort Bangladesh",
    "Family resort Cox's Bazar",
    "Honeymoon resort Cox's Bazar",
  ],
  authors: [
    { name: "Sunset Beach Resort Team", url: "https://sunsetbeachresort.info" },
  ],
  openGraph: {
    title: "About Sunset Beach Resort",
    description:
      "Discover the story and philosophy behind Sunset Beach Resort, your perfect getaway at Cox’s Bazar.",
    url: "https://sunsetbeachresort.info/about",
    siteName: "Sunset Beach Resort",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About Sunset Beach Resort",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Sunset Beach Resort",
    description:
      "Discover the story and philosophy behind Sunset Beach Resort, your perfect getaway at Cox’s Bazar.",
    images: ["/og-image.jpg"],
  },
  metadataBase: new URL("https://sunsetbeachresort.info"),
};

export default function AboutPage() {
  useHashScroll();
  return (
    <main className="min-h-screen mt-9 bg-white px-4 py-20 text-gray-900">
      <section className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Image */}
        <div className="w-full lg:w-1/2">
          <div className="overflow-hidden rounded-xl shadow-sm">
            <Image
              src="/owner.jpg"
              alt="Resort Founder"
              width={600}
              height={600}
              className="object-cover w-full h-auto"
              priority
            />
          </div>
        </div>

        {/* Content */}
        <div className="w-full lg:w-1/2 space-y-5">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            A Vision Worth Supporting
          </h1>
          <p className="text-gray-600 text-base leading-relaxed">
            This resort is the dream of a young and driven student — passionate
            about hospitality, nature, and meaningful experiences. With limited
            resources but unlimited creativity, he's building something unique.
          </p>
          <p className="text-gray-600 text-base leading-relaxed">
            Every visit, every share, and every bit of support helps bring that
            vision to life. Let’s uplift young creators who are building with
            heart.
          </p>
        </div>
      </section>
    </main>
  );
}
