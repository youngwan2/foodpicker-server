import express from 'express'
import { LocalFoodController } from "../controllers/localfood.controller"
import { container } from '../Inversify.config'

const router = express.Router()

const localfoodContaienr = container.get<LocalFoodController>(LocalFoodController)
router.get('/localfoods', localfoodContaienr.getLocalFoodData)
router.get('/localfoods/:id', localfoodContaienr.getLocalFoodDataWithId)

export default router