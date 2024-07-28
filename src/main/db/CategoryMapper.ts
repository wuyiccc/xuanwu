import { db } from './connect'
import { tCategory } from './tables'

export default class CategoryMapper {
  public static findAllCategory(param: string) {
    console.log(param)
    return db.select().from(tCategory).all()
  }
}
