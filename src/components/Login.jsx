import React from 'react'

const Login = ({setshowLogin , showLogin}) => {
  return (
    <div className={`${showLogin ? "relative" : "hidden"} w-[100vw] z-50 top-0 left-0`}>
        <div className='w-[100vw] h-[100vh] top-0 right-0 bg-black fixed opacity-30'>
        </div>
        <div className='fixed w-[35rem] h-[31.25rem] overflow-scroll bg-white top-10 shadow-[0_8px_20px_rgba(0,0,0,0.15)] rounded-3xl left-[22.4rem] pr-6'>
            <div className='h-16 flex items-center justify-center font-bold border-b border-gray-300'>
                Log in or sign up
            </div>
            <div className='flex flex-col ml-6'>
                <span className='text-xl font-medium mt-9 mb-6'>Welcome to Airbnb</span>
                <span className='flex flex-col border border-black rounded-t-md h-14 justify-center pl-3'>
                    <span className='text-sm text-gray-600'>Country/Region</span>
                    <span >India (+91)</span>
                </span>
                <span className='flex items-center text-gray-600 pl-3 border border-black rouded-b-md h-14'>Phone number</span>
                <span className='text-xs underline text-gray-600 flex flex-col'>
                    <span>We’ll call or text you to confirm your number. Standard message and data rates apply. </span>
                    <span>Privacy Policy</span>
                </span>
            </div>
            <div className='ml-6 border-b border-gray-300'><button className='mb-7 mt-4 text-white bg-red-500 h-12 rounded-md flex justify-center items-center w-full'>Continue</button></div>
            <div className='ml-6 mt-5 border border-black rounded-md h-12 flex items-center justify-center font-medium '>Continue with Google</div>
            <div className='ml-6 mt-5 border border-black rounded-md h-12 flex items-center justify-center font-medium '>Continue with Apple</div>
            <div className='ml-6 mt-5 border border-black rounded-md h-12 flex items-center justify-center font-medium '>Continue with email</div>
            <div className='ml-6 mt-5 border border-black rounded-md h-12 flex items-center justify-center font-medium mb-5'>Continue with Facebook</div>
        </div>
        <span onClick={()=>setshowLogin(false)} className='fixed top-[3.7rem] font-bold cursor-pointer px-2 pb-1 left-[24rem] hover:bg-gray-200 rounded-full'>x</span>
            
        
      
    </div>
  )
}

export default Login 
