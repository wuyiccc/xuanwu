import StatusDB from '../../status/StatusDB'
import styles from './index.module.less'

export default function () {
  const searchList = StatusDB.db((state) => state.searchList)

  return (
    <div className={styles.itemContainer}>
      {searchList.map((item) => (
        <div key={item.id} className={styles.item}>
          {item.content}
        </div>
      ))}
    </div>
  )
}
