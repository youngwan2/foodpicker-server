import { Request, Response } from "express";
import "reflect-metadata";
import { NutritionModel } from "../models/nutrition.model";
import { inject, injectable } from "inversify";

@injectable()
export class NutritionController {
    private model: NutritionModel

    constructor(@inject(NutritionModel) model: NutritionModel) {
        this.model = model

    }
    getDataFromDB = async (req: Request, res: Response) => {

        const page = Number(req.query.page) - 1 || 0
        const name = String(req.query.name) || ''
        const companyName = String(req.query['company_name']) || ''
        const foodType = String(req.query['food_type']) || ''
        const minKcal = Number(req.query['min_kcal'])
        const maxKcal = Number(req.query['max_kcal'])

        try {
            const { items, totalCount } = await this.model.getNutritionDataFromDB(page, name, companyName, foodType, { minKcal, maxKcal })
            return res.status(200).json({ items, totalCount })
        } catch (error) {
            console.error('/nutrition.controller.ts', error)
            return res.status(500).json({ meg: '서버에서 문제가 발생하였으니 나중에 다시 시도 해주세요.' })
        }
    }
}