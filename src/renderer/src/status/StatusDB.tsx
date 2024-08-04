import { create } from 'zustand'
import StringUtils from '../utils/StringUtils'
import ContentEntity from '../../../pojo/entity/ContentEntity'

class StatusDB {
  public static db = create<{
    codeList: ContentEntity[]
    setCodeList: (newData: ContentEntity[]) => void
    search: string
    setSearch: (search: string) => void
    error: string
    setError: (error: string) => void
    id: number
    setId: (id: number) => void
    categoryId: number
    setCategoryId: (categoryId: number) => void
    contentId: number
    setContentId: (contentId: number) => void
  }>((set) => ({
    codeList: [],
    setCodeList: (newData) => {
      set({ codeList: newData })
    },
    search: StringUtils.EMPTY,
    setSearch: (search) => {
      set({ search: search })
    },
    error: StringUtils.EMPTY,
    setError: (error: string) => {
      set({ error: error })
    },
    id: 0,
    setId: (id: number) => {
      set({ id: id })
    },
    categoryId: 0,
    setCategoryId: (categoryId: number) => {
      set({ categoryId: categoryId })
    },
    contentId: 0,
    setContentId: (contentId: number) => {
      set({ contentId: contentId })
    }
  }))
}

export default StatusDB
