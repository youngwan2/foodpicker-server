require('dotenv').config();
import sqlite from 'sqlite3'


const sqlite3Verbose = sqlite.verbose()
const dbPath = process.env.DATABASE_PATH || './data/foodpick.db';

// meno : 함수의 순수성을 유지하고자 한다면 openDb 를 dbOpen의 매개변수로 전달하는 것이 좋으나, 여기서는 편의성을 위해 외부에서 주입
function openDb(sqlite3Verbose: sqlite.sqlite3) {
  const db = new sqlite3Verbose.Database(dbPath,(err)=>(err && console.error("데이터베이스 연결실패:",err)))
  return db
}

// 동기적  DB 연결을 비동기적 연결로
export const dbOpen = (isAll: boolean, query: string, conditions: (number | string)[]) => {
  const db = openDb(sqlite3Verbose)

  return new Promise((resolve) => {
    if (isAll) {
      db.all(query, conditions, (err, rows) => {
        if (err) {
          db.close()
          return
        } else {
          resolve(rows)
          db.close()
        }
      }
      )
    } else {
      db.get(query, conditions, (err, rows) => {
        if (err) {
          db.close()
          return
        } else {
          resolve(rows)
          db.close()
        }
      })
    }
  })
}