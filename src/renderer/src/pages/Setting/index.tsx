import styles from './index.module.less'
import { useEffect, useState } from 'react'
import ConfigApi from '../../api/ConfigApi'
import ConfigDTO from '../../../../pojo/dto/ConfigDTO'
import { Button, Form, Input } from 'antd'

export default function () {
  const [configForm] = Form.useForm()
  const [keys, setKeys] = useState<string[]>([])

  useEffect(() => {
    initData()
  }, [])

  const initData = async () => {
    const str = (await ConfigApi.find())![0].content as string
    const dto = JSON.parse(str) as ConfigDTO

    configForm.setFieldsValue({
      database: dto.database,
      shortCut: dto.shortCut
    })
  }

  const update = async () => {
    const configDTO = new ConfigDTO()
    configDTO.shortCut = configForm.getFieldsValue().shortCut
    configDTO.database = configForm.getFieldsValue().database
    await ConfigApi.update(JSON.stringify(configDTO))
    await initData()
  }

  return (
    <div className={styles.settingContainer}>
      <div className={styles.form}>
        <Form
          name="configFrom"
          form={configForm}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          labelAlign="right"
        >
          <Form.Item label="快捷键配置" name="shortCut">
            <Input
              value={keys.join(' + ')}
              onKeyDown={(e) => {
                e.preventDefault() // 防止输入框中出现字符

                let newKeys = keys
                if (e.key === 'Backspace') {
                  newKeys = []
                  setKeys(newKeys)
                } else {
                  newKeys.push(e.key)
                  setKeys(newKeys)
                }

                configForm.setFieldsValue({
                  shortCut: newKeys.join('+')
                })
              }}
            ></Input>
          </Form.Item>
          <Form.Item label="数据库配置" name="database">
            <Input></Input>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }} style={{ textAlign: 'right' }}>
            <Button type="primary" htmlType="submit" onClick={update}>
              保存
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
