import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


interface CardProps {
  rating?: boolean;
  tag: string;
  pra: string;
  add: string;
  image: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
}

const Card = ({ rating = true, tag, pra, add, image }: CardProps) => {
  return (
    <div className="w-full xl:w-[270px] h-[350px]  border-[1px] border-gray-200 hover:border-3 hover:border-gray-500">
      <div className="w-full h-[250px] flex justify-center items-center bg-[#F5F5F5]">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width || 250}
          height={image.height || 250}
          className="rounded"
        />
      </div>
      <div className="flex flex-col justify-between w-full h-[100px]">
        <div className="h-[40px] bg-black flex flex-col justify-between w-full text-white items-center">
          <Link href="/addCard">
            {add}
          </Link>
        </div> 
       
<div className='px-2'>


        
        <div className="">{tag}</div>
        <div className=" text-red-500">{pra}</div>
        {rating && (
          <div className='text-[#FFAD33] font-semibold'>
            *****
          </div>
          
          
        )}
       

        </div>
      </div>
    </div>
  );
};

export default Card;

