import { injectable } from "inversify"
import { dbOpen } from "../db/dbConnection"

const VIEW_POST_COUNT = 15

@injectable()
export class LocalmarketModel {

    // 세부 페이지 조회
     async getLocalMarketDataFormDBWithId(id: string) {

        const query = `
        SELECT * FROM local_markets
        WHERE local_market_id = ?
    `
        const result = await dbOpen(false, query, [id])
        return result
    }

    // 메인 페이지 조회
     async getLimitedLocalMarketDataFormDB(page: number, region: { regionShortcut: string, regionFull: string }) {

        const matchRegionFullName = `%${region.regionFull}%`
        const matchRegionShortName = `%${region.regionShortcut}%`
        const conditions = [matchRegionFullName, matchRegionShortName]


        const query = `
        SELECT * FROM local_markets 
        WHERE lcc_address LIKE ? OR  lcc_address LIKE ?
        LIMIT 15 OFFSET 15 * ?
        `
        const countSelectQuery = `
        SELECT COUNT(*) AS count FROM local_markets
        WHERE  lcc_address LIKE ? OR  lcc_address LIKE ?
        `

        const items = await dbOpen(true, query, [...conditions, page])
        const { count: totalCount } = await dbOpen(false, countSelectQuery, [...conditions]) as { count: number } || { count: 0 }
        const maxSize = Math.ceil(totalCount / VIEW_POST_COUNT)

        return { maxSize, items, totalCount }
    }
}