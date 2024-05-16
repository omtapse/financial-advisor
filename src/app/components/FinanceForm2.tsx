"use client"
import { ArrowRight } from '@phosphor-icons/react'
import React from 'react'
import {motion} from "framer-motion"

type Props = {}

function FinanceForm2({}: Props) {
  return (
    <div className='flex flex-col border-white max-h-[500px] min-w-[400px] rounded-lg bg-[#1E1F20]'>
    <div>
        <h3 className='text-[#E0E2E5] text-[20px] p-5'>Now Let's Get Your Investment Plans</h3>
    </div>

    <div className='flex flex-col p-4 gap-2'>
        <h3 className='text-[#E0E2E5] text-md p-0'>Any Investments?</h3>
        
        <div className='flex flex-row gap-4'>

        <div className='flex flex-row gap-2 items-center'>
            <input type='checkbox' className='h-[20px] rounded-2xl'/>
            <h3 className='text-[#E0E2E5] text-md p-0'>Stocks</h3>
        </div>

        <div className='flex flex-row gap-2 items-center'>
            <input type='checkbox' className='h-[20px] rounded-2xl'/>
            <h3 className='text-[#E0E2E5] text-md p-0'>Mutual Funds</h3>
        </div>

        <div className='flex flex-row gap-2 items-center'>
            <input type='checkbox' className='h-[20px] rounded-2xl'/>
            <h3 className='text-[#E0E2E5] text-md p-0'>Gold</h3>
        </div>

        </div>
    </div>


    <div className='flex flex-col p-4 gap-2'>
        <h3 className='text-[#E0E2E5] text-md p-0'>Future Goals</h3>
        
        <div className='flex flex-row gap-4'>
            <select className='p-3 w-full bg-[#313233] text-white rounded-lg' name="cars" id="cars">
            <option value="car">Buying a Car</option>
            <option value="home">Buying a Home</option>
        </select>

        </div>
    </div>


    <div className='flex flex-row self-end px-2 rounded-lg m-4 bg-[#E0E2E5] items-center justify-center'>
    <button className=' min-w-[100px] min-h-[50px] self-end'>Analyze </button>
    </div>
  </div>
  )
}

export default FinanceForm2