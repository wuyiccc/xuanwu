import { Form, useLoaderData, useSubmit } from 'react-router-dom'
import styles from './index.module.less'
import ContentEntity from '../../../../pojo/entity/ContentEntity'

export default function () {
  const content = useLoaderData() as ContentEntity[]
  const submit = useSubmit()
  return (
    <Form method="PUT">
      <div className={styles.container}>
        <input hidden name="id" value={content[0].id} />
        {/*<h1 className={styles.title}>{content[0].title}</h1>*/}
        <input
          name="title"
          className={styles.title}
          value={content[0].title}
          onChange={(e) => {
            submit(e.target.form)
          }}
        />
        {/*<div className={styles.content}>{content[0].content}</div>*/}
        <textarea
          name="content"
          className={styles.content}
          value={content[0].content}
          onChange={(e) => {
            submit(e.target.form)
          }}
        ></textarea>
      </div>
    </Form>
  )
}
