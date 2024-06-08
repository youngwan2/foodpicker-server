
import { injectable } from "inversify";
import "reflect-metadata";
import { dbOpen } from "../db/dbConnection";


interface PropsType {
    name: string, main: string, sub: string, detail: string, foodType: string
}

@injectable()
export class TraditionalFoodModel {
    constructor() { }
    async getTraditionalFoodCategory({ name, main, sub, detail, foodType }: PropsType) {

        const conditions = [`%${name}%`, main, sub, detail, foodType]

        try {

            const itemSelectQuery = `
            SELECT * FROM traditional_foods
            WHERE name LIKE ? AND main_category =? AND sub_category = ? AND detail_category = ? AND food_type = ?
            `

            const countSelectQuery = `
            SELECT COUNT(*) AS count FROM traditional_foods
            WHERE name LIKE ? AND main_category =? AND sub_category = ? AND detail_category = ? AND food_type = ?
            
            `
            const items = await dbOpen(true, itemSelectQuery, conditions)
            const { count: totalCount } = await dbOpen(false, countSelectQuery, conditions) as { count: string } || { totalCount: 0 }
            return { items, totalCount }
        } catch (error) {
            console.error('/traditionalfood.model', error)
        }

    }
}


// product_id             INTEGER PRIMARY KEY,
// name                   TEXT    NOT NULL,
// food_type              TEXT    NOT NULL,
// main_category          TEXT    NOT NULL,
// sub_category           TEXT    NOT NULL,
// detail_category        TEXT    NOT NULL,
// traditional_food_count INTEGER NOT NULL


