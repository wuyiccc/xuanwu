import styles from './index.module.less'
import { Outlet } from 'react-router-dom'

export default function () {
  return (
    <div className={styles.container}>
      <Outlet />
    </div>
  )
}
