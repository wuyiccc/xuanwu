import { db } from './connect'

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
