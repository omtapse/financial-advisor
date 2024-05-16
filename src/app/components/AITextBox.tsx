'use client'
import DidYouKnow from "@/app/components/DidYouKnow";
import TextHello from "@/app/components/TextHello";
import { Forward } from "lucide-react";
import { useAppStore } from '../store/chat.store';
import { useRef } from "react";
import { POST } from "../config/openAIConfig";
import { generateText } from 'ai';
import { Configuration, OpenAIApi } from 'openai-edge'
import { GoogleGenerativeAI } from '@google/generative-ai';
import { GoogleGenerativeAIStream, Message, StreamingTextResponse } from 'ai';



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
  const { istemplateOpen, chat, pushChat } = useAppStore();
  const inputRef = useRef<HTMLInputElement>(null);

  const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GOOGLE_API_KEY || '');

  const buildGoogleGenAIPrompt = (messages: Message[]) => ({
    contents: messages
      .filter(message => message.role === 'user' || message.role === 'assistant')
      .map(message => ({
        role: message.role === 'user' ? 'user' : 'model',
        parts: [{ text: message.content }],
      })),
  });


  async function POST(req: Request) {
    const { messages } = await req.json();

    const geminiStream = await genAI
      .getGenerativeModel({ model: 'gemini-pro' })
      .generateContentStream(buildGoogleGenAIPrompt(messages));

    // Convert the response into a friendly text-stream
    const stream = GoogleGenerativeAIStream(geminiStream);

    // Respond with the stream
    return new StreamingTextResponse(stream);
  }

  const handleSubmitQuery = async () => {
    try {
      const query = inputRef.current?.value
      if (!query) return
      inputRef.current.value = '';
      inputRef.current.focus();

      const response = await POST({
        json: async () => ({
          messages: [
            {
              role: 'system',
              content: 'You are a helpful assistant.'
            },
            {
              role: 'user',
              content: query
            }
          ]
        })
      } as Request);

      const reader = response.body?.getReader();
      if (!reader) return;

      const decoder = new TextDecoder();
      let done = false;

      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        const chunkValue = decoder.decode(value, { stream: true });
        console.log(chunkValue);
      }

      // const stream = await response.
    } catch (error) {
      console.error(error);
    }
  }

  return <div className={`flex  flex-row max-w-[790px] ${istemplateOpen ? 'absolute bottom-10' : ''} gap-2 items-center  border-2 border-[#333537] rounded-lg bg-[#1E1F20]`}>
    <input placeholder="Hey Shivam, Ask me anything..."
      ref={inputRef}

      autoFocus={false}
      className={`p-4 mx-2 min-w-[700px] rounded-lg outline-none text-[#E0E2E5] placeholder:text-[#E0E2E5] bg-transparent ${!istemplateOpen ? ' animate-pulse' : ''}`} />
    <button>
      <Forward onClick={handleSubmitQuery} className="p-2 m-2 cursor-pointer" color="#226ce0" size={40} />
    </button>
  </div>
}