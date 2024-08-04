export default class ContentEntity {
  id?: number

  title: string

  content: string

  categoryId: number

  gmtCreate: string

  constructor(title: string, content: string, categoryId: number, gmtCreate: string) {
    this.title = title
    this.content = content
    this.categoryId = categoryId
    this.gmtCreate = gmtCreate
  }
}
