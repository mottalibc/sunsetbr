"use client";

import { useState } from "react";

const videos = [
  {
    id: 1,
    title: "Welcome Video",
    src: "https://cdn.jsdelivr.net/gh/mottalibc/video-sunsetbr@main/video-gallery/Welcome-Video(1).mp4",
  },
  {
    id: 2,
    title: "Resort Overview",
    src: "https://cdn.jsdelivr.net/gh/mottalibc/video-sunsetbr@main/video-gallery/Video-Resort-Overview.mp4",
  },
  {
    id: 3,
    title: "Sunset View",
    src: "https://cdn.jsdelivr.net/gh/mottalibc/video-sunsetbr@main/video-gallery/Sunset-View.mp4",
  },
  {
    id: 4,
    title: "Sky View",
    src: "https://cdn.jsdelivr.net/gh/mottalibc/video-sunsetbr@main/video-gallery/Sky-View.mp4",
  },
  {
    id: 5,
    title: "Beach Camp",
    src: "https://cdn.jsdelivr.net/gh/mottalibc/video-sunsetbr@main/video-gallery/Beach-Camp.mp4",
  },
  {
    id: 6,
    title: "Private Beach",
    src: "https://cdn.jsdelivr.net/gh/mottalibc/video-sunsetbr@main/video-gallery/Private-Beach.mp4",
  },
  {
    id: 7,
    title: "Private Beach Golden Sky",
    src: "https://cdn.jsdelivr.net/gh/mottalibc/video-sunsetbr@main/video-gallery/Private-Beach-golden-sky.mp4",
  },
  {
    id: 8,
    title: "Night View",
    src: "https://cdn.jsdelivr.net/gh/mottalibc/video-sunsetbr@main/video-gallery/Night-View.mp4",
  },
  {
    id: 9,
    title: "Night View with friends",
    src: "https://cdn.jsdelivr.net/gh/mottalibc/video-sunsetbr@main/video-gallery/Night-View (2).mp4",
  },
  {
    id: 10,
    title: "Fire Spinning Show",
    src: "https://cdn.jsdelivr.net/gh/mottalibc/video-sunsetbr@main/video-gallery/Fire-Spinning.mp4",
  },
];

const ITEMS_PER_PAGE = 3;

export default function VideoGallery() {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const visibleVideos = videos.slice(0, visibleCount);

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-semibold text-center mb-10">
        Video Gallery
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleVideos.map((video) => (
          <div
            key={video.id}
            className="rounded-2xl overflow-hidden border shadow hover:scale-[1.01] transition cursor-pointer"
            onClick={() => setSelectedVideo(video)}
          >
            <div className="relative aspect-video bg-gray-200">
              <video
                className="w-full h-full object-cover"
                poster={video.poster}
                preload="metadata"
                muted
                playsInline
                loading="lazy"
              >
                <source src={video.src} type="video/mp4" />
              </video>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-800">
                {video.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < videos.length && (
        <div className="mt-10 text-center">
          <button
            onClick={() => setVisibleCount(videos.length)}
            className="px-6 py-2 bg-black text-white text-sm rounded-full hover:bg-gray-800 transition"
          >
            Load More
          </button>
        </div>
      )}

      {/* Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="bg-white rounded-xl overflow-hidden w-full max-w-4xl shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-semibold">{selectedVideo.title}</h3>
              <button
                onClick={() => setSelectedVideo(null)}
                className="text-gray-500 hover:text-red-500 text-lg font-bold"
              >
                &times;
              </button>
            </div>
            <div className="aspect-video bg-black">
              <div className="w-full max-w-xl mx-auto bg-black">
                <video
                  src={selectedVideo.src}
                  controls
                  autoPlay
                  className="w-full h-auto max-h-[90vh] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
