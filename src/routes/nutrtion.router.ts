import express from 'express'

import { NutritionController } from '../controllers/nutrition.controller'

const router = express.Router()



router.get('/nutritions', NutritionController.getDataFromDB)




export default router

