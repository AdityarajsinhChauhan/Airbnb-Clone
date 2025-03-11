import React from 'react'
import propertyList from '../properties'
import ImageSlider from '../components/ImageSlider'
import { useState , useEffect } from 'react'

const PropertyList = ( { category , isExpanded , isScrolled , message} ) => {

  useEffect(()=>{
    alert("This is a frontend-only clone of Airbnb, created solely for learning and showcasing my frontend development skills. It is not affiliated with or endorsed by Airbnb in any way. Some UI elements, images, and the logo have been used to replicate the look and feel of the original website, but there is no backend functionality. Limited data is stored locally for performance purposes. Under the 'Cabins' category, only the first item has a details page; others do not have additional data.")
  },[])

  const filteredItems = propertyList.filter(item=> item.category === category);
  const [list,setList] = useState(propertyList);

  const toggleLike = (id) =>{
    setList((prevList)=>(
      prevList.map((item)=>(
        item.id === id ? { ...item , like: !item.like} : item
      ))
    ))
    console.log(list)
  }

  return (
    <div className='flex w-[100vw] mt-64 ml-4 flex-wrap'>
        {list.filter(item=> item.category === category).map(item=>{
          return <div key={item.id} className='ml-6 mt-6'>
          <div className=''>
              <ImageSlider id={item.id} images={item.imgSrc} toggleLike={toggleLike} like={item.like}></ImageSlider>
          </div>
          <div className='flex justify-between'>
            <span>{item.name}</span>
            <span className='flex gap-1'><img src="/ui-images/star.svg" className='w-3 h-3 mt-[6px]' alt="" /> {item.rating}</span>
          </div>
          <div className='text-gray-500'>
              <div>{item.distance}</div>
              <div>{item.date}</div>
          </div>
          <div>₹{item.price} <span className='text-gray-800'>night</span> </div>
      </div>
        })
        }

        
        { filteredItems.length > 0 && 
        <div onClick={message} className='flex mb-12 flex-col items-center justify-center w-[100vw] mt-14'>
        <span className='text-lg font-medium mb-5'>Continue exploring {category}</span>
        <button className='bg-black text-white w-32 h-10 font-bold rounded-lg'>Show more</button>

      </div>}
      
    </div>
  )
}

export default PropertyList
