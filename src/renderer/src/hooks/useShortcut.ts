export default () => {
  const register = async (type: 'search', shorCut: string = 'CommandOrControl+Shift+;') => {
    const isBind = await window.api.shortCut(type, shorCut)

    alert(isBind)
  }

  return { register }
}
