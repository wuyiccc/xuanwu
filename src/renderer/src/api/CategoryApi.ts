import StringUtils from '../utils/StringUtils'
import CategoryEntity from '../../../pojo/entity/CategoryEntity'

export default class CategoryApi {
  public static async updateCategoryById(data: CategoryEntity) {
    return window.api.mapper('CategoryMapper.updateCategoryById', data)
  }

  public static async getAllCategory() {
    return window.api.mapper('CategoryMapper.findAllCategory', StringUtils.EMPTY)
  }
}
