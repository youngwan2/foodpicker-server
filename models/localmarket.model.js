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
exports.LocalmarketModel = void 0;
const dbConnection_1 = __importDefault(require('../db/dbConnection'));
const VIEW_POST_COUNT = 15;
class LocalmarketModel {
    // 세부 페이지 조회
    static getLocalMarketDataFormDBWithId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield (0, dbConnection_1.default)();
            const query = `
        SELECT * FROM local_markets
        WHERE local_market_id = ?
    `;
            const result = yield db.get(query, [id]);
            db.close();
            return result;
        });
    }
    // 메인 페이지 조회
    static getLimitedLocalMarketDataFormDB(page) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield (0, dbConnection_1.default)();
            const query = `
        SELECT * FROM local_markets LIMIT 15 OFFSET 15 * ?
        `;
            const countSelectQuery = `
        SELECT COUNT(*) AS count FROM local_markets
        `;
            const items = yield db.all(query, [page]);
            const { count: totalCount } = (yield db.get(countSelectQuery)) || { count: 0 };
            const maxSize = Math.ceil(totalCount / VIEW_POST_COUNT);
            db.close();
            return { maxSize, items, totalCount };
        });
    }
}
exports.LocalmarketModel = LocalmarketModel;
