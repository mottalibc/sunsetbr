import Head from "next/head";
import Image from "next/image";

export const metadata = {
  title: "Ocean view Restaurant Menu | Sunset Resort Cox’s Bazar",
  description:
    "Explore our delicious menu at Sunset Beach Resort Cox’s Bazar. Enjoy seafood, local Bangladeshi dishes & beachfront dining in a stunning sea view setting.",
  openGraph: {
    title: "Beachside Dining at Sunset Resort Cox’s Bazar",
    description:
      "Discover fresh seafood, Bangladeshi cuisine, and romantic beachside meals at our sea view restaurant in Cox’s Bazar. View our full menu now.",
    url: "https://sunsetbeachresort.info/menu",
    images: [
      {
        url: "https://cdn.jsdelivr.net/gh/mottalibc/video-sunsetbr@main/og-image.jpg", // Replace with your actual image path
        width: 1200,
        height: 630,
        alt: "Restaurant at Sunset Resort Cox’s Bazar",
      },
    ],
    type: "website",
  },
};

const menuImages = [
  "https://cdn.jsdelivr.net/gh/mottalibc/video-sunsetbr@main/menu/menu-1.jpg",
  "https://cdn.jsdelivr.net/gh/mottalibc/video-sunsetbr@main/menu/menu-2.jpg",
  "https://cdn.jsdelivr.net/gh/mottalibc/video-sunsetbr@main/menu/menu-3.jpg",
  "https://cdn.jsdelivr.net/gh/mottalibc/video-sunsetbr@main/menu/menu-4.jpg",

  // Add more images like "/menu/fish.jpg"
];

export default function MenuPage() {
  return (
    <>
      {" "}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Menu",
              name: "Restaurant Menu - Sunset Beach Resort",
              description:
                "Our beachside restaurant offers seafood, Bangladeshi specialties, and local favorites at Sunset Beach Resort in Cox’s Bazar.",
              url: "https://sunsetbeachresort.info/menu",
              hasMenuSection: [
                {
                  "@type": "MenuSection",
                  name: "Seafood Specials",
                  hasMenuItem: [
                    {
                      "@type": "MenuItem",
                      name: "Grilled Pomfret",
                      description:
                        "Freshly grilled sea pomfret served with lemon butter sauce.",
                      offers: {
                        "@type": "Offer",
                        price: "850",
                        priceCurrency: "BDT",
                      },
                    },
                  ],
                },
              ],
            }),
          }}
        />
      </Head>
      <main className="min-h-screen bg-white px-4 py-16">
        <h1 className="text-4xl mt-3 font-bold text-center mb-10 text-gray-900">
          Our Menu
        </h1>
        <p className="pb-9 text-center w-full px-2 md:w-1/2 mx-auto">
          Savor the taste of the coast with our chef-crafted dishes inspired by
          local flavors and fresh, seasonal ingredients. From ocean-fresh
          seafood to riverside BBQs and cozy meals under the stars — every plate
          is served with a view of nature, the waves, and unforgettable sunsets.
        </p>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {menuImages.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition"
            >
              <Image
                src={src}
                alt={`Menu item ${index + 1}`}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
