import styles from './index.module.less'
import { useLoaderData } from 'react-router-dom'

export default function () {
  const contentList = useLoaderData() as ContentEntity[]
  console.log(contentList)
  return (
    <div className={styles.container}>
      <div className={styles.list}>list</div>
      <div className={styles.content}>content</div>
    </div>
  )
}
