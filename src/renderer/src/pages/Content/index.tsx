import { useLoaderData } from 'react-router-dom'
import styles from './index.module.less'

export default function () {
  const content = useLoaderData() as ContentEntity[]
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{content[0].title}</h1>
      <div className={styles.content}>{content[0].content}</div>
    </div>
  )
}
