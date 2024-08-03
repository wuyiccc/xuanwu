import { db } from './connect'
import { tContent } from './tables'
import { and, desc, eq, like } from 'drizzle-orm'
import ContentEntity from '../../pojo/entity/ContentEntity'

export default class ContentMapper {
  public static getContentListByCategoryId(categoryId: number) {
    console.log('categoryId:', categoryId)
    if (categoryId === undefined) {
      return db.select().from(tContent).orderBy(desc(tContent.gmtCreate)).all()
    } else {
      return db
        .select()
        .from(tContent)
        .where(eq(tContent.categoryId, categoryId))
        .orderBy(desc(tContent.gmtCreate))
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

  public static searchContentByTitle(title: string, categoryId: number) {
    return db
      .select()
      .from(tContent)
      .where(and(like(tContent.title, `%${title}%`), eq(tContent.categoryId, categoryId)))
      .orderBy(desc(tContent.gmtCreate))
  }

  public static addContent(data: ContentEntity) {
    return db.insert(tContent).values(data).returning()
  }

  public static deleteContent(data: ContentEntity) {
    return db.delete(tContent).where(eq(tContent.id, data.id!))
  }

  public static updateContentCategoryId(data: ContentEntity) {
    return db.update(tContent).set({ categoryId: data.categoryId }).where(eq(tContent.id, data.id!))
  }
}
