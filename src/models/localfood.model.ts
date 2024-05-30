import openDb from '../db/dbConnection'

const VIEW_POST_COUNT = 15
export class LocalfoodModel {

    // 세부 페이지 조회
    static async getLocalFoodDataFormDBWithId(id: string) {
        const db = await openDb()

        const query = `
        SELECT * FROM local_foods
        WHERE local_food_id = ?
    `
        try {
            const result = await db.get(query, [id])
            db.close()

            console.log("로컬 푸드 결과:", result)
            return result
        } catch (error) {
            console.error('models/localfood.model.ts 디비 조회 실패:', error)
            return []
        }
    }

    // 메인 페이지 조회
    static async getLimitedLocalFoodDataFormDB(page: any, region:{regionShortcut:string, regionFull:string}) {
        const db = await openDb()
        const matchRegionFullName = `%${region.regionFull}%`
        const matchRegionShortName = `%${region.regionShortcut}%`
        const conditions = [matchRegionFullName, matchRegionShortName]

        const query = `
        SELECT * FROM local_foods 
        WHERE lcc_address LIKE ? OR  lcc_address LIKE ?
        LIMIT 15 OFFSET 15 * ?
       
        `
        const countSelectQuery = `
        SELECT COUNT(*) AS count FROM local_foods
        WHERE  lcc_address LIKE ? OR  lcc_address LIKE ?
        `
        try {
            const items = await db.all(query, [...conditions, page])
            const { count: totalCount } = await db.get(countSelectQuery,[...conditions]) || { count: 0 }
            const maxSize = Math.ceil(totalCount / VIEW_POST_COUNT)

            db.close()
            return { maxSize, items, totalCount }
        } catch(error){
            console.error('models/localfood.model.ts 디비 조회 실패:', error)
            return {maxSize:0, items:0, totalCount:0}
        }
    }
}