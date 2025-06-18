import AboutContent from "@/components/ui/AboutContent";

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
  return (
    <main className="min-h-screen mt-9 bg-white px-4 py-20 text-gray-900">
      <AboutContent />
    </main>
  );
}
