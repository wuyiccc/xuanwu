import { useCallback, useEffect, useState } from 'react'
import StatusDB from '../status/StatusDB'

export default () => {
  const codeList = StatusDB.db((state) => state.codeList)
  const [currentIndex, setCurrentIndex] = useState(0)
  const handleKeyEvent = useCallback(
    (e: KeyboardEvent) => {
      if (codeList.length === 0) {
        return
      }
      switch (e.code) {
        case 'ArrowUp':
          setCurrentIndex((currentIndex) =>
            currentIndex - 1 < 0 ? codeList.length - 1 : currentIndex - 1
          )
          break
        case 'ArrowDown':
          setCurrentIndex((currentIndex) =>
            currentIndex + 1 >= codeList.length ? 0 : currentIndex + 1
          )
          break
        case 'Enter':
          // 回车的时候复制文本
          navigator.clipboard.writeText(codeList[currentIndex].content)
      }
      // 当searchList, currentIndex发生变更的时候重新生成函数
    },
    [codeList, currentIndex]
  )

  useEffect(() => {
    setCurrentIndex(0)
  }, [codeList])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyEvent)

    return () => {
      document.removeEventListener('keydown', handleKeyEvent)
    }
  }, [handleKeyEvent])

  return { codeList, currentIndex }
}
