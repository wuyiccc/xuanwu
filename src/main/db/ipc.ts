import { ipcMain, IpcMainInvokeEvent } from 'electron'
import { db } from './connect'
import tables from './tables'

ipcMain.handle('sql', (_event: IpcMainInvokeEvent, sql: string, type: SqlActionType) => {
  console.log(sql)
  console.log(type)
  return db.select().from(tables).all()
})
