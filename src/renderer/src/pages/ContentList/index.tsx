import styles from './index.module.less'
import { NavLink, Outlet, useLoaderData, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import dayjs from 'dayjs'
import ContentEntity from '../../../../pojo/entity/ContentEntity'

export default function () {
  const contentList = useLoaderData() as ContentEntity[]
  const navigate = useNavigate()

  useEffect(() => {
    if (contentList.length) {
      const content = contentList[0]
      navigate(`/config/categoryList/contentList/${content.categoryId}/content/${content.id}`)
    }
  }, [JSON.stringify(contentList)])

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
                <div className={styles.titleDate}>
                  {dayjs(content.gmtCreate).format('YYYY/MM/DD')}
                </div>
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
