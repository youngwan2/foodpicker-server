import { Request, Response } from "express";
import "reflect-metadata";
import { LocalmarketModel } from "../models/localmarket.model";
import { inject, injectable } from "inversify";


const { API_HOST = 'localhost:8001', API_RPOTOCOL = 'http://' } = process.env

@injectable()
export class LocalMarketController {
    private model: LocalmarketModel

    constructor(@inject(LocalmarketModel) model: LocalmarketModel) {
        this.model = model
    }

    // 세부 페이지
    getLocalMarketDataWithId = async (req: Request, res: Response) => {
        try {
            const { id } = req.params
            const data = await this.model.getLocalMarketDataFormDBWithId(id)
            return res.status(200).json(data)
        } catch (error) {
            console.error('src/controllers/localmarket.controller.ts::', error)
            return res.status(500).json({ meg: '서버 측에서 문제가 발생하였습니다. 나중에 다시시도 해주세요.' })
        }
    }

    // 메인 페이지
    getLocalMarketData = async (req: Request, res: Response) => {
        try {
            const page = Number(req.query.page) || 0
            const region = req.query.region?.toString().split(',') || ['']
            const regionShortcut = region[0]
            const regionFull = region[1]
            const nextPage = Number(page) + 1

            const { items, maxSize, totalCount } = await this.model.getLimitedLocalMarketDataFormDB(page, { regionShortcut, regionFull }) || { result: '', count: 0 }

            const isNextPage = maxSize >= Number(page)
            const next = isNextPage ? API_RPOTOCOL + API_HOST + '/localmarkets?page=' + nextPage : null
            return res.status(200).json({ items, totalCount, next })

        } catch (error) {
            console.error('src/controllers/localmarket.controller.ts::', error)
            return res.status(500).json({ meg: '서버 측에서 문제가 발생하였습니다. 나중에 다시시도 해주세요.' })
        }
    }

}