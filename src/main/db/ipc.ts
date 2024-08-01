import { ipcMain, IpcMainInvokeEvent } from 'electron'
import CategoryMapper from './CategoryMapper'
import ContentMapper from './ContentMapper'
import ContentEntity from '../../pojo/entity/ContentEntity'

ipcMain.handle('mapper', (_event: IpcMainInvokeEvent, methodName: string, methodParam: any) => {
  // console.log(methodName)
  if ('CategoryMapper.findAllCategory' === methodName) {
    return CategoryMapper.findAllCategory()
  } else if ('ContentMapper.getContentListByCategoryId' === methodName) {
    return ContentMapper.getContentListByCategoryId(methodParam)
  } else if ('ContentMapper.getContentById' === methodName) {
    return ContentMapper.getContentById(methodParam)
  } else if ('ContentMapper.updateContentById' === methodName) {
    const newContent = methodParam as ContentEntity
    return ContentMapper.updateContentById(
      newContent.id as number,
      newContent.content as string,
      newContent.title as string
    )
  } else if ('ContentMapper.searchContentByTitle' === methodName) {
    return ContentMapper.searchContentByTitle(methodParam)
  }
  return null
})
