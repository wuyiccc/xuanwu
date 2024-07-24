import Database, * as BetterSqlite3 from 'better-sqlite3'
import { resolve } from 'path'
import { app } from 'electron'

const file = resolve(app.getPath('home'), 'work', 'tmp', 'xuanwu', 'xuanwu.db')
const db: BetterSqlite3.Database = new Database(file, {})
db.pragma('journal_mode = WAL')

export { db }
