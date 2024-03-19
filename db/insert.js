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
const dbConnection_1 = __importDefault(require("./dbConnection"));
const localfoods_1 = __importDefault(require("./localfoods"));
// const localmarket = require('./localmarket')
const query = `
    INSERT 
    INTO local_foods(title, sub_title, content, main_thumb_url, content_url, lcc_address, keyword, create_at, update_at, view_count, rel_rest_name, rel_rest_tel, rel_rest_address)
    VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)
`;
// const marketQuery = `
//     INSERT 
//     INTO local_markets(title, sub_title, middle_title, era, content, main_thumb_url, content_url, lcc_address, keyword, view_count, create_at, update_at, la,lo )
//     VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)
// `
function insertFun() {
    return __awaiter(this, void 0, void 0, function* () {
        const db = yield (0, dbConnection_1.default)();
        localfoods_1.default.map((food) => {
            db.run(query, [food.data_title_nm, food.sbjt_nm, food.sumry_cn, food.main_thumb_url, food.cntnts_url, food.addr, food.core_kwrd_cn, food.regist_de, food.opn_de, 0, food.relate_rstrnt_nm, food.rstrnt_tel_no, food.rstrnt_addr]);
        });
        // localmarket.map((market) => {
        //     db.run(marketQuery, [market.data_title_nm, market.sbjt_nm, market.middl_sbjt_nm, market.era_nm, market.sumry_cn, market.main_thumb_url, market.cntnts_url, market.addr, market.core_kwrd_cn, 0, market.regist_de, market.opn_de, market.ctlstt_la, market.ctlstt_lo])
        // })
    });
}
exports.default = insertFun;
