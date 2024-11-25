import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";


import towel5 from '../assets/towel5.jpg';
import towel6 from '../assets/towel6.jpg';
import towel7 from '../assets/towel7.jpg';
import towel8 from '../assets/towel8.jpg';
import towel9 from '../assets/towel9.jpg';
import towel10 from '../assets/towel10.jpg';
import towel11 from '../assets/towel11.jpg';


const GlobalInfinityAbout = () => {
  const images = [ towel5, towel6,towel7,towel8,towel9,towel10,towel11];
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
          Discover Our Wide Range of Terry products
        </h1>
        <p className="text-gray-700 text-lg">
          At Global Infinity Export, we are dedicated to offering a premium selection of towels designed to meet all your needs. From luxurious bath towels to durable, high-quality towels for various applications, we source only the finest materials to ensure superior softness, absorbency, and longevity.
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
                  width={600}
                  height={600}
                  className="w-dvw h-dvh"
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
