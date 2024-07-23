import StatusDB from '../../status/StatusDB'
import { useEffect } from 'react'
import { Alert } from 'antd'

export default function () {
  const error = StatusDB.db((state) => state.error)
  const setError = StatusDB.db((state) => state.setError)

  useEffect(() => {
    const id = setTimeout(() => setError(''), 2000)
    return () => clearTimeout(id)
  }, [])

  if (!error) return <></>

  return (
    <>
      <Alert message={error} type={'info'} showIcon></Alert>
    </>
  )
}
