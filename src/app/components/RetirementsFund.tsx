import Image from 'next/image'
import React from 'react'

type Props = {}

const RetirementsFund = (props: Props) => {
  return (
    <div className='flex flex-row border-white gap-3'>

        <div className='min-w-[70px] p-5 min-h-[20px] flex flex-row items-center gap-3 bg-[#1E1F20] rounded-lg'>
            <Image src="/assets/hdfc.png" alt='quant' width={50} height={50}/>
            <div className='flex flex-col gap-2'>
              <p className='text-white'>HDFC Retirement Savings Fund - Equity Plan</p>
              <div className='w-fit h-fit flex'>
                <p className='text-sm mx-2 bg-green-300 text-green-900 px-2 rounded-md'>Equity</p>
                <p className='text-sm mx-2 bg-green-300 text-green-900 px-2 rounded-md'>Retirement Solutions</p>
            </div>
        </div>
        </div>

        <div className='min-w-[70px] p-5 min-h-[20px] flex flex-row items-center gap-3 bg-[#1E1F20] rounded-lg'>
            <Image src="/assets/hdfc.png" alt='quant' width={50} height={50}/>
            <div className='flex flex-col gap-2'>
            <p className='text-white'>HDFC Retirement Savings Fund - Hybrid Equity Plan</p>
            <div className='w-fit h-fit flex'>
              <p className='text-sm mx-2 bg-green-300 text-green-900 px-2 rounded-md'>Equity</p>
              <p className='text-sm mx-2 bg-green-300 text-green-900 px-2 rounded-md' >Retirement Solutions</p>
            </div>
            </div>
        </div>

        <div className='min-w-[70px] break-words p-5 min-h-[20px] flex flex-row items-center gap-3 bg-[#1E1F20] rounded-lg'>
            <Image src="/assets/icici.png" alt='quant' width={50} height={50}/>
            <div className='flex flex-col gap-2'>
            <p className='text-white'>ICICI Prudential Retirement Fund - Pure Equity Plan</p>
            <div className='w-fit h-fit flex'>
              <p className='text-sm mx-2 bg-green-300 text-green-900 px-2 rounded-md'>Equity</p>
              <p className='text-sm mx-2 bg-green-300 text-green-900 px-2 rounded-md' >Retirement Solutions</p>
            </div>
            </div>
        </div>

        <div className='min-w-[70px] break-words p-5 min-h-[20px] flex flex-row items-center gap-3 bg-[#1E1F20] rounded-lg'>
            <Image src="/assets/tata.png" alt='quant' width={50} height={50}/>
            <div className='flex flex-col gap-2'>
            <p className='text-white'>Tata Retirement Savings Progressive Plan</p>
            <div className='w-fit h-fit flex'>
              <p className='text-sm mx-2 bg-green-300 text-green-900 px-2 rounded-md'>Equity</p>
              <p className='text-sm mx-2 bg-green-300 text-green-900 px-2 rounded-md' >Retirement Solutions</p>
            </div>
            </div>
        </div>

    </div>
  )
}

export default RetirementsFund