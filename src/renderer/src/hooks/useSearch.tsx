import StatusDB from '../status/StatusDB'
import { ChangeEvent, useEffect } from 'react'
import StringUtils from '../utils/StringUtils'
import { mockData } from '../mock/MockData'

export default () => {
  const setCodeList = StatusDB.db((state) => state.setCodeList)
  const search = StatusDB.db((state) => state.search)
  const setSearch = StatusDB.db((state) => state.setSearch)
  const setId = StatusDB.db((state) => state.setId)
  const codeList = StatusDB.db((state) => state.codeList)

  useEffect(() => {
    setId(codeList[0]?.id || 0)
  }, [codeList])

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const inputStr = e.target.value
    if (StringUtils.isEmpty(inputStr)) {
      setSearch(inputStr)
      setCodeList([])
      return
    }
    setSearch(inputStr)
    const newList = mockData
      .filter((code) => code.content.toLowerCase().includes(inputStr.toLowerCase()))
      .splice(0, 6)
    setCodeList(newList)
  }

  return { search, handleSearch }
}
