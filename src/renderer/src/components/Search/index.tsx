import styles from './index.module.less'
import useSearch from '../../hooks/useSearch'
import { SettingOne } from '@icon-park/react'
import { Input } from 'antd'

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
          onClick={() => window.api.openConfigWindow()}
          className={styles.setting}
        />
        <Input
          value={search}
          onChange={handleSearch}
          className={styles.inputText}
          autoFocus={true}
        />
      </div>
      <div className={styles.bottomTextLog}>xuanwu</div>
    </div>
  )
}
