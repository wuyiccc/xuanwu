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
    }
  }))
}

export default StatusDB
