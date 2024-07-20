import { create } from 'zustand'
import { DataType } from '../mock/MockData'

class StatusDB {
  public static db = create<{
    searchList: DataType[]
    setSearchList: (newData: DataType[]) => void
  }>((set) => ({
    searchList: [],
    setSearchList: (newData) => {
      set({ searchList: newData })
    }
  }))
}

export default StatusDB
