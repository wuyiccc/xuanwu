import ContentEntity from '../../../pojo/entity/ContentEntity'

export default class ContentApi {
  public static async createContent(data: ContentEntity) {
    return window.api.mapper('ContentMapper.addContent', data)
  }

  public static async getContentListByCategoryId(categoryId: number) {
    return window.api.mapper('ContentMapper.getContentListByCategoryId', categoryId)
  }

  public static async searchContentByTitle(searchWord: ContentEntity) {
    return window.api.mapper('ContentMapper.searchContentByTitle', searchWord)
  }

  public static async deleteContent(data: ContentEntity) {
    return window.api.mapper('ContentMapper.deleteContent', data)
  }

  public static async updateContentCategoryId(data: ContentEntity) {
    return window.api.mapper('ContentMapper.updateContentCategoryId', data)
  }

  public static async updateContentById(data: ContentEntity) {
    return window.api.mapper('ContentMapper.updateContentById', data)
  }

  public static async getContentById(id: number) {
    return window.api.mapper('ContentMapper.getContentById', id)
  }
}
