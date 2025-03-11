import React from "react";
import { useState, useEffect, useRef } from "react";

const PaymentCard = ({ Photos, Reviews , message }) => {
  const [isFixed, setisFixed] = useState(false);
  const [stopped, setStopped] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const startPoint = 380; // Start later;
      const stopPoint = 3 * window.innerHeight + 50; // Stop later

      if (scrollY > startPoint && scrollY < stopPoint) {
        setisFixed(true);
        setStopped(false);
      } else if (scrollY >= stopPoint) {
        setisFixed(false);
        setStopped(true);
      } else {
        setisFixed(false);
        setStopped(false); // Reset state when above `startPoint`
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
    onClick={message}
      className={` ${
        isFixed
          ? "fixed right-20 bottom-4"
          : stopped
          ? "absolute right-20 bottom-56"
          : "absolute top-6 right-20"
      } h-[28.5rem] w-[23rem] shadow-[0_8px_20px_rgba(0,0,0,0.15)] px-5 pt-6 rounded-lg`}
    >
      <div className="text-lg text-gray-600">
        <span className="text-2xl font-medium text-black mb-7">₹5,999 </span>
        night
      </div>
      <div className="flex flex-col border border-black mt-6 rounded-lg">
        <div className="flex border-b border-black ">
          <span className="w-1/2 flex flex-col border-r border-black p-3 text-xs">
            <span className="text-xs font-medium">CHECK-IN</span>
            <span className="font-medium">7/01/2025</span>
          </span>
          <span className="w-1/2 flex flex-col p-3 text-xs">
            <span className="text-xs font-medium">CHECKOUT</span>
            <span className="font-medium">7/06/2025</span>
          </span>
        </div>
        <div className="flex justify-between">
          <span className="flex flex-col p-3 text-xs">
            <span className="text-xs font-medium">GUESTS</span>
            <span className="font-medium">1 guest</span>
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 mt-3 mr-3"
          >
            <path
              fillRule="evenodd"
              d="M12 16.25a.75.75 0 0 1-.53-.22l-5-5a.75.75 0 1 1 1.06-1.06L12 14.44l4.47-4.47a.75.75 0 1 1 1.06 1.06l-5 5a.75.75 0 0 1-.53.22z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div className="mt-3">
        <button className="bg-red-500 text-white w-full rounded-lg font-medium h-10 hover:bg-red-600">
          Reserve
        </button>
        <div className="flex justify-center text-sm mt-4">
          You won't be charged yet
        </div>
        <span className="flex justify-between mt-6 text-lg">
          <span className="underline">₹5,999 x 5 nights</span>
          <span>₹29,995</span>
        </span>
        <span className="flex justify-between text-lg mt-3 pb-5 border-b border-gray-300">
          <span className="underline">Airbnb service fee</span>
          <span>₹4,235</span>
        </span>
      </div>
      <div className="flex justify-between text-lg font-medium pt-4">
        <span>Total before taxes</span>
        <span>₹34,230</span>
      </div>
    </div>
  );
};

export default PaymentCard;
