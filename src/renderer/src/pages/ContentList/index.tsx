import styles from './index.module.less'
import { NavLink, Outlet, useLoaderData } from 'react-router-dom'

export default function () {
  const contentList = useLoaderData() as ContentEntity[]
  console.log(contentList)
  return (
    <div className={styles.container}>
      <div className={styles.list}>
        {contentList.map((content) => {
          return (
            <div key={content.id} className={styles.contentItem}>
              <NavLink
                to={`/config/categoryList/contentList/${content.categoryId}/content/${content.id}`}
                className={({ isActive }) =>
                  isActive ? styles.contentLinkSelected : styles.contentLink
                }
              >
                <div className={styles.titleText}>{content.title}</div>
              </NavLink>
            </div>
          )
        })}
      </div>
      <div className={styles.content}>
        <Outlet></Outlet>
      </div>
    </div>
  )
}
