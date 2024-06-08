
import { injectable } from 'inversify';
import { dbOpen } from '../db/dbConnection';
import { stringToArray } from '../utils/helper';

@injectable()
export class NutritionModel {

  async getNutritionDataFromDB(page: number, name: string = '', companyName: string = '', foodType: string = '가공식품,음식', kcal: { minKcal: number, maxKcal: number }) {

        const hasCompany = companyName.length >= 2
        const hasFoodType = foodType.length >= 2

        const compaines = hasCompany ? stringToArray(companyName) : null
        const foodTypes = hasFoodType ? stringToArray(foodType) : stringToArray('가공식품,음식')

        // 바인딩용 ? memo: 맵핑 ex 상호명 배열의 길이 만큼  ?,?,?,.. 생성
        const companyPlaceholders = compaines?.map(() => '?').join(',')
        const foodTypePlaceholders = foodTypes.map(() => '?').join(',')

        const conditions = ['%' + name + '%', ...compaines ?? '', ...foodTypes, kcal.minKcal, kcal.maxKcal]

        const query = `
        SELECT *
        FROM nutritions
        WHERE name LIKE ? AND company_name ${hasCompany ? "IN (" + companyPlaceholders + ")" : "LIKE '%%'"} AND sort IN (${foodTypePlaceholders}) AND kcal_g BETWEEN ? AND ?
        LIMIT 20 OFFSET 20 * ?
        `
        const countSelectQuery = `
        SELECT COUNT(*) AS count
        FROM nutritions
        WHERE name LIKE ? AND company_name ${hasCompany ? "IN (" + companyPlaceholders + ")" : "LIKE '%%'"} AND sort IN (${foodTypePlaceholders}) AND kcal_g BETWEEN ? AND ?
        `

        const items = await dbOpen(true, query, [...conditions, page])
        const { count: totalCount } = await dbOpen(false, countSelectQuery, conditions) as { count: string } || { totalCount: 0 }
        
        return { items, totalCount }
    }
}

