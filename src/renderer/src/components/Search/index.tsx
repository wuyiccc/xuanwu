import styles from './index.module.less'
import useSearch from '../../hooks/useSearch'
import { SettingOne } from '@icon-park/react'

export default function () {
  const { search, handleSearch } = useSearch()

  return (
    <div className={styles.searchContainer}>
      <div className={styles.inputContainer}>
        <SettingOne
          theme="outline"
          size="22"
          fill="#34495e"
          strokeWidth={4}
          onClick={() => alert('显示配置页面')}
          className={styles.setting}
        />
        <input value={search} onChange={handleSearch} className={styles.inputText} />
      </div>
      <div className={styles.bottomTextLog}>xuanwu</div>
    </div>
  )
}
