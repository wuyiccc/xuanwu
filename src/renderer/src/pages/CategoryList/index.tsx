import { NavLink, Outlet, useLoaderData } from 'react-router-dom'
import styles from './index.module.less'
import { Add, FolderCodeOne, SettingTwo } from '@icon-park/react'
import CategoryEntity from '../../../../pojo/entity/CategoryEntity'
import StatusDB from '../../status/StatusDB'

export default function () {
  const categoryList = useLoaderData() as CategoryEntity[]

  const setCategoryId = StatusDB.db((state) => state.setCategoryId)

  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.quickOpr}>
          <div>快捷操作</div>
        </div>
        <div className={styles.top}>
          {categoryList.map((category) => {
            return (
              <NavLink
                to={`/config/categoryList/contentList/${category.id}`}
                key={category.id}
                className={({ isActive }) =>
                  isActive ? styles.categoryItemSelected : styles.categoryItem
                }
                onClick={() => {
                  console.log(category.id)
                  setCategoryId(category.id!)
                }}
              >
                <div className={styles.categoryContainer}>
                  <FolderCodeOne theme="outline" size="12" strokeWidth={3} />
                  <div className={styles.categoryText}>{category.name}</div>
                </div>
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
