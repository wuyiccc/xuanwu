import { NavLink, Outlet } from 'react-router-dom'
import styles from './index.module.less'
import { Add, FolderCodeOne, SettingTwo } from '@icon-park/react'
import CategoryEntity from '../../../../pojo/entity/CategoryEntity'
import StatusDB from '../../status/StatusDB'
import { useEffect, useState } from 'react'
import CategoryApi from '../../api/CategoryApi'
import { ConfigProvider, Dropdown, Input, MenuProps, Modal } from 'antd'

export default function () {
  const setCategoryId = StatusDB.db((state) => state.setCategoryId)
  const [categoryList, setCategoryList] = useState<CategoryEntity[]>([])

  const [showEditModal, setShowEdiModal] = useState<boolean>(false)

  const [editCategory, setEditCategory] = useState<CategoryEntity>()

  useEffect(() => {
    initData()
  }, [])

  const initData = async () => {
    const myList = (await CategoryApi.getAllCategory()) as CategoryEntity[]
    setCategoryList(myList)
  }

  function generateMenuItems(category: CategoryEntity) {
    const items: MenuProps['items'] = [
      {
        label: '修改',
        key: '1',
        onClick: async () => {
          setEditCategory(category)
          setShowEdiModal(true)
        }
      }
    ]
    return items
  }

  const updateCategory = async () => {
    CategoryApi.updateCategoryById(editCategory!)
    setShowEdiModal(false)
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
              const items = generateMenuItems(category)
              return (
                <Dropdown trigger={['contextMenu']} key={category.id} menu={{ items }}>
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
                    >
                      <div className={styles.categoryContainer}>
                        <FolderCodeOne theme="outline" size="12" strokeWidth={3} />
                        <div className={styles.categoryText}>{category.name}</div>
                      </div>
                    </NavLink>
                  </div>
                </Dropdown>
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

      <Modal
        title="编辑分类"
        open={showEditModal}
        onOk={updateCategory}
        onCancel={() => setShowEdiModal(false)}
      >
        {editCategory ? (
          <Input
            placeholder="请输入分类名称"
            value={editCategory.name}
            onChange={(e) => {
              const newData = new CategoryEntity()
              newData.id = editCategory.id
              newData.name = e.target.value
              setEditCategory(newData)
            }}
          />
        ) : (
          <div></div>
        )}
      </Modal>
    </div>
  )
}
