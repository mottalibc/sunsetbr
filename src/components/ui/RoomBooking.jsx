"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

// Lightbox + Zoom Plugin
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

const rooms = [
  {
    name: "Pod House Room",
    images: [
      "https://cdn.jsdelivr.net/gh/mottalibc/video-sunsetbr@main/rooms/room-view.jpg",
      "https://cdn.jsdelivr.net/gh/mottalibc/video-sunsetbr@main/rooms/room-view-2.jpg",
      "https://cdn.jsdelivr.net/gh/mottalibc/video-sunsetbr@main/rooms/room-view-3.jpg",
      "https://cdn.jsdelivr.net/gh/mottalibc/video-sunsetbr@main/rooms/room-view-4.jpg",
    ],
    video:
      "https://cdn.jsdelivr.net/gh/mottalibc/video-sunsetbr@main/videos/Room-Tour.mp4",
    description:
      "Nestled just steps from a private beach, our Pod House Room offers a cozy, modern stay with a stunning sea view. Perfect for couples or small families, this fully furnished smart pod combines privacy, comfort, and eco-chic living right by nature.",
    features: [
      "Full sea view from room",
      "Smart pod house with 2 beds & 1 attached bathroom",
      "Private beach just 50 seconds away",
      "Peaceful, crowd-free surroundings",
      "Breakfast included (for 2/4 guests)",
      "Beach view lounge with sunset views",
      "High-speed Wi-Fi & CCTV security",
      "Tea, coffee, and essential toiletries",
    ],
  },
  {
    name: "Beach Side Camp",
    images: [
      "https://cdn.jsdelivr.net/gh/mottalibc/video-sunsetbr@main/rooms/beach-camp.jpg",
      "https://cdn.jsdelivr.net/gh/mottalibc/video-sunsetbr@main/rooms/night-camp.jpg",
      "https://cdn.jsdelivr.net/gh/mottalibc/video-sunsetbr@main/rooms/tant-in-resort-ground.jpg",
      "https://cdn.jsdelivr.net/gh/mottalibc/video-sunsetbr@main/rooms/tant.jpg",
    ],
    video:
      "https://cdn.jsdelivr.net/gh/mottalibc/video-sunsetbr@main/videos/Camp-Tour.mp4",
    description:
      "Immerse yourself in a natural riverside and beachside setting with our cozy Beach Side Camp. Ideal for nature lovers and groups, this experience offers starlit skies, bonfires, and a rustic escape just minutes from Coxs Bazar.",
    features: [
      "Tent stay with soft bedding",
      "Direct beach and riverside access",
      "Private, quiet location away from crowds",
      "Campfire and BBQ arrangements available",
      "Surfing flame, beach games & fire show",
      "Perfect for groups, families, or couples",
      "Honeymoon or event decor available",
      "Full security and Wi-Fi available",
    ],
  },
];

export default function RoomBooking({ roomName }) {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const [floatingBtnVisible, setFloatingBtnVisible] = useState(false);
  const bookingBtnRef = useRef(null);

  useEffect(() => {
    if (!bookingBtnRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setFloatingBtnVisible(!entry.isIntersecting),
      { threshold: 1 }
    );

    observer.observe(bookingBtnRef.current);

    return () => {
      if (bookingBtnRef.current) observer.unobserve(bookingBtnRef.current);
    };
  }, [selectedRoom]);

  const lightboxSlides = selectedRoom?.images.map((src) => ({ src })) || [];
  const handleClick = (room) => {
    const message = `Hi, I'm interested in booking the "${room}"`;
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/8801624888044?text=${encodedMessage}`;
    window.open(url, "_blank");
  };

  return (
    <section id="rooms" className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
        Our Rooms
      </h2>

      {/* Room Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {rooms.map((room, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-md  hover:shadow-lg transition-all group"
          >
            {/* Image */}
            <div className="relative w-full h-56 overflow-hidden rounded-t-2xl">
              <Image
                src={room.images[0]}
                alt={room.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col justify-between h-[200px]">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {room.name}
                </h3>
                <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                  {room.description}
                </p>
              </div>

              {/* View Details Button */}
              <button
                onClick={() => setSelectedRoom(room)}
                className="w-full mt-4 self-start px-4 py-4 text-md font-medium bg-black text-white rounded-md hover:bg-gray-800 transition"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedRoom && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm overflow-y-auto">
          <div className="flex justify-center items-start min-h-screen px-4 py-10">
            <div className="relative bg-white rounded-xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto hide-scrollbar">
              {/* Close button */}
              <button
                onClick={() => setSelectedRoom(null)}
                aria-label="Close"
                className="absolute top-2 right-4 text-gray-600 hover:text-black text-3xl font-bold z-10 "
              >
                &times;
              </button>

              {/* Content */}
              <div className="p-5 pt-10">
                {/* Images scroll */}
                <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-400">
                  {selectedRoom.images.map((img, idx) => (
                    <div
                      key={idx}
                      className="relative w-48 h-32 flex-shrink-0 rounded-md overflow-hidden cursor-pointer"
                      title="Click to view"
                      onClick={() => setLightboxIndex(idx)}
                    >
                      <Image
                        src={img}
                        alt={`${selectedRoom.name} photo ${idx + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* Video */}
                {selectedRoom.video && (
                  <div className="mt-4">
                    <video
                      controls
                      poster={selectedRoom.images[0]}
                      className="w-full rounded-lg"
                    >
                      <source src={selectedRoom.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                )}

                {/* Room Details */}
                <div className="mt-6">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    {selectedRoom.name}
                  </h3>
                  <p className="text-gray-700 mb-4 text-md font-semibold leading-4">
                    {selectedRoom.description}
                  </p>
                  <ul className="list-disc list-inside text-gray-600 p-3 border-2 border-dashed rounded-md font-semibold space-y-1 text-md">
                    {selectedRoom.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>

                {/* Booking button in flow */}
                <div ref={bookingBtnRef}>
                  <button
                    onClick={() => handleClick(selectedRoom.name)}
                    className="mt-6 w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition font-semibold"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Booking Button */}
          {floatingBtnVisible && (
            <div
              onClick={() => handleClick(selectedRoom.name)}
              className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[9999]"
            >
              <button className="px-8 bg-black text-white py-3 rounded-full shadow-xl font-semibold hover:bg-gray-800 transition">
                Book Now
              </button>
            </div>
          )}

          {/* Lightbox */}
          <Lightbox
            open={lightboxIndex >= 0}
            close={() => setLightboxIndex(-1)}
            slides={lightboxSlides}
            index={lightboxIndex}
            onIndexChange={setLightboxIndex}
            plugins={[Zoom]}
            zoom={{ maxZoomPixelRatio: 3 }}
          />
        </div>
      )}
    </section>
  );
}
