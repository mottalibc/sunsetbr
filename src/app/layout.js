import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import WhatsappButton from "@/components/ui/WhatsappButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sunset Beach Resort | Relax in Paradise",
  description:
    "Book your stay at Sunset Beach Resort in Cox’s Bazar. Enjoy sea view rooms, beach side camp, delicious food, and a relaxing beach experience.",
  other: {
    "google-site-verification": "Dzt64zLBc5m8GduDAjqNfiLQmK0rEw5ttJe5dEhMYfE",
  },
  keywords: [
    "Sunset Beach Resort",
    "Cox's Bazar resort",
    "sea view hotel",
    "Beachfront hotel Cox's Bazar",
    "Best beach resort in Cox's Bazar",
    "Luxury resort in Cox's Bazar",
    "Sea-facing resort Cox's Bazar",
    "Affordable resort Cox's Bazar",
    "Budget friendly resort Cox's Bazar",
    "Cheap hotel near beach Cox's Bazar",
    "Resort in Inani Beach",
    "Hotel near Inani Beach",
    "Inani sea view resort",
    "Camp site resort Cox's Bazar",
    "Camping resort near sea beach",
    "Inani eco resort",
    "Tent accommodation in Cox's Bazar",
    "Natural resort in Inani",
    "Inani beach cottage",
    "Eco resort Cox's Bazar",
    "Eco lodge near sea beach",
    "Sustainable beach resort Bangladesh",
    "Green resort in Cox's Bazar",
    "Nature-friendly hotel Cox's Bazar",
    "Quiet nature resort near beach",
    "Family resort in Cox's Bazar",
    "Couple friendly hotel Cox's Bazar",
    "Best resort under 5000 BDT",
    "Affordable beachfront room",
    "Budget hotel near sea beach",
    "Group stay resort Cox’s Bazar",
    "Top rated Cox's Bazar hotel",
    "Best resort for honeymoon in Cox's Bazar",
    "Pet friendly resort Cox’s Bazar",
    "Cox’s Bazar night view resort",
    "Weekend getaway resort Cox’s Bazar",
    "Swimming pool resort in Cox’s Bazar",
    "Hotel with private beach Cox’s Bazar",
  ],
  authors: [
    { name: "Sunset Beach Resort Team", url: "https://sunsetbeachresort.info" },
  ],
  openGraph: {
    title: "Sunset Beach Resort",
    description: "Experience the best beachfront resort in Cox’s Bazar",
    url: "https://sunsetbeachresort.info",
    siteName: "Sunset Beach Resort",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sunset Beach Resort view",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunset Beach Resort",
    description: "Relax at the best beachfront hotel in Cox’s Bazar",
    images: ["/og-image.jpg"],
  },
  metadataBase: new URL("https://sunsetbeachresort.info"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <WhatsappButton />
        <Footer />
      </body>
    </html>
  );
}
