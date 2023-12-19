import {Router, Express} from 'express'
import {streamChatCompletion} from './chat_controller'

const router = (app: Express) => {
	const router = Router()

	router.post('/stream', streamChatCompletion)
	app.use(router)
}

export default router
