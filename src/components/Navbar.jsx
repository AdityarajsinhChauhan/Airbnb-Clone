import React from "react";
import { useState, useEffect, useRef } from "react";
import navlist from "../nav";
import UserMenu from "./UserMenu";
import SearchDestination from "./SearchDestination";
import AddDates from "./AddDates";
import WhoGuests from "./WhoGuests";

const Navbar = ({ sendCategory , sendScrolled , sendExpand , message, setshowLogin }) => {

  const [isScrolled, setIsScrolled] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHiddenT, setisHiddenT] = useState(true);
  const [isHiddenB, setisHiddenB] = useState(false);

  const [isCategoriesScrolled, setisCategoriesScrolled] = useState(false);

  const [category, setCategory] = useState(navlist[0].name);
  
  const [totalBeforeTaxes, settotalBeforeTaxes] = useState(false)

  const [showUserMenu , setShowUserMenu] = useState(false);

  const [isWhereActive, setisWhereActive] = useState(false);
  const [isDatesActive, setisDatesActive] = useState(false);
  const [isGuestsActive, setisGuestsActive] = useState(false);

  const [showLeft, setshowLeft] = useState(true);
  const [showRight, setshowRight] = useState(true);

  const scrollContainerRef = useRef(null)

  const [totalGuests, settotalGuests] = useState(0)

  useEffect(() => {
    sendCategory(category);
    sendScrolled(isScrolled);
    sendExpand(isExpanded);
    
  }, [category , sendCategory , isScrolled , sendScrolled , isExpanded , sendExpand ])
  

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY>0){
        setIsExpanded(false);
        setisHiddenB(true);
        setisWhereActive(false);
        setisDatesActive(false);
        setisGuestsActive(false);
      }

      if (window.scrollY > 50) {
        setIsScrolled(true);
        setTimeout(() => {
          setisHiddenT(false);
          setisHiddenB(true);
        }, 300);
      } else {
        setIsScrolled(false);
        setTimeout(() => {
          setisHiddenT(true);
          setisHiddenB(false);
        }, 300);
      }
    };


    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const checkScroll = () => {
    if(!scrollContainerRef.current) return;

    const {scrollLeft , scrollWidth , Clientwidth} = scrollContainerRef.current;

    

  }

  const scroll = (direction) => {
    if(!scrollContainerRef.current) return;

    const scrollAmount = 200;
    scrollContainerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount ,
      behavior : "smooth"
    })

  }

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if(!scrollContainer) return;

    scrollContainer.addEventListener("scroll",checkScroll);

    return () => scrollContainer.removeEventListener("scroll",checkScroll);
    
    
  }, []);

  useEffect(() => {
    const checkScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        setshowLeft(scrollLeft > 0);
        setshowRight(scrollLeft + clientWidth < scrollWidth);
      }
    };

    checkScroll(); 
    scrollContainerRef.current?.addEventListener("scroll", checkScroll);
    return () => scrollContainerRef.current?.removeEventListener("scroll", checkScroll);
  }, []);


  
  

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    setisHiddenB(false);
  };

  return (
    <div className="z-0">
      <div
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 realtive border-b  bg-white ${
          isExpanded || !isScrolled
            ? "h-[14.8rem] border-transparent"
            : "h-[9.5rem] border-gray-300"
        } `}
      >
        <div className="flex justify-between">
          {/* logo left section */}
          <div onClick={message}>
            <img
              src="/ui-images/airbnb-icon.jpg"
              alt=""
              className="w-28 ml-10 mt-6 h-8"
            />
          </div>

          {/* middle top section  */}

          <div
            className={`absolute transition-all duration-300 left-[34.5rem] mt-5 text-lg min-h-10 flex ${
              isExpanded || !isScrolled ? "" : "-translate-y-24 scale-50"
            }   `}
          >
            <span onClick={message} className="mx-3 cursor-pointer flex items-center justify-center">
              Stays
            </span>
            <span onClick={message} className="px-3 flex justify-center items-center py-1 rounded-full hover:text-gray-800 hover:bg-gray-100 text-gray-500 cursor-pointer h-10">
              Experiences
            </span>
          </div>

          {/* middle section when navbar is small */}

          <div
            className={`ml-[29rem] ${
              isExpanded || !isScrolled
                ? "delay-0 opacity-0"
                : "delay-300 opacity-100"
            } ${isHiddenT ? "hidden" : "absolute"}`}
          >
            <div className="flex min-h-11 rounded-full  min-w-[22rem] border border-gray-300 shadow-md hover:shadow-lg cursor-pointer mt-4">
              <span
              onClick={()=>{
                toggleExpand();
                setisWhereActive(true);
                if(isDatesActive){
                  setisDatesActive(false);
                }
                if(isGuestsActive){
                  setisGuestsActive(false)
                }
              }}
              className="border-r border-gray-300 w-28 flex justify-center items-center font-medium my-2">
                Anywhere
              </span>
              <span
              onClick={()=>{
                toggleExpand();
                setisDatesActive(true);
                if(isWhereActive){
                  setisWhereActive(false);
                }
                if(isGuestsActive){
                  setisGuestsActive(false)
                }
              }}
              className="border-r border-gray-300 w-24 flex justify-center items-center font-medium my-2">
                Any week
              </span>
              <span className="flex">
                <span
                onClick={()=>{
                  toggleExpand();
                  setisGuestsActive(true);
                  if(isWhereActive){
                    setisWhereActive(false);
                  }
                  if(isDatesActive){
                    setisDatesActive(false);
                  }
                }}
                className="ml-3 mt-2 text-gray-500">Add guests</span>
                <span className="bg-red-500 rounded-full w-8 h-8 flex justify-center items-center mt-[5px] ml-2">
                  <img src="/ui-images/search.svg" alt="" className="w-4 min-h-4" />
                </span>
              </span>
            </div>
          </div>

          {/* middle bottom section when navbar is expanded */}

          <div
          
            className={`transition-all duration-300 text-sm mt-20 ${
              isExpanded || !isScrolled
                ? "opacity-100"
                : "-translate-y-20 scale-x-[41%] translate-x-10 opacity-0"
            } ${isHiddenB ? "hidden" : "absolute"} `}
          >
            <div
              className={`flex border shadow-md border-gray-300 rounded-full ml-52  min-w-[40rem] min-h-16 
            ${ isWhereActive || isDatesActive || isGuestsActive ? "bg-gray-200" : "bg-white"}`}
            >
              <div onClick={()=>{
                setisWhereActive(!isWhereActive);
                if(isDatesActive){
                  setisDatesActive(false);
                }
                if(isGuestsActive){
                  setisGuestsActive(false)
                }
                }} 
                className={isWhereActive ? "bg-white flex flex-col pl-8 pr-32 py-2 my-0 rounded-full  " :  isDatesActive || isGuestsActive ? "bg-gray-200 hover:bg-gray-300 flex cursor-pointer flex-col py-2 pl-8 pr-32  rounded-full" : "flex cursor-pointer flex-col border-r my-2 pl-8 pr-32  hover:bg-gray-100 hover:rounded-full hover:border-transparent hover:my-0 hover:py-2"}>
                <span>Where</span>
                <span>Search destinations</span>
              </div>

              <div onClick={()=>{
                setisDatesActive(!isDatesActive);
                if(isWhereActive){
                  setisWhereActive(false);
                }
                if(isGuestsActive){
                  setisGuestsActive(false)
                }
                }} className={isDatesActive ? "bg-white flex cursor-pointer flex-col py-2 pl-5 pr-10 rounded-full" : isWhereActive || isGuestsActive ? "bg-gray-200 flex cursor-pointer flex-col py-2 pl-5 pr-10 hover:bg-gray-300 rounded-full" : "flex cursor-pointer flex-col py-2 pl-5 pr-10  hover:bg-gray-100 rounded-full"}>
                <span>Check in</span>
                <span>Add dates</span>
              </div>

              <div>
                <span className={`flex cursor-pointer flex-col my-2 pl-5 pr-10  border-l hover:border-transparent hover:rounded-full ${ isWhereActive || isDatesActive ? "hover:bg-gray-300" :  "hover:bg-gray-100"} hover:pt-2 hover:pb-3 hover:my-0`}>
                  <span>Check out</span>
                  <span>Add dates</span>
                </span>
              </div>
              <div 
              onClick={()=>{
                setisGuestsActive(!isGuestsActive)
                if(isWhereActive){
                  setisWhereActive(false);
                }
                if(isDatesActive){
                  setisDatesActive(false);
                }
              }}
              className={isGuestsActive ? "flex w-[21rem] justify-between  bg-white py-2   rounded-full pr-4 " : isWhereActive || isDatesActive ? "w-[21rem] justify-between flex cursor-pointer py-2 hover:bg-gray-300 hover:my-0  rounded-full pr-4" : "flex cursor-pointer my-2 hover:bg-gray-100 hover:py-2 hover:my-0 hover:border-transparent hover:rounded-full pr-4 border-l w-[21rem] justify-between"}>
                <span className="flex-col flex pl-5">
                  <span>Who</span>
                  <span>{totalGuests===0 ? "Add" : totalGuests} guests</span>
                </span>
                <span
                  className={`bg-red-500 min-h-11 min-w-11 rounded-full ml-6 flex justify-center items-center `}
                >
                  <img
                    src="/ui-images/search.svg"
                    alt=""
                    className={`w-5 h-5 `}
                  />
                </span>
              </div>
            </div>
          </div>

            <UserMenu showUserMenu={showUserMenu} setshowLogin={setshowLogin}/>
            <SearchDestination isWhereActive={isWhereActive}/>
            <AddDates isDatesActive={isDatesActive}/>
            <WhoGuests isGuestsActive={isGuestsActive} settotalGuests={settotalGuests}/>



          {/* right section */}
          <div className="ml-52 flex bg-white mt-4 mr-14" >
            <span onClick={message} className="min-w-36 rounded-full hover:bg-gray-100 min-h-10 py-2 px-3 text-sm cursor-pointer mt-1">
              Airbnb your home
            </span>
            <span onClick={message} className=" hover:bg-gray-100 min-w-11 rounded-full cursor-pointer flex justify-center items-center mr-1">
              <img src="/ui-images/web.svg" alt="" className="w-5 h-5" />
            </span>
            <span onClick={()=>setShowUserMenu(!showUserMenu)} className="flex cursor-pointer rounded-full min-w-20 min-h-11 gap-3 pl-4 border border-gray-300 hover:shadow-md">
              <span className="flex justify-center items-center">
                <img
                  src="/ui-images/hamburger.svg"
                  alt=""
                  className="w-4 h-5"
                />
              </span>
              <span className="flex justify-center items-center">
                <img
                  src="/ui-images/profile.jpg"
                  alt=""
                  className="w-8 h-8 rounded-full mr-2"
                />
              </span>
            </span>
          </div>
        </div>
        <div
          className={`min-h-[0.5px] bg-gray-200 min-w-[100vw] absolute transition-all duration-300  ${
            isExpanded || !isScrolled ? "mt-24" : "mt-5"
          }`}
        ></div>

         {/* left arrow */}
{
  showLeft && (
    <div
      onClick={() => scroll("left")}
      className={`absolute transition-all duration-300 ml-6 ${
        isExpanded || !isScrolled ? "" : "-mt-20"
      }`}
    >
      <div className={`flex bg-white border border-black rounded-full min-h-8 min-w-8 mt-28 justify-center items-center cursor-pointer hover:scale-105 hover:shadow-md`}>
        <img src="/ui-images/left-arrow.svg" alt="" className="h-7 w-7" />
      </div>
    </div>
  )
}

        

        

        <div className="flex">
          {/* category bar */}
          <div
          ref={scrollContainerRef}
            className={`flex overflow-x-scroll  transition-all duration-300 ml-14 w-[48rem] ${
              isExpanded || !isScrolled ? "mt-28" : "mt-8"
            }
            ${showLeft && !showRight ? "left-mask-gradient" : ""}
            ${showRight && !showLeft ? "right-mask-gradient" : ""}
            ${showLeft && showRight ? "both-mask-gradient" : ""}`}
          >
            {navlist.map((item) => {
              return (
                <div
                key={item.id}
                  onClick={() => {
                    setCategory(item.name);
                  }}
                  className={`active:scale-95 transition-all duration-100 flex flex-col border-b-2 h-116 ml-12 items-center justify-center  cursor-pointer hover:opacity-100 ${
                    item.name === category
                      ? "border-black hover:border-black cursor-default opacity-100"
                      : "opacity-60 hover:border-gray-300"
                  }`}
                >
                  <span>
                    <img src={item.imgLink} alt="" className="h-6 w-6" />
                  </span>
                  <span className="text-xs whitespace-nowrap font-bold mt-2">
                    {item.name}
                  </span>
                  <span className="h-[2px] bg-white w-[95%] mt-2"></span>
                </div>
              );
            })}
          </div>

            {/* right arrow */}
          {
            showRight && (
              <div
              onClick={()=>scroll("right")}
              className={`absolute transition-all duration-300 ml-[50rem] ${
                isExpanded || !isScrolled ? "" : "-mt-20"
              }`}>
            <div className={`flex bg-white border  border-black rounded-full min-h-8 min-w-8 mt-28 justify-center items-center cursor-pointer hover:scale-105 hover:shadow-md`}>
              <img src="/ui-images/right-arrow.svg" alt="" className="h-5 w-5" />
            </div>
            </div>
            )
          }

          

          {/* buttons */}
          <div className="flex">

            {/* filters button */}
            <button className={`flex border transition-all duration-300 border-gray-300 hover:bg-gray-100 hover:border-black w-24 h-11 rounded-xl gap-1 justify-center items-center  ml-12 text-sm font-medium ${
              isExpanded || !isScrolled ? "mt-28" : "mt-8"
            }`}>
              <img src="/ui-images/filter.svg" alt="" className="w-5 h-5"/>
              <span className="text-xs">Filters</span>
            </button>

            {/* total before taxes button */}
            <button onClick={()=>{settotalBeforeTaxes(!totalBeforeTaxes)}} className={`hover:bg-gray-100 transition-all duration-300 flex hover:border-black justify-center items-center gap-2 border border-gray-300 h-11 w-56 mt-28 rounded-xl ml-4 ${
              isExpanded || !isScrolled ? "mt-28" : "mt-8"
            }`}>
              <span className="text-xs font-medium">Display total before taxes</span>
              <div className={`rounded-full relative min-w-9 hover:bg-black min-h-6 mt-1 ${totalBeforeTaxes ? "bg-black" : "bg-gray-200"}`}>
                <div className={`transition-all duration-200 absolute min-w-6 min-h-6 rounded-full bg-white border-2  hover:border-black ${totalBeforeTaxes ? "translate-x-3 border-black" : "border-gray-300"}`}></div>
              </div>

            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
