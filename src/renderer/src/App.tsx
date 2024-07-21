import Search from './components/Search'
import Result from './components/Result'
import useShortcut from './hooks/useShortcut'
import Error from './components/Error'

function App(): JSX.Element {
  const { register } = useShortcut()
  register('search', 'CommandOrControl+Shift+;')

  return (
    <>
      <Error />
      <Search />
      <Result />
    </>
  )
}

export default App
