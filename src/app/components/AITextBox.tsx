'use client'
import DidYouKnow from "@/app/components/DidYouKnow";
import TextHello from "@/app/components/TextHello";
import { Forward } from "lucide-react";
import { useAppStore } from '../store/chat.store';

type Props = {}

const AITextBox = (props: Props) => {
  return (
    <div className="flex flex-col-reverse px-4 py-5 h-screen max-w-[790px] relative items-center justify-center gap-5">

      <p className='justify-center items-center text-[#EEEEEE] text-sm'>finverse may display inaccurate info, including about people, so double-check its responses. <u>Your privacy & finverse</u></p>

      <SearchComponent />

      <div className="self-start">
        <DidYouKnow />
      </div>

      <div className="self-start">
        <TextHello />
      </div>


    </div>

  )
}

export default AITextBox


function SearchComponent() {
  const { istemplateOpen } = useAppStore()
  return <div className={`flex  flex-row max-w-[790px] ${istemplateOpen ? 'absolute bottom-10' : ''} gap-2 items-center  border-2 border-[#333537] rounded-lg bg-[#1E1F20]`}>
    <input placeholder="Hey Shivam, Ask me anything..." autoFocus={false}
      className={`p-4 mx-2 min-w-[700px] rounded-lg outline-none text-[#E0E2E5] placeholder:text-[#E0E2E5] bg-transparent ${!istemplateOpen ? ' animate-pulse' : ''}`} />
    <button>
      <Forward className="p-2 m-2 cursor-pointer" color="#226ce0" size={40} />
    </button>
  </div>
}