import { create } from 'zustand'
import { DataType } from '../mock/MockData'
import StringUtils from '../utils/StringUtils'

class StatusDB {
  public static db = create<{
    codeList: DataType[]
    setCodeList: (newData: DataType[]) => void
    search: string
    setSearch: (search: string) => void
    error: string
    setError: (error: string) => void
    id: number
    setId: (id: number) => void
    categoryId: number
    setCategoryId: (categoryId: number) => void
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
    }
  }))
}

export default StatusDB
