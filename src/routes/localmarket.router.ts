import express from 'express'
import { LocalMarketController } from '../controllers/localmarket.controller'



const router = express.Router()




router.get('/localmarkets',LocalMarketController.getLocalMarketData)
router.get('/localmarkets/:id',LocalMarketController.getLocalMarketDataWithId)



export default router