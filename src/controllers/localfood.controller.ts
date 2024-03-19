import { Request, Response } from "express";
import { LocalfoodModel } from "../models/localfood.model";

const {API_HOST, API_PREFIX} = process.env as {API_HOST:'localhost:3000',API_PREFIX:'http://'}
export class LocalFoodController {

    // 세부 페이지
    static async getLocalFoodDataWithId(req: Request, res: Response) {
        try {
            const { id } = req.params
            const data = await LocalfoodModel.getLocalFoodDataFormDBWithId(id)
            return res.status(200).json(data)
        } catch (error) {
            console.error('src/controllers/localfood.controller.ts::', error)
            return res.status(500).json({ meg: '서버 측에서 문제가 발생하였습니다. 나중에 다시시도 해주세요.' })
        }
    }

    // 메인 페이지
    static async getLocalFoodData(req: Request, res: Response) {
        try {
            const page = req.query.page || 0
            const nextPage = Number(page) + 1
            const {items, maxSize, totalCount} = await LocalfoodModel.getLimitedLocalFoodDataFormDB(page) || { result: '', count: 0 }
            const isNextPage = maxSize>Number(page)
            const next = isNextPage? API_PREFIX+API_HOST+'/localfoods?page=' + nextPage : null
            return res.status(200).json({ items,totalCount, next})

        } catch (error) {
            console.error('src/controllers/localfood.controller.ts::', error)
            return res.status(500).json({ meg: '서버 측에서 문제가 발생하였습니다. 나중에 다시시도 해주세요.' })
        }
    }
}