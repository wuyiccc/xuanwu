import { create } from 'zustand'
import { DataType } from '../mock/MockData'

class StatusDB {
  public static db = create<{
    codeList: DataType[]
    setCodeList: (newData: DataType[]) => void
  }>((set) => ({
    codeList: [],
    setCodeList: (newData) => {
      set({ codeList: newData })
    }
  }))
}

export default StatusDB
