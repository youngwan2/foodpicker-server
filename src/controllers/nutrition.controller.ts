import { Request, Response } from "express";
import { NutritionModel } from "../models/nutrition.model";

export class NutritionController {

    static async getDataFromDB(req:Request, res:Response){
        const page = Number(req.query.page)-1 || 0
        const keyword = String(req.query.search) || ''
        try {
        const {items, totalCount} = await NutritionModel.getNutritionDataFromDB(page, keyword)
        return res.status(200).json({items, totalCount})
    } catch(error){
        console.error('/nutrition.controller.ts', error)
        return res.status(500).json({meg:'서버에서 문제가 발생하였으니 나중에 다시 시도 해주세요.'})
    }
    }
}