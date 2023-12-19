import {Request, Response} from 'express'
import openAi, {GPT_MODEL} from './openai'

export const streamChatCompletion = async (req: Request, res: Response) => {
	const messages = req.body.messages
	if (!messages) {
		res.status(400).json({error: 'messages is required'})
	}

	const response = await openAi.chat.completions.create(
		{
			model: GPT_MODEL,
			messages: messages.map((message: any) => ({
				role: message.role,
				content: message.content,
			})),
			stream: true,
			temperature: 1,
			max_tokens: 5000,
			top_p: 1,
			frequency_penalty: 0,
			presence_penalty: 0,
		},
		{stream: true}
	)

	for await (const chunk of response) {
		if (chunk === undefined) return

		if (
			!chunk.choices[0].delta ||
			chunk.choices[0].finish_reason === 'stop'
		) {
			break
		}

		const token = chunk.choices[0].delta.content
		res.write(token, (err) => {
			if (err) {
				console.log('stream error', err)
			}
		})
	}

	res.end()
}
