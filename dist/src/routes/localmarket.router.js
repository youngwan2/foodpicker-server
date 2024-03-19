"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const localmarket_controller_1 = require("../controllers/localmarket.controller");
const router = express_1.default.Router();
router.get('/localmarkets', localmarket_controller_1.LocalMarketController.getLocalMarketData);
router.get('/localmarkets/:id', localmarket_controller_1.LocalMarketController.getLocalMarketDataWithId);
exports.default = router;
