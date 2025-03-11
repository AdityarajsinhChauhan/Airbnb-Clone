import React from "react";

const Host = ({message}) => {
  return (
    <div onClick={message} className="flex flex-col mx-20 mt-10 border-b border-gray-300 pb-16">
      <h1 className="text-2xl font-medium mb-5">Meet your host</h1>
      <div className="flex">
        <div className="flex flex-col mr-16">
            <img src="/propety-images/Daleep.png" className="w-96 shadow-[0_8px_20px_rgba(0,0,0,0.15)] rounded-3xl" alt="" />
          <span className="mt-7 flex w-96">
            <svg
            className="mr-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style={{
                display: "block",
                height: "24px",
                width: "24px",
                fill: "currentColor",
              }}
            >
              <path d="M20 2a2 2 0 0 1 2 1.85V6h6a3 3 0 0 1 3 2.82V27a3 3 0 0 1-2.82 3H4a3 3 0 0 1-3-2.82V9a3 3 0 0 1 2.82-3H10V4a2 2 0 0 1 1.85-2H12zm8 6H4a1 1 0 0 0-1 .88V12a3 3 0 0 0 2.82 3H13v2H6a4.98 4.98 0 0 1-3-1v11a1 1 0 0 0 .88 1H28a1 1 0 0 0 1-.88V16c-.78.59-1.74.95-2.78 1h-7.17v-2H26a3 3 0 0 0 3-2.82V9a1 1 0 0 0-.88-1zm-10 4a1 1 0 0 1 1 .88V19a1 1 0 0 1-.88 1H14a1 1 0 0 1-1-.88V13a1 1 0 0 1 .88-1H14zm-1 2h-2v4h2zm3-10h-8v2h8z"></path>
            </svg>
            My work: Government
          </span>
          <span className="flex mt-4 w-96">
            <svg
            className="mr-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style={{
                display: "block",
                height: "24px",
                width: "24px",
                fill: "currentColor",
              }}
            >
              <path d="M26 2a5 5 0 0 1 5 4.78V21a5 5 0 0 1-4.78 5h-6.06L16 31.08 11.84 26H6a5 5 0 0 1-4.98-4.56L1 21.22 1 21V7a5 5 0 0 1 4.78-5H26zm0 2H6a3 3 0 0 0-3 2.82V21a3 3 0 0 0 2.82 3H12.8l3.2 3.92L19.2 24H26a3 3 0 0 0 3-2.82V7a3 3 0 0 0-2.82-3H26zM16 6a8.02 8.02 0 0 1 8 8.03A8 8 0 0 1 16.23 22h-.25A8 8 0 0 1 8 14.24v-.25A8 8 0 0 1 16 6zm1.68 9h-3.37c.11 1.45.43 2.76.79 3.68l.09.22.13.3c.23.45.45.74.62.8H16c.33 0 .85-.94 1.23-2.34l.11-.44c.16-.67.29-1.42.34-2.22zm4.24 0h-2.23c-.1 1.6-.42 3.12-.92 4.32a6 6 0 0 0 3.1-4.07l.05-.25zm-9.61 0h-2.23a6 6 0 0 0 3.14 4.32c-.5-1.2-.82-2.71-.91-4.32zm.92-6.32-.13.07A6 6 0 0 0 10.08 13h2.23c.1-1.61.42-3.12.91-4.32zM16 8h-.05c-.27.08-.64.7-.97 1.65l-.13.4a13.99 13.99 0 0 0-.54 2.95h3.37c-.19-2.66-1.1-4.85-1.63-5H16zm2.78.69.02.05c.48 1.19.8 2.68.9 4.26h2.21A6.02 6.02 0 0 0 19 8.8l-.22-.12z"></path>
            </svg>
            Speaks Hindi
          </span>
          
          <span className="w-96 mt-9">
          I am a farmer who lives in Tandi, a village above Jibhi. I am the Numbardaar in this village. I run the most...
          </span>
          <span className="underline flex mt-5 font-medium cursor-pointer">Show more &gt;</span>
        </div>

        <div className="flex flex-col">
            <h1 className="text-lg font-medium mb-5">Daleep is a Superhost</h1>
            <span >Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</span>

            <h1 className="mt-9 text-lg font-medium mb-5">Co-Hosts</h1>
            <span>Shanu</span>

            <h1 className="mt-10 text-lg font-medium mb-5">Host details</h1>

            <span>Response rate: 96%</span>
            <span>Responds within an hour</span>

            <button className="bg-black text-white w-36 h-10 rounded-lg mt-9 font-medium">Message Host</button>
            <span className="text-sm mt-4 pb-8 border-b border-gray-300">You can message the host in Chinese, and Airbnb provides a translation function</span>
            <span className="text-sm mt-8">To help protect your payment, always use Airbnb to send money and communicate with hosts.</span>


        </div>
      </div>
    </div>
  );
};

export default Host;
