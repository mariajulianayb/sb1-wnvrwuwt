"use client";

import { Menu, Search, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-bold text-white">
            Creative Stories
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/stories" className="text-white hover:opacity-70 transition-opacity">
              Stories
            </Link>
            <Link href="/categories" className="text-white hover:opacity-70 transition-opacity">
              Categories
            </Link>
            <Link href="/about" className="text-white hover:opacity-70 transition-opacity">
              About
            </Link>
            <button className="text-white hover:opacity-70 transition-opacity">
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black text-white">
          <div className="px-4 py-8 space-y-6">
            <Link
              href="/stories"
              className="block text-lg hover:opacity-70 transition-opacity"
              onClick={() => setIsMenuOpen(false)}
            >
              Stories
            </Link>
            <Link
              href="/categories"
              className="block text-lg hover:opacity-70 transition-opacity"
              onClick={() => setIsMenuOpen(false)}
            >
              Categories
            </Link>
            <Link
              href="/about"
              className="block text-lg hover:opacity-70 transition-opacity"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <div className="pt-4 border-t border-white/20">
              <button className="flex items-center gap-2 text-lg hover:opacity-70 transition-opacity">
                <Search className="w-5 h-5" />
                Search
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}