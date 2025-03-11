import React, { useState } from "react";
import { Link } from "react-router-dom";

const ImageSlider = ({ images, id, toggleLike , like }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showLeft, setshowLeft] = useState(false)
  const [showRight, setshowRight] = useState(true)

  // Go to next image
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex = prevIndex + 1
    );<svg
    onClick={(e) => {
      e.stopPropagation(); // Prevents triggering parent link
      toggleLike(id); // Use id, NOT currentIndex
    }}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={like ? "red" : "black"}
    fillOpacity="0.8"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6 absolute top-4 right-4 hover:scale-105 cursor-pointer"
  >
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1 7.8 7.8 7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8z" />
  </svg>
  
  };

  // Go to previous image
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex = prevIndex - 1
    );
  };

  return (
    <div className="relative w-[17.5rem] h-64 overflow-hidden rounded-xl group">
      {/* Image Container with Transition */}
      <Link to={id===1 ?  `/pages/${id}` : `#`}
      onClick={(e)=>{
        if(id !== 1){
          e.preventDefault();
          alert("This item does not contain any further details")
        }
      }}
      target="_blank" rel="noopener noreferrer">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className="w-[17.5rem] h-64 object-cover object-center flex-shrink-0"
          />
        ))}
      </div>
      </Link>
      

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className={`transition-all duration-200 group-hover:opacity-80 w-7 h-7 left-4 top-1/2 p-1 -translate-y-1/2 bg-white text-black rounded-full opacity-0 hover:opacity-100 hover:scale-105
          ${ currentIndex===0 ? "hidden" : "absolute"}
          `}
      >
        <img src="/ui-images/left-arrow.svg" alt="" className="w-5 h-5" />
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className={`transition-all duration-200 group-hover:opacity-80 w-7 h-7 right-4 top-1/2 pl-[0.4rem] opacity-0 hover:opacity-100 hover:scale-105 -translate-y-1/2 bg-white text-black rounded-full
          ${ currentIndex===images.length-1 ? "hidden" : "absolute"}
          `}
      >
        <img src="/ui-images/right-arrow.svg" alt="" className="w-4 h-4" />
      </button>

      {/* like button */}

      <svg
      onClick={(e)=>{
        e.stopPropagation(); // Prevents triggering parent link
    toggleLike(id);
      }}
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill={like? "red":"black"}
  fillOpacity="0.8"
  stroke="white"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="w-6 h-6 absolute top-4 right-4 hover:scale-105 cursor-pointer"
>
  <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1 7.8 7.8 7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8z" />
</svg>


      {/*I used only 5 pictures, so I'm not implementing moving pagination for cases where the number of photos exceeds five and overflows. */}

      <div className="absolute bottom-3 w-full">
        <div className="flex justify-center gap-1 ">
          {images.map((img,index)=>{
            return <button className={`bg-white   h-2 w-2 rounded-full ${ index===currentIndex ? "opacity-100" : "opacity-50"}`}></button>
          }

          )}
          
          </div>

      </div>

    </div>
  );
};

export default ImageSlider;
