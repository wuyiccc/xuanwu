import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const tCategory = sqliteTable('category', {
  id: integer('id'),
  name: text('name'),
  gmtCreate: text('gmt_create')
})

export const tContent = sqliteTable('content', {
  id: integer('id'),
  title: text('title'),
  content: text('content'),
  categoryId: integer('category_id'),
  gmtCreate: text('gmt_create')
})

export const tConfig = sqliteTable('config', {
  id: integer('id'),
  content: text('content')
})
