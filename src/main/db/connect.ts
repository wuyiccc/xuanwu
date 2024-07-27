import { drizzle } from 'drizzle-orm/better-sqlite3'
import Database from 'better-sqlite3'

const sqlite = new Database('/Users/wuxingyu/work/tmp/xuanwu/xuanwu.db')
const db = drizzle(sqlite)

export { db }
