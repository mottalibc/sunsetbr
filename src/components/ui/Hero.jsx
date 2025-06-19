"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto" // Suggest the browser to preload the video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        poster="https://cdn.jsdelivr.net/gh/mottalibc/video-sunsetbr@main/poster.jpg"
      >
        <source
          src="https://cdn.jsdelivr.net/gh/mottalibc/video-sunsetbr@main/videos/Welcome-Video.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4 bg-black/40">
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-4 drop-shadow-md w-full md:w-[70%]">
          Welcome to Sunset Beach Resort – Cox’s Bazar
        </h1>
        <p className="text-white/90 text-lg sm:text-xl mb-6 max-w-3xl">
          where stunning sunsets, sea view rooms, and a private beach await.
          Just minutes from Himchari & Inani Beach, it's the perfect romantic or
          family getaway. Book now for the best beachside stay in Bangladesh!
        </p>
        <Link
          href="https://wa.me/+8801624888044?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20resort%20and%20room%20availability%20through%20your%20website."
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-white text-black font-semibold rounded-full shadow-md hover:bg-gray-200 transition"
        >
          Booking Now
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-1 bg-white rounded-full mt-1 animate-bounce-indicator" />
        </div>
      </div>
    </section>
  );
}
