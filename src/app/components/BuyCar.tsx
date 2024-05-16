"use client"
import { Check, CheckCircle } from '@phosphor-icons/react'
import React from 'react'

type Props = {}

function BuyCar({}: Props) {
  return (
    <div className='flex flex-row bg-[#1E1F20] min-h-[70px] p-5 min-w-[200px] rounded-lg items-center justify-center gap-2'>
        <CheckCircle size={48} color='#14d279' weight='duotone' />
        <h1 className='text-white'>Congratulations, You Can Buy The Car.</h1>
    </div>
  )
}

export default BuyCar