import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import GoogleMap from "./GoogleMap";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo & Info */}
        <div>
          <Image
            src={
              "https://cdn.jsdelivr.net/gh/mottalibc/video-sunsetbr@main/logo.PNG"
            }
            width={60}
            height={60}
            alt="logo"
            className="h-auto w-auto"
          />
          <h2 className="text-2xl font-bold mb-3">Sunset Beach Resort</h2>
          <p className="text-gray-400 mb-4">
            Escape to tranquility. Enjoy nature, sea, and cozy stays with us at
            Cox's Bazar.
          </p>
          <div className="flex gap-3 mt-4">
            <a
              href="https://www.facebook.com/share/1JtHkvfKv7/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="hover:text-blue-500" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Instagram className="hover:text-pink-400" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Youtube className="hover:text-red-500" />
            </a>
          </div>
        </div>

        {/* Contact Details */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-2">
              <MapPin className="mt-1" size={20} />
              <span>
                Merin Drive Road, Just 4 minutes Away from Reju Khal, Sonar para
                beach, Inani, Coxs Bazar.
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={20} />
              <a href="tel:+8801624888044" className="hover:underline">
                +8801624888044
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={20} />
              <a
                href="mailto:susetbeachresort44@gmail.com"
                className="hover:underline"
              >
                sunsetbeachresort44@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Google Map Embed */}
        <GoogleMap />
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 py-5 text-center text-sm text-gray-400 flex flex-col items-center">
        &copy; Sunset Beach Resort. All rights reserved.
        <div>
          made with ❤️ by{" "}
          <Link
            href="https://www.facebook.com/motochowdhury2nd"
            target="_blank"
          >
            Mottalib
          </Link>
        </div>
      </div>
    </footer>
  );
}
