import Search from './components/Search'
import Result from './components/Result'
import useShortcut from './hooks/useShortcut'
import Error from './components/Error'

function App(): JSX.Element {
  const { register } = useShortcut()
  register('search', 'CommandOrControl+Shift+;')

  window.api.setIgnoreMouseEvents(false, { forward: true })

  return (
    <>
      <Error />
      <Search />
      <Result />
    </>
  )
}

export default App
