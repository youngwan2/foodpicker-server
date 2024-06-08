import express from 'express'
import { NaverController } from '../controllers/naver.controller'
import { container } from '../Inversify.config'

const router = express.Router()

const NaverContainer = container.get<NaverController>(NaverController)

router.get('/naver-search', NaverContainer.getSearchResultByKeyword)


export default router