import React from 'react'

const UserMenu = ({ showUserMenu  , setshowLogin}) => {
  return (
    <div className={showUserMenu ? "fixed top-16 shadow-[0_8px_20px_rgba(0,0,0,0.15)] rounded-xl right-16 bg-white z-50" : "hidden"} >
        {/* h-59 w-58 */}
        <ul className='flex flex-col text-sm justify-between bg-white z-50  w-[15rem] h-[15.4rem] cursor-pointer'>
            <li onClick={()=>setshowLogin(true)} className='pl-4 hover:bg-gray-100 flex items-center h-10 font-medium rounded-t-xl'>Sign up</li>
            <li onClick={()=>setshowLogin(true)} className='pl-4 hover:bg-gray-100 border-b border-gray-300 flex items-center h-10'>Log in</li>
            <li className='pl-4 hover:bg-gray-100 flex items-center h-10'>Airbnb your home</li>
            <li className='pl-4 hover:bg-gray-100 flex items-center h-10'>Host an experience</li>
            <li className='pl-4 hover:bg-gray-100 flex items-center h-10 rounded-b-xl'>Help Centre</li>
        </ul>

      
    </div>
  )
}

export default UserMenu

