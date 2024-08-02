import React from 'react'
import Mainimg from './Mainimg'
import Popular from './Popular'

const Maincont = () => {
  return (
    <div className='mt-10 w-4/5  mx-auto h-96 flex flex-row justify-between'>
        <Mainimg />
        <Popular />
      </div>
  )
}

export default Maincont