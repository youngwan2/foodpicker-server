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
exports.LocalMarketController = void 0;
const localmarket_model_1 = require("../models/localmarket.model");
const { API_HOST, API_PREFIX } = process.env;
class LocalMarketController {
    // 세부 페이지
    static getLocalMarketDataWithId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const data = yield localmarket_model_1.LocalmarketModel.getLocalMarketDataFormDBWithId(id);
                return res.status(200).json(data);
            }
            catch (error) {
                console.error('src/controllers/localmarket.controller.ts::', error);
                return res.status(500).json({ meg: '서버 측에서 문제가 발생하였습니다. 나중에 다시시도 해주세요.' });
            }
        });
    }
    // 메인 페이지
    static getLocalMarketData(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const page = req.query.page || 0;
                const nextPage = Number(page) + 1;
                const { items, maxSize, totalCount } = (yield localmarket_model_1.LocalmarketModel.getLimitedLocalMarketDataFormDB(page)) || { result: '', count: 0 };
                const isNextPage = maxSize > Number(page);
                const next = isNextPage ? API_PREFIX + API_HOST + '/localmarkets?page=' + nextPage : null;
                return res.status(200).json({ items, totalCount, next });
            }
            catch (error) {
                console.error('src/controllers/localmarket.controller.ts::', error);
                return res.status(500).json({ meg: '서버 측에서 문제가 발생하였습니다. 나중에 다시시도 해주세요.' });
            }
        });
    }
}
exports.LocalMarketController = LocalMarketController;
