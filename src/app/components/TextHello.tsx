import React from 'react'

type Props = {}

function TextHello({ }: Props) {
  return (
    <div>
      <h1 className="text-[40px] font-extrabold">
        <span className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-transparent bg-clip-text text-[45px]'>Hey MATHack,</span>,<br />
        <span className='text-[#454746]'>How can I help you today?</span>
      </h1>
    </div>
  )
}

export default TextHello