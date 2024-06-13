import express from 'express'
import { container } from '../Inversify.config'
import {TraditionalFoodController} from '../controllers/traditionalfood.controller'

const router = express.Router()
const traditionalFoodController = container.get<TraditionalFoodController>(TraditionalFoodController)
router.get('/traditionalfood', traditionalFoodController.getTraditionalFoodCategory)


export default router

