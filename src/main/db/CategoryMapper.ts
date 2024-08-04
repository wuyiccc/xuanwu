import { db } from './connect'
import { tCategory } from './tables'
import CategoryEntity from '../../pojo/entity/CategoryEntity'
import { eq } from 'drizzle-orm'
import ContentEntity from '../../pojo/entity/ContentEntity'

export default class CategoryMapper {
  public static findAllCategory() {
    return db.select().from(tCategory).all()
  }

  public static updateCategoryById(category: CategoryEntity) {
    return db.update(tCategory).set({ name: category.name }).where(eq(tCategory.id, category.id!))
  }

  public static addCategory(category: CategoryEntity) {
    return db.insert(tCategory).values(category).returning()
  }

  public static delete(data: ContentEntity) {
    return db.delete(tCategory).where(eq(tCategory.id, data.id!))
  }
}
