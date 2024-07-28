import { NavLink, Outlet, useLoaderData, useNavigate } from 'react-router-dom'
import styles from './index.module.less'
import { Add, FolderCodeOne, SettingTwo } from '@icon-park/react'
import { useEffect } from 'react'

export default function () {
  const categoryList = useLoaderData() as CategoryEntity[]
  const navigate = useNavigate()

  useEffect(() => {
    if (categoryList.length) {
      navigate(`/config/categoryList/contentList/${categoryList[0].id}`)
    }
  }, [JSON.stringify(categoryList)])

  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.top}>
          {categoryList.map((category) => {
            return (
              <NavLink
                to={`/config/categoryList/contentList/${category.id}`}
                key={category.id}
                className={({ isActive }) =>
                  isActive ? styles.categoryItemSelected : styles.categoryItem
                }
              >
                <div className={styles.categoryContainer}>
                  <FolderCodeOne theme="outline" size="12" />
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
