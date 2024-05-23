'use strict';
let __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { 'default': mod };
};
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const naver_controller_1 = require('../controllers/naver.controller');
const router = express_1.default.Router();
router.get('/naver-search', naver_controller_1.NaverController.getSearchResultByKeyword);
exports.default = router;
