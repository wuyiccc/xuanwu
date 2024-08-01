import { db } from './connect'
import { tContent } from './tables'
import { eq } from 'drizzle-orm'

export default class ContentMapper {
  public static getContentListByCategoryId(categoryId: number) {
    console.log('categoryId:', categoryId)
    if (categoryId === undefined) {
      return db.select().from(tContent).all()
    } else {
      return db.select().from(tContent).where(eq(tContent.categoryId, categoryId))
    }
  }

  public static getContentById(id: number) {
    return db.select().from(tContent).where(eq(tContent.id, id))
  }

  public static updateContentById(id: number, newContent: string, newTitle: string) {
    return db
      .update(tContent)
      .set({ content: newContent, title: newTitle })
      .where(eq(tContent.id, id))
  }
}
