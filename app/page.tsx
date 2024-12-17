"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=2400"
          alt="Creative artwork"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl text-center text-white p-4">
            <h1 className="text-6xl md:text-8xl font-bold mb-6">Discover Stories</h1>
            <p className="text-xl md:text-2xl mb-8">Exploring creativity through compelling narratives</p>
            <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors">
              Start exploring
            </button>
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold">Featured Stories</h2>
          <Link href="/stories" className="flex items-center gap-2 text-lg hover:opacity-70 transition-opacity">
            View all <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredStories.map((story, index) => (
            <article key={index} className="group cursor-pointer">
              <div className="relative aspect-[4/5] mb-4 overflow-hidden">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-gray-500 mb-2">{story.category}</p>
                  <h3 className="text-xl font-semibold mb-2">{story.title}</h3>
                  <p className="text-gray-600">{story.author}</p>
                </div>
                <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Explore by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className="relative aspect-square group cursor-pointer overflow-hidden"
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-semibold">{category.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

const featuredStories = [
  {
    title: "The Art of Visual Storytelling",
    author: "Sarah Johnson",
    category: "Photography",
    image: "https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?q=80&w=1200",
  },
  {
    title: "Design in Motion",
    author: "Michael Chen",
    category: "Digital Art",
    image: "https://images.unsplash.com/photo-1484589065579-248aad0d8b13?q=80&w=1200",
  },
  {
    title: "The Future of Creative Expression",
    author: "Emma Williams",
    category: "Innovation",
    image: "https://images.unsplash.com/photo-1504870712357-65ea720d6078?q=80&w=1200",
  },
];

const categories = [
  {
    name: "Art",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=800",
  },
  {
    name: "Photography",
    image: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?q=80&w=800",
  },
  {
    name: "Design",
    image: "https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?q=80&w=800",
  },
  {
    name: "Technology",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800",
  },
];