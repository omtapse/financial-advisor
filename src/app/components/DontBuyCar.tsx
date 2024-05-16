"use client"
import { Check, CheckCircle, XCircle } from '@phosphor-icons/react'

import React from 'react'

type Props = {}

function DontBuyCar({}: Props) {
  return (
    <div className='flex flex-row bg-[#1E1F20] min-h-[70px] p-5 min-w-[200px] rounded-lg items-center justify-center gap-2'>
        <XCircle size={48} color="#c70f0f" weight="duotone" />
        <h1 className='text-white'>Sorry, You Should't Buy The Car With <br/>Your Current Financial Situation.</h1>
    </div>
  )
}

export default DontBuyCar