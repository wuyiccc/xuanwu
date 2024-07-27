import { sqliteTable, text } from 'drizzle-orm/sqlite-core'

const tables = sqliteTable('category', {
  id: text('id'),
  name: text('name'),
  gmtCreate: text('gmt_create')
})

export default tables
