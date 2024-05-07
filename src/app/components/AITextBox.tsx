import React from 'react'
import {Forward} from "lucide-react";
import TextHello from "@/app/components/TextHello";
import DidYouKnow from "@/app/components/DidYouKnow";

type Props = {}

const AITextBox = (props: Props) => {
  return (
      <div className="flex flex-col-reverse px-4 py-5 h-screen max-w-[790px] relative items-center jus gap-5">

          <div className="flex flex-row max-w-[790px] gap-2 items-center border-2 border-black rounded-lg">
              <input placeholder="Hey Shivam, Ask me anything..." autoFocus={false}
                     className="bg-white p-4 mx-2 min-w-[700px] rounded-lg outline-none text-black placeholder:text-gray-500"/>
              <button>
                  <Forward className="p-2 m-2 cursor-pointer" color="#226ce0" size={40}/>
              </button>
          </div>

          <div className="self-start">
              <DidYouKnow/>
              </div>

            <div className="self-start">
            <TextHello/>
            </div>

          
      </div>

  )
}

export default AITextBox