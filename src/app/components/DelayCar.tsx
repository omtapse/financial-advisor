"use client"
import { Check, CheckCircle, XCircle } from '@phosphor-icons/react'
import { Question } from '@phosphor-icons/react/dist/ssr'

import React from 'react'

type Props = {}

function DelayCar({}: Props) {
  return (
    <div className='flex flex-row bg-[#1E1F20] min-h-[70px] p-5 min-w-[200px] rounded-lg items-center justify-center gap-2'>
        <Question size={48} color="#e1d00e" weight="duotone" />
        <h1 className='text-white'>Ummm, You should wait few more years or <br/>buy a cheaper car.</h1>
    </div>
  )
}

export default DelayCar