"use client"
import { ArrowRight } from '@phosphor-icons/react'
import React from 'react'
import {motion} from "framer-motion"

type Props = {}

function AskLoan({}: Props) {
  return (
    
    <div className='flex flex-col border-white max-h-[500px] min-w-[400px] rounded-lg bg-[#1E1F20]'>
        
        <div>
            <h3 className='text-[#E0E2E5] text-[20px] p-5'>Sure, Can I Get Some More Details?</h3>
        </div>

        <div className='flex flex-col p-4 gap-2'>
            <h3 className='text-[#E0E2E5] text-md p-0'>Do you have any exsisting loans?</h3>
        </div>

        <div className='flex flex-row self-start'>
            <button className='text-white text-md bg-[#313233] min-w-[100px] hover:bg-white hover:text-black rounded-lg p-4 m-5'>Yes</button>
            <button className='text-white text-md bg-[#313233] min-w-[100px] hover:bg-white hover:text-black rounded-lg p-4 m-5'>No</button>
        </div>

        <div className='flex flex-col p-4 gap-2'>
        <h3 className='text-[#E0E2E5] text-md p-0'>Type Of Loan</h3>
        
        <div className='flex flex-row gap-4'>
            <select className='p-3 w-full bg-[#313233] text-white rounded-lg' name="cars" id="cars">
            <option value="car">Personal Loan</option>
            <option value="car">Education Loan</option>
            <option value="car">Gold Loan</option>
            <option value="car">Home Loan</option>
        </select>

        </div>
    </div>

    <div className='flex flex-row self-end px-2 rounded-lg m-4 bg-[#E0E2E5] items-center justify-center'>
        <button className=' min-w-[100px] min-h-[50px] self-end'>Submit </button>
    </div>
        
    </div>
  )
}

export default AskLoan;