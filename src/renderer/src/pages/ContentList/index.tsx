import styles from './index.module.less'
import { Form, NavLink, Outlet, useLoaderData, useSubmit } from 'react-router-dom'
import dayjs from 'dayjs'
import ContentEntity from '../../../../pojo/entity/ContentEntity'
import { Add } from '@icon-park/react'
import ContentApi from '../../api/ContentApi'

export default function () {
  const contentList = useLoaderData() as ContentEntity[]

  const submit = useSubmit()

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
              onChange={(e) => submit(e.target.form)}
            />
            <Add
              theme={'outline'}
              size={18}
              strokeWidth={2}
              fill="#000000"
              onClick={() => {
                const c = new ContentEntity()
                c.title = '新增title'
                c.content = '新增content'
                c.categoryId = 1
                c.gmtCreate = dayjs().format('YYYY-MM-DD HH:mm:ss')
                ContentApi.createContent(c)
                console.log('yes amd')
              }}
            ></Add>
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
