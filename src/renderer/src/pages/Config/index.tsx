import styles from './index.module.less'
import { Outlet } from 'react-router-dom'

export default function () {
  return (
    <div className={styles.container}>
      <Outlet />
      {/*<div className={styles.leftContainer}>*/}
      {/*  <div className={styles.ltContainer}>左上</div>*/}
      {/*  <div className={styles.lcContainer}>左中</div>*/}
      {/*</div>*/}

      {/*<div className={styles.rightContainer}>*/}
      {/*  <div>右上</div>*/}
      {/*  <div>右下</div>*/}
      {/*</div>*/}
    </div>
  )
}
