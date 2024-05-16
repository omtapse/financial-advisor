"use client"
import { ArrowArcRight, ArrowRight } from '@phosphor-icons/react'
import React from 'react'

type Props = {}

function FinanceForm({}: Props) {
  return <div className='flex flex-col border-white min-h-[500px] min-w-[400px] rounded-lg bg-[#1E1F20]'>
    <div>
        <h3 className='text-[#E0E2E5] text-[20px] p-5'>Let's Get Some Info, Before We Get Started.</h3>
    </div>

    <div className='flex flex-col p-4 gap-2'>
    <h3 className='text-[#E0E2E5] text-md p-0'>What's Your Monthly Income?</h3>
    <input id='monthly-income' className='max-w-[300px] p-5 bg-[#313233] rounded-lg text-[#E0E2E5]' placeholder='Monthly Income ₹'></input>
    </div>

    <div className='flex flex-col p-4 gap-2'>
    <h3 className='text-[#E0E2E5] text-md p-0'>Let's Get Your Expenses</h3>
    <div className='flex flex-row gap-3'>
        <input id='monthly-expense' className='max-w-[300px] p-5 bg-[#313233] rounded-lg text-[#E0E2E5]' placeholder='Monthly Expense ₹'></input>
        <input id='variable-expense' className='max-w-[300px] p-5 bg-[#313233] rounded-lg text-[#E0E2E5]' placeholder='Variable Expense ₹'></input>
    </div>
    </div>

    <div className='flex flex-col p-4 gap-2'>
    <h3 className='text-[#E0E2E5] text-md p-0'>What's Your Saving?</h3>
    <div className='flex flex-row gap-3'>
        <input id='savings' className='max-w-[300px] p-5 bg-[#313233] rounded-lg text-[#E0E2E5]' placeholder='Savings ₹'></input>
    </div>
    </div>

    <div className='flex flex-row self-end px-2 rounded-lg m-4 bg-[#E0E2E5] items-center justify-center'>
    <button className=' min-w-[100px] min-h-[50px] self-end'>Next </button>
    <ArrowRight size={20} color='#000000'/>
    </div>
  </div>
}

export default FinanceForm