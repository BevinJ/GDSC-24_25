import React from 'react'

const Postdiv = () => {
  return (
    <div className='lg:w-[360px] md:w-72 rounded-lg h-96  flex flex-col  items-center border dark:border-0 shadow-lg mb-6' >
        <div className='w-full h-2/4 rounded-lg bg-[#D9D9D9]'>
            
        </div>
        <div className='mt-4 px-2 '>
            <p className='text-[#02A28F]'>In Label</p>
            <p className='text-xl font-bold dark:text-white'>Ini Adalah Judul Artikel</p>
            <p className='font-bold text-sm dark:text-[#AAAAAA]'>By Ridho Satriawan</p>
            <p className='font-normal text-sm dark:text-[#AAAAAA]'>Apa itu HTML ? Buat kamu yang pernah membuat sebuah website pastinya sudah tidak asing lagi dengan yang namanya HTML. S…</p>
            <p className='font-medium text-sm dark:text-[#AAAAAA]'>22 Agustus 2022</p>

        </div>
    </div>
  )
}

export default Postdiv