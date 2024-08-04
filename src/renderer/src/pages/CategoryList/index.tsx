import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
import styles from './index.module.less'
import { Add, DeleteOne, FolderCodeOne, SettingTwo } from '@icon-park/react'
import CategoryEntity from '../../../../pojo/entity/CategoryEntity'
import StatusDB from '../../status/StatusDB'
import { useEffect, useState } from 'react'
import CategoryApi from '../../api/CategoryApi'
import { ConfigProvider, Input } from 'antd'
import ContentEntity from '../../../../pojo/entity/ContentEntity'
import ContentApi from '../../api/ContentApi'
import dayjs from 'dayjs'

export default function () {
  const setCategoryId = StatusDB.db((state) => state.setCategoryId)
  const [categoryList, setCategoryList] = useState<CategoryEntity[]>([])
  const navigate = useNavigate()
  const [editCategory, setEditCategory] = useState<CategoryEntity>()

  useEffect(() => {
    initData()
  }, [])

  const initData = async () => {
    const myList = (await CategoryApi.getAllCategory()) as CategoryEntity[]
    setCategoryList(myList)
  }

  const addCategory = async () => {
    const categoryEntity = new CategoryEntity()
    categoryEntity.name = '新建分类'
    categoryEntity.gmtCreate = dayjs().format('YYYY-MM-DD HH:mm:ss')
    const res = (await CategoryApi.addCategory(categoryEntity)) as CategoryEntity[]
    const newId = res[0]!.id
    navigate(`/config/categoryList/contentList/${newId}`)
    await initData()
  }

  const updateCategory = async () => {
    CategoryApi.updateCategoryById(editCategory!)
    setEditCategory(new CategoryEntity())
    initData()
  }

  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.quickOpr}>
          <div>快捷操作</div>
        </div>
        <div className={styles.top}>
          <ConfigProvider
            theme={{
              token: {
                /* 这里是你的全局 token */
                colorText: 'white',
                colorBgElevated: 'grey'
              }
            }}
          >
            {categoryList.map((category) => {
              if (editCategory && editCategory.id === category.id) {
                return (
                  <ConfigProvider
                    key={category.id}
                    theme={{
                      token: {
                        /* 这里是你的全局 token */
                        colorText: 'black',
                        colorBgElevated: 'grey'
                      }
                    }}
                  >
                    <Input
                      placeholder="请输入分类名称"
                      value={editCategory.name}
                      onChange={(e) => {
                        const newData = new CategoryEntity()
                        newData.id = editCategory!.id
                        newData.name = e.target.value
                        setEditCategory(newData)
                      }}
                      onPressEnter={updateCategory}
                    />
                  </ConfigProvider>
                )
              }

              return (
                <div
                  className={styles.commonCategoryItem}
                  key={category.id}
                  // 拖入
                  onDragOver={(e) => {
                    // prevent让onDrop事件能够正常执行
                    e.preventDefault()
                    // 去掉拖动的时候显示的加号
                    e.dataTransfer.dropEffect = 'move'
                    e.currentTarget.classList.add(styles.categoryItemOnDragOver)
                    console.log(category.id)
                  }}
                  // 拖出
                  onDragLeave={(e) => {
                    e.currentTarget.classList.remove(styles.categoryItemOnDragOver)
                  }}
                  // 鼠标释放
                  onDrop={(e) => {
                    console.log('onDrop')
                    e.currentTarget.classList.remove(styles.categoryItemOnDragOver)
                    const contentId = Number(e.dataTransfer.getData('contentId'))
                    console.log(contentId)
                    const newData = new ContentEntity('', '', 0, '')
                    newData.id = contentId
                    newData.categoryId = category.id!
                    ContentApi.updateContentCategoryId(newData)
                  }}
                >
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
                    onDoubleClick={() => setEditCategory(category)}
                  >
                    <div className={styles.categoryContainer}>
                      <div className={styles.categoryContainer1}>
                        <FolderCodeOne theme="outline" size="12" strokeWidth={3} />
                        <div className={styles.categoryText}>{category.name}</div>
                      </div>

                      <DeleteOne
                        theme="outline"
                        size="12"
                        fill="#333"
                        className={styles.deleteIcon}
                        onClick={async () => {
                          await CategoryApi.delete(category)
                          await initData()
                        }}
                      />
                    </div>
                  </NavLink>
                </div>
              )
            })}
          </ConfigProvider>
        </div>
        <div className={styles.bottom}>
          <Add theme="outline" size="24" fill="#333" onClick={addCategory} />
          <Link to="/config">
            <SettingTwo theme="outline" size="24" fill="#333" />
          </Link>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <Outlet></Outlet>
      </div>
    </div>
  )
}
