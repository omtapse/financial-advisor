'use client'
import DidYouKnow from "@/app/components/DidYouKnow";
import TextHello from "@/app/components/TextHello";
import { GoogleGenerativeAI } from '@google/generative-ai';
import { GoogleGenerativeAIStream, Message, StreamingTextResponse } from 'ai';
import { Forward } from "lucide-react";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { AppStates, useAppStore } from '../store/chat.store';
import { uuid } from "uuidv4";
import FinanceForm from "./FinanceForm";
import FinanceForm2 from "./FinanceForm2";

function ChatItem({ chat }: any) {

  return <div className="space-y-2 p-3  font-light">
    {chat.question && <div className="flex ">
      <p className="w-[150px]">you : </p>
      <p>  {chat.question}</p>
    </div>}
    <div className="flex">
      <p className=" w-[150px]">advisor : </p>
      <p className="min-w-xl">{chat.answer.toString()}</p>
    </div>
  </div>
}


type Props = {}

function ChatBox() {
  const { ref, inView, entry } = useInView();
  const { chat, infoState, istemplateOpen, setInfoState, currentChat } = useAppStore()

  useEffect(() => {
    if (!inView) {
      entry?.target.scrollTo({ behavior: 'smooth' })
    }
  }, [inView])

  return <div className="h-screen max-w-3xl overflow-auto space-y-3 mb-12 no-bar">

    <div className="self-start">
      <TextHello />
    </div>

    <div className="  no-bar self-start">
      <DidYouKnow />
    </div>

    <FinanceForm setInfoState={setInfoState} className={`${istemplateOpen ? 'h-[500px]' : 'h-[1px]'}  overflow-hidden  transition-all duration-300 `} />
    <FinanceForm2 className={`${istemplateOpen && infoState === AppStates.EXTRA ? 'h-[375px]' : ' h-[1px]'} transition-all duration-300 overflow-hidden `} />
    <div className="text-white  text-justify bg-[#1E1F20] rounded-xl w-full mb-20 ">
      {Array.isArray(chat) && chat.map((item) => <ChatItem key={item._id} chat={item} />)}
      {currentChat && <ChatItem ref={ref} key={currentChat._id} chat={currentChat} />}
    </div>
  </div>
}

const AITextBox = (props: Props) => {
  const { istemplateOpen } = useAppStore()
  return (
    <div className="flex flex-col overflow-auto px-4 py-8 h-screen min-w-4xl relative items-center  no-bar gap-5 ">

      <div className={`transition-all min-w-3xl max-w-3xl  duration-300 ${istemplateOpen ? 'h-[0vh]' : 'h-[30vh]'} `}></div>
      <ChatBox />
      <SearchComponent />

      <p className='justify-center items-center text-[#EEEEEE] text-sm'>finverse may display inaccurate info, including about people, so double-check its responses. <u>Your privacy & finverse</u></p>
    </div>
  )
}

export default AITextBox


export function SearchComponent() {
  const { istemplateOpen, loanValues, values, chat, currentChat, setCurrentChat, pushChat } = useAppStore();
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
    if (currentChat)
      pushChat(currentChat)

    const query = inputRef.current?.value
    if (!query) return
    inputRef.current.value = '';
    inputRef.current.focus();

    let chati = {
      _id: uuid(),
      question: query,
      answer: ''
    }
    setCurrentChat(chati)
    try {

      let messages = chat.map((item) => (
        [{ role: 'system', content: item.answer },
        { role: 'user', content: item.question }])
      )
      messages.push([
        {
          role: 'system',
          content:
            `Assume I'm a financial advisor seeking personalized advice for an individual who is considering taking out a loan (either a car loan or mortgage) and requires guidance on managing their expenses and minimizing risks. Please provide a comprehensive analysis of the individual's financial situation, including their income, expenses, and credit score (if applicable). Then, offer actionable insights on how they should allocate their income towards their loan repayment, daily expenses, and savings, while also identifying potential risks and proposing strategies to mitigate them. Additional suggestions on how to optimize their financial management and planning would be greatly appreciated.
            
            Here is some on information, I have a monthly income of ${values?.monthlyIncome ?? ''} and my monthly expenses go around to  ${values?.monthlyExpense ?? ''}, i have some variable expenses that go to  ${values?.variableExpense ?? ''}, but i manage to keep some savings that amount to  ${values?.savings ?? ''}, how should i manage my expenses
            
            I want to buy a car under a loan here are the details, the price of the car is ${loanValues?.carPrice}, the loan amount will be ${loanValues?.loanAmount}, the interest rate of the car is ${loanValues?.interest}% and the tenure is ${loanValues?.tenure}
            
            IMPORTANT: when analyzing the loan calcuate the values properly, reiterate on the values, and for a reasonable apporach, do not hallucinate on data

            `
        },
        {
          role: 'user',
          content: query
        }
      ])
      let newMessages = messages.flat()
      console.log('this is the new ', newMessages)
      const response = await POST({
        json: async () => ({
          messages: newMessages
        })
      } as Request);

      const reader = response.body?.getReader();
      if (!reader) return;

      const decoder = new TextDecoder();
      let done = false;
      let answer = ''
      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        const chunkValue = decoder.decode(value, { stream: true });

        answer = answer + chunkValue.replace('0:', '').replaceAll('\n', ' ')
        let newChat = {
          ...chati,
          answer: answer
        }
        setCurrentChat(newChat)
      }

      // const stream = await response.
    } catch (error) {
      console.error(error);
    }
  }

  return <div className={`flex max-w-3xl w-full  flex-row  ${istemplateOpen ? 'absolute bottom-10' : ''} gap-2 items-center  border-2 border-[#333537] rounded-lg bg-[#1E1F20]`}>
    <input placeholder="Hey Shivam, Ask me anything..."
      ref={inputRef}

      autoFocus={false}
      className={`p-4 mx-2  w-full rounded-lg outline-none text-[#E0E2E5] placeholder:text-[#E0E2E5] bg-transparent ${!istemplateOpen ? ' animate-pulse' : ''}`} />
    <button>
      <Forward onClick={handleSubmitQuery} className="p-2 m-2 cursor-pointer" color="#226ce0" size={40} />
    </button>
  </div>
}