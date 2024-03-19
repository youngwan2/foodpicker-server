import express from 'express'
import { NaverController } from '../controllers/naver.controller'

const router = express.Router()

router.get('/naver-search', NaverController.getSearchResultByKeyword)


export default router