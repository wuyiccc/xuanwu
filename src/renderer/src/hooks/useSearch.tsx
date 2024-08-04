import StatusDB from '../status/StatusDB'
import { ChangeEvent, useEffect } from 'react'
import StringUtils from '../utils/StringUtils'
import ContentApi from '../api/ContentApi'
import ContentEntity from '../../../pojo/entity/ContentEntity'

export default () => {
  const setCodeList = StatusDB.db((state) => state.setCodeList)
  const search = StatusDB.db((state) => state.search)
  const setSearch = StatusDB.db((state) => state.setSearch)
  const setId = StatusDB.db((state) => state.setId)
  const codeList = StatusDB.db((state) => state.codeList)

  useEffect(() => {
    setId(codeList[0]?.id || 0)
  }, [codeList])

  const handleSearch = async (e: ChangeEvent<HTMLInputElement>) => {
    const inputStr = e.target.value
    if (StringUtils.isEmpty(inputStr)) {
      setSearch(inputStr)
      setCodeList([])
      return
    }
    setSearch(inputStr)
    const newList = (await ContentApi.getContentList(inputStr)) as ContentEntity[]
    setCodeList(newList)
  }

  return { search, handleSearch }
}
