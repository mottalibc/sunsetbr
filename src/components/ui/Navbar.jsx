"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Equal, X } from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer"; // ShadCN Drawer
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Rooms", href: "/rooms" },
  { name: "Menu", href: "/menu" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/50 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-gray-900">
            <img
              src="https://cdn.jsdelivr.net/gh/mottalibc/video-sunsetbr@main/logo.PNG"
              width={"70px"}
              alt=""
              srcSet=""
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`${
                  isScrolled ? "text-white" : "text-orange-400"
                } hover:text-white/80 transition-colors duration-200 text-base font-medium`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile nav with ShadCN Drawer */}
          <div className="md:hidden">
            <Drawer open={open} onOpenChange={setOpen}>
              <DrawerTrigger asChild>
                <button
                  aria-label="Open menu"
                  className="text-gray-800 focus:outline-none"
                >
                  <Equal
                    className={`w-10 h-10 ${
                      isScrolled ? "text-white" : "text-orange-400"
                    }`}
                  />
                </button>
              </DrawerTrigger>
              <DrawerContent className="bg-white text-gray-900 text-center">
                <DialogTitle asChild>
                  <VisuallyHidden>
                    <h2>Navigation Menu</h2>
                  </VisuallyHidden>
                </DialogTitle>
                <DialogDescription asChild>
                  <VisuallyHidden>
                    <p>This drawer shows navigation links.</p>
                  </VisuallyHidden>
                </DialogDescription>
                <X className="w-6 h-6 ml-5" onClick={() => setOpen(false)} />
                <div className="px-4 py-6 space-y-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block text-lg font-medium hover:text-black transition"
                      onClick={() => setOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </nav>
  );
}
