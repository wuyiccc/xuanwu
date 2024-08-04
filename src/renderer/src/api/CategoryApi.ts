import StringUtils from '../utils/StringUtils'
import CategoryEntity from '../../../pojo/entity/CategoryEntity'

export default class CategoryApi {
  public static async updateCategoryById(data: CategoryEntity) {
    return window.api.mapper('CategoryMapper.updateCategoryById', data)
  }

  public static async getAllCategory() {
    return window.api.mapper('CategoryMapper.findAllCategory', StringUtils.EMPTY)
  }

  public static async addCategory(data: CategoryEntity) {
    return window.api.mapper('CategoryMapper.addCategory', data)
  }

  public static async delete(data: CategoryEntity) {
    return window.api.mapper('CategoryMapper.delete', data)
  }
}
