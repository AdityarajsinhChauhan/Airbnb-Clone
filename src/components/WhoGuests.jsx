import React, { useState , useEffect } from 'react'


const WhoGuests = ({ isGuestsActive , settotalGuests }) => {

    const [numberOf, setnumberOf] = useState([
        { id:1, text:"Adults", subText:"Ages 13 or above", count:0 },
        { id:2, text:"Children", subText:"Ages 2–12", count:0 },
        { id:3, text:"Infants", subText:"Under 2", count:0 },
        { id:4, text:"Pets", subText:"Bringing a service animal?", count:0 },
    ]);

    const [totalCount, setTotalCount] = useState(0);

    useEffect(() => {
        setTotalCount(numberOf.reduce((sum, item) => sum + item.count, 0));
    }, [numberOf]);

    useEffect(()=>{
        settotalGuests(totalCount)
    },[totalCount])

    const addCount = (id) => {
        setnumberOf((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, count: Math.min(item.count + 1, 10) } : item
            )
        );
    };

    const removeCount = (id) => {
        setnumberOf((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, count: Math.max(item.count - 1, 0) } : item
            )
        );
    };

    const totalGuests = numberOf.reduce((sum, item) => sum + item.count, 0);
    console.log(totalGuests)

    const setZero = () => {
        setnumberOf((prev) =>
        prev.map((item)=>
        item.count === 0 ? item : { ...item , count:0 }));
    }

  return (
    <div className={`${isGuestsActive ? "fixed" : "hidden"} top-[9.8rem] right-52 rounded-3xl shadow-[0_8px_20px_rgba(0,0,0,0.15)] overflow-scroll h-[23.6rem] w-[26rem] z-40 bg-white `}>
        <span
        onClick={setZero}
        className={`${totalGuests===0 ? "hidden" : "fixed"} fixed z-50 rounded-full hover:bg-gray-200 right-[20rem] top-24 cursor-pointer px-3 pb-1`}>x</span>
      <ul className='flex flex-col'>
        {numberOf.map(item=>(
            <li className={`flex justify-between items-center h-24 ${item.id===4 ? "" : "border-b border-gray-200"} mx-8`} key={item.id}>
            <span className='flex flex-col'>
                <span className='font-medium'>{item.text}</span> 
                <span className='text-sm text-gray-600'>{item.subText}</span>
            </span>   
            <span className='flex gap-5'>
                <span className='cursor-pointer flex items-center justify-center h-7 w-7 pb-1 rounded-full border border-gray-300 hover:border-black' onClick={()=>removeCount(item.id)}>-</span>
                <span>{item.count}</span>
                <span className='cursor-pointer flex items-center justify-center h-7 w-7 pb-1 rounded-full border border-gray-300 hover:border-black'onClick={()=>addCount(item.id)}>+</span>
            </span>
        </li>
        ))}
        
      </ul>
    </div>
  )
}

export default WhoGuests
