'use strict';
let __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
require('dotenv').config();
const express_1 = __importDefault(require('express'));
const path_1 = __importDefault(require('path'));
const cors_1 = __importDefault(require('cors'));
const localfood_router_1 = __importDefault(
  require('./routes/localfood.router')
);
const localmarket_router_1 = __importDefault(
  require('./routes/localmarket.router')
);
const nutrtion_router_1 = __importDefault(require('./routes/nutrtion.router'));
const naver_router_1 = __importDefault(require('./routes/naver.router'));
const app = (0, express_1.default)();
// 경로설정
const __path = path_1.default.join(__dirname, 'build', 'index.html');
/* 미들웨어  */
app.use((0, cors_1.default)({ origin: '*' }));
app.use(
  '/',
  express_1.default.static(path_1.default.join(__dirname, '/build'))
);
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
// 라우터
const routes = [
  localfood_router_1.default,
  localmarket_router_1.default,
  nutrtion_router_1.default,
  naver_router_1.default,
];
routes.forEach((router) => {
  app.use('/', router);
});
app.get('*', (req, res) => {
  res.sendFile(__path);
});
module.exports = app;
