import { Container } from 'inversify'
import { TraditionalFoodController } from './controllers/traditionalfood.controller'
import { TraditionalFoodModel } from './models/traditionalfood.model'
import { LocalFoodController } from './controllers/localfood.controller';
import { LocalfoodModel } from './models/localfood.model';
import { LocalmarketModel } from './models/localmarket.model';
import { LocalMarketController } from './controllers/localmarket.controller';
import { NaverModel } from './models/naver.model';
import { NaverController } from './controllers/naver.controller';
import { NutritionModel } from './models/nutrition.model';
import { NutritionController } from './controllers/nutrition.controller';

/** memo: 의존성 주입자를 자동으로 생성해주는 IoC 컨테이너 역할을 해줌 */
const container = new Container();

// 모델 컨테이너
container.bind<LocalfoodModel>(LocalfoodModel).toSelf();
container.bind<LocalmarketModel>(LocalmarketModel).toSelf();
container.bind<TraditionalFoodModel>(TraditionalFoodModel).toSelf();
container.bind<NaverModel>(NaverModel).toSelf();
container.bind<NutritionModel>(NutritionModel).toSelf();

// 컨트롤러 컨테이너
container.bind<LocalFoodController>(LocalFoodController).toSelf();
container.bind<LocalMarketController>(LocalMarketController).toSelf();
container.bind<TraditionalFoodController>(TraditionalFoodController).toSelf();
container.bind<NaverController>(NaverController).toSelf();
container.bind<NutritionController>(NutritionController).toSelf();


export { container }