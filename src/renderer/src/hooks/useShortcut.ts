import StatusDB from '../status/StatusDB'

export default () => {
  const setError = StatusDB.db((state) => state.setError)

  const register = async (type: 'search') => {
    const isBind = await window.api.shortCut(type)

    if (!isBind) {
      setError('快捷键注册失败')
    }
  }

  return { register }
}
