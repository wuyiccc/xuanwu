import { create } from 'zustand'
import { DataType, mockData } from '../mock/MockData'

class StatusDB {
  public static db = create<{
    searchList: DataType[],
    setSearchList: (mockData: DataType[]) => void;
  }>(set => ({
    searchList: mockData,
    setSearchList: mockData => {
      set({ searchList: mockData })
    }
  }))
}

export default StatusDB
