"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NutritionController = void 0;
const nutrition_model_1 = require("../models/nutrition.model");
class NutritionController {
    static getDataFromDB(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const page = Number(req.query.page) - 1 || 0;
            const keyword = String(req.query.search) || '';
            try {
                const { items, totalCount } = yield nutrition_model_1.NutritionModel.getNutritionDataFromDB(page, keyword);
                return res.status(200).json({ items, totalCount });
            }
            catch (error) {
                console.error('/nutrition.controller.ts', error);
                return res.status(500).json({ meg: '서버에서 문제가 발생하였으니 나중에 다시 시도 해주세요.' });
            }
        });
    }
}
exports.NutritionController = NutritionController;
