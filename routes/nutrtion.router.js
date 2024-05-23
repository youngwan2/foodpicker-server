'use strict';
let __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { 'default': mod };
};
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const nutrition_controller_1 = require('../controllers/nutrition.controller');
const router = express_1.default.Router();
router.get('/nutritions', nutrition_controller_1.NutritionController.getDataFromDB);
exports.default = router;
