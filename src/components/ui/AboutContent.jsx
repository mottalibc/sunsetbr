"use client";
import React from "react";
import Image from "next/image";

const AboutContent = () => {
  return (
    <section className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center gap-12">
      {/* Image */}
      <div className="w-full lg:w-1/2">
        <div className="overflow-hidden rounded-xl shadow-sm">
          <Image
            src="https://cdn.jsdelivr.net/gh/mottalibc/video-sunsetbr@main/owner.jpg"
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
  );
};

export default AboutContent;
