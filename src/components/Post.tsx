import React from 'react'
import Postdiv from './Postdiv'

const Post = () => {
  return (
    <div className=' w-[744px]'>
        <div className='w-full h-12 text-center rounded-lg bg-[#02A28F] dark:bg-[#3B3B3B] content-center font-bold text-xl text-white mb-3   flex  justify-between items-center '>
        <p className='ml-5'>Posts</p>
        <p className='underline font-medium text-sm mr-5'>See More</p>
        </div>
        <div className='flex flex-wrap justify-between'>
        <Postdiv />
        <Postdiv />
        <Postdiv />
        <Postdiv />

        </div>
        
    </div>
    
  )
}

export default Post