import React from 'react'
import Popularinternal from './Popularinternal'

const Popular = () => {
  return (
    <div className='h-full lg:flex hidden w-96 justify-between flex-col'>
        <div className='w-full h-12 text-center rounded-lg bg-[#02A28F] dark:bg-[#3B3B3B]  content-center font-bold text-xl text-white'>Popular</div>
        <Popularinternal />
        <Popularinternal />
        <Popularinternal />
    </div>
  )
}

export default Popular