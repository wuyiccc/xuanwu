import { drizzle } from 'drizzle-orm/better-sqlite3'
import Database from 'better-sqlite3'
import { app } from 'electron'
import { resolve } from 'path'
import fs from 'node:fs'
const homeDirectory = app.getPath('home')
const databaseDirectory = resolve(homeDirectory, '.xuanwu')
console.log(databaseDirectory)
if (!fs.existsSync(databaseDirectory)) {
  fs.mkdirSync(databaseDirectory, { recursive: true })
}

const sqlite = new Database(app.getPath('home') + '/.xuanwu/xuanwu.db')
const db = drizzle(sqlite, { logger: true })

export { db }
