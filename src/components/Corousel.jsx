import { useState, useEffect } from "react";
import Button from "../components/Button"

const Carousel = ({ items, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll effect
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(slideInterval);
  }, [items.length, interval]);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full p-[5%] mx-auto text-center items-center justify-center border border-[[#0989b1]] text-[#0989b1]  text-2xl rounded-lg"
          >
           <div className="font-bold pb-3"> {item.title}</div>
             <div className="text-black text-[18px] pb-3">{item.subtitle}</div>
            <div><Button buttonText={item.buttonText}/></div>
          </div>
        ))}
      </div>

      {/* Optional Manual Navigation */}
      <button
        onClick={() =>
          setCurrentIndex(
            currentIndex === 0 ? items.length - 1 : currentIndex - 1
          )
        }
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
      >
        &#10094;
      </button>
      <button
        onClick={() =>
          setCurrentIndex(
            currentIndex === items.length - 1 ? 0 : currentIndex + 1
          )
        }
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;