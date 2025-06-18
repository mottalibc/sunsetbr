"use client";

import { MessageCircle } from "lucide-react"; // Optional icon

export default function WhatsappButton() {
  const phoneNumber = "8801624888044"; // 🔁 Replace with your WhatsApp number (no +)
  const message = encodeURIComponent(
    "Hi! I'm interested in booking a room at Sunset Beach Resort through website"
  ); // Customize message

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg flex items-center justify-center transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
