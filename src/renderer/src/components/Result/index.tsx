import StatusDB from '../../status/StatusDB'
import styles from './index.module.less'
import { useCallback, useEffect, useState } from 'react'
import StringUtils from '../../utils/StringUtils'

export default function () {
  const searchList = StatusDB.db((state) => state.searchList)
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleKeyEvent = useCallback(
    (e: KeyboardEvent) => {
      if (searchList.length === 0) {
        return
      }
      switch (e.code) {
        case 'ArrowUp':
          setCurrentIndex((currentIndex) =>
            currentIndex - 1 < 0 ? searchList.length - 1 : currentIndex - 1
          )
          break
        case 'ArrowDown':
          setCurrentIndex((currentIndex) =>
            currentIndex + 1 >= searchList.length ? 0 : currentIndex + 1
          )
          break
        case 'Enter':
          // 回车的时候复制文本
          navigator.clipboard.writeText(searchList[currentIndex].content)
      }
      // 当searchList, currentIndex发生变更的时候重新生成函数
    },
    [searchList, currentIndex]
  )

  useEffect(() => {
    setCurrentIndex(0)
  }, [searchList])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyEvent)

    return () => {
      document.removeEventListener('keydown', handleKeyEvent)
    }
  }, [handleKeyEvent])

  return (
    <div className={styles.itemContainer}>
      {searchList.map((item, index) => (
        <div
          key={item.id}
          className={`${styles.item} ${currentIndex === index ? styles.itemSelected : StringUtils.EMPTY}`}
        >
          {item.content}
        </div>
      ))}
    </div>
  )
}
