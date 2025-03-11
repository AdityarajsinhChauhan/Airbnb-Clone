import React from "react";
import propertyList from "../properties";
import { useParams } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import CalenderJul from "../components/CalenderJul";
import CalenderAug from "../components/CalenderAug";
import RatingBar from "../components/RatingBar";
import Host from "../components/Host";
import PaymentCard from "../components/PaymentCard";

const PropertyPage = ({message}) => {
  const { id } = useParams();
  console.log();

  const [showNavbar, setshowNavbar] = useState(false);

  const Photos = useRef(null);
  const Amenities = useRef(null);
  const Reviews = useRef(null);
  const Location = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setshowNavbar(!entry.isIntersecting);
      },
      { root: null, threshold: 0 }
    );

    if (Photos.current) {
      observer.observe(Photos.current);
    }
    return () => {
      if (Photos.current) {
        observer.unobserve(Photos.current);
      }
    };
  }, []);

  const ScrollToSecton = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="">
      <div className={`${showNavbar ? "fixed top-0 z-40" : "hidden"}`}>
        <ul className="flex h-20 w-[100vw] bg-white border-b border-gray-300 items-center pl-20 font-medium gap-5">
          <li className="cursor-pointer" onClick={() => ScrollToSecton(Photos)}>
            Photos
          </li>
          <li
            className="cursor-pointer"
            onClick={() => ScrollToSecton(Amenities)}
          >
            Amenities
          </li>
          <li
            className="cursor-pointer"
            onClick={() => ScrollToSecton(Reviews)}
          >
            Reviews
          </li>
          <li
            className="cursor-pointer"
            onClick={() => ScrollToSecton(Location)}
          >
            Location
          </li>
        </ul>
      </div>

      <h1 className="text-2xl font-medium ml-20 mt-5">
        Bastiat Stays| Whispering Pines Cottages| Cabin |
      </h1>

      {/* images section */}

      <section className="relative" ref={Photos}>
        <div className="flex flex-wrap flex-col h-[20rem] mt-5 ml-20 mr-[2rem]">
          {propertyList
            .filter((item) => item.id == id)[0]
            .imgSrc.map((img, index) => (
              <img
                key={index}
                src={img}
                className={`cursor-pointer hover:brightness-75 ${
                  index === 0
                    ? "rounded-tl-2xl rounded-bl-2xl h-[18.6rem] w-[34.5rem] "
                    : " h-[9rem] w-[17rem] mb-[0.6rem] -ml-10"
                } object-cover object-center ${
                  index === 4 ? "rounded-br-2xl" : ""
                } ${index === 3 ? "rounded-tr-2xl" : ""} `}
              />
            ))}

          <div className="absolute right-28 bottom-10 cursor-pointer">
            <div className="flex items-center justify-center rounded-lg bg-white h-8 w-40 gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style={{ height: "16px", width: "16px", fill: "currentColor" }}
              >
                <path
                  fillRule="evenodd"
                  d="M3 11.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"
                />
              </svg>
              <span onClick={message}>Show all photos</span>
            </div>
          </div>
        </div>
      </section>

      <div className="relative">
        <PaymentCard Photos={Photos} Reviews={Reviews}message={message}/>
        <div className="flex flex-col border-b border-gray-300 w-[43rem] ml-20 pb-7">
          <div className="flex flex-col">
            <span className="text-2xl font-medium">
              Entire cottage in Jibhi, India
            </span>
            <span className="text-lg">
              4 guests &middot; 2 bedrooms &middot; 2 beds &middot; 1 bathroom
            </span>
            <span className="flex text-lg font-medium">
              <img
                src="/ui-images/star.svg"
                alt=""
                className="w-4 h-4 mt-[0.30rem]"
              />
              {propertyList.filter((item) => item.id == id)[0].rating}{" "}
              <span className="mx-1">&middot;</span>{" "}
              <span className="underline"> 241 reviews</span>
            </span>
          </div>
        </div>

        <div className="flex ml-20 py-6 border-b border-gray-300 w-[43rem] ">
          <img
            src="/propety-images/daleep.jpg"
            alt=""
            className="w-10 h-10 rounded-full object-cover object-center"
          />
          <div className="flex flex-col ml-5 pb-1">
            <span className=" font-medium">Hosted by Daleep</span>
            <span className="flex text-sm text-gray-500">
              Superhost &middot; 7 years hosting
            </span>
          </div>
        </div>

        <div className="flex flex-col ml-20 w-[43rem] border-b border-gray-300">
          <div className="flex mt-8">
            <svg
              className="mt-1 mr-8"
              width="23"
              height="23"
              viewBox="0 0 32 32"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m15.59 1.91 1.02.8C22.17 7.04 25 11.46 25 15.98a8.99 8.99 0 0 1-.5 3.02H31v2h-2v9a1 1 0 0 1-.88 1H4a1 1 0 0 1-1-.88V21H1v-2h6.42c-.28-.9-.42-1.91-.42-3.01 0-2.25 1.1-4.82 3.27-7.75l.27-.35.55-.73 1.78 1.12L15.6 1.9zM27 21H5v8h22v-8zM16.4 5.1l-2.6 6.1-2.21-1.37-.17.24C9.87 12.3 9.07 14.2 9 15.77l-.01.21c0 1.1.17 2.04.48 2.85l.07.17h3a6.1 6.1 0 0 1-.05-.83c0-1.52.86-3.19 2.52-5.07l.24-.27.74-.81.74.8c1.82 2 2.76 3.76 2.76 5.35 0 .3-.02.57-.05.83h3.06l-.14-.07a6.7 6.7 0 0 0 .63-2.95c0-3.42-2.03-6.93-6.17-10.51l-.43-.36zm-.4 9.94-.08.1c-.9 1.14-1.36 2.11-1.41 2.88l-.01.15c0 .35.03.63.09.83h2.82c.06-.2.09-.48.09-.83 0-.79-.46-1.8-1.42-3.04l-.08-.1z"></path>
            </svg>
            <div className="flex flex-col">
              <span className="font-medium">Outdoor entertainment</span>
              <span className="text-sm text-gray-500">
                The firepit, alfresco dining, BBQ area and outdoor seating are
                great for summer trips.
              </span>
            </div>
          </div>

          <div className="flex mt-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              className="h-6 w-6 fill-current mt-1 mr-8"
            >
              <path d="M16 0a12 12 0 0 1 12 12c0 6.34-3.81 12.75-11.35 19.26l-.65.56-1.08-.93C7.67 24.5 4 18.22 4 12 4 5.42 9.4 0 16 0zm0 2C10.5 2 6 6.53 6 12c0 5.44 3.25 11.12 9.83 17.02l.17.15.58-.52C22.75 23 25.87 17.55 26 12.33V12A10 10 0 0 0 16 2zm0 5a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"></path>
            </svg>
            <div className="flex flex-col">
              <span className="font-medium">Peace and quiet</span>
              <span className="text-sm text-gray-500">
                Guests say this home is in a quiet area.
              </span>
            </div>
          </div>

          <div className="flex mt-7 mb-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              className="h-6 w-6 fill-current mt-1 mr-8"
            >
              <path d="M11.67 0v1.67h8.66V0h2v1.67h6a2 2 0 0 1 2 1.85v16.07a2 2 0 0 1-.46 1.28l-.12.13L21 29.75a2 2 0 0 1-1.24.58H6.67a5 5 0 0 1-5-4.78V3.67a2 2 0 0 1 1.85-2h6.15V0zm16.66 11.67H3.67v13.66a3 3 0 0 0 2.82 3h11.18v-5.66a5 5 0 0 1 4.78-5h5.88zm-.08 8h-5.58a3 3 0 0 0-3 2.82v5.76zm-18.58-16h-6v6h24.66v-6h-6v1.66h-2V3.67h-8.66v1.66h-2z"></path>
            </svg>
            <div className="flex flex-col">
              <span className="font-medium">
                Free cancellation before 30 Jun
              </span>
              <span className="text-sm text-gray-500">
                Get a full refund if you change your mind.
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col ml-20 mt-9 w-[43rem] border-b border-gray-300">
          <div className="flex mb-9">
            <img
              src="/ui-images/star.svg"
              alt=""
              className="w-3 h-3 mt-[0.31rem] mr-1"
            />{" "}
            You’ll be taken care of by one of the most successful Airbnb hosts
            in the country.
          </div>
          <div className="flex">
            <img
              src="/ui-images/star.svg"
              alt=""
              className="w-3 h-3 mt-[0.31rem] mr-1"
            />{" "}
            The treehouse is nestled in the Himalayan subtropical pine forests.
            It is made keeping in mind to provide a comfortable and memorable
            stay to travelers seeking a break from the hustle of city life. The
            house is cozy both in winter and summer. It has a 360-degree view of
            the greater Himalayas.
          </div>
          <div onClick={message} className="cursor-pointer underline mr-3 flex text-lg mt-6 font-medium ml-3 mb-12">
            Show more &gt;
          </div>
        </div>

        <div className="flex flex-col ml-20 mt-12 border-b border-gray-300 pb-12 w-[43rem]">
          <div className="text-2xl font-medium mb-6">Where you'll sleep</div>
          <div className="flex">
            <span className="flex flex-col w-[19.5rem]">
              <img
                src="/propety-images/Jibhi-br-1.jpg"
                alt=""
                className="object-fit object-center rounded-lg"
              />
              <span className="font-medium">Bedroom 1</span>
              <span className="text-gray-500">1 queen bed</span>
            </span>

            <span className="flex flex-col w-[19.5rem] ml-4">
              <img
                src="/propety-images/Jibhi-br-2.jpg"
                alt=""
                className="object-fit object-center rounded-lg"
              />
              <span className="font-medium">Bedroom 2</span>
              <span className="text-gray-500">1 double bed</span>
            </span>
          </div>
        </div>

        <div
          className="flex ml-20 flex-col mt-14 w-[43rem] border-b border-gray-300 pb-12"
          ref={Amenities}
        >
          <div className="text-2xl font-medium">What this place offers</div>
          <div className="flex mt-7">
            <div className="flex-col text-lg mr-28">
              <div>Mountain view</div>
              <div>Kitchen</div>
              <div>Dedicated workspace</div>
              <div>Pets allowed</div>
              <div className="line-through">Carbon monoxide alarm</div>
            </div>
            <div className="flex-col text-lg">
              <div>Valley view</div>
              <div>Wifi</div>
              <div>Free parking on premises</div>
              <div>Washing machine</div>
              <div className="line-through">Smoke alarm</div>
            </div>
          </div>

          <button onClick={message} className="h-12 w-52 border-[1.5px] font-medium mt-10 border-black rounded-lg">
            Show all 57 amenities
          </button>
        </div>

        <div className="flex flex-col w-[43rem] ml-20 pt-12 pb-14 ">
          <div className="flex flex-col">
            <span className="text-2xl font-medium">5 nights in Jibhi</span>
            <span className="text-sm text-gray-500 mb-6">
              1 Jul 2025 - 6 Jul 2025
            </span>
            <div className="flex">
              <CalenderJul message={message} />
              <CalenderAug message={message}/>
              <div onClick={message} className="absolute right-20 bottom-12">
              <div className="flex flex-col items-center justify-center">
                <button className="flex flex-col items-start w-[23rem] border mb-6 pl-16 py-6 border-gray-300 rounded-lg">
                  <span className="text-lg font-medium">This is rare find</span>
                  <span className="text-sm text-gray-600">Daleep's place is usually fully booked</span>
                </button>
                <span className="text-sm text-gray-600 underline cursor-pointer">Report this listing</span>
              </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between " onClick={message}>
            <div className="w-10 h-10 p-2 hover:bg-gray-100 rounded-full cursor-pointer flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                fill="black"
                className="flex items-center justify-center  w-6 h-6"
              >
                <path d="M29 5a2 2 0 0 1 2 1.85V25a2 2 0 0 1-1.85 2H3a2 2 0 0 1-2-1.85V7a2 2 0 0 1 1.85-2H3zm0 2H3v18h26zm-8 13v2H11v-2zm3-5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm16-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
              </svg>
            </div>
            <span className="underline cursor-pointer font-medium">
              Clear dates
            </span>
          </div>
        </div>
      </div>

      <div ref={Reviews}>
        <RatingBar />
      </div>

      {/* comments */}

      <div className="flex mt-12 mx-20">
        <div className="flex flex-col w-[50.8rem] mr-24">
          <span className="text-lg font-bold mb-3">Akash</span>
          <span className="text-sm">9 years on Airbnb</span>
          <span className="text-sm font-medium mb-1">
            rating 5/5 · November 2024{" "}
          </span>
          <span className="text-lg">
            Great place, tranquility with great views. The place is just like
            our childhood story books mountain homes amidts hills, greenery and
            beautiful flowers. A very authentic experience! ...
          </span>
          <span onClick={message} className="underline font-medium cursor-pointer">
            Show more
          </span>
        </div>

        <div className="flex flex-col w-[50.8rem]">
          <span className="text-lg font-bold mb-3">Kritika</span>
          <span className="text-sm">6 years on Airbnb</span>
          <span className="text-sm font-medium mb-1">
            rating 5/5 · December 2024{" "}
          </span>
          <span className="text-lg">
            The place was just like we imagined. We visited during snowfall so
            it felt magical. Ravi bhiaya is such a kind caretaker. He took us
            for a small trek in snow, served us hot ...
          </span>
          <span onClick={message} className="underline font-medium cursor-pointer">
            Show more
          </span>
        </div>
      </div>

      <div className="flex ml-20 mx-10 border-b border-gray-300 pb-12" onClick={message}>
        <button onClick={message} className="h-12 w-52 border-[1.5px] font-medium border-black rounded-lg mt-12">
          Show all 241 reviews
        </button>
        <span className="underline cursor-pointer text-xs text-gray-600 ml-5 flex items-center pt-10 ">
          Learn how reviews work
        </span>
      </div>

      {/* map */}
      <div
      onClick={message}
        className="flex flex-col mt-14 mx-20 border-b border-gray-300 pb-12"
        ref={Location}
      >
        <span className="text-2xl font-medium mb-12">Where you'll be</span>
        <img src="/propety-images/map.png" className="cursor-grab" alt="" />
        <span className="mt-8 mb-6 font-medium">
          Jibhi, Himachal Pradesh, India
        </span>
        <span className="flex">
          <img
            src="/ui-images/star.svg"
            className="w-3 h-3 mt-[0.32rem] mr-1"
            alt=""
          />
          Tandi is a remote village above Jibhi, an 8-kilometer drive from the
          Jibhi market.
        </span>
        <span className="flex">
          <img
            src="/ui-images/star.svg"
            className="w-3 h-3 mt-[0.32rem] mr-1"
            alt=""
          />
          It's a beautiful village with wheat and maize fields, pear trees, and
          apple orchards.
        </span>
        <span className="flex">
          <img
            src="/ui-images/star.svg"
            className="w-3 h-3 mt-[0.32rem] mr-1"
            alt=""
          />
          The treehouse is surrounded by mountainous forests on all sides...
        </span>
        <span onClick={message} className="flex mt-5 font-medium cursor-pointer underline text-lg">
          Show more &gt;
        </span>
      </div>

      <Host message={message}/>

      <div className="flex flex-col mt-12 mx-20 pb-12">
        <h1 className="text-2xl font-medium mb-8">Things to know</h1>
        <div className="flex text-lg">
          <div className="flex flex-col w-1/3">
            <span className="font-medium mb-3">House rules</span>
            <span className="mb-3">Check-in: 12:0_pm – 11:00pm</span>
            <span className="mb-3">Checkout before 11:00am</span>
            <span className="mb-3">4 guests maximum</span>
            <span className="flex underline font-medium cursor-pointer" onClick={message}>
              Show more &gt;
            </span>
          </div>
          <div className="flex flex-col w-1/3">
            <span className="mb-3 font-medium">Safety & property</span>
            <span className="mb-3">No carbon monoxide alarm</span>
            <span className="mb-3"> No smoke alarm</span>
            <span className="mb-3">
              Nearby lake, river, other body of water
            </span>
            <span className="flex underline font-medium cursor-pointer" onClick={message}>
              Show more &gt;
            </span>
          </div>
          <div className="flex flex-col w-1/3">
            <span className="mb-3 font-medium">Cancellation policy</span>
            <span className="mb-3">
              Free cancellation before 30 Jun. Cancel before check-in on 1 Jul
              for a partial refund.
            </span>
            <span className="mb-3">
              Review this Host’s full policy for details
            </span>
            <span className="flex underline font-medium cursor-pointer" onClick={message}>
              Show more &gt;{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyPage;
