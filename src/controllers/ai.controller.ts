import { Request, Response } from "express";
import { injectable, inject } from "inversify";
import "reflect-metadata";
import { AiModel } from "../models/ai.model";

@injectable()
export class AiController {
    private model: AiModel

    constructor(@inject(AiModel) model: AiModel) {
        this.model = model
    }

    getGenerateResponse=async(req: Request, res: Response) =>{

        const searchValue = req.query.searchValue?.toString() || ''


        try {
            const data = await this.model.getGenerageResponse(searchValue)
            res.status(200).json(data)

        } catch (error) {
            console.error('ai.controller.ts', error)
            return res.status(500).json({ meg: '서버 측에서 문제가 발생하였습니다. 나중에 다시시도 해주세요.' })
        }
    }

}

