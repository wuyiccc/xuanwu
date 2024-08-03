import ContentEntity from '../../../pojo/entity/ContentEntity'
import StringUtils from '../utils/StringUtils'

export default class CategoryApi {
  public static async updateCategoryById(data: ContentEntity) {
    return window.api.mapper('CategoryMapper.updateCategoryById', data)
  }

  public static async getAllCategory() {
    return window.api.mapper('CategoryMapper.findAllCategory', StringUtils.EMPTY)
  }
}
