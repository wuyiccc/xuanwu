import { db } from './connect'
import { tContent } from './tables'
import { eq } from 'drizzle-orm'

export default class ContentMapper {
  public static getContentListByCategoryId(categoryId: number) {
    return db.select().from(tContent).where(eq(tContent.categoryId, categoryId))
  }
}
