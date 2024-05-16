import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='flex flex-row w-full justify-evenly'>
       <div className='flex flex-row gap-4'>
        <button className='text-white p-2 m-4 text-sm hover:text-gray-400'>finverse</button>
        <button className='text-white p-2 m-4 text-sm hover:text-gray-400'>About finverse</button>
        <button className='text-white p-2 m-4 text-sm hover:text-gray-400'>Integrate finverse</button>
        <button className='text-white p-2 m-4 text-sm hover:text-gray-400'>Mathademia</button>
        <button className='text-white p-2 m-4 text-sm hover:text-gray-400'>Privacy Policy</button>

       </div>
    </div>
  )
}

export default Footer