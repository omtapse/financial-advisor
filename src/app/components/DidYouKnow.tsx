import { Cloud, Languages, Waypoints, Shrub } from 'lucide-react'
import React from 'react'
import { useAppStore } from '../store/chat.store'

type Props = {}

function DidYouKnow({ }: Props) {
  const { istemplateOpen, toggleTemplate } = useAppStore()
  return (
    <div className=" flex flex-row justify-evenly items-center gap-3">

      <div
        onClick={() => toggleTemplate()}
        className={`flex flex-col bg-[#1E1F20] ${istemplateOpen ? 'hover:bg-[#333537]' : ''} max-w-[200px] max-h-[200px] p-4 rounded-lg cursor-pointer text-[#E0E2E5] font-light gap-20`}>
        <p className='text-sm'>Create a financial template</p>

        <div className='self-end p-0'>
          <Languages size={40} />
        </div>
      </div>

      <div className="flex flex-col bg-[#1E1F20] hover:bg-[#333537] max-w-[200px] max-h-[200px] p-4 rounded-lg cursor-pointer text-[#E0E2E5] font-light gap-20">
        <p className='text-sm'>Create a list of power phrases for my resume.</p>

        <div className='self-end p-0'>
          <Waypoints size={40} />
        </div>
      </div>

      <div className="flex flex-col bg-[#1E1F20] hover:bg-[#333537] max-w-[200px] max-h-[200px] p-4 rounded-lg cursor-pointer text-[#E0E2E5] font-light gap-20">
        <p className='text-sm'>Suggest the best parks to visit</p>

        <div className='self-end p-0'>
          <Shrub size={40} />
        </div>
      </div>

    </div>
  )
}

export default DidYouKnow