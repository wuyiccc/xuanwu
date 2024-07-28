import { NavLink, Outlet, useLoaderData } from 'react-router-dom'
import styles from './index.module.less'
import { Add, SettingTwo } from '@icon-park/react'

export default function () {
  const categoryList = useLoaderData() as CategoryEntity[]

  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.top}>
          {categoryList.map((category) => {
            return (
              <NavLink
                to={`/config/category/content/${category.id}`}
                key={category.id}
                className={({ isActive }) =>
                  isActive ? styles.categoryItemSelected : styles.categoryItem
                }
              >
                {/*<FolderClose*/}
                {/*  theme="outline"*/}
                {/*  size="24"*/}
                {/*  fill="#333"*/}
                {/*  className={styles.categoryIcon}*/}
                {/*/>*/}
                <div className={styles.categoryText}>{category.name}</div>
              </NavLink>
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
