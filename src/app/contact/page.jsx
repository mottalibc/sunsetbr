"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappNumber = "8801880322024";
    const text = `Hi, I'm ${name}.\n\n${message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <main className="min-h-screen bg-stone-50	 flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-5xl bg-white border border-dashed  rounded-2xl p-8 grid grid-cols-1 md:grid-cols-2 gap-10 border-gray-600">
        {/* Left: Contact Info */}
        <div className="flex flex-col justify-between space-y-6">
          <div>
            <h2 className="text-3xl font-bold mb-2 text-gray-800">
              Let’s Talk
            </h2>
            <p className="text-gray-600 text-sm mb-6">
              Have a question or want to know about more? Reach out through the
              form or connect via social media.
            </p>

            <div className="space-y-4 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gray-500" />
                <span>
                  <a href="tel:+8801624888044">+8801624888044</a>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gray-500" />
                <span>sunsetbeachresort44@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gray-500" />
                <span>
                  Merin Drive Road, Just 4 minutes Away from Reju Khal, sonar
                  para beach, inani, Coxs Bazar.
                </span>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/share/1JtHkvfKv7/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="w-5 h-5 text-gray-400 hover:text-blue-600 transition" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5 text-gray-400 hover:text-pink-500 transition" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-5 h-5 text-gray-400 hover:text-sky-500 transition" />
            </a>
          </div>
        </div>

        {/* Right: Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2.5">
            <label
              htmlFor="name"
              className="text-sm font-medium text-gray-700 mb-6"
            >
              Name
            </label>
            <Input
              id="name"
              type="text"
              required
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 rounded-md border-gray-300 py-8 focus:ring-2 focus:ring-gray-800 focus:outline-none"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <Textarea
              id="message"
              rows={5}
              required
              placeholder="Write something..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-2 rounded-md py-16 border-gray-300 focus:ring-2 focus:ring-gray-800 focus:outline-none"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white rounded-md py-6 transition"
          >
            Send via WhatsApp
          </Button>
        </form>
      </div>
    </main>
  );
}
