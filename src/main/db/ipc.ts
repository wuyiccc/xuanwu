import { ipcMain, IpcMainInvokeEvent } from 'electron'
import CategoryMapper from './CategoryMapper'
import ContentMapper from './ContentMapper'
import ContentEntity from '../../pojo/entity/ContentEntity'
import CategoryEntity from '../../pojo/entity/CategoryEntity'
import ConfigMapper from './ConfigMapper'

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
    const newContent = methodParam as ContentEntity
    return ContentMapper.searchContentByTitle(newContent.title!, newContent.categoryId!)
  } else if ('ContentMapper.addContent' === methodName) {
    return ContentMapper.addContent(methodParam as ContentEntity)
  } else if ('ContentMapper.deleteContent' === methodName) {
    return ContentMapper.deleteContent(methodParam)
  } else if ('CategoryMapper.updateCategoryById' === methodName) {
    return CategoryMapper.updateCategoryById(methodParam as CategoryEntity)
  } else if ('ContentMapper.updateContentCategoryId' === methodName) {
    return ContentMapper.updateContentCategoryId(methodParam)
  } else if ('ConfigMapper.find' === methodName) {
    return ConfigMapper.find()
  } else if ('ConfigMapper.update' === methodName) {
    return ConfigMapper.update(methodParam)
  } else if ('ContentMapper.getContentList' === methodName) {
    return ContentMapper.getContentList(methodParam)
  } else if ('CategoryMapper.addCategory' === methodName) {
    return CategoryMapper.addCategory(methodParam)
  } else if ('CategoryMapper.delete' === methodName) {
    return CategoryMapper.delete(methodParam)
  }
  return null
})
