import { Request, Response } from "express";
import "reflect-metadata";
import { LocalfoodModel } from "../models/localfood.model";
import { inject, injectable } from "inversify";

const { API_HOST = 'localhost:3000', API_PROTOCOL = 'https//' } = process.env

@injectable()
export class LocalFoodController {
    private model: LocalfoodModel;
    // 세부 페이지
    public constructor(@inject(LocalfoodModel) model: LocalfoodModel) {
        // console.log('모델 정상 작동 유무:', model.getLimitedLocalFoodDataFormDB)
        this.model = model
    }
    getLocalFoodDataWithId = async (req: Request, res: Response) => {

        try {
            const { id } = req.params
            const data = await this.model.getLocalFoodDataFormDBWithId(id)
            return res.status(200).json(data)
        } catch (error) {
            console.error('src/controllers/localfood.controller.ts::', error)
            return res.status(500).json({ meg: '서버 측에서 문제가 발생하였습니다. 나중에 다시시도 해주세요.' })
        }
    }

    // 메인 페이지
    getLocalFoodData = async (req: Request, res: Response) => {
        try {
            const page = req.query.page || 0
            const region = req.query.region?.toString().split(',') || ['']
            const regionShortcut = region[0]
            const regionFull = region[1]

            const nextPage = Number(page) + 1
            const { items, maxSize, totalCount } = await this.model.getLimitedLocalFoodDataFormDB(page, { regionShortcut, regionFull }) || { result: '', count: 0 }

            const isNextPage = maxSize - 1 > Number(page)
            const next = isNextPage ? API_PROTOCOL + API_HOST + '/localfoods?page=' + nextPage : null

            return res.status(200).json({ items, totalCount, next })

        } catch (error) {
            console.error('src/controllers/localfood.controller.ts::', error)
            return res.status(500).json({ meg: '서버 측에서 문제가 발생하였습니다. 나중에 다시시도 해주세요.' })
        }
    }
}