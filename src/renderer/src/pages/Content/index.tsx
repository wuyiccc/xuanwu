import styles from './index.module.less'
import ContentEntity from '../../../../pojo/entity/ContentEntity'
import { useEffect, useState } from 'react'
import StatusDB from '../../status/StatusDB'
import ContentApi from '../../api/ContentApi'
import { Button } from 'antd'

export default function () {
  const [content, setContent] = useState<ContentEntity>(new ContentEntity())
  const contentId = StatusDB.db((state) => state.contentId)

  useEffect(() => {
    initData()
  }, [contentId])

  const initData = async () => {
    if (contentId) {
      const data = await ContentApi.getContentById(contentId)
      setContent(data![0]!)
    }
  }

  const updateContent = async () => {
    ContentApi.updateContentById(content)
  }

  return (
    <div>
      {content ? (
        <div className={styles.container}>
          <input hidden name="id" value={content.id || 0} readOnly />
          <input
            name="title"
            className={styles.title}
            value={content.title || ''}
            onChange={(e) => {
              const newData = new ContentEntity()
              newData.id = content.id
              newData.title = e.target.value
              newData.content = content.content
              newData.gmtCreate = content.gmtCreate
              setContent(newData)
            }}
            autoFocus
          />
          {/*<div className={styles.content}>{content[0].content}</div>*/}
          <textarea
            name="content"
            className={styles.content}
            value={content.content || ''}
            onChange={(e) => {
              const newData = new ContentEntity()
              newData.id = content.id
              newData.title = content.title
              newData.content = e.target.value
              newData.gmtCreate = content.gmtCreate
              setContent(newData)
            }}
          ></textarea>
          <Button onClick={updateContent}>保存</Button>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  )
}
