import express from 'express'
import { container } from '../Inversify.config'
import { AiController } from '../controllers/ai.controller'

const router = express.Router()

const aiContainer = container.get<AiController>(AiController)
router.get('/ai-dictionary',aiContainer.getGenerateResponse)

export default router