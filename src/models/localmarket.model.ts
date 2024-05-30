import openDb from '../db/dbConnection'

const VIEW_POST_COUNT = 15
export class LocalmarketModel {

    // 세부 페이지 조회
    static async getLocalMarketDataFormDBWithId(id: string) {
        const db = await openDb()

        const query = `
        SELECT * FROM local_markets
        WHERE local_market_id = ?
    `
        const result = await db.get(query, [id])
        db.close()
        return result
    }

    // 메인 페이지 조회
    static async getLimitedLocalMarketDataFormDB(page: number, region: { regionShortcut: string, regionFull: string }) {

        const matchRegionFullName = `%${region.regionFull}%`
        const matchRegionShortName =`%${region.regionShortcut}%`
        const conditions = [matchRegionFullName, matchRegionShortName]

        const db = await openDb()
        
        const query = `
        SELECT * FROM local_markets 
        WHERE lcc_address LIKE ? OR  lcc_address LIKE ?
        LIMIT 15 OFFSET 15 * ?
        `
        const countSelectQuery = `
        SELECT COUNT(*) AS count FROM local_markets
        WHERE  lcc_address LIKE ? OR  lcc_address LIKE ?
        `
        const items = await db.all(query, [...conditions, page])
        const { count: totalCount } = await db.get(countSelectQuery, conditions) || { count: 0 }
        const maxSize = Math.ceil(totalCount / VIEW_POST_COUNT)
        db.close()

        return { maxSize, items, totalCount }
    }
}