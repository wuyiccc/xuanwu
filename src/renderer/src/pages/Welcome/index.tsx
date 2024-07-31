import styles from './index.module.less'
import { Code } from '@icon-park/react'

export default function () {
  return (
    <div className={styles.container}>
      <Code theme="outline" size="48" fill="#333" />
      <div>玄物文本编辑器</div>
    </div>
  )
}
