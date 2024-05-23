'use strict';
let __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator['throw'](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, '__esModule', { value: true });
exports.NaverController = void 0;
const naver_model_1 = require('../models/naver.model');
class NaverController {
    static getSearchResultByKeyword(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { search } = req.query || { search: '' };
            if (!search)
                return res.status(400).json({ meg: '잘못된 요청입니다. 키워드는 2자 이상이어야 합니다.' });
            try {
                const result = yield naver_model_1.NaverModel.getDataFromNaverApi(search);
                res.status(200).json({ meg: '성공적으로 조회되었습니다.', status: 200, result });
            }
            catch (error) {
                console.error('/naver.controller.ts', error);
                return res.status(500).json({ meg: '서버에서 문제가 발생하였으니 나중에 다시 시도 해주세요.' });
            }
        });
    }
}
exports.NaverController = NaverController;
