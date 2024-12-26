import React, { ReactNode } from 'react'

 const Grid = ({children}:{children:ReactNode}) => {
  return (
    <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my[50px] gap-[30px]'>
        <div className=' w-full xl:w-[270px] h-[350px] border-spacing-9 border-gray-500'>
            {children}

        </div>

    </div>
  )
}

export default Grid;
