interface CategoryEntity {
  id?: number

  name?: string

  gmtCreate?: string
}

interface ContentEntity {
  id?: number

  title?: string

  content?: string

  categoryId?: number

  gmtCreate?: string
}
