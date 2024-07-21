import styles from './index.module.less'
import StringUtils from '../../utils/StringUtils'
import useCodeSelect from '../../hooks/useCodeSelect'

export default function () {
  const { codeList, currentIndex } = useCodeSelect()

  return (
    <div className={styles.itemContainer}>
      {codeList.map((item, index) => (
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
