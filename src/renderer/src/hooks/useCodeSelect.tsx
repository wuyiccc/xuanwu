import { useCallback, useEffect, useState } from 'react'
import StatusDB from '../status/StatusDB'
import StringUtils from '../utils/StringUtils'

export default () => {
  const codeList = StatusDB.db((state) => state.codeList)
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
          const content = codeList.find((item) => item.id == id)?.content
          // 回车的时候复制文本
          navigator.clipboard.writeText(content || StringUtils.EMPTY)
          window.api.hideWindow()
          break
        }
      }
      // 当searchList, currentIndex发生变更的时候重新生成函数
    },
    [codeList, id]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeyEvent)

    return () => {
      document.removeEventListener('keydown', handleKeyEvent)
    }
  }, [handleKeyEvent])

  return { codeList, id }
}
