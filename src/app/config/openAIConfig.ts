import { OpenAIStream, StreamingTextResponse } from 'ai'
import { Configuration, OpenAIApi } from 'openai-edge'


const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
  })
  export const openai = new OpenAIApi(config)
   
  // IMPORTANT! Set the runtime to edge
  export const runtime = 'edge'


  export async function POST(req: Request) {
    const { messages } = await req.json()

    const response = await openai.createChatCompletion({
      model: 'gpt-3.5',
      stream: true,
      messages
    })

    const stream = OpenAIStream(response)

    return new StreamingTextResponse(stream)
}  
  