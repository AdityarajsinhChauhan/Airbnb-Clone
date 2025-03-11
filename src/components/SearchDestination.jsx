import React from 'react'

const SearchDestination = ({ isWhereActive }) => {
  return (
    <div className={`${isWhereActive ? "fixed" : "hidden"} overflow-scroll z-50 h-[23.5rem] w-[27rem]  top-[9.5rem] left-52 rounded-3xl shadow-[0_8px_20px_rgba(0,0,0,0.15)] bg-white`}>
      <ul className='flex flex-col '>
        <span className='flex items-center pl-12 mt-8 text-sm text-gray-500'>suggested destinations</span>
        <li className='flex flex-col h-16 cursor-pointer justify-center hover:bg-gray-100 pl-12'>
          <span>Nearby</span>
          <span className='text-sm text-gray-500'>Find what's around you</span>
        </li>
        <li className='flex flex-col h-16 cursor-pointer justify-center hover:bg-gray-100 pl-12'>
          <span>North Goa, Goa</span>
          <span className='text-sm text-gray-500'>Great for summer getaways</span>
        </li>
        <li className='flex flex-col h-16 cursor-pointer justify-center hover:bg-gray-100 pl-12'>
          <span>Udaipur, Rajasthan</span>
          <span className='text-sm text-gray-500'>A hidden gem</span>
        </li>
        <li className='flex flex-col h-16 cursor-pointer justify-center hover:bg-gray-100 pl-12'>
          <span>Mumbai, Maharashtra</span>
          <span className='text-sm text-gray-500'>For it's top notch dining</span>
        </li>
        <li className='flex flex-col h-16 cursor-pointer justify-center hover:bg-gray-100 pl-12'>
          <span>Lonavala, Maharashtra</span>
          <span className='text-sm text-gray-500'>For nature lovers</span>
        </li>
        <li className='flex flex-col h-16 cursor-pointer justify-center hover:bg-gray-100 pl-12'>
          <span>Jaipur, Rajasthan</span>
          <span className='text-sm text-gray-500'>For sights like Amber fort</span>
        </li>
        <li className='flex flex-col h-16 cursor-pointer justify-center hover:bg-gray-100 pl-12'>
          <span>South Goa, Goa</span>
          <span className='text-sm text-gray-500'>Great for summer gataways</span>
        </li>
      </ul>
      
    </div>
  )
}

export default SearchDestination
