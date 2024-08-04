import styles from './index.module.less'
import StringUtils from '../../utils/StringUtils'
import useSelect from '../../hooks/useSelect'

export default function () {
  const { codeList, id, selectItem } = useSelect()

  return (
    <div className={styles.itemContainer}>
      {codeList.map((item) => (
        <div
          key={item.id}
          className={`${styles.item} ${id === item.id ? styles.itemSelected : StringUtils.EMPTY}`}
          onClick={() => selectItem(item.id)}
        >
          {item.title}
        </div>
      ))}
    </div>
  )
}
