import { ipcMain, IpcMainInvokeEvent } from 'electron'
import CategoryMapper from './CategoryMapper'
import ContentMapper from './ContentMapper'

ipcMain.handle('mapper', (_event: IpcMainInvokeEvent, methodName: string, methodParam: any) => {
  if ('CategoryMapper.findAllCategory' === methodName) {
    return CategoryMapper.findAllCategory(methodParam)
  } else if ('ContentMapper.getContentListByCategoryId' === methodName) {
    return ContentMapper.getContentListByCategoryId(methodParam)
  } else if ('ContentMapper.getContentById' === methodName) {
    return ContentMapper.getContentById(methodParam)
  }
  return null
})
