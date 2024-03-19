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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NutritionModel = void 0;
const dbConnection_1 = __importDefault(require("../db/dbConnection"));
class NutritionModel {
    static getNutritionDataFromDB(page, keyword) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield (0, dbConnection_1.default)();
            const query = `
        SELECT id, PRODUCT_NAME, PRODUCT_ORIGIN_NAME, BASE_QY, KCAL_QY, PROTEIN_QY, FAT_QY, CARBOH_QY, SUGAR_QY, DIETARY_FIBER_QY, CALCIUM_QY, IRON_QY, PHOSPHORUS_QY, POTASSIUM_QY, NATRIUM_QY, VITAMIN_A_QY, B_CAROTENE_QY, THIAMIN, VITAMIN_B2_QY, VITAMIN_B3_QY, VITAMIN_C_QY, VITAMIN_D_QY, CHOLESTEROL_QY, SATURATED_FAT_QY, TRANS_FAT_QY, DATA_ORIGIN, FOOD_WEIGHT, CREATION_DATE, BASE_DATE    
        FROM nutrition
        WHERE PRODUCT_NAME LIKE ?
        LIMIT 20 OFFSET 20 * ?
        `;
            const countSelectQuery = `
        SELECT COUNT(*) AS count
        FROM nutrition
        WHERE PRODUCT_NAME LIKE ?
        `;
            const items = yield db.all(query, ['%' + keyword + '%', page]);
            const { count: totalCount } = (yield db.get(countSelectQuery, ['%' + keyword + '%'])) || { totalCount: 0 };
            db.close();
            return { items, totalCount };
        });
    }
}
exports.NutritionModel = NutritionModel;
