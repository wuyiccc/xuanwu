import { NavLink, Outlet, useLoaderData } from 'react-router-dom'
import styles from './index.module.less'
import { Add, AllApplication, FolderCodeOne, SettingTwo } from '@icon-park/react'
import CategoryEntity from '../../../../pojo/entity/CategoryEntity'

export default function () {
  const categoryList = useLoaderData() as CategoryEntity[]
  // const navigate = useNavigate()
  //
  // useEffect(() => {
  //   if (categoryList.length) {
  //     navigate(`/config/categoryList/contentList/${categoryList[0].id}`)
  //   }
  // }, [JSON.stringify(categoryList)])

  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.top}>
          <div className={styles.quickOpr}>快捷操作</div>
          <NavLink
            to={`/config/categoryList/contentList`}
            className={({ isActive }) =>
              isActive ? styles.categoryItemSelectedAll : styles.categoryItemAll
            }
            end
          >
            {/*<div className={styles.categoryItemSelected}>*/}
            <div className={styles.categoryContainer}>
              <AllApplication theme="outline" size="12" fill="#333" strokeWidth={3} />
              <div className={styles.categoryText}>所有分类</div>
            </div>
            {/*</div>*/}
          </NavLink>
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
