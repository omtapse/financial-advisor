"use client"
import { ArrowRight } from '@phosphor-icons/react'
import { AppStates } from '../store/chat.store'
import { cn } from '@/lib/utils'


function FinanceForm({ className, setInfoState }: any) {

  return (
    <div className={cn(className, ' flex flex-col rounded-lg bg-[#1E1F20]')}>
      <div>
        <h3 className='text-[#E0E2E5] text-[20px] p-5'>Let's Get Some Info, Before We Get Started.</h3>
      </div>

      <div className='flex flex-col p-4 gap-2'>
        <h3 className='text-[#E0E2E5] text-md p-0'>What's Your Monthly Income?</h3>
        <input id='monthly-income' className=' p-5 bg-[#313233] rounded-lg text-[#E0E2E5]' placeholder='Monthly Income ₹'></input>
      </div>

      <div className='flex flex-col p-4 gap-2'>
        <h3 className='text-[#E0E2E5] text-md p-0'>Let's Get Your Expenses</h3>
        <div className='flex flex-row gap-3'>
          <input id='monthly-expense' className=' p-5 bg-[#313233] rounded-lg text-[#E0E2E5]' placeholder='Monthly Expense ₹'></input>
          <input id='variable-expense' className=' p-5 bg-[#313233] rounded-lg text-[#E0E2E5]' placeholder='Variable Expense ₹'></input>
        </div>
      </div>

      <div className='flex flex-col p-4 gap-2'>
        <h3 className='text-[#E0E2E5] text-md p-0'>What's Your Saving?</h3>
        <div className='flex flex-row gap-3'>
          <input id='savings' className='max-w-[300px] p-5 bg-[#313233] rounded-lg text-[#E0E2E5]' placeholder='Savings ₹'></input>
        </div>
      </div>

      <div className='flex flex-row self-end px-2 rounded-lg m-4 bg-[#E0E2E5] items-center justify-center'>
        <button onClick={() => setInfoState(AppStates.EXTRA)} className=' min-w-[100px]  self-end'>Next </button>
        <ArrowRight size={20} color='#000000' />
      </div>
    </div>
  )
}

export default FinanceForm