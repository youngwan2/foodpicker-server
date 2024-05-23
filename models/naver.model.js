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
let __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { 'default': mod };
};
Object.defineProperty(exports, '__esModule', { value: true });
exports.NaverModel = void 0;
const axios_1 = __importDefault(require('axios'));
const { NAVER_CLIENT_ID, NAVER_CLIENT_SECRET } = process.env;
class NaverModel {
    static getDataFromNaverApi(search) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield axios_1.default.get('https://openapi.naver.com/v1/search/encyc.json', {
                    params: {
                        query: search
                    },
                    headers: {
                        'X-Naver-Client-Id': NAVER_CLIENT_ID,
                        'X-Naver-Client-Secret': NAVER_CLIENT_SECRET
                    }
                });
                return response.data;
            }
            catch (error) {
                console.error(error);
            }
        });
    }
}
exports.NaverModel = NaverModel;
