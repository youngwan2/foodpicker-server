import express from 'express'

import { NutritionController } from '../controllers/nutrition.controller'
import { container } from '../Inversify.config'

const router = express.Router()
const nutritionContainer = container.get<NutritionController>(NutritionController)

router.get('/nutritions', nutritionContainer.getDataFromDB)

export default router

