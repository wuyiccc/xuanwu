import Database, * as BetterSqlite3 from 'better-sqlite3'
import { resolve } from 'path'
import { app } from 'electron'

const file = resolve(app.getPath('home'), '.xuanwu', 'xuanwu.db')
const db: BetterSqlite3.Database = new Database(file, {})
db.pragma('journal_mode = WAL')

db.exec(`
create table if not exists category (
    id integer primary key autoincrement not null,
    name text not null,
    gmt_create text not null
);
`)

db.exec(`
create table if not exists content (
    id integer primary key autoincrement not null,
    title text not null,
    content text not null,
    category_id integer,
    gmt_create text not null
);
`)

// db.exec(`
// insert into category(name, gmt_create) values('xuanwu', datetime());
// `)

// db.exec(`
// insert into content(title, content, category_id, gmt_create) values('react', 'zustand', 1, datetime());
// `)

db.exec(`
create table if not exists config (
    id integer primary key autoincrement not null,
    content text not null
);
`)

// 查询 config 表中的数据
const rowCountJson = db.prepare('SELECT COUNT(*) as count FROM config').get() as string

const count = rowCountJson['count']
console.log(count)

if (count === 0) {
  // 如果 config 表中没有数据，则插入新的数据
  db.exec(`
    insert into config(id, content) values (1, '{"shortCut":"Meta+w","database":"testxx"}');
  `)
} else {
  console.log('config 表中已有数据，跳过插入')
}
