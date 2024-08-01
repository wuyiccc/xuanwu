import styles from './index.module.less'
import { Form, NavLink, Outlet, useLoaderData } from 'react-router-dom'
import dayjs from 'dayjs'
import ContentEntity from '../../../../pojo/entity/ContentEntity'
import { Button } from 'antd'

export default function () {
  const contentList = useLoaderData() as ContentEntity[]

  return (
    <div className={styles.container}>
      <div className={styles.list}>
        <Form>
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="搜索..."
              className={styles.searchInput}
              name="searchWord"
            />
            <Button htmlType="submit" type="default" size="small" className={styles.searchButton}>
              搜索
            </Button>
          </div>
        </Form>
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
