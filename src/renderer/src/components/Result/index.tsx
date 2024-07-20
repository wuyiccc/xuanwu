import StatusDB from '../../status/StatusDB'
import styles from './index.module.less'
import { useEffect, useState } from 'react'

export default function () {
  const searchList = StatusDB.db((state) => state.searchList)
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleKeyDown = (e: KeyboardEvent) => {

  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [searchList])

  return (
    <div className={styles.itemContainer}>
      {currentIndex}
      {searchList.map((item) => (
        <div key={item.id} className={styles.item}>
          {item.content}
        </div>
      ))}
    </div>
  )
}
