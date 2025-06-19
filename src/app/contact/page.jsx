import ContactContent from "@/components/ui/ContactContent";
import Head from "next/head";

export const metadata = {
  title: "Contact Us | Sunset Beach Resort – Inani Beach, Cox’s Bazar",
  description:
    "Get in touch with Sunset Beach Resort for bookings, inquiries, and special requests. Call, message, or visit us in Inani Beach, Cox’s Bazar.",
  keywords: [
    "Contact Sunset Beach Resort",
    "Resort contact Cox’s Bazar",
    "Inani Beach hotel phone number",
    "Book beachfront resort Cox’s Bazar",
    "Sunset Beach Resort contact info",
    "Hotel booking Inani Beach",
    "Cox's Bazar resort phone",
    "Resort with WhatsApp booking",
    "Contact eco resort Cox’s Bazar",
    "Inani resort reservation contact",
  ],
  authors: [
    { name: "Sunset Beach Resort", url: "https://sunsetbeachresort.info" },
  ],
  openGraph: {
    title: "Contact Us | Sunset Beach Resort",
    description:
      "Need help booking your stay at Sunset Beach Resort? Call or message us directly – we’re here to help.",
    url: "https://sunsetbeachresort.info/contact",
    siteName: "Sunset Beach Resort",
    images: [
      {
        url: "https://sunsetbeachresort.info/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Sunset Beach Resort, Cox’s Bazar",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Sunset Beach Resort",
    description:
      "Have questions or want to book your stay? Contact our team at Sunset Beach Resort, Inani Beach, Cox’s Bazar.",
    images: ["https://sunsetbeachresort.info/og-image.jpg"],
  },
  metadataBase: new URL("https://sunsetbeachresort.info"),
};

export default function ContactPage() {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Resort",
              "@id": "https://sunsetbeachresort.info/#resort",
              name: "Sunset Beach Resort",
              description:
                "A beachfront resort in Inani, Cox's Bazar offering sea-view rooms, camping, and a peaceful nature escape.",
              url: "https://sunsetbeachresort.info",
              telephone: "+8801624888044",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Inani Beach Road",
                addressLocality: "Inani",
                addressRegion: "Cox's Bazar",
                postalCode: "4700",
                addressCountry: "BD",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 21.284141,
                longitude: 92.048458,
              },
              image:
                "https://cdn.jsdelivr.net/gh/mottalibc/video-sunsetbr@main/og-image.jpg",
              sameAs: [
                "https://www.facebook.com/ssunsetbr",
                "https://www.instagram.com/sunsetbeachresort",
              ],
            }),
          }}
        />
      </Head>
      <main className="min-h-screen bg-stone-50	 flex items-center justify-center px-4 py-20">
        <ContactContent />
      </main>
    </>
  );
}
