import React from 'react'
import {Forward} from "lucide-react";
import TextHello from "@/app/components/TextHello";
import DidYouKnow from "@/app/components/DidYouKnow";

type Props = {}

const AITextBox = (props: Props) => {
  return (
      <div className="flex flex-col-reverse p-6 h-screen w-full relative items-center gap-20">

          <div className="flex flex-row max-w-[790px] gap-2 items-center border-2 border-black rounded-lg">
              <input placeholder="Hey Shivam, Here to help for your financials" autoFocus={false}
                     className="bg-white p-4 mx-2 min-w-[700px] rounded-lg outline-none text-black placeholder:text-gray-500"/>
              <button>
                  <Forward className="p-2 m-2 cursor-pointer" color="#226ce0" size={40}/>
              </button>
          </div>

          <div className="absolute left-[470px] bottom-[110px]">
              <DidYouKnow/>
          </div>

          <div className="absolute left-[470px] bottom-[200px]">
              <TextHello/>
          </div>
      </div>

  )
}

export default AITextBox