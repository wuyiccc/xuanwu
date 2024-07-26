import { db } from './connect'

export const findAll = (sql: string) => {
  return db.prepare(sql).all()
}

export const findOne = (sql: string) => {
  return db.prepare(sql).get()
}

export const insert = (sql: string) => {
  return db.prepare(sql).run().lastInsertRowid
}

export const update = (sql: string) => {
  return db.prepare(sql).run().changes
}

export const deleteData = (sql: string) => {
  return db.prepare(sql).run().changes
}
