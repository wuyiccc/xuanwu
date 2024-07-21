import StatusDB from '../../status/StatusDB'
import styles from './index.module.less'
import { useEffect, useState } from 'react'
import StringUtils from '../../utils/StringUtils'

export default function () {
  const searchList = StatusDB.db((state) => state.searchList)
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleKeyDown = (e: KeyboardEvent) => {
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
        navigator.clipboard.writeText(searchList[currentIndex].content)
    }
  }

  useEffect(() => {
    setCurrentIndex(0)
  }, [searchList])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [searchList, currentIndex])

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
