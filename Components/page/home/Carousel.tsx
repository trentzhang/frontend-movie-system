import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { isIndexInRange, wrapAroundSlice } from "@/lib/utils";
interface CarouselProps {
  items: React.ReactNode[];
  autoPlay?: boolean;
  interval?: number; // Time in milliseconds
}

const Carousel: React.FC<CarouselProps> = ({
  items,
  autoPlay = true,
  interval = 3000,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((activeIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setActiveIndex((activeIndex - 1 + items.length) % items.length);
  };

  const activeItems = wrapAroundSlice(
    items,
    activeIndex - 1,
    activeIndex + 1 + 1
  );
  // items to show on webpage

  console.log("activeItems", activeItems);

  return (
    <div className="relative overflow-hidden">
      {activeIndex}
      <motion.div layout className="flex max-w-sm sm:max-w-sm md:max-w-lg">
        {activeItems.map((item, index) => (
          <motion.div
            layout
            key={index}
            className={`w-full  h-full px-3
             ${
               //   isIndexInRange(index, activeIndex, 1, items.length)
               //     ? "block"
               //     : "hidden"
               ""
             }`}
            // style={{ translateX: `${-activeIndex * 100}%` }}
          >
            {item}
          </motion.div>
        ))}
      </motion.div>
      <a
        className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white bg-gray-800 hover:bg-gray-700 p-2 rounded-full"
        href="#"
        role="button"
        onClick={prevSlide}
      >
        &lsaquo;
      </a>
      <a
        className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white bg-gray-800 hover:bg-gray-700 p-2 rounded-full"
        href="#"
        role="button"
        onClick={nextSlide}
      >
        &rsaquo;
      </a>
    </div>
  );
};

export default Carousel;
