import React from 'react'

const SubNavbar = ({message}) => {
  return (
    <div className='flex  w-full z-50 transition-all duration-300 realtive border-b  bg-white h-[5.05rem] border-gray-300'>
      {/* logo left section */}
      <div className='w-1/3 ml-10' onClick={message}>
            <img
              src="/ui-images/airbnb-icon.jpg"
              alt=""
              className="w-28 mt-6 h-8"
            />
          </div>
          {/* middle section */}
          <div
          onClick={message}
            className={`-ml-[0.18rem]`}
          >
            <div className="flex min-h-11 rounded-full  min-w-[22rem] border border-gray-300 shadow-md hover:shadow-lg cursor-pointer mt-4">
              <span className="border-r border-gray-300 w-28 flex justify-center items-center font-medium my-2">
                Anywhere
              </span>
              <span className="border-r border-gray-300 w-24 flex justify-center items-center font-medium my-2">
                Any week
              </span>
              <span className="flex">
                <span className="ml-3 mt-2 text-gray-500">Add guests</span>
                <span className="bg-red-500 rounded-full w-8 h-8 flex justify-center items-center mt-[5px] ml-2">
                  <img src="/ui-images/search.svg" alt="" className="w-4 h-4" />
                </span>
              </span>
            </div>
          </div>

          {/* right section */}

          <div className="flex ml-[8.2rem] mt-4" onClick={message}>
            <span className="min-w-36 rounded-full hover:bg-gray-100 h-10 py-2 px-3 text-sm cursor-pointer mt-1">
              Airbnb your home
            </span>
            <span className=" hover:bg-gray-100 min-w-11 rounded-full h-10 mt-[0.12rem] cursor-pointer flex justify-center items-center mr-1">
              <img src="/ui-images/web.svg" alt="" className="w-5 h-5" />
            </span>
            <span className="flex cursor-pointer rounded-full min-w-20 h-11 gap-3 pl-4 border border-gray-300 hover:shadow-md">
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
  )
}

export default SubNavbar
