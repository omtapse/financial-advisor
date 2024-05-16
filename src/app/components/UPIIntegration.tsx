import React, { use, useState } from 'react'
import Image from 'next/image'


type Props = {}

const UPIIntegration = (props: Props) => {


  return (
    <div className='flex flex-col border-white max-h-[500px] min-w-[400px] rounded-lg bg-[#1E1F20]'>
    <div>
        <h3 className='text-[#E0E2E5] text-[20px] p-5'>Let's Integrate UPI</h3>
    </div>

    <div className='grid grid-cols-2 gap-3 items-center m-4'>

      <div className='min-w-[100px] bg-[#d7d0d0] rounded-lg hover:bg-[#242424] transition-all'>
        <Image src="/assets/Google_pay.png" alt='Gpay' width={200} height={0} className='rounded-3xl p-0 m-4 cursor-pointer'/>
      </div>

      <div className='min-w-[100px] bg-[#d7d0d0] rounded-lg hover:bg-[#242424] transition-all'>
      <Image src="/assets/PhonePe-Logo.png" alt='PhonePe' width={200} height={0} className='rounded-3xl p-0 m-4 cursor-pointer'/>
      </div>

      <div className='min-w-[100px] bg-[#d7d0d0] rounded-lg hover:bg-[#242424] transition-all'>
        <Image src="/assets/Paytm.png" alt='paytm' width={200} height={0} className='rounded-3xl p-0 m-4 cursor-pointer'/>
      </div>

      <div className='min-w-[100px] bg-[#d7d0d0] rounded-lg hover:bg-[#242424] transition-all'>
      <Image src="/assets/amazon.png" alt='amazonpay' width={200} height={0} className='rounded-3xl p-0 m-4 cursor-pointer'/>
      </div>
    </div>

    <div className='flex flex-col gap-2 p-5'>
      <h3 className='text-white'>Enter UPI ID</h3>
      <input id='monthly-expense' className='w-full p-5 bg-[#313233] rounded-lg text-[#E0E2E5]' placeholder='Enter UPI ID'></input>

      <div className='flex flex-row gap-3'>

      <div className='flex flex-row'>
        <div className='bg-[#313233] hover:bg-[#7d8082] text-[#E0E2E5] p-2 rounded-lg cursor-pointer'>@okaxis</div>
      </div>

      <div className='flex flex-row'>
        <div className='bg-[#313233] hover:bg-[#7d8082] text-[#E0E2E5] p-2 rounded-lg cursor-pointer' >@oksbi</div>
      </div>

      <div className='flex flex-row'>
        <div className='bg-[#313233] hover:bg-[#7d8082] text-[#E0E2E5] p-2 rounded-lg cursor-pointer'>@okhdfcbank</div>
      </div>

      <div className='flex flex-row'>
        <div className='bg-[#313233] hover:bg-[#7d8082] text-[#E0E2E5] p-2 rounded-lg cursor-pointer'>@okicici</div>
      </div>
    </div>
    </div>

    </div>
  )
}

export default UPIIntegration