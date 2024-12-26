import React, { ReactNode } from 'react'

 const Titlebar = ({children, title, tag}:{children?: ReactNode,title?:string, tag:string }) => {
  return (
    <div className='wrapper h-[100px] border-gray-500 mt-[60px] flex justify-between '>
        <div className='h-full flex flex-col justify-between'>
            <div className='flex items-center gap-[14px]'>
                <div className='w-[20px] h-[40px] rounded-[4px] bg-[#DB4444]'></div>
                <p className='text-[16px] font-semibold'> {tag}</p>

            </div>
            <h1 className='h1-semibold'>{title}</h1>

        </div>
        <div className=' h-full flex items-end'>
            
            {children}

        </div>
        
    </div>
  )
}

export default Titlebar;
