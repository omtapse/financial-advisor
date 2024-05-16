'use client'
import DidYouKnow from "@/app/components/DidYouKnow";
import TextHello from "@/app/components/TextHello";
import { Forward } from "lucide-react";
import { useAppStore } from '../store/chat.store';
import { useRef } from "react";

type Props = {}

function ChatBox() {
  const scroller = useRef(null)

  return <div>
    <div className="self-start">
      <DidYouKnow />
    </div>

    <div className="self-start">
      <TextHello />
    </div>
    <div ref={scroller}></div>
  </div>
}

const AITextBox = (props: Props) => {
  const { istemplateOpen } = useAppStore()
  return (
    <div className="flex flex-col overflow-auto px-4 py-5 h-screen min-w-4xl relative items-center  no-bar gap-5 ">

      <div className={`  transition-all  duration-300 ${istemplateOpen ? 'h-[0vh]' : 'h-[30vh]'} `}></div>
      <ChatBox />
      <SearchComponent />

      <p className='justify-center items-center text-[#EEEEEE] text-sm'>finverse may display inaccurate info, including about people, so double-check its responses. <u>Your privacy & finverse</u></p>
    </div>

  )
}

export default AITextBox


function SearchComponent() {
  const { istemplateOpen } = useAppStore()
  return <div className={`flex flex-row  ${istemplateOpen ? 'absolute bottom-10' : ''} gap-2 items-center w-full border-2 border-[#333537] rounded-lg bg-[#1E1F20]`}>
    <input placeholder="Let's do your Financials ! ! ! 🤑" autoFocus={false}
      className={`p-4 mx-2  font-extralight w-full rounded-lg outline-none text-[#E0E2E5] placeholder:text-[#E0E2E5] bg-transparent ${!istemplateOpen ? ' animate-pulse' : ''}`} />
    <button>
      <Forward className="p-2 m-2 cursor-pointer" color="#226ce0" size={40} />
    </button>
  </div>
}