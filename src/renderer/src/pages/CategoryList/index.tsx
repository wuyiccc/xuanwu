import { NavLink, Outlet } from 'react-router-dom'
import styles from './index.module.less'
import { Add, FolderCodeOne, SettingTwo } from '@icon-park/react'
import CategoryEntity from '../../../../pojo/entity/CategoryEntity'
import StatusDB from '../../status/StatusDB'
import { useEffect, useState } from 'react'
import CategoryApi from '../../api/CategoryApi'
import { ConfigProvider, Input } from 'antd'

export default function () {
  const setCategoryId = StatusDB.db((state) => state.setCategoryId)
  const [categoryList, setCategoryList] = useState<CategoryEntity[]>([])

  const [editCategory, setEditCategory] = useState<CategoryEntity>()

  useEffect(() => {
    initData()
  }, [])

  const initData = async () => {
    const myList = (await CategoryApi.getAllCategory()) as CategoryEntity[]
    setCategoryList(myList)
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
                    theme={{
                      token: {
                        /* 这里是你的全局 token */
                        colorText: 'black',
                        colorBgElevated: 'grey'
                      }
                    }}
                  >
                    <Input
                      key={category.id}
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
                <div className={styles.commonCategoryItem}>
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
                      <FolderCodeOne theme="outline" size="12" strokeWidth={3} />
                      <div className={styles.categoryText}>{category.name}</div>
                    </div>
                  </NavLink>
                </div>
              )
            })}
          </ConfigProvider>
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
