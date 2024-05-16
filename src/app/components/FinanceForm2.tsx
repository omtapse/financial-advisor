"use client"
import { OpenAIClient, AzureKeyCredential } from "@azure/openai"
import { useRef, useState } from "react";
import { useAppStore } from "../store/chat.store";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { GoogleGenerativeAIStream, StreamingTextResponse } from "ai";
import { Message } from "postcss";
import { uuid } from "uuidv4";

function FinanceForm2({ className, }: any) {
    const [carPrice, setCarPrice] = useState('')
    const [loanAmount, setLoanAmount] = useState('')
    const [interest, setInterest] = useState('')
    const [tenure, setTenure] = useState('')

    const { istemplateOpen, setLoanValues, loanValues, values, chat, currentChat, setCurrentChat, pushChat } = useAppStore();
    const inputRef = useRef<HTMLInputElement>(null);

    const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GOOGLE_API_KEY || '');

    const key = process.env.NEXT_PUBLIC_OPENAI_API_KEY as string;
    const endpoint = "https://bizmorpenai24.openai.azure.com/";
    const client = new OpenAIClient(endpoint, new AzureKeyCredential(key));

    // const buildGoogleGenAIPrompt = (messages: Message[]) => ({
    //     contents: messages
    //         .filter(message => message.role === 'user' || message.role === 'assistant')
    //         .map(message => ({
    //             role: message.role === 'user' ? 'user' : 'model',
    //             parts: [{ text: message.content }],
    //         })),
    // });

    async function POST(req: Request) {
        const { messages } = await req.json();

        // const geminiStream = await genAI
        // .getGenerativeModel({ model: 'gemini-pro' })
        // .generateContentStream(buildGoogleGenAIPrompt(messages));
        const stream = client.streamChatCompletions('bizopenai24', messages)
        // Convert the response into a friendly text-stream
        // const stream = GoogleGenerativeAIStream(geminiStream);
        // Respond with the stream
        return stream;
    }

    const handleSubmitQuery = async () => {
        if (currentChat)
            pushChat(currentChat)

        let chati = {
            _id: uuid(),
            question: null,
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
                        `You are financial advisor giving personalized advice for an individual who is considering taking out a car loan and requires guidance on whether to buy it or not. Please provide a very short analysis of the individual's financial situation, break down the answer in a step by step answer, with points and describe, I will provide you their monthly income, monthly expenses, variable expenses and also their current savings in indian rupees. 
                        
                        First give a Yes or No Decision. Then, offer actionable insights on why they should buy the car or not. Additional give them short suggestions on how to optimize their financial management and planning, the output should be in markdown with all types of tags.

                        Here is the information you need, his monthly income is ${values?.monthlyIncome ?? ''}, his monthly expenses go around  ${values?.monthlyExpense ?? ''}, his variable expenses go around ${values?.variableExpense ?? ''}, and he manages to keep some savings that amount is  ${values?.savings ?? ''}.
              
                        Here are the details for the car, the price of the car is ${carPrice}, the loan amount will be ${loanAmount}, the interest rate of the car is ${interest}% and the tenure is ${tenure} years. ,


                        After analyzing the individual's financial situation, here is my breakdown of their income and expenses:

                        system :
In conclusion, my advice for this individual is No, it is not advisable to take out a car loan at the moment.
Explaination:
Monthly income: ₹1000
Monthly expenses: ₹100
Variable expenses: ₹100
Monthly savings: ₹100
With a monthly income of ₹1000 and expenses of ₹200, the individual is left with ₹800 in disposable income.

Now, let's analyze the car loan:

Price of the car: ₹100
Loan amount: ₹100
Interest rate: 10%
Tenure: 10 years
Using an online EMI calculator, the monthly EMI for this loan would be approximately ₹1.32 for 10 years.

Based on the individual's income, expenses, and disposable income, it is not advisable to take out a car loan at the moment. As the monthly EMI will add to the expenses, and in case of an emergency, the individual may struggle to cover it.

It would be better to save up for the car and purchase it outright instead of getting into a long-term debt. Additionally, it would be recommended to create a personal budget and limit the variable expenses to build up savings and better manage their financial situation.

                        `
                },
                {
                    role: 'user',
                    content: `IMPORTANT: when analyzing the loan calcuate the values properly, reiterate on the values, and for a reasonable apporach, do not hallucinate on data. give the answer in markdown format, with all the tags for bold large subscript
                    `
                },
                {
                    role: 'system',
                    content: `the answer...`
                }
            ])

            let newMessages = messages.flat()

            const response = await POST({
                json: async () => ({
                    messages: newMessages
                })
            } as Request);


            const reader = response.getReader();
            let answer = ''

            // read() returns a promise that resolves
            // when a value has been received
            //@ts-ignore
            reader.read().then(function processText({ done, value }) {

                if (done) {
                    console.log("Stream complete");
                    return;
                }
                if (value.choices[0]?.delta && value.choices[0].delta.content) {
                    answer = answer + value.choices[0].delta.content
                    let newChat = {
                        ...chati,
                        answer: answer
                    }
                    setCurrentChat(newChat)
                }
                return reader.read().then(processText);

            })



            // const stream = await response.
        } catch (error) {
            console.error(error);
        }
    }



    function handleAsk() {
        setLoanValues({
            carPrice,
            loanAmount,
            interest,
            tenure
        })
        console.log('exec')
        try {
            handleSubmitQuery()

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={`flex flex-col border-white ${className}  rounded-lg bg-[#1E1F20]`}>

            <div>
                <h3 className='text-[#E0E2E5] text-[20px] p-5'>You Say, You want to buy a Car</h3>
            </div>

            <div className='flex flex-col p-4 gap-2'>
                <h3 className='text-[#E0E2E5] text-md p-0'>Give the Car Details</h3>
                <input id='car-price' onChange={(e) => setCarPrice(e.target.value)} className='max-w-[300px] p-5 bg-[#313233] rounded-lg text-[#E0E2E5]' placeholder='Car Price ₹'></input>
            </div>

            <div className='flex flex-col p-4 gap-2'>
                <div className='flex flex-row gap-3'>
                    <input id='monthly-expense'
                        onChange={(e) => setLoanAmount(e.target.value)}
                        className='max-w-[200px] p-5 bg-[#313233] rounded-lg text-[#E0E2E5]' placeholder='Loan Amount ₹'></input>
                    <input onChange={(e) => setInterest(e.target.value)} id='variable-expense' className='max-w-[170px] p-5 bg-[#313233] rounded-lg text-[#E0E2E5]' placeholder='Rate of Interest %'></input>
                    <input onChange={(e) => setTenure(e.target.value)} id='variable-expense' className='max-w-[170px] p-5 bg-[#313233] rounded-lg text-[#E0E2E5]' placeholder='Loan Tenure (yrs)'></input>
                </div>
            </div>

            <div className='flex flex-row self-end px-2 rounded-lg m-4 bg-[#E0E2E5] items-center justify-center'>
                <button onClick={() => handleAsk()} className=' min-w-[100px] min-h-[50px] self-end'>Analyze </button>
            </div>

        </div>
    )
}

export default FinanceForm2;