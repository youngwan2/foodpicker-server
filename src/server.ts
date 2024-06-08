
require('dotenv').config();

import express, { Request, Response } from 'express';
import path from 'path';
import cors from 'cors';
import localfood from './routes/localfood.router';
import localmarket from './routes/localmarket.router';
import nutrtion from './routes/nutrtion.router';
import naver from './routes/naver.router';
import traditionalfood from './routes/traditionalfood.router'

const app = express();

// 경로설정
const __path = path.join(__dirname, 'build', 'index.html');

/* 미들웨어  */
const domains = ['http://localhost:8080', 'https://foodpick.co.kr']
app.use(cors({ origin: domains }));
app.use('/', express.static(path.join(__dirname, '/build')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 라우터
const routes = [localfood, localmarket, nutrtion, naver, traditionalfood];

routes.forEach((router) => {
  app.use('/', router);
});

app.get('*', (req: Request, res: Response) => {
  res.sendFile(__path);
});

module.exports = app;
