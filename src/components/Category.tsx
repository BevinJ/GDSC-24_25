import React from 'react'

const Category = () => {
  return (
    <div className='w-96 h-40 lg:block hidden'>
        <div className='h-12 rounded-lg font-bold text-xl text-white bg-[#02A28F] dark:bg-[#3B3B3B] text-center content-center mb-4'>Category</div>
        <div className='flex justify-between text-[rgb(97,97,97)]'>
            <p className='font-semibold text-base'> &gt; Label 1</p>
            <p className='font-semibold text-base'>(1)</p>
        </div>
        <div className='flex justify-between text-[#616161]'>
            <p className='font-semibold text-base'> &gt; Label 2</p>
            <p className='font-semibold text-base'>(2)</p>
        </div>
    </div>
    
  )
}

export default Category