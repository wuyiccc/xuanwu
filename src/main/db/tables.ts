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

db.exec(`
insert into category(name, gmt_create) values('xuanwu', datetime());
`)

db.exec(`
insert into content(title, content, category_id, gmt_create) values('react', 'zustand', 1, datetime());
`)
