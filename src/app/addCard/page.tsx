import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const AddCard = () => {
  return (
    <div className='h-full w-full py-20 px-10'>
          <div className=' px-4 font-bold sm:px-12'>
        <Link href={"/"}><samp className='text-gray-700'> Home/</samp>Contact</Link>
      </div>
      <div className=' h-[840px] w-[1170px] border-2 border-gray-200'>
        <div className='h-[356px] w-full border-2 border-gray-100 '>
        <ul className=' space-y-3'>
  <li className="flex justify-between items-center h-[72px] w-full border-[2px] border-[#eedfdf] px-4 shadow-md">
    <span className="text-left">Product</span>
    <span className="text-center">Price</span>
    <span className="text-center">Quantity</span>
    <span className="text-right">Subtotal</span>
  </li>
 

  <li className="flex justify-between items-center h-[102px] w-full border-[2px] border-[#eedfdf] px-4 shadow-md">
  <span className="text-left flex items-center">
    <Image src={"/Frame 613.png"} height={54} width={54} alt="Monitor" />
    LCD Monitor
  </span>

  <span className="text-center">$650</span>

  <div className="h-[44px] w-[95px] flex items-center justify-center relative border-2 border-gray-200 p-8 rounded-xl">
    <span className=" pt-2">01</span>
    <span className=" text-lg font-bold pb-2" style={{ transform: "rotate(90deg)" }}>
      {"<"}
    </span>
    <span className=" text-lg font-bold pt-6 mt-7 pb-2 " style={{ transform: "rotate(90deg)" }}>
      {">"}
    </span>
  </div>

  <span className="text-right">$650</span>
</li>

<li className="flex justify-between items-center h-[102px] w-full border-[2px] border-[#eedfdf] px-4 shadow-md">
  <span className="text-left flex items-center">
    <Image src={"/ten.png"} height={54} width={54} alt="Monitor" />
    H1 Gamepad
  </span>

  <span className="text-center">$550</span>

  <div className="h-[44px] w-[95px] flex items-center justify-center relative border-2 border-gray-200 p-8 rounded-xl">
    <span className=" pt-2">02</span>
    <span className=" text-lg font-bold pb-2" style={{ transform: "rotate(90deg)" }}>
      {"<"}
    </span>
    <span className=" text-lg font-bold pt-6 mt-7 pb-2 " style={{ transform: "rotate(90deg)" }}>
      {">"}
    </span>
  </div>

  <span className="text-right">$1100</span>
</li>


</ul>


        </div>
        <div className='h-[56px] w-full border-2 border-gray-200 flex justify-between items-center font-semibold'>
    <button className='w-[281px] h-[56px] border-2 border-gray-400'>Return To Shop</button>
    <button className='w-[281px] h-[56px] border-2 border-gray-400'>Update Cart</button>
</div>
<div className='flex h-[324px] w-full border-2 border-gray-200 mt-28'> 
  {/* right side */}
  <div></div>
  <div></div>
  {/* lift side */}
  <div></div>
</div>


      </div>

    </div>
  )
}

export default AddCard


