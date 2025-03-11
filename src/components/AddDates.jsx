import React from "react";
import CalenderAug from "./CalenderAug";
import CalenderJul from "./CalenderJul";
import { useState } from "react";

const AddDates = ({ isDatesActive }) => {
  

  const [days, setDays] = useState([
    { id: 1, text: "Exact dates", isActive: true },
    { id: 2, text: "+- 1 days", isActive: false },
    { id: 3, text: "+- 2 days", isActive: false },
    { id: 4, text: "+- 3 days", isActive: false },
    { id: 5, text: "+- 7 days", isActive: false },
    { id: 6, text: "+- 14 days", isActive: false },
  ]);

  const setActive = (id) => {
    setDays((prevDays) =>
      prevDays.map((day) =>
        day.id === id ? { ...day, isActive: true } : { ...day, isActive: false }
      )
    );
  };
  return (
    <div
      className={`${
        isDatesActive ? "fixed" : "hidden"
      } top-[9.8rem] left-[13rem]  bg-white w-[54rem] rounded-3xl shadow-[0_8px_20px_rgba(0,0,0,0.15)] overflow-scroll h-[20rem] z-40`}
    >
      <div className="flex justify-center mt-8">
        <div className="bg-gray-200 gap-1 border-2 border-gray-200 rounded-full h-9 flex items-center">
          <span className="bg-white rounded-full cursor-pointer py-1 px-5">
            Dates
          </span>
          <span className="hover:bg-gray-300 rounded-full cursor-pointer py-1 px-5">
            Months
          </span>
          <span className="hover:bg-gray-300 rounded-full cursor-pointer py-1 px-5">
            Flexible
          </span>
        </div>
      </div>
      <div className="flex mt-7 justify-center gap-5">
        <CalenderJul />
        <CalenderAug />
      </div>

      <div className="flex ml-28 mb-10">
      {days.map((item) => (
        <span key={item.id} onClick={()=>setActive(item.id)}  className={`px-2 py-1 cursor-pointer hover:border-black ${item.isActive ? "border-2 border-black" : "border border-gray-200"} mr-2 rounded-full text-sm active:scale-95`}>{item.text}</span>
      ))}
        </div>
    </div>
  );
};

export default AddDates;
