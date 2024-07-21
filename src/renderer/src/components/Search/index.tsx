import styles from './index.module.less'
import useSearch from '../../hooks/useSearch'

export default function () {
  const { search, handleSearch } = useSearch()

  return (
    <div className={styles.searchContainer}>
      <div className={styles.inputContainer}>
        <input value={search} onChange={handleSearch} className={styles.inputText} />
      </div>
      <div className={styles.bottomTextLog}>xuanwu</div>
    </div>
  )
}
