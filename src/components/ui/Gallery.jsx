"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import VideoGallery from "./VideoGallery";

const images = [
  {
    src: "https://cdn.jsdelivr.net/gh/mottalibc/video-sunsetbr@main/gallery/day1-v2.webp",
    title: "Daylight view of the pod house",
    description: "Best view of pod house with clear sky",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/mottalibc/video-sunsetbr@main/gallery/day2-v2.webp",
    title: "Green trees with pod",
    description: "Trees with the pod house with a beautiful view",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/mottalibc/video-sunsetbr@main/gallery/day3-v2.webp",
    title: "Pod house with hammock",
    description: "Enjoy the best view with hammock in front of your room",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/mottalibc/video-sunsetbr@main/gallery/day4-v2.webp",
    title: "View of pod houses",
    description: "Beautifully aligned pod houses",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/mottalibc/video-sunsetbr@main/gallery/day5-v2.webp",
    title: "Pods and jhaw bon under clear sky",
    description: "Pods look like elements of the sky",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/mottalibc/video-sunsetbr@main/gallery/day6-v2.webp",
    title: "Resort view from the road",
    description: "Stunning view of the resort from the road",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/mottalibc/video-sunsetbr@main/gallery/camp-v2.webp",
    title: "Beach side camp",
    description: "Peaceful beach camp with scenic views",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/mottalibc/video-sunsetbr@main/gallery/campfire-v2.webp",
    title: "Camp fire with friends",
    description: "Enjoyable beachside campfire with friends",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/mottalibc/video-sunsetbr@main/gallery/night1-v2.webp",
    title: "Night view of resort",
    description: "Magical night views with loved ones",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/mottalibc/video-sunsetbr@main/gallery/restaurant1-v2.webp",
    title: "Restaurant daytime view",
    description: "Ocean view restaurant in daylight",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/mottalibc/video-sunsetbr@main/gallery/restaurant2-v2.webp",
    title: "Restaurant night view",
    description: "Romantic night at the ocean view restaurant",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/mottalibc/video-sunsetbr@main/gallery/restaurant3-v2.webp",
    title: "Restaurant and jhaw bon",
    description: "Eye-catching view with jhaw bon",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/mottalibc/video-sunsetbr@main/gallery/restaurant4-v2.webp",
    title: "Enjoying amazing food",
    description: "Delicious meals with friends",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/mottalibc/video-sunsetbr@main/gallery/restaurant5-v2.webp",
    title: "Dinner at night",
    description: "Night meal beside the ocean",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/mottalibc/video-sunsetbr@main/gallery/restaurant6-v2.webp",
    title: "Dinner with friends",
    description: "Ocean-side dinner with friends",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/mottalibc/video-sunsetbr@main/gallery/boat-v2.webp",
    title: "Boat beside resort",
    description: "Crossing the river with a traditional boat",
  },
];

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const [galleryVisible, setGalleryVisible] = useState(false);
  const galleryRef = useRef(null);

  const loadMore = () => {
    setVisibleCount(images.length);
  };

  useEffect(() => {
    if (!galleryRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setGalleryVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "100px",
        threshold: 0.1,
      }
    );

    observer.observe(galleryRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="gallery" className="py-16 px-4 max-w-7xl mx-auto">
      <VideoGallery />

      <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
        Gallery
      </h2>

      <div ref={galleryRef}>
        {galleryVisible ? (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {images.slice(0, visibleCount).map((img, i) => (
                <div
                  key={i}
                  className="cursor-pointer group"
                  onClick={() => {
                    setIndex(i);
                    setOpen(true);
                  }}
                >
                  <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
                    <Image
                      src={img.src}
                      alt={img.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:opacity-80 transition"
                      priority={i < 4}
                      loading={i >= 4 ? "lazy" : undefined}
                    />
                  </div>
                  <p className="text-sm mt-2 text-center text-gray-700">
                    {img.title}
                  </p>
                </div>
              ))}
            </div>

            {visibleCount < images.length && (
              <div className="flex justify-center mt-8">
                <button
                  onClick={loadMore}
                  className="px-6 py-2 bg-black text-white text-sm rounded-full hover:bg-gray-800 transition"
                >
                  Load More
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="h-48 flex items-center justify-center text-gray-400">
            Loading gallery...
          </div>
        )}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images}
        index={index}
        plugins={[Captions, Zoom]}
        captions={{ descriptionTextAlign: "center" }}
      />
    </section>
  );
}
