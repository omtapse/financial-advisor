import React from 'react'

type Props = {}

const LoanDetails = (props: Props) => {
  return (

    <div className='flex flex-col border-white max-h-[500px] min-w-[400px] rounded-lg bg-[#1E1F20]'>
        
        <div>
            <h3 className='text-[#E0E2E5] text-[20px] p-5'>No Issues, Just Need This Information</h3>
        </div>
    

    <div className='flex flex-col p-4 gap-2'>
        <h3 className='text-[#E0E2E5] text-md p-0'>Loan Details</h3>
            <div className='flex flex-row gap-3'>
            <input id='monthly-expense' className='max-w-[200px] p-5 bg-[#313233] rounded-lg text-[#E0E2E5]' placeholder='Loan Amount ₹'></input>
            <input id='variable-expense' className='max-w-[170px] p-5 bg-[#313233] rounded-lg text-[#E0E2E5]' placeholder='Rate of Interest %'></input>
            <input id='variable-expense' className='max-w-[170px] p-5 bg-[#313233] rounded-lg text-[#E0E2E5]' placeholder='Loan Tenure (yrs)'></input>
            </div>
        </div>

        <div className='flex flex-row self-end px-2 rounded-lg m-4 bg-[#E0E2E5] items-center justify-center'>
            <button className=' min-w-[100px] min-h-[50px] self-end'>Submit </button>
        </div>
    </div>
  )
}

export default LoanDetails