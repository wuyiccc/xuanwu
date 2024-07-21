import Search from './components/Search'
import Result from './components/Result'
import useShortcut from './hooks/useShortcut'

function App(): JSX.Element {

  const {register} = useShortcut()
  register('CommandOrControl+Shift+;')

  return (
    <>
      <Search />
      <Result />
    </>
  )
}

export default App
