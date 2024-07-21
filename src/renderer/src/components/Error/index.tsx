import StatusDB from '../../status/StatusDB'
import styles from './index.module.less'
import { useEffect } from 'react'

export default function () {
  const error = StatusDB.db((state) => state.error)
  const setError = StatusDB.db((state) => state.setError)

  useEffect(() => {
    const id = setTimeout(() => setError(''), 2000)
    return () => clearTimeout(id)
  }, [])

  if (!error) return <></>

  return (
    <>
      <div className={styles.error}>{error}</div>
    </>
  )
}
