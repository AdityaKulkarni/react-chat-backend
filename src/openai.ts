import OpenAI from 'openai'
import {ChatCompletionCreateParamsBase} from 'openai/resources/chat/completions'

require('dotenv').config()
const openAi = new OpenAI({apiKey: process.env.OPENAI_API_KEY})

export const GPT_MODEL: ChatCompletionCreateParamsBase['model'] =
	'gpt-3.5-turbo-16k'
export default openAi
