import React from "react";

const SubFooter = ({message}) => {
  return (
    <div onClick={message} className="w-[100vw] bg-gray-50 ">
      {/* first section  */}

      <div className="flex border-t border-b border-gray-300 h-20 items-center">
        <span className="hover:underline cursor-pointer ml-20 mr-1">Airbnb</span>{" "}
        &gt;
        <span className="hover:underline cursor-pointer ml-1"> India</span> &gt;
        <span className="hover:underline cursor-pointer ml-1">
          Himachal Pradesh
        </span>
        &gt;
        <span className="hover:underline cursor-pointer ml-1">
          Mandi Division
        </span>
        &gt; <span className="hover:underline cursor-pointer ml-1"> Kullu</span>
      </div>

      {/* second section  */}

      <div className="pb-7 border-b border-gray-300">
        <div className="flex flex-col mt-8 mx-20">
          <h1 className="font-medium text-xl mb-10">
            Explore other options in and around Jibhi
          </h1>
          <div className="flex">
            <div className="flex flex-col w-1/3">
              <div className="flex flex-col text-sm">
                <span className="font-medium mb-3 cursor-pointer">Manali</span>
                <span className="mb-8 text-gray-600 cursor-pointer">Holiday rentals</span>
              </div>
              <div className="flex flex-col text-sm">
                <span className="font-medium mb-3 cursor-pointer">DharmShala</span>
                <span className="mb-8 text-gray-600 cursor-pointer">Holiday rentals</span>
              </div>
              <div className="flex flex-col text-sm">
                <span className="font-medium mb-3 cursor-pointer">Kasol</span>
                <span className="mb-8 text-gray-600 cursor-pointer">Holiday rentals</span>
              </div>
            </div>

            <div className="flex flex-col w-1/3">
              <div className="flex flex-col text-sm">
                <span className="font-medium mb-3 cursor-pointer">Shimla</span>
                <span className="mb-8 text-gray-600 cursor-pointer">Holiday rentals</span>
              </div>
              <div className="flex flex-col text-sm">
                <span className="font-medium mb-3 cursor-pointer">Kasauli</span>
                <span className="mb-8 text-gray-600 cursor-pointer">Holiday rentals</span>
              </div>
              <div className="flex flex-col text-sm">
                <span className="font-medium mb-3 cursor-pointer">Jibhi</span>
                <span className="mb-8 text-gray-600 cursor-pointer">Holiday rentals</span>
              </div>
            </div>

            <div className="flex flex-col w-1/3">
              <div className="flex flex-col text-sm">
                <span className="font-medium mb-3 cursor-pointer">Lahaul and Spiti</span>
                <span className="mb-8 text-gray-600 cursor-pointer">Holiday rentals</span>
              </div>
              <div className="flex flex-col text-sm">
                <span className="font-medium mb-3 cursor-pointer">
                  Sahibzada Ajit Singh Nagar
                </span>
                <span className="mb-8 text-gray-600 cursor-pointer">Holiday rentals</span>
              </div>
              <div className="flex flex-col text-sm">
                <span className="font-medium mb-3 cursor-pointer">Bir</span>
                <span className="mb-8 text-gray-600 cursor-pointer">Holiday rentals</span>
              </div>
            </div>
          </div>

          <h1 className="text-xl font-medium mt-5 mb-8">
            Other types of stay on Airbnb
          </h1>
          <div className="flex">
            <div className="flex flex-col w-1/3">
              <span className="cursor-pointer font-medium text-sm mb-6">
                Kullu holiday rentals
              </span>
              <span className="cursor-pointer font-medium text-sm mb-6">
                House holiday rentals in India
              </span>
              <span className="cursor-pointer font-medium text-sm mb-6">
                Family-friendly holiday rentals in Kullu
              </span>
            </div>

            <div className="flex flex-col w-1/3">
              <span className="cursor-pointer font-medium text-sm mb-6">
                Kullu monthly stays
              </span>
              <span className="cursor-pointer font-medium text-sm mb-6">
                Holiday rentals with outdoor seating in Kullu
              </span>
              <span className="cursor-pointer font-medium text-sm mb-6">
                Pet-friendly holiday rentals in Kullu
              </span>
            </div>

            <div className="flex flex-col w-1/3">
              <span className="cursor-pointer font-medium text-sm mb-6">
                House holiday rentals in Himachal Pradesh
              </span>
              <span className="cursor-pointer font-medium text-sm mb-6">
                Cottage holiday rentals in Kullu
              </span>
              <span className="cursor-pointer font-medium text-sm mb-6">
                Holiday rentals with outdoor seating in Himachal Prad...
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* third section */}

      <div className="flex mt-12 border-b border-gray-300 pb-10">
        <div className="flex flex-col mx-10 w-1/3 text-sm">
          <span className="font-medium mb-3">Support</span>
          <span className="hover:underline cursor-pointer mb-3">
            Help Centre
          </span>
          <span className="hover:underline cursor-pointer mb-3">AirCover</span>
          <span className="hover:underline cursor-pointer mb-3">
            Anti-discrimination
          </span>
          <span className="hover:underline cursor-pointer mb-3">
            Disability support
          </span>
          <span className="hover:underline cursor-pointer mb-3">
            Cancellation options
          </span>
          <span className="hover:underline cursor-pointer mb-3">
            Report neighbourhood concern
          </span>
        </div>
        <div className="flex flex-col w-1/3">
          <span className="font-medium mb-3">Hosting</span>
          <span className="hover:underline cursor-pointer mb-3">
            Airbnb your home
          </span>
          <span className="hover:underline cursor-pointer mb-3">
            AirCover for Hosts
          </span>
          <span className="hover:underline cursor-pointer mb-3">
            Hosting resources
          </span>
          <span className="hover:underline cursor-pointer mb-3">
            Community forum
          </span>
          <span className="hover:underline cursor-pointer mb-3">
            Hosting responsibly
          </span>
          <span className="hover:underline cursor-pointer mb-3">
            Join a free Hosting class
          </span>
          <span className="hover:underline cursor-pointer mb-3">
            Find a co‑host
          </span>
        </div>
        <div className="flex flex-col w-1/3">
          <span className="font-medium mb-3">Airbnb</span>
          <span className="hover:underline cursor-pointer mb-3">Newsroom</span>
          <span className="hover:underline cursor-pointer mb-3">
            New features
          </span>
          <span className="hover:underline cursor-pointer mb-3">Careers</span>
          <span className="hover:underline cursor-pointer mb-3">Investors</span>
          <span className="hover:underline cursor-pointer mb-3">
            Airbnb.org emergency stays
          </span>
        </div>
      </div>

      {/* fourth section */}

      <div className="flex items-center justify-between h-14">
        <div className="ml-10">
          © 2025 Airbnb, Inc. &middot;
          <span className="hover:underline cursor-pointer mb-3 mx-1">Privacy</span>
          &middot;{" "}
          <span className="hover:underline cursor-pointer mb-3 mx-1">Terms</span>
          &middot;
          <span className="hover:underline cursor-pointer mb-3 mx-1">Sitemap</span>
          &middot;
          <span className="hover:underline cursor-pointer mb-3 mx-1">
            Company details
          </span>
        </div>

        <div className="flex mr-10">
          <svg
            className="mt-[0.35rem] mr-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            width="15"
            height="15"
          >
            <path d="M8 .25a7.77 7.77 0 0 1 7.75 7.78 7.75 7.75 0 0 1-7.52 7.72h-.25A7.75 7.75 0 0 1 .25 8.24v-.25A7.75 7.75 0 0 1 8 .25zm1.95 8.5h-3.9c.15 2.9 1.17 5.34 1.88 5.5H8c.68 0 1.72-2.37 1.93-5.23zm4.26 0h-2.76c-.09 1.96-.53 3.78-1.18 5.08A6.26 6.26 0 0 0 14.17 9zm-9.67 0H1.8a6.26 6.26 0 0 0 3.94 5.08 12.59 12.59 0 0 1-1.16-4.7l-.03-.38zm1.2-6.58-.12.05a6.26 6.26 0 0 0-3.83 5.03h2.75c.09-1.83.48-3.54 1.06-4.81zm2.25-.42c-.7 0-1.78 2.51-1.94 5.5h3.9c-.15-2.9-1.18-5.34-1.89-5.5h-.07zm2.28.43.03.05a12.95 12.95 0 0 1 1.15 5.02h2.75a6.28 6.28 0 0 0-3.93-5.07z"></path>
          </svg>
          <span className="cursor-pointer hover:underline mr-5">
            English(IN)
          </span>

          <span>
            ₹ <span className="cursor-pointer hover:underline">INR</span>
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="18"
            height="18"
            className="mt-1 ml-5"
          >
            <rect width="32" height="32" fill="black"></rect>
            <path
              fill="white"
              d="M22.94 16H18.5v-3c0-1.27.62-2.5 2.6-2.5h2.02V6.56s-1.83-.31-3.58-.31c-3.65 0-6.04 2.21-6.04 6.22V16H9.44v4.62h4.06V32h5V20.62h3.73z"
            ></path>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="18"
            height="18"
            className="mt-1 ml-5"
          >
            <rect width="32" height="32" fill="black"></rect>

            <path
              fill="white"
              d="M18.66 7.99a4.5 4.5 0 0 0-2.28 4.88A12.31 12.31 0 0 1 7.3 8.25a4.25 4.25 0 0 0 1.38 5.88c-.69 0-1.38-.13-2-.44a4.54 4.54 0 0 0 3.5 4.31 4.3 4.3 0 0 1-2 .06 4.64 4.64 0 0 0 4.19 3.13A8.33 8.33 0 0 1 5.8 23a12.44 12.44 0 0 0 19.32-11.19A7.72 7.72 0 0 0 27.3 9.5a8.3 8.3 0 0 1-2.5.75 4.7 4.7 0 0 0 2-2.5c-.87.5-1.81.87-2.81 1.06a4.5 4.5 0 0 0-5.34-.83z"
            ></path>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            aria-label="Navigate to Instagram"
            role="img"
            focusable="false"
            style={{
              display: "block",
              height: "18px",
              width: "18px",
              fill: "currentColor",
            }}
            className="mt-1 ml-5"
          >
            <path d="M30 0H2a2 2 0 0 0-2 2v28c0 1.1.9 2 2 2h28a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"></path>
            <path
              fill="#fff"
              d="M15.71 4h1.25c2.4 0 2.85.02 3.99.07 1.28.06 2.15.26 2.91.56.79.3 1.46.72 2.13 1.38.6.6 1.08 1.33 1.38 2.13l.02.06c.28.74.48 1.58.54 2.8l.01.4c.05 1.02.06 1.63.06 4.4v.92c0 2.6-.02 3.05-.07 4.23a8.78 8.78 0 0 1-.56 2.91c-.3.8-.77 1.53-1.38 2.13a5.88 5.88 0 0 1-2.13 1.38l-.06.02c-.74.28-1.59.48-2.8.53l-.4.02c-1.02.05-1.63.06-4.4.06h-.92a73.1 73.1 0 0 1-4.23-.07 8.78 8.78 0 0 1-2.91-.56c-.8-.3-1.53-.77-2.13-1.38a5.88 5.88 0 0 1-1.38-2.13l-.02-.06a8.84 8.84 0 0 1-.54-2.8l-.01-.37A84.75 84.75 0 0 1 4 16.29v-1c0-2.62.02-3.06.07-4.24.06-1.26.26-2.13.55-2.88l.01-.03c.3-.8.77-1.53 1.38-2.13a5.88 5.88 0 0 1 2.13-1.38l.06-.02a8.84 8.84 0 0 1 2.8-.54l.37-.01C12.39 4 12.99 4 15.71 4zm.91 2.16h-1.24c-2.3 0-2.91.01-3.81.05l-.42.02c-1.17.05-1.8.25-2.23.41-.56.22-.96.48-1.38.9-.4.41-.67.8-.88 1.35l-.03.06a6.7 6.7 0 0 0-.4 2.2l-.02.45c-.04.9-.05 1.53-.05 3.94v1.08c0 2.64.02 3.05.07 4.23v.07c.06 1.13.25 1.74.42 2.16.21.56.47.96.9 1.38.4.4.8.67 1.34.88l.06.03a6.7 6.7 0 0 0 2.2.4l.45.02c.9.04 1.53.05 3.94.05h1.08c2.64 0 3.05-.02 4.23-.07h.07a6.51 6.51 0 0 0 2.16-.42c.52-.19.99-.5 1.38-.9.4-.4.67-.8.88-1.34l.03-.06a6.7 6.7 0 0 0 .4-2.2l.02-.45c.04-.9.05-1.53.05-3.94v-1.09c0-2.63-.02-3.04-.07-4.22v-.07a6.51 6.51 0 0 0-.42-2.16c-.19-.52-.5-.99-.9-1.38a3.7 3.7 0 0 0-1.34-.88l-.06-.03a6.63 6.63 0 0 0-2.16-.4l-.46-.02c-.9-.04-1.5-.05-3.8-.05zM16 9.84a6.16 6.16 0 1 1 0 12.32 6.16 6.16 0 0 1 0-12.32zM16 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm6.4-3.85a1.44 1.44 0 1 1 0 2.88 1.44 1.44 0 0 1 0-2.88z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SubFooter;
