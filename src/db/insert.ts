
import openDb from './dbConnection'
import localfood from './localfoods'
// const localmarket = require('./localmarket')


const query = `
    INSERT 
    INTO local_foods(title, sub_title, content, main_thumb_url, content_url, lcc_address, keyword, create_at, update_at, view_count, rel_rest_name, rel_rest_tel, rel_rest_address)
    VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)
`

// const marketQuery = `
//     INSERT 
//     INTO local_markets(title, sub_title, middle_title, era, content, main_thumb_url, content_url, lcc_address, keyword, view_count, create_at, update_at, la,lo )
//     VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)
// `

async function insertFun() {
    const db = await openDb()

    localfood.map((food: { data_title_nm: any; sbjt_nm: any; sumry_cn: any; main_thumb_url: any; cntnts_url: any; addr: any; core_kwrd_cn: any; regist_de: any; opn_de: any; relate_rstrnt_nm: any; rstrnt_tel_no: any; rstrnt_addr: any }) => {
        db.run(query, [food.data_title_nm, food.sbjt_nm, food.sumry_cn, food.main_thumb_url, food.cntnts_url, food.addr, food.core_kwrd_cn, food.regist_de, food.opn_de, 0, food.relate_rstrnt_nm, food.rstrnt_tel_no, food.rstrnt_addr])

    })

    // localmarket.map((market) => {
    //     db.run(marketQuery, [market.data_title_nm, market.sbjt_nm, market.middl_sbjt_nm, market.era_nm, market.sumry_cn, market.main_thumb_url, market.cntnts_url, market.addr, market.core_kwrd_cn, 0, market.regist_de, market.opn_de, market.ctlstt_la, market.ctlstt_lo])
    // })
}

export default insertFun




