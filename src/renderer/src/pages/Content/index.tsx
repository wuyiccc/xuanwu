import { Form, useLoaderData } from 'react-router-dom'
import styles from './index.module.less'
import ContentEntity from '../../../../pojo/entity/ContentEntity'

export default function () {
  const content = useLoaderData() as ContentEntity[]
  return (
    <Form method="PUT">
      <div className={styles.container}>
        <input hidden name="id" defaultValue={content[0].id} />
        {/*<h1 className={styles.title}>{content[0].title}</h1>*/}
        <input name="title" className={styles.title} defaultValue={content[0].title} />
        {/*<div className={styles.content}>{content[0].content}</div>*/}
        <textarea
          name="content"
          className={styles.content}
          defaultValue={content[0].content}
        ></textarea>
        <div className={styles.saveButton}>
          {/*<Button type="default" size="small">*/}
          {/*  保存*/}
          {/*</Button>*/}
          <button>保存</button>
        </div>
      </div>
    </Form>
  )
}
