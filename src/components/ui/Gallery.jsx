"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

const images = [
  {
    src: "/gallery/day1.jpg",
    title: "Daylight view of the pod house",
    description: "Best view of pod house with clear sky",
  },
  {
    src: "/gallery/day2.jpg",
    title: "Green trees with pod",
    description: "Trees with the pod house with a beautiful view",
  },
  {
    src: "/gallery/day3.jpg",
    title: "Pod house with hammock",
    description: "Enjoy the best view with hammock in front of your room",
  },
  {
    src: "/gallery/day4.jpg",
    title: "View of pod houses",
    description: "Beautifully aligned pod houses",
  },
  {
    src: "/gallery/day5.jpg",
    title: "Pods and jhaw bon under clear sky",
    description: "Pods look like elements of the sky",
  },
  {
    src: "/gallery/day6.jpg",
    title: "Resort view from the road",
    description: "Stunning view of the resort from the road",
  },
  {
    src: "/gallery/camp.jpg",
    title: "Beach side camp",
    description: "Peaceful beach camp with scenic views",
  },
  {
    src: "/gallery/campfire.jpg",
    title: "Camp fire with friends",
    description: "Enjoyable beachside campfire with friends",
  },
  {
    src: "/gallery/night1.jpg",
    title: "Night view of resort",
    description: "Magical night views with loved ones",
  },
  {
    src: "/gallery/restaurant1.jpg",
    title: "Restaurant daytime view",
    description: "Ocean view restaurant in daylight",
  },
  {
    src: "/gallery/restaurant2.jpg",
    title: "Restaurant night view",
    description: "Romantic night at the ocean view restaurant",
  },
  {
    src: "/gallery/restaurant3.jpg",
    title: "Restaurant and jhaw bon",
    description: "Eye-catching view with jhaw bon",
  },
  {
    src: "/gallery/restaurant4.jpg",
    title: "Enjoying amazing food",
    description: "Delicious meals with friends",
  },
  {
    src: "/gallery/restaurant5.jpg",
    title: "Dinner at night",
    description: "Night meal beside the ocean",
  },
  {
    src: "/gallery/restaurant6.jpg",
    title: "Dinner with friends",
    description: "Ocean-side dinner with friends",
  },
  {
    src: "/gallery/boat.jpg",
    title: "Boat beside resort",
    description: "Crossing the river with a traditional boat",
  },
];

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <section id="gallery" className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
        Gallery
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <div
            key={i}
            className="cursor-pointer group"
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          >
            <div className="relative w-full h-48 rounded-lg overflow-hidden">
              <Image
                src={img.src}
                alt={img.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:opacity-80 transition"
                {...(i < 4 ? { priority: true } : { loading: "lazy" })}
              />
            </div>
            <p className="text-sm mt-2 text-center text-gray-700">
              {img.title}
            </p>
          </div>
        ))}
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
