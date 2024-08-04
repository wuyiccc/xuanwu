import styles from './index.module.less'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import dayjs from 'dayjs'
import ContentEntity from '../../../../pojo/entity/ContentEntity'
import { Add } from '@icon-park/react'
import ContentApi from '../../api/ContentApi'
import StatusDB from '../../status/StatusDB'
import { useEffect, useState } from 'react'
import { ConfigProvider, Dropdown, MenuProps } from 'antd'
import StringUtils from '../../utils/StringUtils'

export default function () {
  const categoryId = StatusDB.db((state) => state.categoryId)
  const setContentId = StatusDB.db((state) => state.setContentId)

  const [contentList, setContentList] = useState<ContentEntity[]>([])

  const navigate = useNavigate()

  useEffect(() => {
    initData()
  }, [categoryId])

  const initData = async () => {
    const search = new ContentEntity(0, '', '', 0, '')
    search.categoryId = categoryId
    search.title = StringUtils.EMPTY
    const tmpList = (await ContentApi.searchContentByTitle(search)) as ContentEntity[]
    setContentList(tmpList)
  }

  useEffect(() => {}, [categoryId])

  const searchData = async (searchWord: string) => {
    const search = new ContentEntity(0, '', '', 0, '')
    search.categoryId = categoryId
    search.title = searchWord
    const tmpList = (await ContentApi.searchContentByTitle(search)) as ContentEntity[]
    console.log(tmpList)
    setContentList(tmpList)
  }

  function generateMenuItems(content: ContentEntity) {
    const items: MenuProps['items'] = [
      {
        label: '删除',
        key: '1',
        onClick: async () => {
          await ContentApi.deleteContent(content)
          await initData()

          const newContent = contentList[0]
          console.log(newContent)
          navigate(
            `/config/categoryList/contentList/${newContent.categoryId}/content/${newContent.id}`
          )
        }
      }
    ]
    return items
  }

  return (
    <div className={styles.container}>
      <div className={styles.list}>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="搜索..."
            className={styles.searchInput}
            name="searchWord"
            onChange={(e) => {
              searchData(e.target.value)
            }}
          />
          <Add
            theme={'outline'}
            size={18}
            strokeWidth={2}
            fill="#000000"
            onClick={async () => {
              const c = new ContentEntity(0, '', '', 0, '')
              c.title = '未命名内容标题'
              c.content = '未命名内容'
              c.categoryId = categoryId
              c.gmtCreate = dayjs().format('YYYY-MM-DD HH:mm:ss')
              const data = (await ContentApi.createContent(c)) as ContentEntity[]

              await initData()

              if (contentList.length >= 1) {
                navigate(`/config/categoryList/contentList/${categoryId}/content/${data[0].id}`)
              }
            }}
          ></Add>
        </div>
        <ConfigProvider
          theme={{
            token: {
              /* 这里是你的全局 token */
              colorText: 'white',
              colorBgElevated: 'grey'
            }
          }}
        >
          {contentList.map((content) => {
            const items = generateMenuItems(content)
            return (
              <Dropdown trigger={['contextMenu']} key={content.id} menu={{ items }}>
                <div key={content.id} className={styles.contentItem}>
                  <NavLink
                    to={`/config/categoryList/contentList/${content.categoryId}/content/${content.id}`}
                    className={({ isActive }) =>
                      isActive ? styles.contentLinkSelected : styles.contentLink
                    }
                    onDragStart={(e) => {
                      // 传输数据
                      e.dataTransfer.setData('contentId', String(content.id))
                    }}
                    onDragEnd={() => {
                      initData()
                    }}
                    onClick={() => {
                      setContentId(content.id!)
                    }}
                  >
                    <div className={styles.titleText}>{content.title}</div>
                    <div className={styles.titleDate}>
                      {dayjs(content.gmtCreate).format('YYYY/MM/DD')}
                    </div>
                  </NavLink>
                </div>
              </Dropdown>
            )
          })}
        </ConfigProvider>
      </div>
      <div className={styles.content}>
        <Outlet></Outlet>
      </div>
    </div>
  )
}
