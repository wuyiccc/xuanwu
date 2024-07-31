import { db } from './connect'
import { tCategory } from './tables'

export default class CategoryMapper {
  public static findAllCategory() {
    return db.select().from(tCategory).all()
  }
}
