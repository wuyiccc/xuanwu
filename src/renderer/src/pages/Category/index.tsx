import { Link, Outlet, useLoaderData } from 'react-router-dom'
import styles from './index.module.less'
import { Add, FolderClose, SettingTwo } from '@icon-park/react'
import { useState } from 'react'

export default function () {
  const categoryList = useLoaderData() as CategoryEntity[]
  const [current, setCurrent] = useState<CategoryEntity>()

  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.top}>
          {categoryList.map((category) => {
            return (
              <Link
                to={`/config/category/content/${category.id}`}
                key={category.id}
                className={
                  current?.id === category.id ? styles.categoryItemSelected : styles.categoryItem
                }
                onClick={() => setCurrent(category)}
              >
                <FolderClose
                  theme="outline"
                  size="24"
                  fill="#333"
                  className={styles.categoryIcon}
                />
                <div className={styles.categoryText}>{category.name}</div>
              </Link>
            )
          })}
        </div>
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
