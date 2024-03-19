
import express from 'express'
import { LocalFoodController } from "../controllers/localfood.controller"

const router = express.Router()

router.get('/localfoods', LocalFoodController.getLocalFoodData)
router.get('/localfoods/:id', LocalFoodController.getLocalFoodDataWithId)

export default router