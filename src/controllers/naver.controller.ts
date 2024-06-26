import { Request, Response } from "express"
import "reflect-metadata";
import { NaverModel } from "../models/naver.model"
import { inject, injectable } from "inversify"

@injectable()
export class NaverController {
    private model:NaverModel
    constructor(
        @inject(NaverModel) model:NaverModel
    ){
        this.model = model
    }
    getSearchResultByKeyword = async (req: Request, res: Response) => {
        const search = req.query.search as string

        if (!search || search.length < 1) return res.status(400).json({ meg: '잘못된 요청입니다. 키워드는 2자 이상이어야 합니다.' })
        try {
            const result = await this.model.getDataFromNaverApi(search)
            res.status(200).json({ meg: '성공적으로 조회되었습니다.', status: 200, result })

        } catch (error) {
            console.error('/naver.controller.ts', error)
            return res.status(500).json({ meg: '서버에서 문제가 발생하였으니 나중에 다시 시도 해주세요.' })
        }

    }
}