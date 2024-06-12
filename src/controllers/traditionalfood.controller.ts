import { Request, Response } from "express";
import { TraditionalFoodModel } from '../models/traditionalfood.model'
import "reflect-metadata";
import { injectable, inject } from "inversify";

@injectable()
export class TraditionalFoodController {
    private model: TraditionalFoodModel

    public constructor(@inject(TraditionalFoodModel) model: TraditionalFoodModel) {
        // console.log('모델 정상 작동 유무:',model.getTraditionalFoodCategory)
        this.model = model
    }

    getTraditionalFoodCategory = async (req: Request, res: Response) => {
        try {
            const { name, main, sub, detail, food_type: foodType } = req.query as { name: string, main: string, sub: string, detail: string, food_type: string }
            const page = Number(req.query.page) || 0

            const { items, totalCount } = await this.model.getTraditionalFoodCategory(page, { name, main, sub, detail, foodType }) || { items: [], totalCount: 0 }

            return res.status(200).json({ items, totalCount })

        } catch (error) {
            console.error('/traditionalfood.controller.ts', error)
            return res.status(500).json({ meg: '서버에서 문제가 발생하였으니 나중에 다시 시도 해주세요.' })
        }

    }
}