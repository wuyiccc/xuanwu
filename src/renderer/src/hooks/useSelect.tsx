import { useCallback, useEffect } from 'react'
import StatusDB from '../status/StatusDB'
import StringUtils from '../utils/StringUtils'

export default () => {
  const codeList = StatusDB.db((state) => state.codeList)
  // 建议使用这种方式, 使用 getState的方式获取所有的zustand变量可能会造成不关注的变量刷新也会导致页面渲染, 造成无限循环
  const setCodeList = StatusDB.db((state) => state.setCodeList)
  const setSearch = StatusDB.db((state) => state.setSearch)
  const id = StatusDB.db((state) => state.id)
  const setId = StatusDB.db((state) => state.setId)

  const handleKeyEvent = useCallback(
    (e: KeyboardEvent) => {
      if (codeList.length === 0) {
        return
      }
      switch (e.code) {
        case 'ArrowUp':
          {
            const index = codeList.findIndex((item) => item.id == id)
            setId(codeList[index - 1]?.id || codeList[codeList.length - 1].id)
          }
          break
        case 'ArrowDown':
          {
            const index = codeList.findIndex((item) => item.id == id)
            setId(codeList[index + 1]?.id || codeList[0].id)
          }
          break
        case 'Enter': {
          selectItem(id)
          break
        }
      }
      // 当searchList, currentIndex发生变更的时候重新生成函数
    },
    [codeList, id]
  )

  async function selectItem(id: number) {
    const content = codeList.find((item) => item.id == id)?.content
    if (content) {
      await navigator.clipboard.writeText(content)
    }

    setCodeList([])
    setSearch(StringUtils.EMPTY)
    window.api.hideWindow()
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyEvent)

    return () => {
      document.removeEventListener('keydown', handleKeyEvent)
    }
  }, [handleKeyEvent])

  return { codeList, id, selectItem }
}
