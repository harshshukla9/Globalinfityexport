import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

import towel1 from '../assets/towel1.jpg';
import towel2 from '../assets/image2.jpg';
import towel3 from '../assets/towel3.jpg';
import towel4 from '../assets/towel4.jpg';

const GlobalInfinityAbout = () => {
  const images = [towel1, towel2, towel3, towel4];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Autoplay effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Increment index every 3 seconds
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Clear interval on unmount
  }, [images.length]);

  // Handle manual navigation
  const nextSlide = () => setCurrentIndex((currentIndex + 1) % images.length);
  const prevSlide = () => setCurrentIndex((currentIndex - 1 + images.length) % images.length);

  return (
    <section id="about" className="bg-gray-100 py-16 px-4 md:px-8">
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-[#1a237e] mb-6">
          Discover Our Wide Range of Towels
        </h1>
        <p className="text-gray-700 text-lg">
          At Global Infinity, we are dedicated to offering a premium selection of towels designed to meet all your needs. From luxurious bath towels to durable, high-quality towels for various applications, we source only the finest materials to ensure superior softness, absorbency, and longevity.
        </p>
      </div>

      <div className="relative">
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="relative min-w-full">
                <img
                  src={image}
                  alt={`Towel ${index + 1}`}
                  width={1200}
                  height={600}
                  className="w-full h-[500px] md:h-[600px] object-fit"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-10 h-10 md:w-12 md:h-12 shadow-md"
        >
          <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
          <span className="sr-only">Previous slide</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-10 h-10 md:w-12 md:h-12 shadow-md"
        >
          <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
          <span className="sr-only">Next slide</span>
        </Button>
      </div>
    </section>
  );
};

export default GlobalInfinityAbout;
