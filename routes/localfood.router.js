"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const localfood_controller_1 = require("../controllers/localfood.controller");
const router = express_1.default.Router();
router.get('/localfoods', localfood_controller_1.LocalFoodController.getLocalFoodData);
router.get('/localfoods/:id', localfood_controller_1.LocalFoodController.getLocalFoodDataWithId);
exports.default = router;
