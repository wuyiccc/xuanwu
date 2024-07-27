import { Outlet, useLoaderData } from 'react-router-dom'
import styles from './index.module.less'
import { Add, SettingTwo } from '@icon-park/react'

export default function () {
  const categoryList = useLoaderData() as Category[]

  return (
    <div className={styles.container}>
      {categoryList.map((category) => {
        return <div key={category.id}>{category.name}</div>
      })}
      <div className={styles.leftContainer}>
        <div className={styles.top}>vue.js</div>
        <div className={styles.bottom}>
          <Add theme="outline" size="24" fill="#333" />
          <SettingTwo theme="outline" size="24" fill="#333" />
        </div>
      </div>
      <div className={styles.rightContainer}>
        <Outlet></Outlet>
      </div>
    </div>
  )
}
