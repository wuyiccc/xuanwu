import { db } from './connect'
import { tConfig } from './tables'

export default class ConfigMapper {
  public static find() {
    return db.select().from(tConfig).all()
  }

  public static update(content: string) {
    return db.update(tConfig).set({
      content: content
    })
  }
}
