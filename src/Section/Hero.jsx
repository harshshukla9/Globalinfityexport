import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import towel1 from '../assets/towel1.jpg';
import towel3 from '../assets/towel3.jpg';
import towel4 from '../assets/towel4.jpg';
import image2 from '../assets/image2.jpg';

const GlobalInfinityHero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [flip, setFlip] = useState(false);
  const images = [towel1, towel3, towel4, image2];

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    const flipInterval = setInterval(() => {
      setFlip(prev => !prev);
    }, 4000);

    return () => {
      clearInterval(imageInterval);
      clearInterval(flipInterval);
    };
  }, [images.length]);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-24 px-6 md:px-8 min-h-screen flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-3xl md:text-3xl lg:text-3xl font-bold mb-6 leading-tight">
              Welcome to Global Infinity
            </h1>
            <div className="mb-6">
              <div className="  perspective-[1000px]">
                <motion.div
                  className="w-full h-full  "
                  animate={{
                    rotateX: flip ? 360 : 0,
                    transition: { duration: 0.6 }
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <motion.p
                    className=" text-3xl md:text-4xl text-white opacity-20 font-extrabold  backface-hidden "
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    Unleash your brand , with our towel !
                  </motion.p>
                  <motion.p
                    className="text-xl md:text-2xl text-blue-400 font-semibold absolute backface-hidden"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateX(180deg)' }}
                  >
                    
                  </motion.p>
                </motion.div>
              </div>
            </div>
            <p className="text-xl mb-8 text-gray-300 leading-relaxed">
              Empowering businesses to thrive in the digital age with innovative solutions and unparalleled quality.
            </p>
            <Button 
              size="lg" 
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Discover More
            </Button>
          </motion.div>
          <div className="w-full md:w-1/2">
            <motion.div
              className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-2xl shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={images[currentImageIndex]}
                  alt={`GlobalInfinity Product ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1 }}
                  transition={{ duration: 1 }}
                />
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalInfinityHero;
