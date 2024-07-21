import styles from './index.module.less'
import StringUtils from '../../utils/StringUtils'
import useCodeSelect from '../../hooks/useCodeSelect'

export default function () {
  const { codeList, id, selectItem } = useCodeSelect()

  return (
    <div className={styles.itemContainer}>
      {codeList.map((item) => (
        <div
          key={item.id}
          className={`${styles.item} ${id === item.id ? styles.itemSelected : StringUtils.EMPTY}`}
          onClick={() => selectItem(item.id)}
        >
          {item.content}
        </div>
      ))}
    </div>
  )
}
