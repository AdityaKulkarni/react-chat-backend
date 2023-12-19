import express from 'express'
import router from './router'
import bodyParser from 'body-parser'
import cors from 'cors'
require('dotenv').config()

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
router(app)

app.listen(3100, () => {
	console.log('Server is listening on port 3100')
})
