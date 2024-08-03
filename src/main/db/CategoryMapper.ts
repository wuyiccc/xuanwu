import { db } from './connect'
import { tCategory } from './tables'
import CategoryEntity from '../../pojo/entity/CategoryEntity'
import { eq } from 'drizzle-orm'

export default class CategoryMapper {
  public static findAllCategory() {
    return db.select().from(tCategory).all()
  }

  public static updateCategoryById(category: CategoryEntity) {
    return db.update(tCategory).set({ name: category.name }).where(eq(tCategory.id, category.id!))
  }
}
