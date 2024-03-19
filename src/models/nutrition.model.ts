
import openDb from '../db/dbConnection'

export class NutritionModel{

    static async getNutritionDataFromDB(page:number, keyword:string){
        const db = await openDb();
        const query =`
        SELECT id, PRODUCT_NAME, PRODUCT_ORIGIN_NAME, BASE_QY, KCAL_QY, PROTEIN_QY, FAT_QY, CARBOH_QY, SUGAR_QY, DIETARY_FIBER_QY, CALCIUM_QY, IRON_QY, PHOSPHORUS_QY, POTASSIUM_QY, NATRIUM_QY, VITAMIN_A_QY, B_CAROTENE_QY, THIAMIN, VITAMIN_B2_QY, VITAMIN_B3_QY, VITAMIN_C_QY, VITAMIN_D_QY, CHOLESTEROL_QY, SATURATED_FAT_QY, TRANS_FAT_QY, DATA_ORIGIN, FOOD_WEIGHT, CREATION_DATE, BASE_DATE    
        FROM nutrition
        WHERE PRODUCT_NAME LIKE ?
        LIMIT 20 OFFSET 20 * ?
        `
        const countSelectQuery =`
        SELECT COUNT(*) AS count
        FROM nutrition
        WHERE PRODUCT_NAME LIKE ?
        `

        const items = await db.all(query, ['%'+keyword+'%', page])
        const {count:totalCount} = await db.get(countSelectQuery, ['%'+keyword+'%']) || {totalCount : 0}
        db.close()
        return {items, totalCount}
    }

}