export default () => {
  const register = (shorCut: string = 'CommandOrControl+Shift+;') => {
    window.api.shortCut('search', shorCut)
  }

  return { register }
}
