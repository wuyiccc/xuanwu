import { useCallback, useEffect, useState } from 'react'
import StatusDB from '../status/StatusDB'

export default () => {
  const codeList = StatusDB.db((state) => state.codeList)
  const { setCodeList } = StatusDB.db.getState()
  const [id, setId] = useState(0)
  const handleKeyEvent = useCallback(
    (e: KeyboardEvent) => {
      if (codeList.length === 0) {
        return
      }
      switch (e.code) {
        case 'ArrowUp':
          // setId((currentIndex) => (currentIndex - 1 < 0 ? codeList.length - 1 : currentIndex - 1))
          setId((id) => {
            const index = codeList.findIndex((item) => item.id == id)
            return codeList[index - 1]?.id || codeList[codeList.length - 1].id
          })
          break
        case 'ArrowDown':
          // setId((currentIndex) => (currentIndex + 1 >= codeList.length ? 0 : currentIndex + 1))
          setId((id) => {
            const index = codeList.findIndex((item) => item.id == id)
            return codeList[index + 1]?.id || codeList[0].id
          })
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

  function selectItem(id: number) {
    const content = codeList.find((item) => item.id == id)?.content
    if (content) {
      navigator.clipboard.writeText(content)
    }

    setCodeList([])
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
