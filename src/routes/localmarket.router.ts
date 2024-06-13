import express from 'express'
import { LocalMarketController } from '../controllers/localmarket.controller'
import { container } from '../Inversify.config'



const router = express.Router()

const localmarketContainer = container.get<LocalMarketController>(LocalMarketController)

router.get('/localmarkets',localmarketContainer.getLocalMarketData)
router.get('/localmarkets/:id',localmarketContainer.getLocalMarketDataWithId)



export default router