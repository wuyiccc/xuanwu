import StatusDB from '../../status/StatusDB'
import { ChangeEvent, useState } from 'react'
import StringUtils from '../../utils/StringUtils'
import { mockData } from '../../mock/MockData'
import styles from './index.module.less'

export default function () {
  const { setSearchList } = StatusDB.db.getState()

  const [search, setSearch] = useState(StringUtils.EMPTY)

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const inputStr = e.target.value
    if (StringUtils.isEmpty(inputStr)) {
      setSearch(inputStr)
      setSearchList([])
      return
    }
    setSearch(inputStr)
    const newList = mockData.filter((code) =>
      code.content.toLowerCase().includes(inputStr.toLowerCase())
    )
    setSearchList(newList)
  }

  return (
    <div className={styles.searchContainer}>
      <div className={styles.inputContainer}>
        <input value={search} onChange={handleSearch} className={styles.inputText} />
      </div>
      <div className={styles.bottomTextLog}>xuanwu</div>
    </div>
  )
}
